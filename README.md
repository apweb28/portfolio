# Abhay Prajapati — Portfolio (React)

Converted from the original static HTML/CSS/JS portfolio into a React + Vite app.

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Adding your images

The original site referenced images by filename only (e.g. `images/logo.png`,
`images/Hero.png`, `images/Modern Shopping Experience.png`). Since images
weren't included in the conversion, drop them into the `public/images/`
folder here using the **same filenames** and everything will resolve
automatically — no code changes needed:

```
public/images/logo.png
public/images/Hero.png
public/images/Modern Shopping Experience.png
public/images/Creative Portfolio Website.png
public/images/WordPress Business Site.png
```

## Project structure

```
src/
  components/
    icons/        SVG icons as standalone components (service icons, contact icons, the About illustration)
    Navbar.jsx, Hero.jsx, SkillsMarquee.jsx, About.jsx, Services.jsx,
    Projects.jsx, Testimonials.jsx, Contact.jsx, Footer.jsx
  data/           Content pulled out of JSX (services, projects, testimonials, nav/footer links)
  hooks/          All the interactive behaviour, ported from the original inline <script> tags
  App.jsx         Wires the sections together
  index.css       The original stylesheet, cleaned up
```

## What changed vs. the original

- **Structure**: one long HTML file → one component per section, with
  reusable data arrays instead of repeated markup blocks.
- **Interactivity**: every inline `<script>` became a hook:
  - `useStickyHeader` — header shrinks/sticks on scroll
  - `useRoleRotator` — rotating "Web Developer / UI-UX Designer / ..." text
  - `useWordReveal` — scroll-triggered word-by-word reveal on the About paragraph
  - `useOrbitReveal` — the solar-system illustration's grow + spin animation
  - `useMobileMenu` — hamburger menu toggle
  - `useTestimonialSlider` — the custom testimonials carousel (dots, autoplay, responsive card count)
  - `useContactForm` — form state, validation, and the "thank you" popup
- **Projects slider**: swapped the Swiper CDN `<script>` tag for the official
  `swiper/react` package (`Swiper` / `SwiperSlide` components) — same look and
  behavior, no `new Swiper(...)` DOM wiring needed.
- **Dead code removed**:
  - The About section had *two* competing scroll-reveal scripts targeting the
    same `[data-reveal]` element — one built letter-by-letter spans, the other
    (which ran second) rebuilt the same element as word spans and is the only
    one that ever actually rendered. Only the working word-reveal version was kept.
  - A stale-closure bug in the orbit animation's scroll listener (it used an
    anonymous function, so `removeEventListener` never worked) is fixed.
  - All HTML comments, commented-out CSS rules, and one duplicate `.container`
    rule were removed from the stylesheet.
