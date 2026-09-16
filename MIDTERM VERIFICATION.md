# MIDTERM VERIFICATION — THE LAST HEIR

**Group:** G08  
**Product:** The Last Heir — Financial Investigation Game  
**Date:** 16/09/2026 
**Team Representative:** Phạm Quỳnh Phương  
**Prototpye**: https://drive.google.com/file/d/1GvQ_7H2EFwmwiUNvIBEraRtGNoV_0Myu/view?usp=drivesdk&fbclid=IwY2xjawUW8kZwZG9mBWV4dG4DYWVtAjEwAGJyaWQRMU5ZeFZjN214WkU2SEZzb1lzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEe5A7Cra3ZQgl1zfhZ3uh8yTC8dpGZ6zKZDRr7M4WnM1nu3wuqSeQcKOaxBOk_aem_NDb63VWMWYWQjji7swFtIw

**Repository:** https://github.com/FTU-Legacy-63/G08  
**Instructor:** Phan Trần Trung Dũng

---

# A. GROUP VERIFICATION

## 1. What is the biggest issue your team still needs to solve before Week 6?

The most important issue the team still needs to resolve is **finalizing and validating the Control Investigation logic in Tab 4 so that the player must genuinely integrate evidence rather than being led too directly to the Management Override conclusion**.

At this stage, the challenge is not adding more content. It is ensuring that the existing evidence creates a fair but meaningful reasoning process. The design must avoid two opposite risks:

- **Answer leakage:** one screen or document reveals too much, turning the task into simple recognition rather than investigation.
- **Insufficient evidence:** the information is too fragmented or weakly connected, so the player cannot form a defensible conclusion even when reasoning correctly.

To address this, Tab 4 must preserve a clear distinction between three reasoning levels:

> **Factual Finding → Control Interpretation → Final Assessment**

The remaining Week 6 task is therefore to make this structure consistent across the game logic, scoring rules, evidence presentation, and interface behavior.

---

## 2. Why is this issue important?

This issue is central to the project's core Product Value: **Information Integration**. The purpose of the game is not simply to lead the player to the correct label, but to require the player to build an explainable conclusion from multiple pieces of evidence.

The financial stages in Tabs 1–3 are intentionally limited to **screening and routing**. They guide the player through:

> **Financial Screening → SG&A Drill-down → Advisory Expense → Northstar**

These financial signals identify **where the player should investigate**, but they do not by themselves establish that Management Override occurred or identify the person primarily responsible.

The Control Investigation must therefore require the player to connect several evidence types, including:

- the expected approval process;
- personnel roles and required responsibilities;
- workflow and approval records;
- route requirements;
- transaction aggregation;
- evidence of who actually initiated, completed, or bypassed the relevant steps.

If this logic is not designed carefully, the product can fail in two ways:

- **The game becomes too obvious:** One document effectively states the conclusion, so the player only needs to recognize and select it.
- **The game becomes unfair:** The player is asked to make a judgment without enough evidence to distinguish a reasoning failure from missing information.

For this reason, the project separates **raw evidence, interpretation, and final assessment**, requires major judgments to be supported by relevant evidence, and determines the final case conclusion from confirmed **Evidence States** rather than from the player's cumulative score. This design is also reflected in the project's **No-Answer-Leak, Meaningful Interaction, Anti-Guess, and Assisted Continuation** principles.

---

## 3. What has your team done about this issue so far?

The team has revised the Control Investigation several times after identifying where earlier versions made the reasoning either too transparent or too fragile. The current design reflects four main improvements.

- **Surface Approval was converted into passive observation:**  
  The approval screen is now read-only rather than a scored question. The player can observe that the workflow appears “Completed,” but this is not treated as proof that the underlying control operated correctly. This preserves the distinction between what the system displays and what actually happened.

- **Direct conclusion wording was removed from raw evidence:**  
  Earlier versions used clues such as a direct “missing Finance Manager signature,” which made the control failure too easy to identify. The current version requires the player to compare policy, personnel roles, Surface Approval, the Raw Approval Audit Trail, and transaction-route records. Raw evidence now presents **facts and events**, not labels such as “bypass,” “Management Override,” or “responsible person.”

