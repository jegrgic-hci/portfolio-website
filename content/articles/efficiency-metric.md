The efficiency of an AI system should be measured by one outcome: whether the people using it make correct decisions. Items processed, hours saved and steps removed are useful numbers, but only if the decisions that come out the other end are right. A system that doubles throughput while degrading decision quality has not made anyone more efficient. It has made errors faster.

> True efficiency in the age of AI isn't about how many actions we can automate in an hour; it's about how many correct decisions we can make with the help of a machine.

That distinction determines how a system gets built. An AI designed for throughput treats the person as a bottleneck: the model produces a verdict, and the human's role is to approve it quickly. An AI designed for decision-making treats the person as the decision-maker: the model reads, sorts and flags, and the human decides with better information than they would have had alone. Both approaches are fast. Only the second reliably produces correct decisions.

## Designing for throughput

In 2025, two projects run by the Department of Government Efficiency (DOGE) showed what the first approach looks like at scale.

At Veterans Affairs, an engineer with no healthcare background wrote a script on his second day that instructed an AI model to flag contracts not "directly supporting patient care." The model read only the first 10,000 characters of each contract, flagged more than 2,000, and invented values along the way, listing some $35,000 contracts as worth $34 million (Roberts, Coleman & Umansky, 2025). The engineer later said, "I would never recommend someone run my code and do what it says."

At the National Endowment for the Humanities (NEH), two staffers with no background in the humanities asked ChatGPT whether each grant related "at all to DEI," with answers limited to 120 characters and beginning with yes or no (Kornfield, 2026a). Among the terminated grants was $349,000 to replace a museum's HVAC system (Rogelberg, 2026). A federal judge later ruled the grant terminations unconstitutional (Kornfield, 2026b).

Both systems did what they were designed to do: they processed thousands of items in days. What they could not do was produce decisions anyone could verify. Asked in a deposition whether DOGE had reduced the federal deficit, one of the NEH staffers answered, "No, we didn't" (Charalambous, 2026).

Whether one supported the cuts is a separate question. The design failures are the same either way, and human factors research has documented each of them.

## Why the failure occurred

### Automation bias: the system produced verdicts, not evidence

People tend to substitute automated recommendations for their own checking (Mosier & Skitka, 1996), and they are more likely to comply with a request when any reason is attached, even an uninformative one (Langer, Blank & Chanowitz, 1978). AI explanations increase acceptance whether or not the AI is correct (Bansal et al., 2021).

A prompt that asks for "yes or no, plus a brief explanation" produces exactly this combination. Reviewers received a verdict with no link to the passage that triggered it and no indication of what the model had read versus inferred. An invented $34 million figure looked identical to a correct one. The reviewer's only options were to accept the output or redo the work from scratch, and at 2,000 items, acceptance wins.

### Vigilance: the human was asked to find rare errors

When AI decides and a person reviews, the reviewer's task becomes detecting occasional mistakes in a long run of plausible outputs. Detection of rare signals declines quickly during sustained monitoring (Mackworth, 1948), so this is a task people perform poorly by design.

The VA process compounded the problem by placing the burden of proof on the human. Staff were given as little as a few hours, and initially 255 characters, to justify keeping a contract. The model's output stood unless someone could prove it wrong.

### Common ground: no shared understanding of the task

A person and an AI working together form a joint cognitive system (Hollnagel & Woods, 2005), and joint work depends on common ground: a shared understanding of the goal and of what each party knows (Klein, Feltovich, Bradshaw & Woods, 2005).

None existed here. The model had no definition of "patient care" as the VA understood it, and the NEH prompt never defined "DEI" at all. Reviewers could not see what the model had read. The people who held the relevant context, the agencies' own contracting and program staff, were largely excluded. The system replaced expertise rather than equipping it.

### Function allocation: every decision received the same scrutiny

Effective systems assign work deliberately, giving automation the tasks it performs well and people the tasks that require judgment (Parasuraman, Sheridan & Wickens, 2000). AI is well suited to volume; human judgment is needed where stakes are high. Cancelling maintenance on cancer-research equipment warrants more scrutiny than a routine renewal, yet both processes applied the same lightweight review to every item.

### The moral crumple zone: oversight became a place to put blame

Elish (2019) describes the moral crumple zone: when an automated system fails, responsibility falls on the nearest human, regardless of how much control that person actually had. Like the crumple zone of a car, the human absorbs the impact and protects the system.

A nominal review step creates exactly this condition. It allows an organization to say a person signed off. In the NEH case, the acting chair told DOGE "it's your decision," DOGE relied on the model's yes-or-no output, and agency staff later said they were unaware of what was happening. Each party could point to another, and no one held both the authority and the evidence to own the decision.

## Designing for decision-making

In 1854, Elisha Otis stood on an elevator platform above a crowd at New York's Crystal Palace and ordered the hoisting rope cut. The safety brake caught the platform. Otis did not ask the public to trust the elevator. He gave them evidence they could judge for themselves, and trust followed. Every ride afterward reinforced it, because the brake was there every time.

An AI tool built for decision-making works the same way. It does not ask for trust up front. It earns trust continually, decision by decision, by showing the user what its output is based on and where it is uncertain. Trust built this way is calibrated: high where the evidence is strong, lower where it is not. As that calibration improves, so do decisions, because the user knows when to rely on the system and when to look closer.

Each failure above has a corresponding design response:

