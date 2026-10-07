Human factors has long established that reliance on automation follows the cues a system presents, not its underlying reliability. When those cues are valid, reliance tends toward calibration; when they are not, people over-rely or under-rely in predictable ways.

This article argues that generative AI presents a distinctive version of this problem: the cues it offers about its own reliability are highly persuasive and weakly predictive of correctness. Part I develops this from a human factors perspective. Part II asks what follows for design if users should approach AI with **calibrated skepticism** rather than calibrated trust.

## Part I: The human factors perspective

### 1. Judgment through cues

Brunswik's (1956) lens model describes how people judge properties they cannot observe directly. Accuracy depends on how well each cue predicts the property (its *validity*) and how heavily the person relies on it (its *utilization*). Good judgment means relying most on the most valid cues.

Conventional automation tends to offer valid cues. A master caution light illuminates when defined sensor conditions are met; its mechanism is known and its failure rate can be tested, so relying on it is appropriate.

### 2. AI's cues: highly persuasive, weakly valid

Generative AI does not apply inspectable rules; it interprets, and the process is opaque. Users therefore judge outputs by how they present themselves, and they are predisposed to rely on the cheapest cues available. Detection of rare errors declines during sustained monitoring (Mackworth, 1948), people substitute automated recommendations for their own checking (Mosier & Skitka, 1996), and more reliable automation leaves humans less able to catch its failures (Bainbridge, 1983).

Each cue an AI offers about itself engages a documented shortcut, raising its utilization without raising its validity:

| Cue | Why it is heavily relied on |
|---|---|
| **Explanation** | Compliance increases when any reason is given, even an uninformative one (Langer, Blank & Chanowitz, 1978). AI explanations increased acceptance regardless of correctness (Bansal et al., 2021). |
| **Fluency and confidence** | Easily processed information is judged more likely to be true (Reber & Schwarz, 1999), and confident advisors are preferred (Price & Stone, 2004). |
| **Human-like voice** | Social rules are applied to computers mindlessly (Nass & Moon, 2000). |
| **Apology** | Apologies repair trust after competence-based failures (Kim et al., 2004). |
| **Generic disclaimers** | Repeated warnings habituate (Anderson et al., 2015) and shift responsibility to the user (Elish, 2019). |

The validity of these cues is low. AI explanations are generated text that may not reflect the process behind an answer (Turpin et al., 2023), and fluency is produced whether or not content is correct (Hicks, Humphries & Slater, 2024). Presentation is also uniform where reliability is not: a summary may combine claims from passages the model processed with claims inferred from what a document probably contains (Liu et al., 2024), rendered identically.

The apology is the clearest case. Users of Claude will recognize its reflexive "You're absolutely right! I made a mistake," which appears even when the user is the one in error. A cue that appears regardless of who is wrong has no predictive value, yet it still repairs trust, and users carry on accepting what follows.

Training reinforces the problem: models refined on human preference ratings can learn to be convincing rather than correct (Sharma et al., 2023; Wen et al., 2024). The cues users rely on most are partly the cues the system is optimized to produce.

The implication is direct. Asking users to be more careful raises scrutiny, but it cannot make an invalid cue valid. Better judgment requires better cues, which makes this a design problem rather than a user problem.

### 3. From calibrated trust to calibrated skepticism

Social judgment offers a parallel. We trust a friend because their interests align with ours, and we are skeptical of a salesperson because their interest lies in the sale, however honest they may be. A warning light has no intent, and its output is not shaped by whether we believe it.

| Source | Intent | Shaped by user acceptance? | Reliability knowable? | Appropriate stance |
|---|---|---|---|---|
| **Warning light** | None | No | Yes | Trust |
| **Friend** | Aligned | Rarely | Yes, over time | Trust |
| **Salesperson** | Self-interested | Yes | Partly | Skepticism |
| **AI system** | None | Yes, via training | No | Skepticism |

AI lacks intent but carries a learned bias toward acceptable-sounding output, placing it structurally closer to the salesperson. Yet its social presentation activates the rules we reserve for friends, consistent with the tendency to attribute intention to agents that behave socially (Epley, Waytz & Cacioppo, 2007). Users apply friend rules to a system with salesperson incentives.

