Paying for something hurts a little, and that small discomfort does useful work. It makes people check the total, compare one more option, or decide they don't need the thing after all. Conversion rate optimization (CRO), the practice of testing changes to a site and keeping whichever version converts better, has steadily rewarded designs that reduce it. Conversational AI brings a new kind of element into those tests: an assistant that talks to shoppers like a knowledgeable friend, using the social cues people rely on to decide whom to trust.

## The pain of paying

Prelec and Loewenstein (1998) described how people feel the cost of a purchase separately from its benefit, and how tightly the two are coupled in time and attention changes how much the payment hurts. Knutson et al. (2007) found the effect in the brain: when participants saw a price they considered too high, activity in the insula, a region associated with aversive feelings, predicted that they would decline the purchase. The pain is not uniform. Rick, Cryder and Loewenstein (2008) found that people differ widely in how much it holds them back, from those who spend less than they would like to those who regularly spend more than they intended.

For most people, most of the time, this pain acts as a brake. It slows a decision down enough for the person to ask whether the thing is worth it.

## How purchase design lowers the brake

Anything that separates the payment from the purchase weakens the pain. Prelec and Simester (2001) ran sealed-bid auctions for sports tickets and found that people told to pay by credit card bid up to twice as much as people told to pay in cash. Stored cards, one-click ordering, buy-now-pay-later plans and subscriptions that renew in the background all work on the same principle: the moment of commitment and the moment of paying are pulled apart, and the commitment is made easy.

Some of this is a genuine service. Re-entering card details for every purchase protects nobody. Other techniques lower the brake by hiding the price or pressuring the decision. In a large field experiment on StubHub, Blake et al. (2021) compared showing ticket fees upfront with adding them at checkout. Buyers who saw the fees only at the end spent more and were more likely to complete a purchase, because the price they had used to choose was not the price they paid. A crawl of about 11,000 shopping sites found dark patterns on roughly one in ten, most commonly countdown timers, low-stock messages and notices that other people had just bought the same item (Mathur et al., 2019).

The title of this piece comes from Loewenstein's (2005) hot-cold empathy gap: people in one emotional state are poor at predicting how they will feel in another. The shopper at checkout, excited about a purchase or worried about missing a sale, is in a different state from the person reading the credit card statement a month later. Countdown timers and scarcity messages work by keeping the shopper in the first state until the order is placed.

## What conversational AI adds

Timers and banners have a weakness: people can recognize them as sales tactics. The persuasion knowledge model (Friestad & Wright, 1994) describes how consumers learn over time to spot persuasion attempts and, once they spot one, discount it. A shopper who sees "only 2 left!" on every product page soon stops believing it.

A conversational assistant does not look like a sales tactic. It answers questions, asks about needs, and offers advice, so the shopper treats the exchange as help rather than selling. People apply social habits to conversational systems that they would apply to another person (Nass & Moon, 2000), and they tend to accept advice from automated aids without checking it, especially when busy or when the aid has been useful before (Parasuraman & Manzey, 2010). The defenses that protect shoppers from a banner are not triggered by a friendly reply.

The assistant can also tailor what it says. Ads matched to a person's personality, inferred from their online behavior, produced substantially more clicks and purchases than mismatched ads (Matz et al., 2017). Language models can now write that kind of personalized message at scale, and in one experiment, messages written by ChatGPT to suit a recipient's personality were more persuasive than generic ones (Matz et al., 2024). In debates, GPT-4 given basic demographic information about its opponent changed their minds more often than human debaters did (Salvi et al., 2025).

Put together, a retailer's assistant can deliver the classic persuasion cues of social proof, liking, authority and scarcity (Cialdini, 2021) in the voice of a trusted advisor, worded for the specific person, at the moment they are deciding. A shopper asking whether a mid-range laptop is enough for photo editing might hear that most photographers with their setup choose the next model up, that the upgrade works out to a few dollars a month on a payment plan, and that the current price ends tonight. Each statement may be accurate. Together they keep the shopper in a hot state, spread the price into installments that hurt less, and arrive as advice the shopper has no reason to resist.

## Where help becomes manipulation

The same assistant can serve the shopper. It can explain the real differences between models, say when the cheaper option is enough, point out fees added at checkout, or mention that a subscription renews next week. These are the checks a careful buyer would run with more time and expertise.

