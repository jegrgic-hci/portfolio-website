/**
 * POST /api/contact — relays the contact form to SMTP2GO.
 *
 * The site is a static export (next.config.mjs sets output: "export"), so
 * there are no Next API routes to put this in. Cloudflare Pages picks up
 * this directory automatically and serves it alongside the static files.
 *
 * SMTP2GO's HTTP API rather than SMTP: Workers have no raw TCP for port 587,
 * and the REST endpoint needs nothing but fetch.
 *
 * Required environment variables (set in the Pages dashboard, not in code):
 *   SMTP2GO_API_KEY   — a "send email" key from SMTP2GO
 *   CONTACT_TO        — inbox that receives the mail
 * Optional:
 *   CONTACT_FROM      — sender, must be on a domain verified in SMTP2GO
 *
 * CONTACT_TO has no fallback in source on purpose: this repository is
 * public, and a destination address committed here is as harvestable as
 * one published on the site.
 */

const DEFAULT_FROM = "contact@jegrgic.com";

/** Long enough for a real enquiry, short enough that nobody posts a novel. */
const LIMITS = { name: 100, email: 200, message: 5000 };

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: "Expected JSON." });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();

  /* Honeypot. The field is hidden from people and left empty by them, so
     anything in it came from a bot filling every input it found. Answer 200
     so the sender learns nothing from the response. */
  if (String(data.company ?? "").trim()) {
    return json(200, { ok: true });
  }

  if (!name || !email || !message) {
    return json(400, { error: "Name, email and message are all required." });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: "That email address doesn't look right." });
  }
  for (const [field, max] of Object.entries(LIMITS)) {
    if (({ name, email, message })[field].length > max) {
      return json(400, { error: `The ${field} field is too long.` });
    }
  }

  const apiKey = env.SMTP2GO_API_KEY;
  const recipient = env.CONTACT_TO;
  if (!apiKey || !recipient) {
    /* Misconfiguration, not a visitor error — say so in the log and give the
       visitor the fallback rather than a silent success. */
    console.error(
      `Mail is not configured: ${!apiKey ? "SMTP2GO_API_KEY" : "CONTACT_TO"} is not set.`,
    );
    return json(500, { error: "Mail is not configured." });
  }

  let res;
  let result = {};
  try {
    res = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Smtp2go-Api-Key": apiKey,
      },
      body: JSON.stringify({
        sender: env.CONTACT_FROM || DEFAULT_FROM,
        to: [recipient],
        /* Reply-To is the visitor, so hitting reply in the inbox answers them
           directly. The From stays on the verified domain — putting a
           stranger's address there is what gets mail marked as spoofed. */
        custom_headers: [{ header: "Reply-To", value: `${name} <${email}>` }],
        subject: `Portfolio contact — ${name}`,
        text_body: `From: ${name} <${email}>\n\n${message}`,
      }),
    });
    result = await res.json().catch(() => ({}));
  } catch (err) {
    /* The request never completed — DNS, TLS, a timeout. Distinct from
       SMTP2GO answering with a refusal, and worth separating in the log. */
    console.error("SMTP2GO request failed:", err?.message, err?.stack);
    return json(502, { error: "The message could not be sent.", detail: String(err?.message || err) });
  }

  const sent = result?.data?.succeeded;

  if (!res.ok || !sent) {
    console.error("SMTP2GO rejected the send:", res.status, JSON.stringify(result));
    /* TEMPORARY: surfaces SMTP2GO's own reason (unverified sender, bad key
       scope) so a failure is diagnosable without dashboard log access.
       Remove once the form is confirmed working. */
    return json(502, {
      error: "The message could not be sent.",
      status: res.status,
      detail: result?.data?.error || result?.error || JSON.stringify(result).slice(0, 300),
    });
  }

  return json(200, { ok: true });
}

/* No catch-all onRequest on purpose: Pages answers 405 by itself for any
   method without a handler, and exporting both makes precedence ambiguous. */
