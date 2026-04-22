# Upgraded Implementation Plan: Migrating Public Pages to `lakshyamarch-public`

## Background Context
The goal is to cleanly migrate all public-facing pages (Home, About, Admission, Blog, Contact, Programs, Results, Scholarships, Free Tests, Testimonials, etc.) from the monolithic `lakshyamarch` ERP project into the newly initialized `lakshyamarch-public` Next.js 15 repository. The new repository is currently a fresh setup with Tailwind CSS v4.

## User Review Required

> [!IMPORTANT]
> Please review this upgraded implementation plan. Before I start copying over the components and pages from `lakshyamarch`, I need your feedback on the Open Questions to ensure the new public site is exactly what you want.

## Open Questions

> [!WARNING]
> Please answer these questions so I have absolute clarity before execution:

1. **Design & Styling:** I noticed `lakshyamarch-public` has Tailwind CSS v4 installed. Do you want me to keep using Tailwind CSS (copying the old styles 1:1), or do you want me to rebuild the UI using **Vanilla CSS** and highly modern "WOW" aesthetics (animations, glassmorphism, etc.) as per my core design principles?
2. **Component Migration Strategy:** Should I copy the existing `src/components/public` components exactly as they are from the old project, or would you like me to redesign them from scratch to make them look more premium?
3. **API Integration URL:** The public site will need to submit forms (Enquiries, Free Tests) to the ERP backend. Do you already have a hosted URL for the ERP API (e.g., `https://admin.lakshyamarch.com`), or should I set up `.env.local` to point to `http://localhost:3000` for now?
4. **Assets and Media:** Are there any specific images, logos, or brand colors that need to be updated during this migration, or should I simply copy over the entire `public/` folder from the old repository?

## Proposed Changes

### 1. Initial Setup & Configuration
- **Environment Variables:** Create a `.env.local` file to store the API base URL (pointing to the ERP project).
- **Public Assets:** Copy all images, icons, and fonts from `lakshyamarch/public` to `lakshyamarch-public/public`.

### 2. Static Data & Utilities
#### [NEW] `src/lib/siteData.ts`
- Copy site metadata, phone numbers, and addresses.
#### [NEW] `src/lib/blogData.ts` & `src/lib/stories.ts`
- Copy the static data needed for the blog and success stories.

### 3. Core Components Migration
#### [NEW] `src/components/layout/Navbar.tsx`
#### [NEW] `src/components/layout/Footer.tsx`
- Build or migrate the main navigation components.

#### [NEW] `src/components/home/...`
- Migrate the Hero Section, Featured Programs, and Testimonial Carousels.

#### [NEW] `src/components/forms/...`
- Migrate `AdmissionEnquiryForm` and `TestEnquiryForm`.
- Refactor form submission logic to use standard `fetch()` calls to the ERP API (`process.env.NEXT_PUBLIC_ERP_API_URL/api/...`) instead of direct MongoDB connections.

### 4. Page Routing (Public Pages)
We will reconstruct the following routes in `lakshyamarch-public/src/app/`:
- `(home)/page.tsx`
- `about/page.tsx`
- `admission/page.tsx`
- `programs/page.tsx`
- `scholarship/page.tsx`
- `free-test/page.tsx`
- `results/page.tsx`
- `testimonials/page.tsx`
- `contact/page.tsx`
- `blog/page.tsx` and `blog/[slug]/page.tsx`

### 5. SEO & Metadata
#### [NEW] `src/app/sitemap.ts`
#### [NEW] `src/app/robots.ts`
- Ensure the new site is fully optimized for search engines with standard meta tags and OpenGraph data.

## Verification Plan

### Automated Tests
- Run `npm run build` to ensure the new Next.js project compiles without any typescript or linting errors.

### Manual Verification
- Start the public site locally (`npm run dev` on port 3001) and the ERP site locally (`npm run dev` on port 3000).
- Navigate through all public pages to confirm the design looks premium.
- Submit a dummy admission enquiry on the public site and verify that the data is successfully received by the ERP backend and stored in MongoDB.