Which role the assistant plays depends on what it is optimized for. A human salesperson's pitch is limited by their training and their own judgment about how hard to push. An assistant's responses can be tested the way a checkout button is: one phrasing against another, one framing of the price against another, tuned for each shopper and kept if conversion rises. Run that loop long enough against conversion alone and the assistant drifts toward whatever persuades, including the tactics no one would have approved if asked directly.

A useful test is whether the shopper would make the same decision in the cold state, with full information and no pressure. Persuasion that survives that test is honest advice. Persuasion that depends on the shopper not noticing it, on urgency that isn't real, or on a monthly figure that hides the total, is manipulation, however helpful it sounds.

Several design practices keep an assistant on the right side of that line. It should say plainly that it represents the retailer. It should state full prices, including fees and the total cost of any payment plan, rather than only the monthly amount. It should not use scarcity or deadlines unless they are true and relevant to the shopper's question, and it should be willing to recommend the cheaper product, or no purchase, when that is the honest answer. Calibrated trust matters here as much as in any AI system; [Designing for Calibrated Skepticism](/writings/calibrated-skepticism) covers how to make an AI's reliability visible to the people relying on it.

## What the regulation covers

The rules set limits rather than prescribe a design. The EU AI Act prohibits AI that uses manipulative or deceptive techniques to distort people's behavior in ways likely to cause significant harm (Article 5), and requires that people be told when they are interacting with an AI system (Article 50). Its heavier transparency and human oversight requirements (Articles 13 and 14) apply only to high-risk systems such as credit scoring, not to shopping assistants. The Digital Services Act bars online platforms from designing interfaces that deceive or manipulate users (Article 25), the Unfair Commercial Practices Directive prohibits misleading and aggressive selling, including false claims that an offer is available only for a very limited time, and the Consumer Rights Directive requires express consent for extra payments and does not accept a pre-ticked box as that consent (Article 22).

None of these rules says what an assistant should recommend or how hard it may push. The difference between advice and pressure is largely a design decision, and the "significant harm" threshold in the AI Act leaves most everyday persuasion untouched.

## Whose assistant is it?

Good intentions are not enough to keep a shopping assistant honest, because the drift toward persuasion happens without anyone choosing it. The more useful question is whose interests the assistant is optimized for, and whether the shopper can tell.

Financial advice has dealt with the same problem for decades. Advisers paid by commission have an incentive to recommend the products that pay them most, and an audit study using trained mystery shoppers found that they often did, steering clients toward higher-fee funds (Mullainathan, Noeth & Schoar, 2012). The response in many countries was to separate advice from sales: fee-only advisers paid by the client, and disclosure rules for advisers paid by commission. A retailer's shopping assistant is a commission-paid adviser by design. That is acceptable as long as shoppers understand it, in the same way they understand that a salesperson in a store works for the store.

An agent that works for the buyer, independent of any retailer, looks like the fee-only alternative. Independence from the retailer does not make an agent unbiased, though. Price comparison sites are independent of the shops they list, and many rank listings partly by what those shops pay; the EU now requires them to disclose paid placement and the main factors behind their rankings (Directive 2019/2161). An agent that earns referral fees, or charges merchants for completing checkout, carries the same conflict one step removed. It works for the buyer only if the buyer is the one paying for it, or if its incentives are disclosed and limited.

Avoiding AI altogether is a third option, and some retailers are already treating transparency about AI as a way to earn trust. Lidl in Poland began labelling promotional images that were generated or edited with AI (Jaroszewski, 2026). A "no AI" promise might reassure some shoppers, but it addresses the wrong variable. The countdown timers and low-stock messages found on more than a thousand shopping sites were built without AI. What matters is what a store's tools are optimized to do.

That makes the incentive the thing to design and to research. A retailer's assistant should say whose side it is on and be tuned for outcomes the shopper would still endorse a month later: purchases kept rather than returned, subscriptions used rather than forgotten, charges that match what the shopper expected to pay. Research should follow the purchase past the hot state, with diary studies that run through the next billing cycle and interviews that ask whether people felt advised or sold to. Conversion rate measures none of this. An assistant optimized for these outcomes can make buying easier without disabling the brake that protects shoppers.

## Designing trust into transactional AI

