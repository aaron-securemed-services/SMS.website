/**
 * ============================================================
 *  content.js — THE ONLY FILE YOU NEED TO EDIT
 * ============================================================
 *
 *  HOW TO ADD CONTENT:
 *
 *  1. ADD A COURSE      → add an object to the COURSES array
 *  2. ADD A SESSION     → add an object to the SESSIONS array
 *  3. ADD A STANDARD    → add a string to the STANDARDS array
 *  4. ADD A KIT ITEM    → add an object to the KIT_ITEMS array
 *  5. ADD A CONTACT TOPIC → add an object to CONTACT_TOPICS array
 *
 *  All fields are described inline below.
 * ============================================================
 */

// ─── COURSES ──────────────────────────────────────────────────
// level options: "beginner" | "intermediate" | "advanced"
// format options: "In-Person & Online" | "Online Only" | "In-Person Only"

const COURSES = [
  {
    level: "beginner",
    title: "Introduction to Medical Device Safety",
    description:
      "Designed for students and newcomers, this course introduces the concept of connected medical devices, why they need protection, and what can go wrong when they're compromised — with no technical background required.",
    format: "In-Person & Online",
    labKit: true,
  },
  {
    level: "intermediate",
    title: "Connected Devices & Cyber Threats",
    description:
      "For high school students and motivated learners, this course dives into how medical devices communicate, common attack vectors (network, firmware, supply chain), and how defenders respond — including hands-on lab exercises with real hardware.",
    format: "In-Person & Online",
    labKit: true,
  },
  {
    level: "advanced",
    title: "Medical Device Security Engineering",
    description:
      "A technical deep-dive for college students, early-career professionals, and career changers. Covers threat modeling, SBOM analysis, penetration testing fundamentals for embedded systems, and FDA pre-market cybersecurity submissions.",
    format: "In-Person & Online",
    labKit: true,
  },
];

// ─── SESSIONS ─────────────────────────────────────────────────
// type options: "inperson" | "online"
// spots: number remaining, or null to hide the spots line
//
// TO ADD A NEW SESSION: copy one of the objects below and fill in your details.
// TO REMOVE A SESSION: delete the object entirely.
// If SESSIONS is empty ([]), the site shows a "check back soon" placeholder.

const SESSIONS = [
  // ── EXAMPLE IN-PERSON SESSION ──
  // {
  //   type: "inperson",
  //   title: "Introduction to Medical Device Safety",
  //   date: "August 9, 2025",
  //   location: "Miami, FL — TBD",
  //   level: "Beginner",
  //   spots: 20,
  // },

  // ── EXAMPLE ONLINE SESSION ──
  // {
  //   type: "online",
  //   title: "Connected Devices & Cyber Threats",
  //   date: "September 6, 2025",
  //   location: "Live via Zoom",
  //   level: "Intermediate",
  //   spots: null,
  // },
];

// ─── STANDARDS COVERED ────────────────────────────────────────
// Each string appears as a bullet in the About section.

const STANDARDS = [
  "ISO 13485",
  "ISO 14971",
  "IEC 81001-5-1",
  "FIPS 140-3",
  "AAMI TIR57 / ANSI/AAMI SW96",
];

// ─── LAB KIT ITEMS ────────────────────────────────────────────
// icon: any emoji
// title: short label
// detail: one-line description

const KIT_ITEMS = [
  { icon: "💻", title: "Hardware",  detail: "Microcontrollers & device boards" },
  { icon: "🔍", title: "Analysis Tools",     detail: "Flipper zero + GPIO module boards" },
  { icon: "📘", title: "Course Materials",   detail: "Guides, workbook & scenario cards" },
];

// ─── CONTACT TOPICS ───────────────────────────────────────────
// icon: any emoji
// text: what the topic says

const CONTACT_TOPICS = [
  { icon: "📋", text: "Enrolling in an upcoming course" },
  { icon: "🏫", text: "Bringing SecureMED to your school or organization" },
  { icon: "💻", text: "Online course availability & scheduling" },
  { icon: "🧰", text: "Lab kit logistics & shipping questions" },
  { icon: "🤝", text: "Partnership opportunities" },
  { icon: "📅", text: "Upcoming in-person session dates" },
];
