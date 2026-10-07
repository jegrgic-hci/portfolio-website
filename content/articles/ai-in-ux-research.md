> AI in UX research can increase the velocity, breadth and depth of findings, but it still takes sound research methodology to turn those findings into good product decisions.

Ask survey participants what was confusing about your checkout, and some of them will find something confusing, even if nothing was. The question assumes there was a problem, and people want to give a useful answer. Ask them to tell you about the checkout instead, and you learn what actually stood out to them, good or bad. The broader question gives a more accurate signal, but it's also much harder to analyze, because every answer is different and has to be read and coded. Researchers make this kind of compromise on every study, choosing the best methodology within the time, budget and resources they have.

Analysis is the expensive side of that compromise, and it's the side AI changes. A model can code thousands of broad answers in the time it once took to read a hundred, so the more accurate question no longer has to be ruled out on cost. The same speed works against a study without sound methodology. A model will just as quickly code the confusion a leading question created, or summarize five hundred "it was fine" responses as satisfaction, and the error reaches the product team looking like evidence. With sound methodology and peer review of the analysis, AI can remove many of the compromises research has always had to make.

**In this article**

- [What AI adds](#what-ai-adds): velocity, breadth and depth
- [Survey responses](#survey-responses): why broad questions give truer answers, and how question order reduces "it was fine" responses
- [Interviews](#interviews): coding full transcripts, and checking every quote the model gives you
- [Video](#video): screen recordings vs. facial expression analysis
- [What stays with the researcher](#what-stays-with-the-researcher)

---

## What AI adds

Research normally runs a sprint ahead of the design and engineering work it informs, and that deadline is a compromise of its own. A study has to fit into the sprint, so its depth is limited by how much analysis can be done in that time. With AI taking on much of the analysis, a more in-depth study fits into the same sprint, increasing the velocity of the whole team and giving it clearer direction. Faster analysis also makes it practical to run studies iteratively, so user insights keep coming in as the product changes and less design and engineering work is spent on the wrong problem.

The same time savings add breadth. Hearing from more people and reviewing more sessions shows the segments that behave differently, the edge cases, and the workarounds people have built because the design didn't account for them. It also makes it practical to combine methods. A survey shows how common a problem is, interviews explain why it happens, and recordings show what people actually do about it. Each answers a question the others can't, but analyzing all three within one sprint has rarely been realistic, so most studies use one. Findings that hold up across several methods are also much harder for stakeholders to dismiss.

None of this removes the need for sound methodology or for review, and a model can't be relied on to notice when its own coding is wrong. As with everything else we use AI for, from coding to design to writing, a person in the loop is needed to guide, correct and approve its work so the quality stays high. How much a team gains depends on how effectively a researcher uses AI to augment their knowledge and experience, and that looks different for each method.

## Survey responses

In practice, most surveys ask the narrow version of the checkout question. Answers that all address the same issue are much easier to code, and coding hundreds of broad answers by hand usually isn't realistic. That costs us accuracy, and it costs us discovery too, because broad questions asked soon after someone has used the product are also where participants mention things we didn't know to ask about.

With AI handling the first pass of coding, broad questions become practical at survey scale, and we no longer have to narrow every open-ended question to keep the analysis manageable. The data still needs attention, though. AI groups similar responses well but misses nuance, and it can't reliably tell a considered answer from a *validation response* like "yeah it was fine, I liked it." It tends to group the two together, and if those responses aren't filtered out before the model summarizes the data, they skew the results.

Good question design reduces those responses before analysis starts. Asking a broad question first and then following up helps participants give information they might not offer on their own, without leading them:

1. *Tell us about the checkout process.*
2. *Was there anything confusing about the process?*
3. *What did you like about the checkout process?*

"Was there anything" lets participants say no, and asking what they liked keeps the survey from only looking for problems. AI can code the answers, but how useful they are depends on how the questions were written and ordered.

## Interviews

Interviews involve the same compromise on a larger scale. An hour-long interview produces far more than the discussion guide asks for: participants go off script, mention a workaround in passing, or describe a part of their day nobody thought to ask about. Under time pressure, we code against the research questions, and the rest stays in the transcript, where it rarely makes it into the readout.

AI makes it practical to code every transcript in full, both against the research questions and without a predefined frame, and to flag themes that came up across participants but weren't in the guide. Data that wasn't part of an established question no longer gets lost because nobody had time to go back for it.

The risk is in the summaries. A model can drop a qualifier that changed the meaning of a sentence, merge two participants' views, or produce a quote that sounds plausible but isn't what anyone said, so every quote in a readout should be checked against the transcript and every theme should trace back to the passages that support it. The model also can't tell which tangent matters. It can report that four participants mentioned printing out a page, but it can't know that this is the most important finding in the study because the team assumed nobody prints anything.

Letting AI conduct the interview itself, which some research tools now offer, is a different matter. People apply social rules to computers without meaning to (Reeves & Nass, 1996), including politeness: participants rate a computer more favorably when that same computer asks for the evaluation (Nass, Moon & Carney, 1999). An AI interviewer could produce more of the validation responses described above. The evidence isn't one-sided, since people can disclose *more* to an automated interviewer on sensitive topics (Lucas et al., 2014). But a good interview depends on follow-up questions, and follow-up depends on noticing things a scripted interviewer misses.

## Video

With recorded sessions, the compromise is time. Nobody can watch every session in full, so we sample. Depending on cost and effort, AI can review all of them, although the two kinds of video deserve different levels of trust.

Screen recordings are the more reliable of the two, because they capture observable behavior against the design, and that behavior often differs from what participants say they did. AI can work through hundreds of sessions and tag repeated clicks on something that isn't interactive, hesitation before a step, backtracking, abandoned tasks, and the route someone took compared with the route the design intended. The model can flag *what* happened, but understanding *why* still means watching the moment and, ideally, asking the participant.

Video of participants' faces calls for much more caution. Tools that read emotion from facial expressions exist and their output looks precise, but the science behind them is weak. A large review of the evidence found that facial movements don't reliably map to specific emotions. People often don't make the expected expression when they feel an emotion, the same expression can mean different things in different contexts, and the patterns vary across individuals and cultures (Barrett et al., 2019). A furrowed brow can mean confusion, or it can mean concentration on a task that's going well. If the tool labels it "frustration," that false positive gets counted, charted and presented as a finding.

The ethics are a concern as well. Participants who agreed to be recorded didn't necessarily agree to have their faces analyzed for emotion, so consent has to cover that analysis specifically, along with how long the data is kept and who can see it. Regulators are taking this seriously: since February 2025, the EU AI Act has prohibited AI that infers people's emotions in workplaces and education, except for medical or safety reasons (Regulation (EU) 2024/1689, Art. 5(1)(f)). Most UX research falls outside that ban, but research involving employees or students may not, and regulation in this area is likely to tighten.

> If you do use expression analysis, treat its output as a pointer to moments worth watching, never as a measurement of how someone felt.

## What stays with the researcher

AI doesn't remove the need for a researcher to code and analyze the data. It means the researcher can be more precise about which data they examine closely, instead of filtering through noise. That close work is how a researcher forms their own view of what's going on, and it's what makes it possible to check the model's work: to spot a summary that doesn't match what participants said, or to notice the one participant who doesn't fit any theme because they're using the product in a way nobody designed for. Peer review adds a second check. Another researcher codes a sample of the data independently, and any differences from the model's coding show where it went wrong. Without these checks, faster research produces wrong answers sooner, the same problem discussed in [The Efficiency Metric](/writings/efficiency-metric).

Turning findings into decisions also depends on context the model doesn't have. A model can report that 60% of users found checkout slow. A researcher who knows the product can tell whether the problem is speed, or whether the delay is making people doubt their payment went through, which is a trust problem with a different fix. The same findings need different framing for an engineering team, a product lead or an executive sponsor, depending on what each of them has to decide. That understanding of the data and the business is also what lets a researcher see what the team still doesn't know, and what the next study should answer.

## Conclusion

Every study will still involve compromises, but with AI, fewer of them are forced on us by the cost of analysis. Like the computer before it, AI makes a researcher's skills go further rather than replacing them, letting them spend their time on the data that matters instead of filtering through noise. Deciding which compromises a study can afford is still the researcher's job.

---

## References

- Barrett, L. F., Adolphs, R., Marsella, S., Martinez, A. M., & Pollak, S. D. (2019). Emotional expressions reconsidered: Challenges to inferring emotion from human facial movements. *Psychological Science in the Public Interest, 20*(1), 1–68.
- Lucas, G. M., Gratch, J., King, A., & Morency, L.-P. (2014). It's only a computer: Virtual humans increase willingness to disclose. *Computers in Human Behavior, 37*, 94–100.
- Nass, C., Moon, Y., & Carney, P. (1999). Are people polite to computers? Responses to computer-based interviewing systems. *Journal of Applied Social Psychology, 29*(5), 1093–1109.
- Reeves, B., & Nass, C. (1996). *The Media Equation: How People Treat Computers, Television, and New Media Like Real People and Places.* CSLI Publications and Cambridge University Press.
- Regulation (EU) 2024/1689 of the European Parliament and of the Council (Artificial Intelligence Act). *Official Journal of the European Union*, L, 12 July 2024.
