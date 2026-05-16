# Cigna Self-Service Data Visualization Tool
### UX Case Study — Joseph Grgic, UX Lead

---

## Section 1 — Overview

**Role:** UX Lead
**Company:** Cigna (health insurance / enterprise)
**Team:** Cross-functional — data analysts, business stakeholders, development team
**Timeline:** ~10 months
**Deliverable:** Proof-of-concept for a self-service data visualization tool

**The Setup:**
At Cigna, creating a data report or dashboard wasn't something business users could do themselves. Every request had to go through a data analyst — who would find the right data, clean it, build the output — a process that could take days, and often came back not quite right. The cycle would repeat.

**The Opportunity:**
Build a self-service tool that lets business users create their own reports and dashboards directly — no analyst dependency, no lag time, no lost-in-translation outputs.

**The Challenge:**
The data is enterprise-scale and deeply technical. The users who need it most are the ones least equipped to navigate it. Bridging that gap required rethinking how data is discovered, selected, and visualized entirely from the ground up.

**Your Role:**
UX Lead, working across data analysts, business stakeholders, and the development team over approximately 10 months to take this from concept to proof-of-concept.

---

## Section 2 — The Problem

**Data is not built for humans — and healthcare data especially so.**

Enterprise data is structured for storage and retrieval, not for exploration. At Cigna, that meant data living across multiple data lakes, with complex relational structures, hundreds of dimensions and measures, and field names that meant nothing without deep technical context. There was no human-readable layer — no way in for someone who wasn't already fluent in the architecture.

Healthcare data compounds this further. It spans clinical, financial, demographic, pharmacy, and behavioral domains — all interconnected, all with their own structures and vocabularies. Even understanding what data exists, let alone how to find and use it, required expertise most business users simply don't have.

**This created a fundamental discovery problem.** The users who most needed data-driven insights — to make decisions, identify trends, understand their members — were the most dependent on others to get it for them. The goal was to remove that dependency by making the data navigable, discoverable, and usable directly.

---

## Section 3 — Goals Framework

Before any design work began, the problem needed to be structured. With a cross-functional team spanning stakeholders, data analysts, and developers, I framed the goals across three dimensions to align the team and anchor every design decision that followed.

**Business Goals**
Reduce the operational overhead of routing data requests through analysts, and enable data-driven decision making at the business user level — faster, more accurately, and without the back-and-forth.

**Data Goals**
The underlying data lived across multiple fragmented data lakes. Before it could be useful to anyone, it needed to be unified into a single accessible source — and critically, made human-readable. Not just technically consolidated, but restructured so that field names, data relationships, and hierarchies actually made sense to someone who didn't write the schema.

**User Goals**
Enable a non-data savvy user to independently find, discover, and use stored data to do two things: generate reports for clients, and build dashboards that measure client performance — ultimately delivering better service and sharper insights without needing an analyst in the loop.

**Why this mattered:**
These three goal dimensions gave the team a shared framework. When design decisions came up — and they always do — we had clear criteria to evaluate against. It also kept the scope honest across a 10-month project.

---

## Section 4 — Understanding the Data Landscape

Before a single wireframe was sketched, I needed to understand what we were designing around. That meant getting into the data itself — not as a data analyst, but as someone who needed to make it navigable for people who weren't.

**The Existing Reality**
Cigna's data existed across a sprawling set of fragmented sources — clinical, claims, provider, pharmacy, financial, demographic, sales, and third-party data — all living in separate warehouses. These were deeply interconnected datasets with complex relationships that weren't visible or legible to anyone outside the data team.

**The Consolidation Challenge**
The broader initiative was moving toward a unified data lake, but consolidation alone wasn't the answer to our design problem. The data was structured for machines, not people — and renaming thousands of fields to be human-readable wasn't a viable path. Instead, we identified a single high-relevancy database to use as a test case. Working from that, we developed schemas and organized fields into logical groupings using human-readable language — improving findability and discoverability without touching the underlying data architecture.

**What This Meant for Design**
Using a narrow but highly relevant database as our POC gave us a realistic and manageable scope. We could develop the data schemas, structures, and relationships needed to let users successfully complete their tasks — then validate the model before scaling. This constraint was a feature, not a limitation.

---

