// Static/mock content used across the "Why us", "How it works",
// "Coverage" and "Reviews" sections.

export const trustPoints = [
  {
    id: "verified",
    icon: "ShieldCheck",
    title: "Verified technicians",
    description: "Background checked & skill tested",
  },
  {
    id: "pricing",
    icon: "rupee",
    title: "Transparent pricing",
    description: "Know the rate before the work",
  },
  {
    id: "warranty",
    icon: "Award",
    title: "30-day warranty",
    description: "We stand behind every visit",
  },
  {
    id: "support",
    icon: "Zap",
    title: "Same-day support",
    description: "Help when home problems happen",
  },
];

export const howItWorksSteps = [
  {
    number: "01",
    title: "Tell us what’s wrong",
    description: "Search a service, choose a category, or simply call us.",
  },
  {
    number: "02",
    title: "We match the right pro",
    description: "A verified local technician arrives with the right tools.",
  },
  {
    number: "03",
    title: "Relax and pay after",
    description: "Approve the work, then pay securely when you’re happy.",
  },
];

export const cities = ["Indore", "Bhopal", "Ujjain", "Dewas"];

export const neighbourhoods = [
  { name: "Vijay Nagar", x: 27, y: 34, labelX: 30, labelY: 31 },
  { name: "Palasia", x: 63, y: 25, labelX: 66, labelY: 22 },
  { name: "Rau", x: 73, y: 61, labelX: 76, labelY: 58 },
  { name: "Bhawarkua", x: 39, y: 72, labelX: 42, labelY: 69 },
  { name: "Scheme 140", x: 52, y: 46, labelX: 55, labelY: 43 },
];

export const projectFilters = ["All", "Cleaning", "Plumbing", "Electrical", "AC"];

export const localProof = {
  featuredReview: {
    category: "AC Service",
    quote:
      "The technician called before arriving, explained the AC issue clearly and left everything spotless.",
    author: "Priya S.",
    image:
      "https://images.unsplash.com/photo-1603516084021-1cfa399b64ca?auto=format&fit=crop&w=1100&q=85",
  },
  projectPhotos: [
    {
      id: 1,
      category: "AC",
      image:
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 2,
      category: "Cleaning",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=700&q=85",
    },
    {
      id: 3,
      category: "Plumbing",
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=700&q=85",
    },
  ],
};

export const reviews = [
  {
    id: 1,
    category: "AC service",
    quote:
      "The technician called before arriving, explained the AC issue clearly and left everything spotless.",
    author: "Priya S.",
    city: "Indore",
    initial: "P",
  },
  {
    id: 2,
    category: "Plumbing",
    quote:
      "I booked a leaking tap repair over WhatsApp. Someone helpful was at my door the same afternoon.",
    author: "Anita K.",
    city: "Bhopal",
    initial: "A",
  },
  {
    id: 3,
    category: "Deep cleaning",
    quote:
      "No surprise bill, no drama. The sofa looks new and the team was genuinely polite.",
    author: "Vikram J.",
    city: "Ujjain",
    initial: "V",
  },
];

export const quickChips = [
  "AC not cooling",
  "Tap leaking",
  "Sofa cleaning",
  "Switchboard repair",
];

export const stats = [
  { value: "25k+", label: "Homes helped" },
  { value: "4.9/5", label: "Average rating" },
  { value: "30 min", label: "Fastest arrival" },
  { value: "4 cities", label: "Local coverage" },
];

export const contact = {
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappHref:
    "https://wa.me/919876543210?text=Hi%20UrbanFix%2C%20I%20need%20help%20with%20a%20home%20service.",
};
