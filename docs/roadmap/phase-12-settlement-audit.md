# Phase 12: Settlement and Audit

## Goal

Resolve Security Deposit balances, close Tenancies safely, retain history, and expose meaningful audit events.

## Tickets

99. **Collect Security Deposit transactions** - Blocked by 64.
100. **Deduct Security Deposit amounts with reasons** - Blocked by 78, 99.
101. **Apply Security Deposit to Charges explicitly** - Blocked by 82, 99.
102. **Refund the Security Deposit balance** - Blocked by 88, 99.
103. **Close a fully settled Tenancy** - Blocked by 97, 100-102.
104. **Search closed Tenancies and retained history** - Blocked by 103.
105. **Audit significant operational changes** - Blocked by 66, 67, 92, 97.
106. **Audit significant financial changes** - Blocked by 87, 88, 100-102.
107. **Expose filterable audit history in React Admin** - Blocked by 105, 106.

## Completion

- [ ] No Tenancy closes with unexplained Charge or deposit balances.
- [ ] Significant changes identify actor, time, previous value, new value, and reason where relevant.
