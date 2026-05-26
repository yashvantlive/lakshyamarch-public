<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:project-architecture-rules -->
# Project Architecture (CRITICAL FOR ALL AGENTS)

This project uses a STRICT Decoupled Headless Architecture:
1. `lakshyamarch-public` (THIS REPOSITORY): This is ONLY the frontend marketing website. It uses Next.js 16 (Static Site Generation), Tailwind v4, and Framer Motion. 
   - DO NOT write any backend logic (MongoDB, Auth, Admin panels) here.
   - DO NOT add heavy dependencies like `face-api.js` or `mongoose` here.
   - All interactive forms (e.g. Enquiry, Tests) MUST make Cross-Origin (CORS) API calls to the ERP backend using `process.env.NEXT_PUBLIC_ERP_API_URL`.

2. `lakshyamarch` (THE ERP SYSTEM): Located in `D:\lm_admin\lakshyamarch`. That repository handles the backend API, MongoDB, face-recognition attendance, and internal admin/student portals.

Rule of thumb: If it's for public marketing or SEO, it goes here. If it requires a database, login, or admin dashboard, it goes to the ERP.

3. **Image Assets**: All images (faculty, students, campaigns) must be hosted locally inside `lakshyamarch-public/public/images/`. Firebase storage links should NOT be used due to billing account constraints.
<!-- END:project-architecture-rules -->
