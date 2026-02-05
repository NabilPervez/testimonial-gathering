# User Manual: Testimonial Collector

Welcome to the **Testimonial Collector**! This application helps you gather, manage, and display customer feedback effectively.

## 1. Overview

The app is divided into three main areas:
*   **Public Collection**: Where users submit their feedback.
*   **Admin Dashboard**: Where you manage campaigns and testimonials.
*   **Public Display**: Where you showcase approved testimonials to the world.

---

## 2. Dashboard Pages (Admin)

### **Dashboard (`/dashboard`)**
*   **Purpose**: Your command center.
*   **Features**:
    *   See an overview of total responses across all campaigns.
    *   Quickly access "View All" testimonials.

### **Campaigns (`/campaign`)**
*   **Purpose**: Manage different collection efforts (e.g., "Summer Launch", "Website Redesign").
*   **Features**:
    *   **List**: See all active and paused campaigns.
    *   **Create**: Add a new campaign with a unique public URL.
    *   **Stats**: View response counts and last activity for each campaign.
    *   **Drill-down**: Click a card to enter the **Campaign Dashboard**.

### **Campaign Dashboard (`/campaign/:slug`)**
*   **Purpose**: Focus on a single campaign.
*   **Features**:
    *   **Stats**: View Pending vs Approved vs Rejected counts for *this specific campaign*.
    *   **Recent Activity**: See the latest feedback coming in.
    *   **Edit**: Change the campaign name or status.
    *   **Embed**: Get the code to put this campaign's widget on your website.
    *   **Display Board**: View a tailored "Wall of Love" just for this campaign.
    *   **View Page**: Open the public collection page (`/collect/:slug`) to test it yourself.

### **Campaign Embed (`/campaign/:slug/embed`)**
*   **Features**:
    *   Copy and paste HTML/JS snippets.
    *   Get React or Vue component examples.

### **Campaign Edit (`/campaign/:slug/edit`)**
*   **Features**:
    *   Rename your campaign.
    *   Update the "Public Page Title" (the question users see).
    *   Pause/Resume the campaign.

### **Customer Feedback / Display Board (`/displayboard`)**
*   **Purpose**: A beautiful visual gallery of your approved testimonials.
*   **Features**:
    *   **Carousel**: Top 5 rated testimonials rotate automatically at the top.
    *   **Grid**: All approved testimonials are shown in a masonry grid.
    *   **Filter**: If you access this via a campaign (e.g., `/displayboard/summer-launch`), it only shows feedback for that campaign.

### **Analytics (`/dashboard/analytics`)**
*   **Purpose**: Track performance.
*   **Features**:
    *   Real-time counters for Impressions (estimated), Clicks (estimated), and real Submission counts.

---

## 3. Public Pages (For your customers)

### **Collection Page (`/collect/:slug`)**
*   **Purpose**: This is the link you send to customers!
*   **How it works**:
    *   Users land here, see your question (e.g., "How do you like the product?").
    *   They select a star rating.
    *   They write their text feedback.
    *   They enter their name and title.
    *   Submitting sends the data immediately to your dashboard as "Pending".

### **Feedback Detail (`/feedback/:id`)**
*   **Purpose**: A shareable card for a single testimonial.
*   **How to get here**: Click the "arrow" icon on any testimonial in the Display Board.
*   **Use case**: Send this link to a specific client or post it on social media to show off a specific glowing review.

---

## 4. Technical Notes (for Developers)
*   **Backend**: The app runs a local Node.js server (`server/index.js`) on port 3000.
*   **Database**: Data is stored in a local SQLite file (`server/database.sqlite`).
*   **Fallback**: If the backend is offline (e.g., on a static demo hosting), the app switches to "Mock Mode" so you can still click around and see valid data.