## Section 5 — Information Architecture

This was the core design problem — and the section where the most foundational work happened.

**The Central Insight**
How data is stored is not how users think about data. Database architecture is built for retrieval efficiency. Information architecture is built for human comprehension. These are fundamentally different structures, and bridging them was the key design challenge. You can't hand a user a data schema and call it a UI.

**Building the Translation Layer**
Rather than restructuring the underlying data, we built an IA on top of it. Using our test database as the foundation, we organized hundreds of raw fields into logical, human-readable categories and hierarchies — grouping related fields into families that matched how a business user would naturally think about their data. Demographic information, plan details, coverage, costs, geographic data — structured not by how the database stored them, but by how a user would go looking for them.

**The Hub and Spoke Model**
The target IA followed a hub and spoke structure — a central node with clearly defined categories branching outward, each containing progressively more specific fields and values. This gave users a mental model they could navigate without needing to understand the underlying data relationships. They could start broad and drill down, rather than needing to know exactly what they were looking for before they started.

**Supporting Discovery, Not Just Search**
A key decision was designing for exploration as much as retrieval. Users often don't know the exact name of a field — they know what they want to understand, not how the data labels it. The IA needed to support fuzzy, intuitive searching so users could find data using natural language and context, not technical field names.

---

## Section 6 — Design Exploration: Conventional UI

With the IA established, the project split into two parallel design paths: a conventional data mining tool UI, and a node-edge visualization approach built for exploration and discovery. Both were explored simultaneously as POC directions.

**The First Problem: How Does a User Select Data?**
Before anything else, we had to solve a foundational interaction problem — how does a non-technical user navigate hundreds of dimensions and measures to select the data they actually want? Get this wrong and everything downstream breaks.

**Two Approaches to Data Selection**
For the conventional UI path, we explored two patterns: a cascading dropdown model and a browse-and-select chip interface. Each had merit.

The chip approach offered visibility — users could see and manage their selections clearly. But with the scale of data involved, the open-ended nature of selection risked users building combinations that produced meaningless or invalid visualizations.

The cascading approach introduced sequential gates — select a database, then a dimension, then a measure, in order. This felt more restrictive on the surface, but that restriction was the point. The hierarchy kept users oriented within the data structure, and each gate prevented invalid combinations before they happened. For a non-technical user who doesn't know what a bad data selection looks like, those guardrails were essential.

**The Decision**
We moved forward with the cascading model. The constraints it introduced weren't limitations — they were guardrails that reduced error, maintained data hierarchy orientation, and kept the workflow linear and learnable.

---

## Section 7 — Design Exploration: Node-Edge UI

The second path took a fundamentally different approach. Rather than guiding users through a linear selection sequence, the node-edge UI was designed to make the data itself explorable — letting users navigate relationships visually and discover data through interaction rather than sequential choices.

**Introducing a Novel Approach**
This direction was sparked by my discovery of Linkurious and their Ogma graph visualization library. Recognizing its potential to solve our core discovery problem, I introduced it to the team as the foundation for building our own custom node-edge interface. This was a significant decision — healthcare and insurance are traditionally conservative industries with a strong preference for proven, familiar tooling. Making the case for a novel approach required demonstrating not just its design merit but its direct relevance to the business goal. Getting that buy-in was itself a meaningful part of the leadership work on this project.

**How It Worked**
A user selects a database, which surfaces a set of nodes and edges built from the schemas developed during the IA phase. Each node represents a data category, each edge a relationship. Users click through to drill down — moving from broad categories into increasingly specific dimensions and measures, following the structure of the data in a way that felt intuitive rather than technical.

The key distinction from the conventional UI was intent. Where cascading dropdowns guided users to a known destination, the node-edge model supported users who didn't yet know what they were looking for — enabling genuine exploration of the data landscape.

**Keeping It Usable**
A node-edge visualization can become its own discovery problem if not carefully controlled. A graph with hundreds of visible nodes and connections is visually overwhelming and functionally useless. The design work here was about scoping — surfacing the right amount of data at each level of interaction, using the IA hierarchy to control what was visible and when.

**The Fallback**
Recognizing that not all users would be comfortable navigating a graph interface, we built in a fallback that more closely aligned with the conventional UI — giving users a familiar entry point while still benefiting from the underlying node-edge data structure and relationships.

