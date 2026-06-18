# LakshyaMarch Curriculum Modules - Architectural & Design Specification

This document defines the architecture, directory mapping, and technical standards for the **Curriculum Modules Showcase** on the LakshyaMarch public marketing website. It includes instructions for building pages, standardizing booklet covers, generating vector animations, and Next.js client integration.

---

## 1. System Architecture & Directory Structure

The Curriculum Modules system is a key marketing component of the LakshyaMarch public website. It displays the premium study booklets provided to students enrolled in JEE and NEET courses.

### 1.1 Directory Mapping

All modular study material assets and routes must follow this structure:

```text
lakshyamarch-public/
├── docs/
│   └── curriculum-modules.md           # This specification file (Architectural Documentation)
├── scripts/
│   └── generate-all-lotties.js         # Node.js script to programmatically compile all 6 vector Lottie files
├── public/
│   ├── animations/                     # Lottie JSON background animations directory
│   │   ├── neet-chemistry-booklet.json
│   │   ├── neet-physics-booklet.json
│   │   ├── neet-biology-booklet.json
│   │   ├── jee-chemistry-booklet.json
│   │   ├── jee-physics-booklet.json
│   │   └── jee-maths-booklet.json
│   └── images/
│       └── booklet-covers/             # High-quality booklet cover JPG/PNG images directory
│           ├── neet-chemistry-c11-b1.png
│           ├── neet-physics-c11-b1.png
│           ├── neet-biology-c11-b1.png
│           ├── jee-chemistry-c11-b1.png
│           ├── jee-physics-c11-b1.png
│           └── jee-maths-c11-b1.png
└── src/
    ├── app/
    │   └── study-material/
    │       └── modules/
    │           └── page.tsx            # Dedicated SSG Modules Showcase Page
    └── components/
        └── public/
            ├── ModulesClient.tsx       # Client-side tab state, auto-rotation slideshow, and card grid
            └── LottiePlayer.tsx        # Optimized, SSR-safe wrapper around lottie-web
```

### 1.2 Decoupled Headless Rule
*   **Static Rendering**: The modules page `/study-material/modules` is statically pre-rendered (SSG) for fast performance and search engine indexability.
*   **ERP API Boundary**: All interactive query elements (e.g. requesting sample chapters or admitting packets) must not connect directly to database models or run admin dashboards. They must make Cross-Origin (CORS) API calls to the ERP backend using `process.env.NEXT_PUBLIC_ERP_API_URL`.

---

## 2. Asset Usage & Core Directories

### 2.1 Booklet Cover Images (`/public/images/booklet-covers/`)
These are static, high-fidelity PNG mockups representing the printed books delivered to students.
*   **Hero Showcase**: Displayed floating in the right column of the Hero section, rotating through the 6 variants.
*   **Module Cards**: Centered in the card headers of the NEET and JEE series grids. Each card header has a colored background gradient matching the subject's theme (Red for Chemistry, Blue for Physics, Green for Biology, Gold for Mathematics).

### 2.2 Lottie JSON Animations (`/public/animations/`)
To achieve lightweight, high-performance visual effects without large video file payloads, we programmatically compile 100% vector animations inside `/public/animations/`.
*   **Generation**: The file `scripts/generate-all-lotties.js` contains a Node script that constructs valid Lottie JSON schemas using vector shapes, orbiting keyframes, and particles.
*   **Subject Themes**:
    *   *Chemistry*: Glowing red base glow, glassware flask and beaker outlines, rising gold bubble particles, and orbiting electrons.
    *   *Physics*: Glowing blue base glow, floating magnetic loop lines, sine wave pulses, and orbiting electron shells.
    *   *Biology*: Glowing green base glow, organic leaf outlines, and rotating double-helix DNA strands.
    *   *Mathematics*: Glowing gold base glow, coordinate axes, rotating 3D cubes, and floating math operator symbols.

---

## 3. Page Creation & Tech Stack Detail

The Curriculum Modules showcase page is designed to highlight LakshyaMarch's curriculum booklets using Next.js 16, Tailwind CSS, and Framer Motion.

### 3.1 Page Route Entry (`src/app/study-material/modules/page.tsx`)
This file is a server component that defines metadata (Title, Description, Keywords) for SEO search engines. It imports and renders `PublicNavbar`, `ModulesClient`, and `PublicFooter`.

### 3.2 Showcase Controller (`src/components/public/ModulesClient.tsx`)
This client component manages the core state, tabs, grid cards, and hero slideshow animations:

1.  **State Management**:
    *   `activeTab` (`"neet"` or `"jee"`): Tracks which exam curriculum is selected.
    *   `currentHeroIndex` (0 to 5): Tracks the active booklet slide in the Hero section.
2.  **Auto-Rotating Slideshow**:
    An interval in `useEffect` changes `currentHeroIndex` every 4 seconds. The Hero section updates to render:
    *   A `LottiePlayer` with `key={lottiePath}` to load the subject-appropriate background vector.
    *   A floating cover image wrapped in `AnimatePresence` which applies smooth fade, scale, and rotate transitions during changes.
3.  **Framer Motion Grid Bug Resolution**:
    *   **The Problem**: When switching tabs, Framer Motion's stagger animation would cache existing child components and fail to apply the entrance variant to newly-mounted cards, leaving them hidden (`opacity: 0`).
    *   **The Fix**: We assigned `key={activeTab}` to the `<Stagger>` wrapper:
        ```tsx
        <Stagger key={activeTab} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        ```
        This forces the entire grid to remount and re-trigger entrance transitions perfectly whenever the active tab changes.

### 3.3 Lottie Player (`src/components/public/LottiePlayer.tsx`)
A client component that wraps `lottie-web` dynamically on the client side:
*   **SSR Safety**: Since `lottie-web` references browser window APIs, it is dynamically imported inside a client-side `useEffect` hook to prevent compilation errors during Next.js server-side static rendering.
*   **Resource Cleanup**: Destroys the canvas instance when the component unmounts or when the path changes using `animInstance.destroy()` to prevent memory leaks during slideshow rotation.

---

## 4. Booklet Cover Design Standard

To keep visual consistency, all generated images and animations must adhere to these brand design parameters:

| Design Element | Specification / Brand Token | Hex Code |
| :--- | :--- | :--- |
| **Primary Base** | Dark Academic Navy Blue (`brandBlue[950]` / `ink[950]`) | `#131D45` / `#0F172A` |
| **Accent Red** | Deep Red (`brandRed[800]` / `brandRed[700]`) | `#A91B1B` / `#C62828` |
| **Gold Highlights**| Scholarship Gold (`brandGold[400]`) | `#F4C542` |
| **Header Banner** | Red background, left-aligned white logo, white Sanskrit/Hindi brand name | `#C62828` |
| **Dividing Line** | Smooth white wave curve separating top and bottom sections | `#FFFFFF` |
| **Class Badge** | Left-aligned rectangle: `NEET \| CLASS-XI` or `IIT-JEE \| CLASS-XI` | `#FFFFFF` (bg), `#000000` (text) |
| **Booklet Badge** | Bottom-right red quadrant with booklet number and label | `#A91B1B` |