Calibrated trust, aligning reliance with actual reliability (Lee & See, 2004), remains the right objective. What changes is the starting point. Calibrated trust begins from reliance and withdraws it on evidence of failure; calibrated skepticism begins from withheld acceptance and extends it on evidence of support. Under trust, the reviewer must find an error, a search for rare targets at which humans perform poorly. Under skepticism, the output must earn acceptance, and the reviewer's question becomes **"Why should I accept this?"** Auditing already works this way, requiring professional skepticism and tracing assertions to source evidence (ISA 200).

One might object that AI output is testable. It is, and skepticism consists of testing. But testability does not ensure testing, and verification costs vary: code with tests can be checked mechanically, while a summary may cost as much to verify as to produce. Skepticism matters most where outputs are plausible but costly to verify.

## Part II: Designing for skeptical users

If better judgment requires better cues, the design goal changes. Interfaces built for trust make output feel reliable. Interfaces built for calibrated skepticism make valid cues cheap to use, reduce the weight of invalid ones, and let users answer "why should I accept this?" within the interface. Each principle below draws on established human factors research.

### 4. Make valid cues visible and cheap

Ecological interface design holds that interfaces should reveal the constraints of the work domain rather than the system's account of them (Vicente & Rasmussen, 1992). For AI, this means disaggregating output: linking each claim to its source, marking inferred or omitted material, and distinguishing retrieved citations from generated ones. This replaces a low-validity cue (fluency) with a high-validity one (the source), and reduces verification to checking a few linked passages.

### 5. Allocate scrutiny by stakes

Function allocation concerns which tasks humans and automation should each perform (Parasuraman, Sheridan & Wickens, 2000). For AI review, allocation should follow stakes rather than stated confidence, because stakes can be set by domain rules before the system responds and are a cue it cannot influence. In a bicycle maintenance guide, a wrong torque value could cause harm; a wrong lubricant brand would not. Low-stakes outputs proceed with sampled review, high-stakes outputs require sources, and uncertain stakes count as high. Accepting some trivial errors is a deliberate allocation of finite attention.

### 6. Design warnings that inform

Effective warnings are specific about the hazard, its consequences and the appropriate action (Wogalter, Conzola & Smith-Jackson, 2002). A generic notice that AI "can make mistakes" meets none of these criteria. Uncertainty should be flagged at the level of specific claims, so that warnings direct attention rather than transfer responsibility.

### 7. Support independent judgment

Challenge-and-response checklists require pilots to state values rather than agree passively (Degani & Wiener, 1990). The AI equivalent, asking reviewers to judge before seeing the AI's recommendation, reduces over-reliance on incorrect advice (Buçinca, Malaya & Gajos, 2021). It adds effort, so it suits high-stakes decisions.

### 8. Evaluate calibration, not satisfaction

Rubber-stamping performs well in usability testing because it is easy. Evaluation should instead seed known errors into review tasks, as airport screening does with simulated threats, and measure detection by severity, along with over- and under-reliance. Signal detection theory supplies the metrics: a design that only makes reviewers more cautious shifts their criterion, while one that supplies valid cues should raise discriminability (d′). Testable hypotheses include:

- Claim-specific uncertainty flags improve error detection relative to generic disclaimers.
- Claim-level sourcing increases d′, not merely caution.
- Stakes-based allocation raises detection of high-severity errors without reducing throughput.

## Conclusion

Reliance follows cues. Generative AI presents cues that are persuasive but weakly valid, in a social register that invites the trust we reserve for friends. Reliance on it should therefore begin from skepticism, calibrated to stakes and the cost of verification. The task for design is to support that stance: make valid evidence easy to reach, concentrate scrutiny where errors matter, and ensure every interface can answer the question users should be asking: why should I accept this?

*This piece is about how we should approach AI output. For how AI systems should be built to support decisions rather than make them, see [The Efficiency Metric](/writings/efficiency-metric).*

---

### References