**What This Exploration Unlocked**
The node-edge path made something visible that the conventional UI couldn't — the relationships between data points. For a non-technical user trying to understand not just what the data shows but how different dimensions connect and influence each other, that was a meaningful shift in how data could be experienced.

---

## Section 8 — Wireframes & Key Interactions

With both design paths defined, the wireframes focused on solving three core interaction challenges: how users build a data selection, how that selection maps to a visual output, and how users explore and filter within that output.

**The Linear Data Selection Flow (Conventional UI)**
The cascading model was translated into a step-by-step builder: select a database, select a dimension, select a measure, select a visualization type. Each step was dependent on the one before it — critically, a change at any higher level reset all steps below it. This wasn't a technical constraint, it was a deliberate design decision to prevent users from carrying forward selections that no longer made sense given a changed context.

**The Dashboard Builder**
Once a visualization was created, users could add it to a dashboard via a floating action button — keeping the primary interface clean while making the build action always accessible. Multiple visualizations could be added and arranged, giving users a complete picture of the metrics they cared about across bar charts, line charts, pie charts, and geographic views.

**The Node-Edge 360 Exploration View**
In the node-edge path, the wireframes focused on the drill-down interaction — how a user moves from a database node through categories and into specific dimensions and measures. As users made selections, the visualization updated in real time, making the relationship between data selection and output immediately legible. A metadata panel surfaced additional context at each level, and a fuzzy search allowed users to find dimensions using natural language rather than exact field names.

A significant area of experimentation was using the visual properties of the graph itself to encode meaning. Unlike conventional charts, node-edge gave us the ability to represent data graphically through size, position, weight, and other visual elements — directly within the exploration interface. For example, the edge connecting a demographic node to a cost node could scale in size proportionally to what that demographic represented as a percentage of total costs. This meant users weren't just navigating to data — they were already beginning to read it. The visualization became part of the discovery experience, not just the output at the end of it.

**Filtering**
Both paths included filtering — the ability to narrow data by selecting ranges or specific values within a chosen dimension. A key design decision was ensuring the filter interaction was visually connected to the data selection, not siloed in a separate panel. Users needed to see how their filter criteria related to what they had selected.

**The Core Design Principle Across Both**
Every interaction was designed around the same underlying problem: a user who doesn't know the data shouldn't have to act like they do. Whether through sequential gates, node exploration, or contextual search — the wireframes were built to keep users oriented, reduce invalid selections, and make the path from data to insight as legible as possible.

---

## Section 9 — Outcomes & Next Steps

This project was a proof-of-concept — the goal was never to ship a finished product, but to validate an approach, establish a design direction, and create a foundation the team could build from. On those terms, the POC delivered — and the outcomes were more nuanced than a simple success.

**What Was Validated**
Two viable design paths were established and documented — the conventional cascading UI and the node-edge exploration interface — each with clear rationale, defined interaction patterns, and a shared IA foundation. The work demonstrated that complex healthcare data could be made navigable for non-technical users without restructuring the underlying data architecture.

**User Reception**
Both approaches were well received by business users — and for good reason. The node-edge interface gave users the ability to explore and discover data freely, building confidence through visual navigation rather than needing to know exactly what they were looking for upfront. The conventional UI offered the same control and confidence, but required users to be more deliberate and specific in their intent when searching for data.

Two different approaches to the same goal — and both were infinitely better than the existing model, where business users had no direct access to the data at all and could only submit requests to data analysts and wait.

**The Technical Reality**
However, scaling the node-edge approach against the full size of Cigna's data lakes introduced performance challenges that couldn't be easily mitigated. We explored multiple approaches to address this, but the cost-benefit analysis was clear — at enterprise scale, the conventional cascading UI was the more viable path forward. It was a grounded decision, made with full awareness of the trade-offs.

**What This Project Demonstrated**
The decision to move toward the conventional UI wasn't a retreat — it was the result of a rigorous process that explored a genuinely novel approach, validated it with users, stress-tested it against real technical constraints, and made a recommendation grounded in evidence. That process — from ambiguous problem to structured POC to informed direction — is the work.

---

*Case study outline compiled May 2026. Ready for detailed write-up.*
