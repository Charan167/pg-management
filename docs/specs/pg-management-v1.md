# PG Management V1 Specification

## Problem Statement

PG operators currently manage applications, accommodation, tenant records, rent collection, notices, and vacancies through disconnected manual processes. This creates duplicated data, unclear accommodation availability, inconsistent financial records, and weak traceability when a tenant changes rooms, pays partially, leaves, or has an unsettled deposit.

## Solution

Build an admin-side web application that manages the complete accommodation lifecycle for one or more PG properties operated by isolated organizations:

`Application -> Accommodation Offer -> Reservation -> Check-in -> Tenancy -> Charges and Payments -> Notice -> Move-out -> Final Settlement`

The system will calculate current availability from room capacity and active operational facts, preserve significant business history, and provide explicit financial corrections rather than silently rewriting finalized records.

## User Stories

### Organization and access

1. As an organization owner, I want to manage multiple PG properties, so that I can operate them from one system.
2. As an organization owner, I want each property's rooms and policies isolated from other properties, so that operations remain understandable.
3. As an organization owner, I want to authorize staff for selected properties, so that staff see only the work relevant to them.
4. As an organization owner, I want to assign standard roles such as Organization Owner, Property Manager, and Accountant, so that responsibilities are clear.
5. As an organization owner, I want controlled customization of staff permissions, so that operational needs can be handled without granting unnecessary access.
6. As a platform tech-team member, I want platform-wide access, so that I can operate and support the product across organizations.
7. As a platform tech-team member, I want changes attributable to my account, so that privileged actions remain accountable.
8. As an organization, I want records isolated from unrelated organizations, so that one PG business cannot discover another business's people or operations.

### People and identity

9. As an administrator, I want to create an organization-scoped Person, so that an individual can be linked to multiple applications and tenancies within my organization.
10. As an administrator, I want to recognize likely duplicate Persons using a verified government identifier, so that repeated applications do not create unnecessary duplicate identities.
11. As an administrator, I want to confirm or reject a likely duplicate match, so that a mistyped or shared identifier does not merge the wrong people.
12. As an administrator, I want to store one current identity document as Aadhaar or passport, so that the person's identity evidence is clear.
13. As an administrator, I want to replace the current identity document while retaining the prior document as historical evidence, so that earlier records remain explainable.
14. As an administrator, I want to record identity-document verification status, so that invalid evidence remains distinguishable from verified evidence.
15. As an administrator, I want to maintain one current emergency contact for a Person, so that staff can reach the designated contact.
16. As an administrator, I want to update contact details without creating unnecessary historical business events, so that ordinary profile maintenance stays simple.

### Applications and offers

17. As an administrator, I want to create an Application for a Person and Property, so that a new accommodation request is recorded.
18. As an administrator, I want to retain multiple Applications for the same Person, so that reapplications and outcomes remain visible.
19. As an administrator, I want to record applicant details such as contact information, occupation, company or college, joining date, and financial expectations, so that the request can be evaluated.
20. As an administrator, I want to record only the applicant's sharing-capacity preference, so that allocation is based on availability rather than a promised room or bed.
21. As an administrator, I want to review an Application without changing its history, so that the process remains auditable.
22. As an administrator, I want to record status transitions such as submitted, under review, eligible, waitlisted, withdrawn, rejected, or declined, so that the application's outcome is understandable.
23. As an administrator, I want to offer a specific available room, sharing arrangement, and rent, so that the applicant can be evaluated against a concrete accommodation option.
24. As an administrator, I want to record whether the applicant accepted or declined an offer and when, so that an admin-side workflow can represent offline communication.
25. As an administrator, I want to create a Reservation only from an accepted Offer, so that unconfirmed offers do not consume capacity.
26. As an administrator, I want to create a directly administered tenancy for a walk-in, offline tenant, or data migration, so that real operational exceptions can be represented.
27. As an administrator, I want every direct tenancy creation to include a reason, note, actor, and timestamp, so that bypassing normal admission is explicit.

### Rooms and capacity

28. As an administrator, I want to create and retire Rooms within a Property, so that the accommodation inventory reflects the real property.
29. As an administrator, I want to set a Room's current capacity, so that shared and private rooms can be managed uniformly.
30. As an administrator, I want to add or remove capacity, so that room configuration stays current.
31. As an administrator, I want capacity reduction blocked when it would conflict with active occupancy, valid reservations, or applicable operational blocks, so that nobody is silently displaced.
32. As an administrator, I want room numbers reusable only through a new Room identity after retirement, so that historical room references remain unambiguous.
33. As an administrator, I want to block one capacity place or an entire Room temporarily, so that cleaning, inspection, repair, and readiness work are reflected operationally.
34. As an administrator, I want a capacity block to preserve configured capacity, so that temporary unavailability is not confused with a permanent room change.
35. As an administrator, I want a reservation affected by a capacity block marked disrupted, so that I can relocate or cancel it deliberately.
36. As an administrator, I want current vacancy calculated from room capacity, active assignments, valid reservations, and capacity blocks, so that the vacancy screen does not contradict operations.
37. As an administrator, I want future availability from notices shown separately from current vacancy, so that expected capacity is not mistaken for immediately usable capacity.

