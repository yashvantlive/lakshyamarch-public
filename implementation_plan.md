# Implementation Plan: Headless Architecture API Integration

This plan outlines the next major phase of development for the `lakshyamarch-public` repository. Having successfully completed the UI implementation (209 static routes) and the local image migration, the primary focus is now the Headless Architecture backend integration.

---

## 📅 Proposed Phase-by-Phase Roadmap

### Phase 1: Environment & CORS Configuration (P0)
We need to connect the `lakshyamarch-public` (Frontend) to the `lakshyamarch` (ERP Backend).
1.  **Frontend Config:** Set `NEXT_PUBLIC_ERP_API_URL` inside `.env.local` pointing to the backend ERP (e.g. `http://localhost:3001` or the production ERP domain).
2.  **Backend Config:** Ensure the backend ERP (`D:\lm_admin\lakshyamarch`) has Cross-Origin Resource Sharing (CORS) configured to accept `POST` requests from the frontend domain.

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
*   **API Tests**: Test form submissions and verify standard `200 OK` or `201 Created` responses in the Network tab.
*   **Production Build**: Continual verification through `npm run build`.

### Manual Verification
*   Open the ERP Admin Panel and verify that a test lead submitted from the public `lakshyamarch-public` form successfully appears in the CRM database.
