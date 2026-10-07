Most AI products answer questions. Agents act: they book the appointment, reroute the shipment, update the record, send the message. Once an AI system acts on someone's behalf, the design question changes from whether its answer is right to whether the person knows what it is doing, why, and how to step in. Human factors research has studied that question for decades in cockpits and control rooms, and its lessons apply directly to the agents now being built into everyday products.

## Who is in control

Sarter and Woods (1995) described mode error in aircraft automation: pilots lost track of which mode the automation was in, and so misjudged what it would do next. The result was automation surprises, moments when the system did something the people supervising it did not expect, often at the worst possible time.

The Boeing 737 MAX is the starkest recent case. Its MCAS system could push the aircraft's nose down repeatedly on the strength of a single faulty sensor, and Boeing did not describe it in the pilots' manuals (House Committee on Transportation and Infrastructure, 2020). In two crashes that killed 346 people, the crews were fighting a system whose existence they had not been told about. The system did what it was designed to do. The failure was in what the people responsible for the aircraft could see and know.

Everyday agents operate at far lower stakes, but the structure is the same. An agent that reschedules a meeting, reorders supplies or replies to a customer in the background leaves the person unsure what has been done in their name. Each silent action is small. Together they leave the person supervising a system they cannot follow.

## Making the agent's actions visible

Norman (1990) argued that the problem with automation is rarely that it does too much. It is that it gives too little feedback about what it is doing, so people are left out of the loop until something goes wrong. Coactive design, developed for teams of people and robots, turns this into three requirements: people need to be able to observe what the system is doing, predict what it will do next, and direct it when the situation changes (Johnson et al., 2014).

For an agent, observability means showing its state, whether it is watching, preparing an action or carrying one out, and announcing transitions rather than moving between them silently. Predictability means explaining the basis for what it proposes: "I'm suggesting a different route because your 2 p.m. appointment is in an area with heavy traffic today" tells the person what the agent knows and lets them judge whether it is still true. Directability means the person can redirect or stop it, and that the agent checks before acting on old instructions: "Based on yesterday's conversation, I've prepared these travel options. Is that still the priority, or has something changed?"

## Where to put the checkpoints

Checking in before every action would make an agent useless, so the question is where to require confirmation. A common answer is to have the agent report its confidence and ask the person to step in when confidence is low. Stated confidence is a weak basis for this, because a model's confidence is not a reliable guide to whether it is right, and a figure like "60% confident" gives the person little to act on. [Designing for Calibrated Skepticism](/writings/calibrated-skepticism) sets out why.

Stakes are a better basis, because they can be defined in advance by the people who know the domain. Rerouting a shipment of medication or changing a patient record should require confirmation every time; reordering printer paper should not. Where the agent's information is incomplete, it should say specifically what is missing rather than give a percentage: "I couldn't reach the insurance verification system, so this summary doesn't include coverage." A specific limit tells the person exactly what to check.

## Continuity across the journey

Agents are most useful across a journey that no single interface covers. A parent whose child falls ill in the night might use a symptom checker at 3 a.m. An agent connected to the clinic could follow up at 8 a.m. to ask whether the symptoms have changed, find the earliest appointment, fill in the intake and insurance details, and give the doctor a summary of everything reported since the night before. Each step on its own is modest. Together they take the administrative work off a parent who has more important things to attend to.

That kind of continuity is a service design problem as much as an interface one. The agent connects touchpoints that were built separately, and its value depends on context carrying across them, including the hand-off to a person. A receptionist or doctor who receives the agent's summary can start from what the parent already said, and can confirm it: "You mentioned a fever overnight. Has anything changed since this morning?" The parent doesn't have to repeat themselves, and the person taking over can check that the agent's account is still accurate.

## When the agent fails

Every agent will eventually hit a system that is down, a request it can't complete or a situation it wasn't built for. Bainbridge (1983) noted the irony that automation hands control back to people in exactly these moments, when the task is hardest and they have had the least practice. An agent should be designed for that hand-back. Instead of a generic error, it should say what it was doing, what failed and what it has kept: "I couldn't connect to the clinic's insurance verification system, but the summary of last night's symptoms is saved and ready to share at check-in." The person takes over with the agent's work intact rather than starting from nothing.

An agent that acts well but silently leaves the people relying on it unable to supervise it, and they find out only when something goes wrong. The design goal is that at any point, a person can tell what the agent is doing, why it is doing it, and how to step in.

---

## References

- Bainbridge, L. (1983). Ironies of automation. *Automatica, 19*(6), 775–779.
- House Committee on Transportation and Infrastructure. (2020). *Final committee report: The design, development & certification of the Boeing 737 MAX*. U.S. House of Representatives.
- Johnson, M., Bradshaw, J. M., Feltovich, P. J., Jonker, C. M., van Riemsdijk, M. B., & Sierhuis, M. (2014). Coactive design: Designing support for interdependence in joint activity. *Journal of Human-Robot Interaction, 3*(1), 43–69.
- Norman, D. A. (1990). The "problem" with automation: Inappropriate feedback and interaction, not "over-automation". *Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences, 327*(1241), 585–593.
- Sarter, N. B., & Woods, D. D. (1995). How in the world did we ever get into that mode? Mode error and awareness in supervisory control. *Human Factors, 37*(1), 5–19.