- **The reasoning process was divided into distinct stages:**  
  Instead of asking for one broad judgment, the current flow separates the investigation into:

  > **Surface Observation → Expected Process → Raw Evidence → Fact Finding → Control Interpretation → Route Compliance → Aggregate Approval → Management Override Synthesis**

  This allows the player to establish what happened first, interpret the control implication second, and only then reach the final assessment.

- **Evidence quality and player performance were separated:**  
  The project now applies the **Anti-Guess Principle**: a correct judgment without valid supporting evidence does not receive full reasoning credit. Supporting evidence is classified as `required_relevant`, `additional_relevant`, `irrelevant`, or `contradictory`. At the same time, **Evidence State** (`unreviewed`, `reviewed`, `confirmed`, `unresolved`, `assisted`, `contradicted`) is kept separate from **Performance Score**. Score evaluates how well the player performs; Evidence State determines what the case evidence actually supports.

The team also added **Assisted Continuation** so that an early mistake does not block the remaining investigation. For example, if the player fails to identify Northstar correctly, the system can provide the minimum referral packet (`REF-NORTHSTAR-01`) needed to continue, while preserving the earlier node as **assisted rather than confirmed**.

Overall, the design has evolved through the following sequence:

> **Direct missing-signature clue → Surface Approval / Raw Approval Audit Trail → separate Fact Finding and Control Interpretation → Evidence State + evidence-quality requirements → Management Override synthesized from multiple confirmed findings**

This progression reflects the same design objective throughout: **require genuine information integration without making the case either obvious or arbitrary**.

---

## 4. What will your team do next about this issue?

Before and during Week 6, the team will focus on **stabilizing and testing the final Control Investigation logic**, rather than expanding the theoretical content or adding new features.

The next actions are:

- **Finalize one canonical Tab 4 sequence:**  
  The same terminology, evidence order, and reasoning structure will be used consistently across the Week 3 case content, Week 4 gameplay mechanics, Week 5 interface specification, and Week 6 implementation.

- **Red-team every major decision point:**  
  The team will deliberately test weak and exploitative paths, including correct judgment with wrong evidence, correct judgment with irrelevant evidence, incorrect factual findings, missed aggregate-approval issues, wrong Northstar selection followed by Assisted Continuation, “select-all” evidence behavior, and pure guessing.

- **Finalize the Evidence Scoring formula:**  
  The current conceptual model of **Coverage + Relevance + Contradiction penalty** will be converted into explicit scoring rules and point values so that the Anti-Guess Principle is enforceable in the implemented game.

- **Add a dedicated “Guess-Only Path” test:**  
  This test will check whether a player who repeatedly chooses the correct labels but provides no valid supporting evidence can still reach a fully confirmed evidence chain. The expected outcome is that they cannot.

- **Review all player-facing evidence for answer leakage:**  
  The team will confirm that no single document independently reveals the final Management Override conclusion, that Surface Approval does not reveal the actual approver too early, and that responsibility evidence does not identify the primary responsible individual before the required reasoning is completed.

The Week 6 objective is therefore not to redesign the case again, but to ensure that the final investigation flow is **coherent, testable, fair, and resistant to guessing**.

---

# B. MEMBER CONTRIBUTION VERIFICATION