1. **Show the evidence, not just the verdict.** Link every flag to the passage that produced it and display extracted values alongside their source. Reviewers verify a highlighted clause rather than rereading a full contract, and a $34 million error becomes visible at a glance.
2. **Make the output earn acceptance.** Reverse the burden of proof. A flag should demonstrate why an item meets the criterion, and the reviewer's question becomes "why should I accept this?" rather than "can I prove this wrong?"
3. **Equip the experts instead of replacing them.** Define the criteria explicitly, and route decisions to the people who hold domain context, with enough time to respond.
4. **Match scrutiny to stakes.** Let AI clear routine cases and reserve human review for high-stakes or uncertain items. For the highest-stakes decisions, ask for the reviewer's judgment before showing the AI's recommendation, so the system informs the decision rather than anchoring it.
5. **Be specific about limits.** If the model read only part of a document, flag that item. A specific warning directs attention; a generic notice that "AI can make mistakes" does not.
6. **Assign ownership.** Every consequential decision should have a named owner who has both the authority and the evidence to make it.

None of these measures is exotic, and none would have prevented an organization from cutting contracts or grants. They would have kept AI in the role it performs well: handling the reading and sorting so that people can spend their attention on judgment.

## Measuring what matters

If correct decision-making is the metric, it should be measured directly. Before deployment, seed the review with cases whose correct answer is known and test whether people catch them; a grant to replace a museum's HVAC system is exactly the kind of case that would have exposed the problem before launch. After deployment, track how often decisions made with the system hold up, how many of the AI's errors reviewers catch, and whether both improve as users learn where the system can be relied on.

This applies well beyond government. As AI becomes part of everyday work, more people spend their time reviewing, editing and acting on its output. The tools they use should be judged by the same standard: are the people using them making correct decisions? If not, the system is not efficient, however fast it runs.

*One of four articles on human-AI interaction, each about a signal mistaken for what it is meant to indicate: [Designing for Calibrated Skepticism](/writings/calibrated-skepticism) on fluency mistaken for correctness, The Efficiency Metric on throughput mistaken for good decisions, [The Decline of User Agency](/writings/decline-user-agency) on approval mistaken for benefit, and [The Empathy Gap](/writings/empathy-gap) on human-like cues mistaken for a person.*

---

### References

- Bansal, G., Wu, T., Zhou, J., Fok, R., Nushi, B., Kamar, E., Ribeiro, M. T., & Weld, D. (2021). Does the whole exceed its parts? The effect of AI explanations on complementary team performance. *Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems*.
- Charalambous, P. (2026, March 15). 2 DOGE staffers say "no" regrets for people losing income: Depositions. *ABC News*. [abc7news.com](https://abc7news.com/post/doge-depositions-justin-fox-nate-cavanaugh-staffers-elon-musk-agency-say-no-regrets-people-losing-income/18715376/)
- Elish, M. C. (2019). Moral crumple zones: Cautionary tales in human-robot interaction. *Engaging Science, Technology, and Society, 5*, 40–60.
- Rogelberg, S. (2026, March 19). DOGE cancelled a $349,000 grant to replace a museum's HVAC after ChatGPT flagged it as DEI, court documents show. *Fortune*. [fortune.com](https://fortune.com/2026/03/19/doge-cancelled-350000-hvac-grant-dei-lawsuit-elon-musk)
- Hollnagel, E., & Woods, D. D. (2005). *Joint cognitive systems: Foundations of cognitive systems engineering*. CRC Press.
- Klein, G., Feltovich, P. J., Bradshaw, J. M., & Woods, D. D. (2005). Common ground and coordination in joint activity. In W. B. Rouse & K. R. Boff (Eds.), *Organizational simulation* (pp. 139–184). Wiley.
- Kornfield, M. (2026a, April 13). New disclosures reveal how DOGE actually worked. *The Washington Post*. Republished by [Anchorage Daily News](https://www.adn.com/nation-world/2026/04/13/new-disclosures-reveal-how-doge-actually-worked/).
- Kornfield, M. (2026b, May 7). Judge rules DOGE's cuts to humanities grants were unconstitutional. *The Washington Post*. Republished by [The Spokesman-Review](https://www.spokesman.com/stories/2026/may/07/judge-rules-doges-cuts-to-humanities-grants-were-u/).
- Langer, E. J., Blank, A., & Chanowitz, B. (1978). The mindlessness of ostensibly thoughtful action: The role of "placebic" information in interpersonal interaction. *Journal of Personality and Social Psychology, 36*(6), 635–642.
- Mackworth, N. H. (1948). The breakdown of vigilance during prolonged visual search. *Quarterly Journal of Experimental Psychology, 1*(1), 6–21.
- Mosier, K. L., & Skitka, L. J. (1996). Human decision makers and automated decision aids: Made for each other? In R. Parasuraman & M. Mouloua (Eds.), *Automation and Human Performance: Theory and Applications*.
- Parasuraman, R., Sheridan, T. B., & Wickens, C. D. (2000). A model for types and levels of human interaction with automation. *IEEE Transactions on Systems, Man, and Cybernetics – Part A: Systems and Humans, 30*(3), 286–297.
- Roberts, B., Coleman, V., & Umansky, E. (2025, June 6). DOGE developed error-prone AI tool to "munch" Veterans Affairs contracts. *ProPublica*. [propublica.org](https://www.propublica.org/article/trump-doge-veterans-affairs-ai-contracts-health-care)
