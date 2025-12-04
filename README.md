# 🎵 Orpheus Music Academy

**Premium Online Music Education Platform**

A modern, elegant website for Orpheus Music Academy - connecting students with world-class conservatory-trained music instructors.

---

## 🚀 Tech Stack

- **Framework:** Next.js 16.0.7 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Fonts:** Google Fonts (Playfair Display, Inter, Crimson Pro)
- **Deployment:** Vercel-ready

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page
│   ├── teachers/
│   │   ├── page.tsx          # Teachers grid
│   │   └── [slug]/
│   │       └── page.tsx      # Individual teacher profile
│   ├── lessons/page.tsx      # Lessons overview
│   ├── how-it-works/page.tsx # Process explanation
│   ├── pricing/page.tsx      # Pricing packages
│   ├── about/page.tsx        # About/story page
│   └── contact/page.tsx      # Contact form
└── components/
    ├── layout/
    │   ├── Header.tsx        # Navigation
    │   └── Footer.tsx        # Footer
    ├── home/
    │   └── Hero.tsx          # Hero section
    └── teachers/
        └── TeacherCard.tsx   # Teacher card component
```

---

## 🎨 Design System

### Colors
- **Midnight:** `#0F1419` (Primary dark)
- **Ivory:** `#FAF8F5` (Background)
- **Gold:** `#D4AF37` (Accent/CTAs)
- **Burgundy:** `#8B4049` (Secondary accent)
- **Teal:** `#5B8A8F` (Tertiary accent)

### Typography
- **Headers:** Playfair Display (Elegant serif)
- **Body:** Inter (Modern sans-serif)
- **Quotes:** Crimson Pro Italic

---

## 🏃‍♂️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

---

## 📄 Pages

- **Home** (`/`) - Hero, value props, teacher preview, CTA
- **Teachers** (`/teachers`) - Grid of all instructors with filter
- **Teacher Profile** (`/teachers/[slug]`) - Individual teacher page
- **Lessons** (`/lessons`) - All instruments (Piano, Violin, Voice, Theory)
- **How It Works** (`/how-it-works`) - 4-step process explanation
- **Pricing** (`/pricing`) - Transparent pricing packages
- **About** (`/about`) - Origin story, philosophy, stats
- **Contact** (`/contact`) - Contact form + info

---

## 🎯 Features

✅ Fully responsive (mobile, tablet, desktop)
✅ Premium design with Tailwind CSS v4
✅ Google Fonts optimization
✅ Smooth animations and hover effects
✅ SEO-optimized meta tags
✅ Accessible navigation
✅ Working contact form (frontend ready)

---

## 🔜 Next Steps (To Complete)

### Backend Integration
- [ ] Set up Supabase project
- [ ] Create `inquiries` table
- [ ] Deploy Supabase Edge Function for email
- [ ] Connect contact form to API

### Content
- [ ] Add real teacher photography
- [ ] Add hero background images
- [ ] Add instrument photos for lessons page

### Optional Enhancements
- [ ] Add Framer Motion animations
- [ ] Add testimonials carousel
- [ ] Add FAQ accordion
- [ ] Add blog section
- [ ] Add loading states
- [ ] Add form validation with React Hook Form + Zod

---

## 🚀 Deploy to Vercel

```bash
npm install -g vercel
vercel login
vercel
```

Or connect your GitHub repo to Vercel dashboard for automatic deployments.

---

## 📧 Contact

**Email:** hello@orpheusacademy.com  
**Phone:** (555) 123-4567

---

## 📝 License

© 2025 Orpheus Music Academy. All rights reserved.
