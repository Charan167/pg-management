# Phase 3: Authentication

## Goal

Build cookie-based JWT authentication in small security-focused steps.

## Publication

- Status: Published
- Parent specification issue: [#1](https://github.com/Charan167/pg-management/issues/1)
- Phase issues: [#22](https://github.com/Charan167/pg-management/issues/22), [#23](https://github.com/Charan167/pg-management/issues/23), [#24](https://github.com/Charan167/pg-management/issues/24), [#25](https://github.com/Charan167/pg-management/issues/25), [#26](https://github.com/Charan167/pg-management/issues/26), [#27](https://github.com/Charan167/pg-management/issues/27), [#28](https://github.com/Charan167/pg-management/issues/28), [#29](https://github.com/Charan167/pg-management/issues/29), [#30](https://github.com/Charan167/pg-management/issues/30), [#31](https://github.com/Charan167/pg-management/issues/31), [#32](https://github.com/Charan167/pg-management/issues/32), [#33](https://github.com/Charan167/pg-management/issues/33)

## Tickets

16. **Create staff credentials and password hashing** - [#22](https://github.com/Charan167/pg-management/issues/22) - Blocked by 14.
17. **Create the login endpoint and token cookies** - [#23](https://github.com/Charan167/pg-management/issues/23) - Blocked by 16.
18. **Protect one API endpoint with access-token authentication** - [#24](https://github.com/Charan167/pg-management/issues/24) - Blocked by 17.
19. **Persist hashed refresh sessions** - [#25](https://github.com/Charan167/pg-management/issues/25) - Blocked by 17.
20. **Rotate refresh tokens** - [#26](https://github.com/Charan167/pg-management/issues/26) - Blocked by 19.
21. **Detect refresh-token reuse** - [#27](https://github.com/Charan167/pg-management/issues/27) - Blocked by 20.
22. **Create logout and session revocation** - [#28](https://github.com/Charan167/pg-management/issues/28) - Blocked by 19.
23. **Restrict credentialed CORS to the admin origin** - [#29](https://github.com/Charan167/pg-management/issues/29) - Blocked by 17.
24. **Protect state-changing requests from CSRF** - [#30](https://github.com/Charan167/pg-management/issues/30) - Blocked by 23.
25. **Create the React Admin auth provider** - [#31](https://github.com/Charan167/pg-management/issues/31) - Blocked by 17, 22.
26. **Protect the admin application** - [#32](https://github.com/Charan167/pg-management/issues/32) - Blocked by 25.
27. **Cover login, refresh, logout, CORS, and CSRF behavior** - [#33](https://github.com/Charan167/pg-management/issues/33) - Blocked by 18-24.

## Completion

- [ ] Authentication works locally across separate admin and API origins.
- [ ] Tokens are inaccessible to frontend JavaScript and refresh sessions are revocable.