| Member | What did this member actually produce? | How is it used in the project? | What can this member personally explain, calculate, demonstrate, or reproduce? |
|---|---|---|---|
| **Phạm Quỳnh Phương**<br>**Team Lead & Project Integration** | Produced and consolidated the project's **Problem Direction and Product Direction across Weeks 1–5**, including the three initial problem candidates, the selection of **Information Integration**, the checkpoint **Feedback → Decision → Revision** records, and the cross-week logic connecting financial screening, transaction tracing, control investigation, Management Override, and Responsibility Attribution. She also reviewed terminology, scope, assumptions, and logic across weekly documents and identified conflicts between older and newer versions. Major examples include identifying that the earlier Audit Trail design leaked too much of the answer and coordinating the shift from the earlier **Beneish-M-Score / COSO-SOX / Fraud-Triangle scoring** framework to the current **DSRI-SGAI-TATA screening / Management Override** structure. | Acts as the project's **integration and consistency layer**. Phương checks that the financial content from Dũng, gameplay logic from Hiền, storyline/evidence from Ngọc, and UI/technical mapping from Khuê all remain aligned with the same Problem Direction, Product Direction, investigation chain, and MVP scope. Her work also ensures that decisions from earlier weeks become constraints for later work instead of being silently replaced. She is responsible for resolving cross-document inconsistencies, unclear ownership, and MVP-versus-Target-Product scope conflicts. | Can explain the complete **Week 1 → Week 5 development logic** and the reason for each major revision. Can explain why **Information Integration** was selected over Evidence Verification or Evidence-Based Reasoning as the main problem; why financial analysis is used for **screening rather than final proof**; why Tab 4 evolved into **Expected Process → Raw Evidence → Fact Finding → Interpretation → Synthesis**; why Evidence State is separated from Performance Score; and how Assisted Continuation preserves the learning flow without treating an earlier wrong answer as correct. Can also identify the owner responsible for a specific inconsistency or unresolved dependency. |
| **Phạm Triệu Tiến Dũng**<br>**Financial Content & Input** | Produced and verified the **financial and transaction inputs** used in the case: two-period Aster Holdings data for **Revenue, Receivables, SG&A, Income from Continuing Operations, CFO, and Total Assets**; the SG&A subaccount breakdown; the Advisory Expense Ledger; and the three Northstar transactions of **0.9 + 0.9 + 0.8 = 2.6 million USD**. He also verified the screening and tracing values, including **DSRI = 0.9333, SGAI = 1.12, TATA = 0.0273**, Advisory Expense growth of **250%**, Northstar total of **2.6 million USD**, and Northstar's **61.9% share of Advisory Expense**. | Provides the **financial foundation for Tabs 1–3**: **Financial Screening → Account Drill-down → Transaction Tracing**. The data routes the player from the financial statements to SG&A, then to Advisory Expense, and finally to Northstar. The later control investigation depends on this chain being internally consistent because Northstar must be discovered through the financial investigation rather than given directly to the player. Dũng is also responsible for numerical consistency, reconciliation, units, formulas, and case-specific thresholds. | Can reproduce **DSRI, SGAI, and TATA** from the raw figures and explain the purpose of each indicator. Can explain why TATA uses **Income from Continuing Operations** rather than Net Income; why selected Beneish indicators are used for screening rather than a reduced M-Score; and why the case-specific thresholds are pedagogical routing rules rather than official Beneish cutoffs. Can reconcile the SG&A breakdown with reported SG&A, calculate the Advisory Expense increase, verify the ledger total, and calculate both Northstar's aggregate value and its **61.9% (2.6/4.2)** share of Advisory Expense. |
| **Nguyễn Minh Hiền**<br>**Gameplay & Logic** | Produced the **gameplay, rule, and state logic** across the six tabs. This includes the Evidence State model (`unreviewed`, `reviewed`, `confirmed`, `unresolved`, `assisted`, `contradicted`), the **Assisted Continuation** mechanism, the supporting-evidence classification (`required_relevant`, `additional_relevant`, `irrelevant`, `contradictory`), approval and transaction-aggregation logic, and the rule separating the Management Override conclusion from gameplay score. He also designed the logic preventing a correct single-select answer from automatically receiving full reasoning credit when the supporting evidence is weak or irrelevant. | Serves as the **decision and state-transition structure of the game**. It determines how player answers change Evidence States, what evidence becomes available next, when Assisted Continuation is triggered, how evidence quality affects scoring, and which confirmed states are required before Management Override can be supported. It also prevents two key exploits: **guessing the correct answer without reasoning** and **selecting every evidence item to guarantee credit**. Hiền is responsible for resolving mismatches between documented logic and C# implementation, scoring edge cases, and progression errors. | Can explain and reproduce Evidence State transitions for both a correct path and an assisted path. Can explain why a wrong Northstar selection produces an **assisted** transaction node rather than game-over or a falsely confirmed node; the difference between Evidence State and Performance Score; the logic of evidence coverage and relevance; and why Management Override must be synthesized from **multiple confirmed control findings** instead of inferred from one threshold or transaction amount. Can also explain how the approval policy and aggregation rule are applied to the Northstar transactions. |
| **Tôn Khánh Ngọc**<br>**Storyline & Output** | Produced the **storyline, player-facing evidence content, and responsibility-evidence structure**. This includes the Aster Holdings case context; the four-person suspect set (**Victor, Lucas, David, Sophia**) with differentiated involvement; the **Surface Approval Summary**; the **Raw Approval Audit Trail / workflow evidence**; the Personnel Directory; later responsibility and conflict evidence; the Source Register separating academic sources (**Beneish, PCAOB AS 2401, COSO, ACFE Fraud Triangle**) from simulated case content; and the **Legacy Approval System / Succession Review** assumption. She also refined evidence wording so that documents present factual information without directly stating the final conclusion. | Provides the **actual evidence and narrative content used in Tabs 4–6**. Surface Approval creates the initial appearance that approval is complete; personnel information establishes which roles should have participated; raw workflow records allow the player to reconstruct what actually happened; and later involvement/conflict evidence supports Responsibility Attribution. The Legacy Approval System assumption keeps the storyline internally consistent by explaining how workflow events can be recorded for retrospective review without every policy exception being automatically detected in real time. Ngọc is responsible for no-answer-leak wording, suspect-evidence balance, responsibility-attribution clarity, and storyline consistency. | Can explain why Surface Approval and Raw Approval evidence must be separated; why raw evidence should describe **events rather than conclusions**; and how the player moves from **Expected Process → Factual Finding → Control Interpretation → Responsibility Attribution**. Can reproduce and explain the important Raw Audit Trail fields, including `Recorded Finance approver: —`, `Route initiated by: Victor`, `Justification: —`, and `Retrospective Finance review: —`. Can distinguish **Required Role, Actual Actor, Monitoring Role, and Primary Responsible Individual** for Victor, Lucas, David, and Sophia; explain why Lucas is the required Finance role but not automatically the primary responsible individual; explain David's relevance to the CFO + Board escalation requirement; explain why Sophia's monitoring role alone does not establish control failure; and explain why the Legacy Approval System assumption is necessary for storyline consistency. |
| **Đinh Thị Minh Khuê**<br>**UI/UX & Code Integration** | Produced the **UI/UX and technical-integration structure** for translating the documented investigation into a playable interface. This includes the six-tab screen structure; the mapping between local JSON data and C# object groups; the planned display order of financial data and evidence; the technical separation between player-facing and internal answer data; rules preventing `answer_key.json` or conclusion-bearing fields from appearing in player-facing screens; and the intended representation of Evidence State, locked/unlocked evidence, Trace Map elements, and assisted/unresolved states. | Serves as the **technical bridge between the content specification and the Unity implementation**. The financial data, gameplay rules, and evidence produced by the other workstreams only function correctly if the interface loads the right data at the right stage and preserves the intended evidence progression. This mapping also prevents implementation from revealing information too early, overwriting Evidence State with score, or exposing internal validation data. Khuê is responsible for JSON/C# binding consistency, correct lock/unlock behavior, and alignment between documented and implemented interactions. | Can explain the intended data flow **local JSON → C# serializable objects → Evidence/Game State → UI**; identify which data and evidence are consumed by each tab; explain why some evidence must remain locked until later stages; and explain the separation between `case_data.json`, `rules.json`, `evidence.json`, and `answer_key.json`. Can also explain why the answer key must never bind to player-facing UI, how confirmed/assisted/unresolved states should appear in the interface, and which implementation behaviors require a running build rather than documentation alone to verify. |

---

## Verification Note

The contribution table records **specific outputs, how those outputs are used, and what each member should be able to explain, calculate, demonstrate, or reproduce**. It does not rely on role titles or Git commit authorship alone.

Phạm Quỳnh Phương's role as Team Lead and Project Integration Owner does not mean that she produced every workstream output. Her primary responsibility is to ensure that the outputs produced by the different owners remain consistent with the same **Problem Direction, Product Direction, investigation logic, terminology, and MVP scope**.