- Anderson, B. B., Kirwan, C. B., Jenkins, J. L., Eargle, D., Howard, S., & Vance, A. (2015). How polymorphic warnings reduce habituation in the brain: Insights from an fMRI study. *Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems*, 2883–2892.
- Bainbridge, L. (1983). Ironies of automation. *Automatica, 19*(6), 775–779.
- Bansal, G., Wu, T., Zhou, J., Fok, R., Nushi, B., Kamar, E., Ribeiro, M. T., & Weld, D. (2021). Does the whole exceed its parts? The effect of AI explanations on complementary team performance. *Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems*.
- Brunswik, E. (1956). *Perception and the representative design of psychological experiments* (2nd ed.). University of California Press.
- Buçinca, Z., Malaya, M. B., & Gajos, K. Z. (2021). To trust or to think: Cognitive forcing functions can reduce overreliance on AI in AI-assisted decision-making. *Proceedings of the ACM on Human-Computer Interaction, 5*(CSCW1).
- Degani, A., & Wiener, E. L. (1990). *Human factors of flight-deck checklists: The normal checklist* (NASA Contractor Report 177549). NASA Ames Research Center.
- Elish, M. C. (2019). Moral crumple zones: Cautionary tales in human-robot interaction. *Engaging Science, Technology, and Society, 5*, 40–60.
- Epley, N., Waytz, A., & Cacioppo, J. T. (2007). On seeing human: A three-factor theory of anthropomorphism. *Psychological Review, 114*(4), 864–886.
- Hicks, M. T., Humphries, J., & Slater, J. (2024). ChatGPT is bullshit. *Ethics and Information Technology, 26*(2), Article 38.
- International Auditing and Assurance Standards Board. *ISA 200: Overall objectives of the independent auditor and the conduct of an audit in accordance with International Standards on Auditing*.
- Kim, P. H., Ferrin, D. L., Cooper, C. D., & Dirks, K. T. (2004). Removing the shadow of suspicion: The effects of apology versus denial for repairing competence- versus integrity-based trust violations. *Journal of Applied Psychology, 89*(1), 104–118.
- Langer, E. J., Blank, A., & Chanowitz, B. (1978). The mindlessness of ostensibly thoughtful action: The role of "placebic" information in interpersonal interaction. *Journal of Personality and Social Psychology, 36*(6), 635–642.
- Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. *Human Factors, 46*(1), 50–80.
- Liu, N. F., Lin, K., Hewitt, J., Paranjape, A., Bevilacqua, M., Petroni, F., & Liang, P. (2024). Lost in the middle: How language models use long contexts. *Transactions of the Association for Computational Linguistics, 12*, 157–173.
- Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. *Quarterly Journal of Experimental Psychology, 1*(1), 6–21.
- Mosier, K. L., & Skitka, L. J. (1996). Human decision makers and automated decision aids: Made for each other? In R. Parasuraman & M. Mouloua (Eds.), *Automation and Human Performance: Theory and Applications*.
- Nass, C., & Moon, Y. (2000). Machines and mindlessness: Social responses to computers. *Journal of Social Issues, 56*(1), 81–103.
- Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30*(3), 286–297.
- Price, P. C., & Stone, E. R. (2004). Intuitive evaluation of likelihood judgment producers: Evidence for a confidence heuristic. *Journal of Behavioral Decision Making, 17*(1), 39–57.
- Reber, R., & Schwarz, N. (1999). Effects of perceptual fluency on judgments of truth. *Consciousness and Cognition, 8*(3), 338–342.
- Sharma, M., Tong, M., Korbak, T., et al. (2023). Towards understanding sycophancy in language models. *arXiv preprint arXiv:2310.13548*.
- Turpin, M., Michael, J., Perez, E., & Bowman, S. R. (2023). Language models don't always say what they think: Unfaithful explanations in chain-of-thought prompting. *Advances in Neural Information Processing Systems, 36*.
- Vicente, K. J., & Rasmussen, J. (1992). Ecological interface design: Theoretical foundations. *IEEE Transactions on Systems, Man, and Cybernetics, 22*(4), 589–606.
- Wen, J., Zhong, R., Khan, A., Perez, E., Steinhardt, J., Huang, M., Bowman, S. R., He, H., & Feng, S. (2024). Language models learn to mislead humans via RLHF. *arXiv preprint arXiv:2409.12822*.
- Wogalter, M. S., Conzola, V. C., & Smith-Jackson, T. L. (2002). Research-based guidelines for warning design and evaluation. *Applied Ergonomics, 33*(3), 219–230.
