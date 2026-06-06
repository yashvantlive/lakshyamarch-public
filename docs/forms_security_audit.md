# LakshyaMarch Public Website: Forms & Security Audit

This document outlines the architecture, current state, and required action items for all user-facing forms on the `lakshyamarch-public-main` website. It is designed to help any developer quickly understand the flow of data and fix pending security/integration issues.

---

## 🏗️ Architecture Overview

The project uses a **Decoupled Architecture**:
- **Frontend:** Next.js (`lakshyamarch-public-main`)
- **Backend/ERP:** FastAPI / Node API (`lakshyamarch` ERP repository)
- **Database:** MongoDB

### Why multiple forms and APIs?
Having multiple forms and separate API endpoints is a **Best Practice (Separation of Concerns)**.
1. **Clean UI & Logic:** Each form (e.g., Admission vs. Testimonial) requires different fields. Keeping them as separate components prevents bloated, complex code.
2. **Structured Database:** Separate API endpoints (`/api/admissions`, `/api/test-enquiries`) ensure data is routed to the correct MongoDB collections smoothly.
3. **Tracking:** Allows tagging the source (e.g., `source: "admission_page"`) to help the admin team identify where the lead came from.

---

## 📋 Form Inventory & Status

There are currently **5 forms** on the website. Below is their location, data flow, and **Cloudflare Turnstile (Bot Protection)** status.

### 1. Main Enquiry Form
- **File:** `src/components/public/EnquiryForm.tsx`
- **API Endpoint:** `fetch("/api/admissions")`
- **Database:** MongoDB (`WebsiteEnquiry` collection)
- **Cloudflare Status:** ✅ **Working Perfectly**. Component is imported, logic is implemented, and `<Turnstile />` renders correctly on the UI.

### 2. Scholarship / Test Enquiry Form
- **File:** `src/components/public/TestEnquiryForm.tsx`
- **API Endpoint:** `fetch("/api/test-enquiries")`
- **Database:** MongoDB (Test Enquiries collection)
- **Cloudflare Status:** ✅ **Working Perfectly**.

### 3. Admission Enquiry Form
- **File:** `src/components/public/AdmissionEnquiryForm.tsx`
- **API Endpoint:** `fetch("/api/admissions")` (Tagged with `source: "admission_page"`)
- **Database:** MongoDB (`WebsiteEnquiry` collection)
- **Cloudflare Status:** ❌ **BROKEN**. 
  - *Issue:* The code imports Turnstile and has a validation check `if (!token) { setError("Please complete the security check."); }`. However, the `<Turnstile />` component is **NOT rendered in the JSX return**. 
  - *Impact:* Users cannot submit this form because they can never generate a token, constantly receiving the security check error.

### 4. Testimonials Form
- **File:** `src/app/testimonials/TestimonialsClient.tsx`
- **API Endpoint:** `fetch("/api/testimonials")`
- **Database:** MongoDB (Testimonials/Reviews collection)
- **Cloudflare Status:** ⚠️ **MISSING**. 
  - *Issue:* No bot protection is implemented.
  - *Impact:* Highly vulnerable to spam bots flooding the database with fake reviews.

### 5. Delete Account Form
- **File:** `src/app/delete-account/page.tsx`
- **API Endpoint:** None. (Uses `mailto:` to open the user's default email client).
- **Database:** Does not save to MongoDB.
- **Cloudflare Status:** ℹ️ **Not Required**. Since it does not make a server-side request, bots cannot abuse the database through this form.

---

## 🛡️ Why Cloudflare Turnstile is Mandatory

Any public-facing form connected to a database **must** have bot protection (like Turnstile or reCAPTCHA). Without it:
- **Spam Flooding:** Bots can submit thousands of fake entries per minute, exhausting your MongoDB storage.
- **Cost Spikes:** If form submissions trigger automated emails/SMS, spam will exponentially increase your server and API costs.
- **Data Integrity:** Real leads get buried under junk data, ruining analytics and admin workflows.

---

## 🚀 Developer Action Items (To-Do List)

Developers should prioritize the following fixes immediately:

- [ ] **Fix Admission Form (`AdmissionEnquiryForm.tsx`)**
  - Locate the `return` JSX block.
  - Render the `<Turnstile />` component just above the submit button.
  - Use the environment variable: `siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}`.

- [ ] **Secure Testimonials Form (`TestimonialsClient.tsx`)**
  - Import the Turnstile component.
  - Add a `token` state.
  - Prevent form submission if the token is empty.
  - Pass the token to the `/api/testimonials` API payload so the backend can verify it.

- [ ] **Do Not Merge Forms into One**
  - Keep the component structure as is. Do not attempt to merge them into a single generic form, as it will break the current decoupled architecture.