As AI becomes part of how products sell, design and research teams will be responsible for how much users trust it. Conversational interfaces make trust easy to produce: a warm tone, fluent answers and an attentive manner all signal that the assistant is on the user's side, whether or not it is. Human factors research treats the goal as appropriate reliance, meaning trust that matches how trustworthy a system actually is (Lee & See, 2004). In a transactional interface, that trust should rest on things the user can check, such as the full price, the reasons behind a recommendation and whom the assistant works for, rather than on how friendly it sounds.

Respecting the user follows from the same principle. A shopper who trusts an assistant has lowered their guard, and that trust should be repaid with honest advice rather than used to remove the hesitation that protects them. The teams that design and test these assistants are well placed to make that case inside a business: to define success by what users would still endorse after the bill arrives, and to show through research when an assistant's persuasion has gone further than its users would accept.

---

## References

- Blake, T., Moshary, S., Sweeney, K., & Tadelis, S. (2021). Price salience and product choice. *Marketing Science, 40*(4), 619–636.
- Cialdini, R. B. (2021). *Influence, new and expanded: The psychology of persuasion*. Harper Business.
- Friestad, M., & Wright, P. (1994). The persuasion knowledge model: How people cope with persuasion attempts. *Journal of Consumer Research, 21*(1), 1–31.
- Jaroszewski, D. (2026, June 29). Lidl się przyznał. Chodzi o gazetki promocyjne [Lidl admits it: it's about the promotional flyers]. *Telepolis*. [telepolis.pl](https://www.telepolis.pl/tech/lidl-gazetka-promocyjna-oznaczenia)
- Knutson, B., Rick, S., Wimmer, G. E., Prelec, D., & Loewenstein, G. (2007). Neural predictors of purchases. *Neuron, 53*(1), 147–156.
- Lee, J. D., & See, K. A. (2004). Trust in automation: Designing for appropriate reliance. *Human Factors, 46*(1), 50–80.
- Loewenstein, G. (2005). Hot-cold empathy gaps and medical decision making. *Health Psychology, 24*(4, Suppl.), S49–S56.
- Mathur, A., Acar, G., Friedman, M. J., Lucherini, E., Mayer, J., Chetty, M., & Narayanan, A. (2019). Dark patterns at scale: Findings from a crawl of 11K shopping websites. *Proceedings of the ACM on Human-Computer Interaction, 3*(CSCW), Article 81.
- Matz, S. C., Kosinski, M., Nave, G., & Stillwell, D. J. (2017). Psychological targeting as an effective approach to digital mass persuasion. *Proceedings of the National Academy of Sciences, 114*(48), 12714–12719.
- Matz, S. C., Teeny, J. D., Vaid, S. S., Peters, H., Harari, G. M., & Cerf, M. (2024). The potential of generative AI for personalized persuasion at scale. *Scientific Reports, 14*, 4692.
- Mullainathan, S., Noeth, M., & Schoar, A. (2012). *The market for financial advice: An audit study* (NBER Working Paper No. 17929). National Bureau of Economic Research.
- Nass, C., & Moon, Y. (2000). Machines and mindlessness: Social responses to computers. *Journal of Social Issues, 56*(1), 81–103.
- Parasuraman, R., & Manzey, D. H. (2010). Complacency and bias in human use of automation: An attentional integration. *Human Factors, 52*(3), 381–410.
- Prelec, D., & Loewenstein, G. (1998). The red and the black: Mental accounting of savings and debt. *Marketing Science, 17*(1), 4–28.
- Prelec, D., & Simester, D. (2001). Always leave home without it: A further investigation of the credit-card effect on willingness to pay. *Marketing Letters, 12*(1), 5–12.
- Rick, S. I., Cryder, C. E., & Loewenstein, G. (2008). Tightwads and spendthrifts. *Journal of Consumer Research, 34*(6), 767–782.
- Salvi, F., Horta Ribeiro, M., Gallotti, R., & West, R. (2025). On the conversational persuasiveness of GPT-4. *Nature Human Behaviour, 9*(8), 1645–1653.
- Directive 2005/29/EC on unfair commercial practices (Annex I).
- Directive 2011/83/EU on consumer rights (Article 22).
- Directive (EU) 2019/2161 on the better enforcement and modernisation of Union consumer protection rules.
- Regulation (EU) 2022/2065, the Digital Services Act (Article 25).
- Regulation (EU) 2024/1689, the Artificial Intelligence Act (Articles 5, 13, 14 and 50; Annex III).