### Reservations and check-in

38. As an administrator, I want a Reservation to claim one place in a specific Room, so that shared and private rooms use one consistent capacity model.
39. As an administrator, I want a Reservation to have a validity period and deadline, so that uncompleted admissions release capacity.
40. As an administrator, I want a Reservation depending on an expected move-out marked at risk, so that I know the allocation is not guaranteed.
41. As an administrator, I want reservation cancellation and expiry to follow the Property's policy, so that reservation amounts are handled consistently.
42. As an administrator, I want to record whether the reservation amount is refunded or credited toward the Security Deposit after check-in, so that the two financial concepts remain distinct.
43. As an administrator, I want to retain the reservation amount when the applicant fails to check in according to policy, so that the business rule is represented.
44. As an administrator, I want to check in an applicant before the full Security Deposit is paid when necessary, so that operational flexibility is preserved.
45. As an administrator, I want the required deposit, received amount, balance due, due date, and decision recorded at check-in, so that the outstanding obligation is visible.

### Tenancies and room transfers

46. As an administrator, I want check-in to create a Tenancy, so that approval and reservation are not mistaken for an actual stay.
47. As an administrator, I want a Tenancy to represent one continuous stay at one Property, so that a room transfer does not create a false second stay.
48. As an administrator, I want a Tenancy to retain effective-dated Room Assignments, so that room history is preserved.
49. As an administrator, I want to transfer a tenant to another Room without ending the Tenancy, so that continuity is maintained.
50. As an administrator, I want rent terms to change independently from Room Assignments, so that negotiated rent and room changes are modeled accurately.
51. As an administrator, I want agreed rent to remain stable when standard room rent changes, so that existing agreements are not rewritten.
52. As an administrator, I want a Person to have multiple Tenancies over time, so that returning tenants have separate stays.
53. As an administrator, I want overlapping active Tenancies to trigger a warning and require explicit confirmation, so that legitimate overlaps remain possible without hiding duplicates.

### Billing, charges, and receipts

54. As a property owner, I want to configure calendar-month or joining-date billing, so that each Property can follow its own billing cycle.
55. As a property owner, I want to configure a proration policy, so that partial months are calculated consistently.
56. As an administrator, I want rent calculated using effective occupancy dates and rent terms, so that transfers and partial periods produce explainable charges.
57. As an administrator, I want recurring rent charges generated as drafts, so that I can review unusual transfers, concessions, and move-outs before they become payable.
58. As an administrator, I want to adjust draft charges with a reason, so that explicit agreements can be represented without changing the underlying rent terms.
59. As an administrator, I want finalized charges immutable, so that the original financial record remains trustworthy.
60. As an administrator, I want linked credit or debit adjustments for finalized-charge corrections, so that corrections preserve original and final amounts.
61. As a property owner, I want configurable charge types such as rent, damage, utilities, food, late fee, and overstay penalty, so that the ledger supports real property operations.
62. As an administrator, I want overstay rent and optional overstay penalties represented as separate charges, so that penalties do not distort rent history.
63. As an administrator, I want payments allocated across charges, so that partial, advance, and combined payments are represented.
64. As a property owner, I want a charge-type allocation priority, so that automatic allocation follows business policy.
65. As an administrator, I want to override a payment allocation with a reason, so that explicit agreements can be honored.
66. As an administrator, I want one Receipt for each Payment, so that the receipt proves the money received rather than pretending a payment split is multiple collections.
67. As a property owner, I want a property-specific receipt sequence that never reuses numbers, so that receipts are independently traceable.
68. As an administrator, I want payment reversals and refunds linked to original payments, so that corrections do not erase financial history.

### Notices, move-out, and settlement

