# PG Management

The language for administering accommodation from application through tenancy, billing, move-out, and settlement across independently operated PG organizations.

## Business Structure

**Organization**:
An independent PG business whose people and operational records are isolated from other organizations.

**Property**:
A PG accommodation operated by one Organization. It owns Rooms and defines local accommodation and billing policies.

**Staff Membership**:
A System User's authorization to work for an Organization, limited by assigned Properties, Roles, and Permissions.

**Platform Tech Team**:
Privileged platform staff with access across Organization boundaries.

## People And Admission

**Person**:
An Organization-scoped individual who may submit Applications and undertake multiple Tenancies.
_Avoid_: Applicant or Tenant when referring to the person independently of a particular application or stay

**Application**:
One request by a Person for accommodation at one Property. It retains its status history and outcome.

**Sharing-Capacity Preference**:
The applicant's desired room occupancy level, such as private, two-sharing, or three-sharing.
_Avoid_: Preferred bed, Preferred room

**Accommodation Offer**:
The specific Room, sharing arrangement, and rent offered in response to an Application.

**Reservation**:
A time-bounded claim on one place of a specific Room's capacity before check-in.

**Reservation Amount**:
A small payment made to hold a Reservation, refunded or credited on check-in according to policy and normally retained when check-in does not occur.
_Avoid_: Security deposit, Advance rent

## Accommodation

**Room**:
A stable accommodation unit within one Property, with a current capacity measured in places.

**Capacity Place**:
One currently allocatable position within a Room. It is operational capacity, not a historical accommodation identity.
_Avoid_: Bed when discussing retained occupancy history

**Room Assignment**:
The effective-dated Room occupied during part of a Tenancy.

**Capacity Block**:
A temporary restriction that removes one or more places, or an entire Room, from availability without changing configured capacity.

**Vacancy**:
The currently available Room capacity derived from assignments, reservations, and capacity blocks.
_Avoid_: Vacancy record

## Stay

**Tenancy**:
One continuous stay by a Person at one Property, beginning at check-in and continuing across any Room transfers.
_Avoid_: Tenant record

**Direct Tenancy Creation**:
An exceptional administrator-created Tenancy for a walk-in admission, existing offline tenant, or data migration that bypasses the normal Application, Offer, and Reservation path.
_Avoid_: Normal admission

**Rent Term**:
An effective-dated rent amount agreed for a Tenancy, independent of the Room's standard rent.

**Notice**:
A revisable or cancellable declaration that a tenant intends to leave on an expected date.
_Avoid_: Move-out

**Move-out**:
The confirmed physical departure that ends occupancy. Financial settlement may continue afterward.
_Avoid_: Notice

**Final Settlement**:
The explicit resolution of every Charge and Security Deposit balance after Move-out.

## Billing

**Charge**:
An amount owed by a Tenancy, classified as rent or another configured charge type.
_Avoid_: Payment, Receipt

**Payment**:
Money received for a Tenancy and distributed to Charges through Payment Allocations.
_Avoid_: Charge, Receipt

**Payment Allocation**:
The application of all or part of a Payment to a Charge.

**Receipt**:
Evidence acknowledging one Payment transaction, regardless of how that Payment is allocated.
_Avoid_: Monthly charge

**Security Deposit**:
The single tenancy-level deposit balance whose collections, deductions, applications, and refunds are explicitly recorded.
_Avoid_: Reservation amount, Rent payment

**Charge Adjustment**:
A linked credit or debit that corrects a finalized Charge without rewriting it.
