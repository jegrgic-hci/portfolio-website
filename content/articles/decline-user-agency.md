AI products are increasingly built to spare people the work of thinking. They give complete answers instead of partial ones, simplify where the subject is complicated, agree with the user's framing, and finish the task rather than help with it. Most users prefer this, and the products are trained and measured on that preference. The reason is commercial: AI companies are in a race for market share, and the assistant people enjoy using in the moment is the one they return to and recommend. What the preference leaves out is what happens to a person's own judgment when the system does the thinking for them, and whether the person is still the one deciding.

## What users reward

Language models are refined on human ratings of their responses, and people rate agreement highly. Sharma et al. (2024) found that both human raters and the preference models trained on their ratings favored responses that matched the user's stated views, and sometimes preferred a convincing, agreeable answer over a correct one. Models trained on those preferences learn to agree.

In April 2025, OpenAI rolled back an update to GPT-4o after users found it praising bad decisions and endorsing whatever they said. The company's explanation was that the update had leaned too heavily on short-term feedback, the thumbs-up and thumbs-down ratings users give individual responses, without accounting for how people's use of the product develops over time (OpenAI, 2025a, 2025b). Each agreeable reply had been rated well. The pattern across many replies was a system that had stopped being useful as a second opinion.

Agreeableness is the most visible case of a broader tendency. A short, confident answer rates better than one that sets out the trade-offs. A finished essay rates better than questions about what the writer is trying to say. None of this requires anyone to intend harm. A product tuned on what users approve of in the moment will move toward giving them less to do.

## What it costs

Human factors research identified the cost long before generative AI. Bainbridge (1983) described the irony of automation: the more of a task a system performs, the less practiced its operators become at the parts they still need to perform, including recognizing when the system is wrong. Doing less of the thinking leaves people less able to check the thinking that is done for them.

Recent studies show the same effect with AI. In a field experiment with nearly a thousand high school students, Bastani et al. (2025) found that students given unrestricted access to GPT-4 during practice did much better on the practice problems, then performed 17% worse than students without access once the AI was taken away. A second version of the tool, designed to give hints rather than answers, largely removed the harm. In a survey of 319 knowledge workers, Lee et al. (2025) found that the more confidence people had in AI, the less critical thinking they reported applying to its output, while confidence in their own abilities was associated with more. Messeri and Crockett (2024) warn that in research, AI tools can produce illusions of understanding, where people believe they understand more than they do because the output reads as complete.

Learning research explains why ease is misleading. Bjork and Bjork (2011) describe desirable difficulties: conditions that make learning feel slower and harder, such as retrieving an answer from memory instead of rereading it, produce more durable learning, while conditions that feel fluent often produce less. The sense of progress that comes from an AI doing the work is real in the moment and absent later, which is exactly the gap between the practice scores and the exam scores in the Bastani study.

## Why preference is not enough

Giving people what they ask for is usually the respectful choice, and an argument against it needs to be careful. Withholding help, adding friction for its own sake, or deciding on a user's behalf that they should work harder would replace one kind of disrespect with another.

The problem is narrower. The ratings that steer these products are collected at the moment of use, from the person receiving the answer, before any of the costs appear. The person rating a reply is not the person who later finds they can't do the task without it, or who acted on an agreeable answer that turned out to be wrong. A product that optimizes only for the first person is not serving the user, however satisfied the ratings look.

Respecting agency therefore means keeping the person in a position to decide, not making the decision for them in either direction. They should be able to see what the AI did and what they contributed, get disagreement when the evidence supports it, and choose how much of the work to hand over with an accurate sense of what that choice costs.

## Developing critical thinking in students

Education is where the cost is clearest, because the thinking is the point of the work. An essay a student didn't reason through has no value as learning, however good the essay is.

Most schools' first response was detection: tools that try to determine whether a piece of work was written by AI. Detection treats AI use as the problem and pushes it out of view. The Bastani result suggests the more useful question is how the AI was used, since the same model harmed learning when it supplied answers and protected it when it supplied hints.

