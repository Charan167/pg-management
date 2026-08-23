# Phase 3: Authentication

## Goal

Build cookie-based JWT authentication in small security-focused steps.

## Tickets

16. **Create staff credentials and password hashing** - Blocked by 14.
17. **Create the login endpoint and token cookies** - Blocked by 16.
18. **Protect one API endpoint with access-token authentication** - Blocked by 17.
19. **Persist hashed refresh sessions** - Blocked by 17.
20. **Rotate refresh tokens** - Blocked by 19.
21. **Detect refresh-token reuse** - Blocked by 20.
22. **Create logout and session revocation** - Blocked by 19.
23. **Restrict credentialed CORS to the admin origin** - Blocked by 17.
24. **Protect state-changing requests from CSRF** - Blocked by 23.
25. **Create the React Admin auth provider** - Blocked by 17, 22.
26. **Protect the admin application** - Blocked by 25.
27. **Cover login, refresh, logout, CORS, and CSRF behavior** - Blocked by 18-24.

## Completion

- [ ] Authentication works locally across separate admin and API origins.
- [ ] Tokens are inaccessible to frontend JavaScript and refresh sessions are revocable.
