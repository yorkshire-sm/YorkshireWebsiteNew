# Dawat-e-Islami Yorkshire Modern Web Portal

Transforming https://dawateislamiyorkshire.co.uk/ into a responsive, high-performance web application with a modern Islamic aesthetic (deep emerald teal `#0F7B96`, brushed gold `#D4AF37`, and crisp typography). The portal features multi-page view switching, live prayer times, Madani Channel audio/video streaming in three languages, regional Yorkshire centre directories with Jummah schedules & map drawers, comprehensive Funeral Services & FSF death committee hubs, Dar-ul-Madinah education portals, Spiritual Cures schedules, Qafilah registration, an interactive live-rates Zakah calculator, and a unified donation modal system.

---

## User Review & Critical Decisions

> [!IMPORTANT]
> The following structural decisions were confirmed in Phase 1:
> - **Navigation Architecture**: Multi-page feel with persistent top navigation, mobile bottom navigation bar, and dedicated views for every major department and region.
> - **Homepage Focal Hub**: Hero section combines high-impact visual welcoming, live prayer times strip, multi-lingual live streaming (Urdu, English, Bangla), and instant community appeals.
> - **Donations & Forms**: Interactive in-app modal flow for donations (supporting custom amounts, Gift Aid toggle, and specific Yorkshire branches/causes) plus interactive embedded forms for Contact and Qafilah registrations.

---

## 1. Overview & Core Concept

- **What It Does**: Serves as the central digital hub for Dawat-e-Islami across Yorkshire (Bradford, Leeds, Sheffield, Rotherham, Huddersfield, Dewsbury, Halifax, and Keighley). Visitors can check prayer times, watch/listen to Madani Channel live, find local mosque addresses & Jummah timings, access emergency 24/7 funeral assistance, enroll in nurseries and online secondary schooling, register for 3-day spiritual Qafilahs, seek free Rohani Ilaj (Spiritual Cures) timings, calculate their exact Zakah using real-time metal prices, and securely donate to local projects.
- **Target Audience**: Muslim community members across Yorkshire and the UK, families seeking Islamic education, individuals in need of bereavement and funeral support, new Muslims, and visitors seeking spiritual knowledge.
- **Key Value**: Replaces scattered WordPress blocks and disjointed iframes with a unified, lightning-fast, and accessible mobile-friendly interface with zero clutter.

---

## 2. User Experience & Visual Design

### Key Views & User Flows
1. **Home Portal**:
   - Announcement banner & emergency funeral hotline ticker (24/7).
   - Modern Hero with Islamic geometric motif, core mission quote ("I must strive to reform myself and people of the entire world").
   - Live Yorkshire Prayer Times widget with next prayer countdown.
   - Live Madani Channel player with instantaneous Urdu / English / Bangla language switcher (both Video and Audio streams).
   - Quick Regional Center Jummah timings overview.
   - Featured Departments bento-grid: Education, Relief (FGRF), Funeral Services, Spiritual Cures, New Muslims.
   - Preachers & Leadership showcase (Mawlana Ilyas Qadri, Imran Attari, Haji Khalid Attari, Hafiz Rafaqat Attari, Zaheer Attari).
2. **Mosques & Locations Hub**:
   - Interactive Yorkshire city selector: Bradford (4 masjids), Dewsbury/Ravensthorpe, Halifax, Huddersfield, Keighley, Leeds, Rotherham, Sheffield.
   - Comprehensive Masjid cards: Address, Jummah Jama'at timings (1st & 2nd Jama'ats), interactive Google Maps embed drawer, directions link, and direct center donation button.
3. **Funeral Services & FSF (Death Committee)**:
   - 24/7 emergency dispatch alert banner with instant-call buttons.
   - Complete Sunnah funeral arrangements: Ghusl, shrouding, cold storage, private ambulance, international repatriation.
   - Facilities photo & video tour (Ghusl area, family condolence seating).
   - Transparent policy highlights: No membership required, no compulsory fee, voluntary donations accepted.
   - Testimonials from supported families across Yorkshire.
4. **Education & Dar-ul-Madinah**:
   - Dar-ul-Madinah Early Years & Primary: Ofsted regulated, 3 Yorkshire campuses (Sheffield, Bradford, Rotherham), session options, admissions open.
   - Al-Madinah Online Secondary School: Cambridge IGCSE curriculum, live online classes, free trial lesson booking.
   - Jamia Tul Madina & Maktaba Tul Madina resource links.
5. **Spiritual Cures (Rohani Ilaj) & New Muslims**:
   - Prominent Free Service Assurance banner (strictly 100% free of charge).
   - Weekly Rohani Ijtima schedule and opening hours table across all 8 Yorkshire locations.
   - Direct Istikhara and WhatsApp contact cards with separate instructions for sisters.
   - "Welcome to Islam" mentorship and Shahadah to Salah support section.
6. **Weekly Gatherings (Ijtima) & Qafilah**:
   - Dedicated Brothers & Sisters weekly gathering cards with schedule and regional venues.
   - 3-day Qafilah spiritual journey: Core principles, benefits, video testimonials, interactive registration drawer.
7. **Interactive Zakah & Nisaab Calculator**:
   - Live Nisab threshold calculation (Silver 612.36g and Gold 87.48g) with live API fetching and graceful offline fallback.
   - Form for assets (Gold/Silver, Cash, Savings, Investments, Loans given, Business stock) and deductible liabilities (Loans owed, Salaries, Bills).
   - Real-time Net Wealth and 2.5% Zakah obligation calculation with eligibility badge.
   - One-click "Pay Zakah" or "Give Sadaqah" launch into donation modal with prefilled calculated amount.
   - Educational tabs on "What is Zakah?", "What is Nisaab?", and "Why Give Through Dawat-e-Islami?".