TAU Thinking, an education tool designed by the author and now in pilot with two US schools, starts from that question. Students draft their work through a school-controlled AI chat, and the tool assumes AI was used and reports how. It reads the conversation turn by turn along four dimensions of agency: whether the student set the direction of the conversation or accepted the AI's framing, what survived from the AI's output into the final work and whether the changes altered meaning, whether the student checked what they were told against anything outside the conversation, and which ideas originated with the student. The third is calibrated skepticism, the stance described in [Designing for Calibrated Skepticism](/writings/calibrated-skepticism), applied to students' own work.

The tool reports patterns across turns rather than judging single moves. One accepted answer means little, but a long run of asking the AI to produce something and accepting it unchanged is a working habit, as is a student repeatedly pressing the AI on the same point or rejecting its suggestion and redirecting it. Every reading can be traced back to the turns it came from, so a teacher can check it, disagree with it, and use it to decide whom to talk to and what to try. The tool never grades the assignment. Its stated position is that it does not develop critical thinking; teachers do, and the tool's job is to make the evidence visible enough for them to act on.

## Designing for agency

The same principles apply outside the classroom. A product that respects its users' agency makes their role visible, gives them something to act on, and leaves the judgment with them.

In practice, that can mean asking for the user's view before offering one on questions of judgment, so the AI's framing doesn't become theirs by default. It can mean offering hints, steps or options where the user's goal is to learn or to own a decision, and complete answers where it isn't. It means disagreeing when the evidence warrants it and showing the basis, rather than adopting the user's premise. And it means separating the AI's contribution from the user's, so that people can see how much of the work was theirs.

It also means measuring different outcomes. Ratings of individual replies capture the moment of use, the same signal that produced the GPT-4o rollback. Better measures follow the user over time: whether they can still do the task without the tool, whether they catch the AI's errors, whether decisions made with its help hold up. Research methods need the same horizon, with longitudinal studies and tasks performed without the AI alongside satisfaction surveys.

AI that does people's thinking for them will usually be preferred in the moment. Designing it to keep people thinking is harder to justify on a dashboard, but it is the version that leaves users more capable rather than less.

*One of four articles on human-AI interaction, each about a signal mistaken for what it is meant to indicate: [Designing for Calibrated Skepticism](/writings/calibrated-skepticism) on fluency mistaken for correctness, [The Efficiency Metric](/writings/efficiency-metric) on throughput mistaken for good decisions, The Decline of User Agency on approval mistaken for benefit, and [The Empathy Gap](/writings/empathy-gap) on human-like cues mistaken for a person.*

---

## References

- Bainbridge, L. (1983). Ironies of automation. *Automatica, 19*(6), 775–779.
- Bastani, H., Bastani, O., Sungu, A., Ge, H., Kabakcı, Ö., & Mariman, R. (2025). Generative AI without guardrails can harm learning: Evidence from high school mathematics. *Proceedings of the National Academy of Sciences, 122*(26), e2422633122.
- Bjork, E. L., & Bjork, R. A. (2011). Making things hard on yourself, but in a good way: Creating desirable difficulties to enhance learning. In M. A. Gernsbacher, R. W. Pew, L. M. Hough, & J. R. Pomerantz (Eds.), *Psychology and the real world* (pp. 56–64). Worth Publishers.
- Lee, H.-P., Sarkar, A., Tankelevitch, L., Drosos, I., Rintel, S., Banks, R., & Wilson, N. (2025). The impact of generative AI on critical thinking: Self-reported reductions in cognitive effort and confidence effects from a survey of knowledge workers. *Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems*.
- Messeri, L., & Crockett, M. J. (2024). Artificial intelligence and illusions of understanding in scientific research. *Nature, 627*(8002), 49–58.
- OpenAI. (2025a, April 29). Sycophancy in GPT-4o: What happened and what we're doing about it. [openai.com](https://openai.com/index/sycophancy-in-gpt-4o/)
- OpenAI. (2025b, May 2). Expanding on what we missed with sycophancy. [openai.com](https://openai.com/index/expanding-on-sycophancy/)
- Sharma, M., Tong, M., Korbak, T., Duvenaud, D., Askell, A., Bowman, S. R., et al. (2024). Towards understanding sycophancy in language models. *International Conference on Learning Representations*.
- TAU Thinking. [tauthinking.com](https://tauthinking.com)
