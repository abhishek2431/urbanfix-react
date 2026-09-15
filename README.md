# UrbanFix — React Frontend

A React + Vite conversion of the original `index1.html` static site. Same look,
same UI, now a proper component-based project.

## Run it

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Folder structure

```
public/
  images/            put any new local image assets here
src/
  main.jsx           app entry point
  App.jsx            React Router setup - real, separate routes:
                        /            -> HomePage
                        /services    -> ServicesPage
                        /why-us      -> WhyUsPage
                        /coverage    -> CoveragePage
                      (unknown paths redirect to "/")
  index.css          Tailwind import + all custom design CSS (colors, cards,
                      hero visuals, map, modals, animations - extracted 1:1
                      from the original <style> block)
  pages/             one file per route
    HomePage.jsx, ServicesPage.jsx, WhyUsPage.jsx, CoveragePage.jsx
  components/
    Layout.jsx       shared shell rendered on every route: Navbar, Footer,
                      mobile contact bar, and the booking / city-picker
                      modals. Holds the state pages need (selected city,
                      which modal is open) and hands it to the current
                      page via React Router's <Outlet context>.
    Navbar.jsx        real <Link>/<NavLink> to each route (active link
                      is highlighted), HeroSection.jsx, StatsBar.jsx,
    CategoriesSection.jsx, CategoryCard.jsx,
    FeaturedServicesSection.jsx, ServiceCard.jsx,
    WhyUsSection.jsx, HowItWorksSection.jsx,
    CoverageSection.jsx, LocalProofSection.jsx, ReviewsSection.jsx,
    Footer.jsx, MobileContactBar.jsx,
    BookingModal.jsx, CityPickerModal.jsx, CityNotice.jsx,
    Icon.jsx, StarRating.jsx, ScrollToTop.jsx
  data/              plain JS data files - edit these to change content
    categories.js    the 6 service categories
    services.js      the 4 featured services (title, price, image, etc.)
    content.js       trust points, how-it-works steps, cities,
                      neighbourhoods, reviews, stats, contact info
```

Searching from the hero bar or clicking a category navigates to
`/services?q=<term>`, and the Services page reads that from the URL to
filter the list — so a search result is a real, shareable/bookmarkable
link, not just scroll position on one page.

## What's real vs. mock

This is a **frontend-only** project. There's no backend yet, so:

- The search bar filters the "Featured services" cards by title/category -
  it doesn't hit an API.
- "Book a pro" / "Book" / "Request a technician" open a booking form. Submitting
  it just shows a confirmation screen (see `BookingModal.jsx` - that's where a
  real API call would go once you have a backend).
- City switching, the neighbourhood finder, and the project-proof filters are
  all driven by the static data in `src/data/content.js`.

## Notes

- Icons use lucide-react instead of inline SVGs.
- Fonts: DM Sans is loaded from Google Fonts in `index.html` (the original
  referenced local @fontsource files that weren't part of the export).
- Images are the original Unsplash URLs from `index1.html` - swap them for
  your own assets in `public/images/` whenever you're ready.