8. **Contact & Community Support**:
   - Regional headquarters details in Bradford, phone directory, office hours, FAQ accordion, and interactive message form.

### Visual Identity & Theme
- **Color Palette (60-30-10 Rule)**:
  - *Dominant Neutral (60%)*: Crisp clean slate-50 (`#f8fafc`) with pure white (`#ffffff`) surfaces and subtle borders (`#e2e8f0`).
  - *Structural Surface & Primary (30%)*: Dawat-e-Islami deep teal `#0F7B96` and dark ocean `#0A5368`.
  - *High-Intent Accent (10%)*: Elegant Islamic gold `#D4AF37` / `#F59E0B` for active indicators, prayer highlights, and key calls-to-action.
- **Typography**:
  - Display & Headings: `Outfit` & `Amiri` serif for Arabic/spiritual resonance.
  - Body & UI: `Plus Jakarta Sans` / `Inter` for clean legibility and data tables.
  - Numerals: `font-mono tabular-nums` for prayer clocks and Zakah figures.
- **Zero-Pill Discipline**: Metadata displayed as unboxed clean text with typographic separators (`·` or `/`). No decorative pulsing dots or artificial status chips.

---

## 3. Key Product Decisions & Trade-Offs

- **Multi-View State Management over URL Reloads**:
  - *Decision*: SPA view router with browser history push/pop support and hash anchors (`#locations`, `#funeral`, `#zakah`, etc.).
  - *Why*: Instant transitions with zero reload latency, ensuring audio or video streams don't interrupt when browsing different sections.
- **Unified Donation Modal**:
  - *Decision*: A dedicated donation modal capable of targeting any specific branch (e.g., Bradford, Sheffield, Leeds project, Funeral Services Fund, or general Ramadan/Zakah fund) with preset amounts (£25, £50, £100, custom) and payment provider selection.
  - *Why*: Replaces separate missing WordPress GiveWP shortcodes with an interactive UI.
- **Live Metal Prices API with Resilient Fallback**:
  - *Decision*: Live fetch from free financial/metal rate endpoints with caching in `localStorage` (60s TTL) and static baseline fallbacks.
  - *Why*: Ensures the Zakah calculator always works accurately even if external endpoints undergo transient downtime.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                        Top Navigation Bar                              │
│  [ Dawat-e-Islami Yorkshire ]  [ Home | Mosques | Education | ... ]     │
│  [ 24/7 Funeral Hotline ]      [ Donate Now Button ]                   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                         Active View Router                             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │
│  │  Home View   │  │ Mosques Hub  │  │ Funeral /FSF │  │  Zakah Calc │ │
│  │ (Hero/Live/  │  │ (8 Cities,   │  │ (24/7 Alert, │  │ (Live Gold/ │ │
│  │  Prayers)    │  │  Timings)    │  │  Ghusl/Tour) │  │  Silver/Net)│ │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬──────┘ │
│         │                 │                 │                 │        │
│         │   ┌─────────────┴─────────────────┴─────────────┐   │        │
│         └──►│  Dar-ul-Madinah / Qafilah / Spiritual Cures  │◄──┘        │
│             └─────────────────────────────────────────────┘            │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        Global Modals & Drawers                         │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌─────────────┐ │
│  │ Unified Donation Modal│  │ Interactive Map Drawer│  │ Event Modal │ │
│  │ (Gift Aid, Presets)   │  │ (Google Embeds)       │  │ (Lightbox)  │ │
│  └───────────────────────┘  └───────────────────────┘  └─────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy
- `src/App.tsx`: Top bar, view router, floating prayer time ticker, global donation modal, footer.
- `src/components/Navbar.tsx`: Responsive navigation with 3-zone contract, quick tab switches, mobile sheet.
- `src/components/PrayerTimesBar.tsx`: Real-time daily prayer times for Yorkshire (Fajr, Sunrise, Zuhr, Asr, Maghrib, Isha) with countdown to next Salah.
- `src/components/LiveStreamingPlayer.tsx`: Madani Channel live TV & Radio audio stream with Urdu / English / Bangla switcher.
- `src/components/DonationModal.tsx`: Interactive modal supporting custom amount, cause selector, Gift Aid, and mock payment gateway simulation.
- `src/components/views/HomeView.tsx`: Welcoming hero, bento departments, preacher cards, quick community stats.
- `src/components/views/MosquesView.tsx`: All Yorkshire centers (Bradford, Dewsbury, Halifax, Huddersfield, Keighley, Leeds, Rotherham, Sheffield) with Jama'at times and map toggles.
- `src/components/views/FuneralServicesView.tsx`: Emergency hotline, full Sunnah service breakdown, facility video/photo showcase, FSF death committee details.
- `src/components/views/EducationView.tsx`: Dar-ul-Madinah 3 campuses, Al-Madinah Cambridge school with free trial booking, Jamia Tul Madina.
- `src/components/views/SpiritualCuresView.tsx`: Free service guarantee, Rohani Ilaj timetable for all towns, sisters WhatsApp desk, Welcome to Islam section.
- `src/components/views/QafilahView.tsx`: 3-day spiritual journeys, video feedback player, registration form modal.
- `src/components/views/ZakahCalculatorView.tsx`: Live metal rates, interactive asset/liability inputs, eligibility calculation, Nisaab explainer tabs.
- `src/components/views/ContactView.tsx`: Head office address, phone, emails, interactive contact form, and FAQ accordion.
- `src/components/Footer.tsx`: Clean wordmark, regional links, registered charity info, quick prayer times reference.
