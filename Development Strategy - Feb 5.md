# Development Strategy - Feb 5 (Detailed Audit)

## 1. Audit & Findings

### Navigation & Architecture
-   **Structure**: The current routing is somewhat flat. Users want a nested "Drill-down" experience under campaigns (e.g., `/campaign/:slug/testimonials/:id`).
-   **Bug**: The "Campaigns" sidebar link is hardcoded to look active. It needs to dynamically react to the route.
-   **Naming**: "Wall of Love" is inconsistent. It is being renamed to "Customer Feedback" globally.

### Page Analysis
#### `/campaign` (Campaign List)
-   **Current**: Shows cards with stats. "Recent Activity" is static/non-interactive.
-   **Update Needed**:
    -   "Recent Activity" items must be clickable links to the testimonial detail.
    -   Add "Date Received" to the list items for better context.
    -   Ensure data structure supports this (Testimonial interface has `date`).

#### `/displayboard` (Wall of Love / Customer Feedback)
-   **Current**: Static hero section, no real carousel logic.
-   **Update Needed**:
    -   Implement a real Carousel (Next/Prev, Auto-play).
    -   Utilize `AnimatedTestimonials.vue` component if viable, or write custom logic.
    -   Rename title to "Customer Feedback".

#### Router
-   **Current**: `/testimonial/:id` is a global route.
-   **Update Needed**: Move logic to `src/pages/campaign/[slug]/[id].vue` (or `testimonials/:id`) to reflect hierarchy.

---

## 2. Updated Work Plan (Phase 2)

### A. Navigation & Structure
1.  **Fix Sidebar**: Update `layouts/dashboard.vue` to use `active-class` for routing.
2.  **Nested Routing**:
    -   Define `/campaign/:slug` as a parent route.
    -   Nest `testimonials/:id` under it.
    -   Update `router/index.ts` to reflect this.

### B. Logic Refinement
1.  **Carousel**: Implement logic in `displayboard.vue` to cycle through `approvedTestimonials` from the Pinia store.
2.  **Drill-down**:
    -   Update `campaign/index.vue` to link to the new nested routes.
    -   Ensure the "Back" button on the detail page respects history or goes up one level.

### C. Branding
1.  **Global Rename**: Find/Replace "Wall of Love" -> "Customer Feedback".

---

## 3. Data Structure Updates (Mock)
The `Testimonial` interface is mostly correct, but we will ensure `date` is formatted consistently for display.

```typescript
interface Testimonial {
    // ...
    date: string; // ISO or "2 days ago"
    // ...
}
```
