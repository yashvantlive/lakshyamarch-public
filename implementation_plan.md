# Implementation Plan: Headless Architecture API Integration & FAANG Audit

This plan outlines the next major phase of development for the `lakshyamarch-public` repository. Having successfully completed the UI implementation (209 static routes) and the local image migration, the primary focus is now the Headless Architecture backend integration, incorporating the recent FAANG-level API Audit findings.

---

## 🚨 FAANG-Level API Audit Findings

After a thorough audit of `lakshyamarch-public` (Frontend) and `lakshyamarch` (ERP Backend), we verified that all necessary APIs exist, but we found critical integration blockers:

1. **Frontend Bug (Live Rankings API)**
   - `LiveRankings.tsx` is directly fetching `/api/tests` instead of using the `erpApiPath` wrapper. This will cause 404 errors in production on the public site.
2. **Backend Bug (Missing CORS Headers)**
   - Three major public-facing API routes in the ERP backend lack Cross-Origin Resource Sharing (CORS) preflight handling:
     - `api/testimonials`
     - `api/test-enquiries`
     - `api/admissions`
   - Browsers will block these form submissions via a same-origin policy violation unless `OPTIONS` method handlers and `withCors` wrappers are added.

---

## 📅 Proposed Phase-by-Phase Roadmap

### Phase 1: Environment & CORS Configuration (P0) - **URGENT**
We need to connect the `lakshyamarch-public` (Frontend) to the `lakshyamarch` (ERP Backend) securely.
1.  **Frontend Config:** Ensure `NEXT_PUBLIC_ERP_API_URL` inside `.env.local` points to the backend ERP.
2.  **Frontend Fix (`LiveRankings.tsx`):**
    - Import `erpApiPath` from `@/lib/erpApi`.
    - Fix the `fetch` calls to route through `erpApiPath("/api/tests?public=true")`.
3.  **Backend Fix (CORS Injection):** Add `withCors` and `corsPreflightResponse` (for `OPTIONS` requests) to the following ERP routes:
    - `D:\lm_admin\lakshyamarch\src\app\api\testimonials\route.ts`
    - `D:\lm_admin\lakshyamarch\src\app\api\test-enquiries\route.ts`
    - `D:\lm_admin\lakshyamarch\src\app\api\admissions\route.ts`

### Phase 2: Form API Wire-up (P1)
We will modify the frontend React components to send data payloads to the ERP.
1.  **`AdmissionEnquiryForm`**: Wire up the submit handler to `POST /api/admissions`.
2.  **`QuickEnquiryForm`**: Wire up the submit handler to capture general leads.
3.  **`FreeTestEnquiryForm`**: Wire up the submit handler to `POST /api/test-enquiries`.

### Phase 3: Missing Teacher Images Finalization (P2)
*   Pending completion of the 5 missing teacher images:
    *   Shiv Kumar (Chemistry)
    *   Chandan Kumar (Physics)
    *   Aditya Kumar (Chemistry)
    *   Nitish Sharma (Biology)
    *   Rahul Kumar (Biology)
*   Once provided in the photo directory, copy them into `public/images/teachers/` and update `siteData.ts`.

---

## ✅ Completed Milestones
*   **Static Pages Complete**: All 209 pages including SEO localized location pages, dynamic blogs, and success stories are generating flawlessly.
*   **Firebase Dependency Removed**: All student and campaign images have been localized to avoid Firebase 402 Billing constraints.
*   **Sliders Filtered**: JEE and NEET sliders now strictly filter by year (2026 and 2025 respectively).
*   **Clean Public Directory**: Removed unused default Next.js SVGs.
*   **"Think NEET" Campaign**: Blog and image assets integrated successfully.

---

## 📈 Verification Plan

### Automated Verification
*   **API Tests**: Test form submissions and verify standard `200 OK` or `201 Created` responses in the Network tab, ensuring no CORS failures occur.
*   **Production Build**: Continual verification through `npm run build`.

### Manual Verification
*   Open the ERP Admin Panel and verify that a test lead submitted from the public `lakshyamarch-public` form successfully appears in the CRM database.
*   Verify the Live Leaderboard loads data dynamically without throwing 404s.
