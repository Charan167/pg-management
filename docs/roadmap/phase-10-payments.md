# Phase 10: Payments

## Goal

Collect money, allocate it transparently, issue Receipts, and correct records without rewriting history.

## Tickets

80. **Record one Payment** - Blocked by 75.
81. **Allocate a Payment to one Charge** - Blocked by 80.
82. **Allocate one Payment across multiple Charges** - Blocked by 81.
83. **Configure automatic allocation priority** - Blocked by 77, 82.
84. **Override a Payment Allocation with a reason** - Blocked by 82.
85. **Generate never-reused Property Receipt numbers** - Blocked by 29, 80.
86. **Generate and print one Receipt per Payment** - Blocked by 85.
87. **Create linked adjustments for finalized Charges** - Blocked by 75.
88. **Reverse or refund Payments with linked transactions** - Blocked by 82, 86.
89. **Display the tenant financial ledger** - Blocked by 79, 82, 87, 88.

## Completion

- [ ] Partial, combined, and advance Payments remain explainable.
- [ ] Financial corrections follow the immutable-record ADR.
