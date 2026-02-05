# Development Strategy - Feb 5

## 1. Current Architecture Analysis

The application is a **Vue 3 + Vite** SPA using **Tailwind CSS** for styling. It uses **Vue Router** for navigation and currently relies on **hardcoded static data** within components.

### Core Structure:
- **Layouts**: `dashboard.vue` provides the shell (sidebar, header) for authenticated views.
- **Public Pages**: 
  - `/` (Landing)
  - `/login` (Auth)
  - `/collect/:slug` (Public Submission)
  - `/displayboard` (Public Wall of Love)
- **Admin Pages**:
  - `/dashboard` (Overview)
  - `/campaign` (Campaign Management)
  - `/testimonial/:id` (Detail View)
  - `/dashboard/embed` (Widget Config)

### Gaps & Missing Components:
1.  **State Management**: Currently missing. Data is isolated in components. Needs **Pinia** for global state (User, Campaigns, Testimonials).
2.  **Data Layer**: No abstraction for data fetching. Hardcoded arrays need to be replaced with a Service Layer.
3.  **Missing Pages/Flows**:
    - **Campaign Edit**: `/campaign/:id/edit` (Can reuse `new.vue` logic).
    - **Testimonials List**: A dedicated table view for managing all testimonials (bulk approve/reject).
    - **Submission Success**: A "Thank You" state after a user submits a testimonial on `/collect`.
    - **404 Page**: For invalid slugs or IDs.

---

## 2. MVP Data Structure (Local DB / Mock Level)

To enable a "functioning" MVP, we need the following entities. We will initially model these as TypeScript interfaces and serve them via a Mock Service, which can later be replaced by a real Database (e.g., Supabase, Firebase).

### A. User / Workspace
- **id**: string (UUID)
- **email**: string
- **name**: string
- **plan**: 'free' | 'pro'

### B. Campaign
*Defines a collection bucket.*
- **id**: string (UUID)
- **user_id**: string (FK)
- **name**: string (Internal name)
- **slug**: string (Unique public URL identifier)
- **header_title**: string (Public facing question)
- **logo_url**: string (Optional)
- **allowed_types**: ['text' | 'video']
- **status**: 'active' | 'paused' | 'archived'
- **created_at**: timestamp

### C. Testimonial
*The core content unit.*
- **id**: string (UUID)
- **campaign_id**: string (FK)
- **customer_name**: string
- **customer_email**: string
- **customer_avatar**: string (URL)
- **customer_info**: string (Job Title / Company)
- **rating**: number (1-5)
- **content**: string (Text body)
- **video_url**: string (URL, optional)
- **status**: 'pending' | 'approved' | 'rejected'
- **created_at**: timestamp

---

## 3. Development Sequence

We will execute this in **three phases** to ensure a smooth transition from static to dynamic.

### Phase 1: Interactive Frontend (The "Wiring")
*Goal: Make the UI feel real using a centralized store, even if data isn't persistent yet.*

1.  **Setup Pinia**: Initialize the store.
2.  **Create Service Layer**: `src/services/mockData.ts` to hold the "Database".
3.  **Refactor Campaign Flow**:
    - Update `campaign/index.vue` to fetch from Store.
    - Connect `campaign/new.vue` to dispatch a `createCampaign` action.
4.  **Refactor Testimonial Flow**:
    - Connect `/displayboard` to show only `status: 'approved'` testimonials.
    - Connect `/testimonial/:id` to fetch pending items and allow "Approve/Reject" mutations.
    - Create a **Testimonial List** view in the dashboard (likely under Analytics or a new tab).

### Phase 2: The "Brain" (Logic & Validation)
*Goal: Ensure data integrity and correct user flows.*

1.  **Submission Logic**:
    - Make `/collect/:slug` functional. Validate form, push new testimonial to Store with `status: 'pending'`.
    - Add "Success/Thank You" state to the collection page.
2.  **Filtering & Routing**:
    - Ensure `/displayboard` only shows testimonials for the *selected* active campaign (or all approved).
    - Fix Back Button behavior (breadcrumbs navigation).

### Phase 3: "Hard" Backend (Persistence)
*Goal: Make data survive a refresh. (Can be done later or now depending on "Local DB" definition).*

1.  **Integration**:
    - Replace `mockData.ts` with real API calls (e.g., Supabase Client).
    - Since the Service Layer structure is already in place from Phase 1, this switch is seamless.
    - Implement real Video/Image upload (or continue using placeholders for MVP).

---

## 4. Frontend Audit & Refinement Phase (Phase 0)

Before connecting the "wiring" (Phase 1), we must ensure the frontend pages are feature-complete for an MVP.

### Page Audit

#### 1. Landing Page (`/`)
- **Purpose**: Sales page to convert visitors to users.
- **Current State**: Static marketing content.
- **Missing**:
  - Functional "Get Started" buttons linking to `/login`.
  - Responsive check (mobile menu might be visual-only).

#### 2. Login / Auth (`/login`)
- **Purpose**: Entry point for app access.
- **Current State**: Likely static form.
- **Missing**:
  - specific "Sign Up" vs "Login" toggle or flow.
  - Form validation (email format).
  - Mock Auth logic (redirect to `/dashboard` on click).