69. As an administrator, I want to record a Notice separately from actual Move-out, so that intended and completed departure are not conflated.
70. As an administrator, I want the expected move-out date calculated from tenancy-specific or property-default notice periods, so that normal notices require less manual calculation.
71. As an administrator, I want to override a calculated expected date with a reason, so that negotiated exceptions are recorded.
72. As an administrator, I want a tenant to cancel or revise a Notice, so that future availability remains accurate.
73. As an administrator, I want rent to continue during an overstay, so that occupancy and billing remain aligned.
74. As an administrator, I want an optional overstay penalty policy per Property, so that the owner can charge or waive penalties explicitly.
75. As an administrator, I want actual Move-out to release physical occupancy immediately, so that the place can proceed toward readiness.
76. As an administrator, I want a moved-out tenancy to remain settlement-pending, so that unresolved financial work is not discarded.
77. As an administrator, I want to record deposit deductions, applications to charges, refunds, waivers, and write-offs explicitly, so that final settlement is explainable.
78. As an administrator, I want a Tenancy closed only when every charge and deposit balance is explicitly resolved, so that no unexplained money remains.
79. As an administrator, I want closed tenancies retained in history, so that “remove tenant” does not delete records.

### Audit and history

80. As an organization owner, I want significant changes to Applications, Reservations, Room Assignments, Rent Terms, Notices, Charges, Payments, Deposits, and Move-outs audited, so that business history is accountable.
81. As a platform operator, I want changes made by the Tech Team attributed to an actor, timestamp, previous value, new value, and reason where relevant, so that privileged changes are reviewable.
82. As an administrator, I want ordinary profile corrections to retain current values without unnecessary business-event history, so that the model remains focused on meaningful events.

## Implementation Decisions

- Build the product as an admin-side application first. Applicant acceptance is recorded by staff based on offline communication.
- Use the domain vocabulary in `CONTEXT.md` as the authoritative language.
- Preserve the conceptual distinction among Organization, Property, Room, Capacity Place, Person, Application, Offer, Reservation, Tenancy, Charge, Payment, Receipt, Reservation Amount, and Security Deposit.
- Treat beds as operational capacity places rather than historical entities. Historical accommodation records retain Room only.
- Model Room Assignments and Rent Terms as independently effective-dated concepts within a Tenancy.
- Model Vacancy as derived information rather than an editable business record.
- Support both the normal admission path and explicitly audited Direct Tenancy Creation.
- Keep Reservation Amount separate from Security Deposit. On check-in, the amount is refunded or credited according to policy and override.
- Allow property policies for billing cycle, proration, notice period, overstay, cancellation, reservation amount, payment allocation priority, and charge types.
- Generate recurring rent charges as drafts, then finalize them after administrator review.
- Keep finalized charges, payments, and receipts immutable; correct them with linked transactions.
- Use a many-to-many conceptual relationship between Payments and Charges through Payment Allocations.
- Use a one-payment-to-one-receipt conceptual relationship with property-specific, never-reused receipt numbers.
- Permit multiple organizations with isolated records and a separate platform-wide Tech Team role.
- Use standard organization roles with controlled customization and property-level access.
- Preserve significant business-event audit history; do not audit ordinary data views.
- Do not define physical database schema, technology choices, API paths, or UI component boundaries in this domain specification.

## Testing Decisions

- The application-level testing seam was explicitly confirmed before ticket decomposition.
- Test external business behavior through application-level use cases at the highest practical seam.
- Test the complete lifecycle: Application, Offer, Reservation, Check-in, Tenancy, Charges, Payments, Notice, Move-out, and Settlement.
- Test capacity invariants through workflows: capacity reduction conflicts, reservation disruption, future at-risk reservations, readiness blocks, room transfers, and calculated vacancy.
- Test financial invariants through workflows: draft-to-finalized charges, linked charge adjustments, payment allocation overrides, immutable receipts, deposit applications, refunds, and settlement closure.
- Test organization isolation and role/property permissions through application-level authorization behavior.
- Test direct tenancy creation with mandatory reason, note, actor, timestamp, and required initial tenancy facts.
- Add a small number of browser-level tests for the administrator's critical lifecycle once a UI exists.
- Do not assert private implementation details, internal classes, table names, or query shapes.
- No existing automated-test prior art exists yet in this repository; future tests should establish the application-level seam first.

## Out of Scope

- Tenant-facing portal or in-app applicant communication
- Visitor management, complaints, maintenance workflows, meals, attendance, payroll, and inventory
- Property ownership transfer between organizations
- Bed-level historical tracking
- Automatic eviction, relocation, cancellation, or refund when conflicts occur
- Silent edits or deletion of finalized financial records
- Database schema, migrations, indexes, ORM selection, deployment, authentication provider, and other persistence or infrastructure decisions

## Further Notes

- A future implementation should make disruption and at-risk states visible to administrators rather than hiding them behind calculated availability.
- A Property's standard rent is guidance for future offers; accepted offers and agreed Rent Terms preserve the actual negotiated amount.
- A tenancy may become physically inactive before it becomes financially closed.
- GitHub Issues is the intended tracker. Publication requires authenticated Issues API access; repository SSH access alone does not authorize issue creation.
