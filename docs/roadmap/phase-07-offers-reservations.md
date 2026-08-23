# Phase 7: Offers and Reservations

## Goal

Turn reviewed Applications into accepted Offers and capacity-holding Reservations.

## Tickets

55. **Create Accommodation Offers** - Blocked by 40, 51, 53.
56. **Record accepted or declined Offer responses** - Blocked by 55.
57. **Create Reservations from accepted Offers** - Blocked by 41, 56.
58. **Expire and cancel Reservations** - Blocked by 57.
59. **Record Reservation Amount transactions** - Blocked by 57.
60. **Manage Reservations in React Admin** - Blocked by 57-59.
61. **Disrupt Reservations affected by Capacity Blocks** - Blocked by 42, 57.

## Completion

- [ ] Only accepted Offers create capacity commitments.
- [ ] Expiry, cancellation, and disruption never silently relocate an applicant.