#### 3. Dashboard Overview (`/dashboard`)
- **Purpose**: High-level stats and recent activity.
- **Current State**: Static stats cards and activity list.
- **Missing**:
  - "Quick Actions" (e.g., "Create Campaign" shortcut).
  - Empty State (what if there are 0 testimonials?).

#### 4. Campaign List (`/campaign`)
- **Purpose**: Manage multiple collection buckets.
- **Current State**: Static list of 3 mock campaigns.
- **Missing**:
  - "Edit" functionality (clicking a card currently just goes nowhere or stays static).
  - "Delete/Archive" action for campaigns.
  - Visual indicator of which campaign is "live".

#### 5. New Campaign (`/campaign/new`)
- **Purpose**: Configuration wizard for a new collection page.
- **Current State**: Static form with "Save & Publish" button.
- **Missing**:
  - Input validation (e.g., Slug uniqueness check, required fields).
  - "Cancel" button to go back.
  - Conditional rendering (e.g., Preview of the logo upload).

#### 6. Collect Page (`/collect/:slug`)
- **Purpose**: The public-facing form for customers.
- **Current State**: (Need to verify if it's a full form or placeholder).
- **Missing**:
  - **The Core Function**: Form submission logic.
  - "Thank You" success state/modal.
  - Error handling (failed upload).
  - Video recording integration (or file upload fallback).

#### 7. Testimonial Detail (`/testimonial/:id`)
- **Purpose**: Review individual feedback.
- **Current State**: Static mock data.
- **Missing**:
  - "Edit" capability (e.g., fix a typo in the customer's name).
  - "Download" button for video/images.
  - Status toggle (Pending -> Approved -> Rejected).

#### 8. Display Board (`/displayboard`)
- **Purpose**: The embedded Wall of Love.
- **Current State**: Static "Preview" mode.
- **Missing**:
  - **Filtering**: Needs to show *only* approved testimonials.
  - **Customization**: Needs to reflect the branding of the specific campaign (Logo, Colors).
  - **Embed Code Generator**: A modal/page to copy the iframe info.

---

## 5. Development Sequence

We will execute this in **three phases** to ensure a smooth transition from static to dynamic.

### Phase 0: Frontend Logic & Interaction Polish
*Goal: Make the UI responsive and "clickable" before hooking up data.*

1.  **Navigation Fixes**:
    - Ensure all Back buttons work.
    - link "Get Started" to Login.
    - Link Dashboard cards to their respective pages.
2.  **Form States**:
    - Add `v-model` to all inputs in `new.vue` and `login.vue`.
    - Create a "Success" view for `/collect` (switch content based on `isSubmitted` state).
    - Add "Empty States" to lists (e.g., "No Campaigns yet. Create one!").
3.  **Interaction Design**:
    - Add hover states to interactive rows.
    - Implement simple "Toast" notifications (e.g., "Settings Saved").

### Phase 1: Interactive Frontend (The "Wiring")
*Goal: Make the UI feel real using a centralized store, even if data isn't persistent yet.*

1.  **Setup Pinia**: Initialize the store.
2.  **Create Service Layer**: `src/services/mockData.ts` to hold the "Database".
3.  **Refactor Campaign Flow**:
    - Update `campaign/index.vue` to fetch from Store.
    - Connect `campaign/new.vue` to dispatch a `createCampaign` action.
4.  **Refactor Testimonial Flow**:
    - Connect `/displayboard` to show only `status: 'approved'` testimonials.
    - Connect `/testimonial/:id` to fetch pending items and allow "Approve/Reject" mutations.
    - Create a **Testimonial List** view in the dashboard (likely under Analytics or a new tab).

### Phase 2: The "Brain" (Logic & Validation)
*Goal: Ensure data integrity and correct user flows.*

1.  **Submission Logic**:
    - Make `/collect/:slug` functional. Validate form, push new testimonial to Store with `status: 'pending'`.
    - Add "Success/Thank You" state to the collection page.
2.  **Filtering & Routing**:
    - Ensure `/displayboard` only shows testimonials for the *selected* active campaign (or all approved).
    - Fix Back Button behavior (breadcrumbs navigation).

### Phase 3: "Hard" Backend (Persistence)
*Goal: Make data survive a refresh. (Can be done later or now depending on "Local DB" definition).*

1.  **Integration**:
    - Replace `mockData.ts` with real API calls (e.g., Supabase Client).
    - Since the Service Layer structure is already in place from Phase 1, this switch is seamless.
    - Implement real Video/Image upload (or continue using placeholders for MVP).

---

## 6. Next Steps (Immediate Action Items)

1.  **Phase 0 Execute**: Run through the Frontend Audit checklist and fix interactivity.
2.  **Refactor Navigation**: Ensure all "Back" buttons and breadcrumbs work efficiently.
3.  **Pinia Setup**: scaffolding the `useCampaigns` and `useTestimonials` stores.
4.  **New Page**: Create `src/pages/dashboard/testimonials.vue` for a dense list view of all feedback.
