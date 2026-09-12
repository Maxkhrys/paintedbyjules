export type ArtworkType = "original" | "commission-example";
export type ArtworkCategory =
  | "Portraits"
  | "Families"
  | "Couples"
  | "Pets"
  | "Originals";
export type ArtworkAvailability = "available" | "sold" | "not-for-sale";

export type ArtworkImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Artwork = {
  title: string;
  slug: string;
  images: ArtworkImage[];
  type: ArtworkType;
  category: ArtworkCategory;
  description: string;
  medium: string;
  dimensions: string;
  price: number | null;
  availability: ArtworkAvailability;
  year: number;
  featured: boolean;
  placeholder: boolean;
  layout: "portrait" | "landscape" | "square";
  seoTitle: string;
  seoDescription: string;
};

export const artworks: Artwork[] = [
  {
    title: "Still Here",
    slug: "still-here",
    images: [
      {
        src: "/artwork/still-here.svg",
        alt: "Painterly portrait study in warm umber, clay and muted blue",
        width: 1200,
        height: 1500,
      },
      {
        src: "/artwork/still-here-detail.svg",
        alt: "Close detail of layered brushwork from the portrait study",
        width: 1200,
        height: 1500,
      },
    ],
    type: "commission-example",
    category: "Portraits",
    description:
      "A quiet single-subject study built from soft tonal shifts and a close crop. This temporary artwork demonstrates the intended catalogue format.",
    medium: "Acrylic on archival paper",
    dimensions: "A3",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: true,
    layout: "portrait",
    seoTitle: "Still Here | Painted by Jules",
    seoDescription: "Bespoke painted portrait example from Painted by Jules.",
  },
  {
    title: "Mother & Daughter",
    slug: "mother-and-daughter",
    images: [
      {
        src: "/artwork/mother-and-daughter.svg",
        alt: "Expressive mother and daughter portrait study in soft earth tones",
        width: 1200,
        height: 1500,
      },
    ],
    type: "commission-example",
    category: "Families",
    description:
      "Two figures held in one gentle composition, with the background kept deliberately spare so the relationship remains central.",
    medium: "Acrylic on archival paper",
    dimensions: "A4",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: true,
    layout: "portrait",
    seoTitle: "Mother & Daughter Portrait | Painted by Jules",
    seoDescription: "Family portrait commission example from Painted by Jules.",
  },
  {
    title: "Quiet Company",
    slug: "quiet-company",
    images: [
      {
        src: "/artwork/quiet-company.svg",
        alt: "Painted dog portrait study with russet and cream brushwork",
        width: 1200,
        height: 1200,
      },
    ],
    type: "commission-example",
    category: "Pets",
    description:
      "A character-led pet portrait with attention given to expression, posture and the small details that make the subject familiar.",
    medium: "Acrylic on archival paper",
    dimensions: "A4",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: true,
    layout: "square",
    seoTitle: "Quiet Company Pet Portrait | Painted by Jules",
    seoDescription: "Bespoke pet portrait example from Painted by Jules.",
  },
  {
    title: "After the Dance",
    slug: "after-the-dance",
    images: [
      {
        src: "/artwork/after-the-dance.svg",
        alt: "Loose painted couple study with ivory, sienna and evening-blue tones",
        width: 1500,
        height: 1100,
      },
    ],
    type: "commission-example",
    category: "Couples",
    description:
      "A wedding portrait composed from an unguarded photograph rather than a formal pose, painted with loose edges and warm evening colour.",
    medium: "Acrylic on archival paper",
    dimensions: "A3",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: false,
    placeholder: true,
    layout: "landscape",
    seoTitle: "After the Dance Wedding Portrait | Painted by Jules",
    seoDescription: "Wedding and couple portrait commission example from Painted by Jules.",
  },
  {
    title: "Summer Afternoon",
    slug: "summer-afternoon",
    images: [
      {
        src: "/artwork/summer-afternoon.svg",
        alt: "Abstract original artwork in ochre, chalk, olive and faded coral",
        width: 1200,
        height: 1500,
      },
      {
        src: "/artwork/summer-afternoon-detail.svg",
        alt: "Textured detail of an abstract summer painting",
        width: 1200,
        height: 1500,
      },
    ],
    type: "original",
    category: "Originals",
    description:
      "An abstract study of late light, dry grasses and the softened colours left after a warm day.",
    medium: "Acrylic on archival paper",
    dimensions: "A3",
    price: 350,
    availability: "available",
    year: 2026,
    featured: true,
    placeholder: true,
    layout: "portrait",
    seoTitle: "Summer Afternoon Original Artwork | Painted by Jules",
    seoDescription: "Summer Afternoon, an original acrylic work from Painted by Jules.",
  },
  {
    title: "Wild Garden",
    slug: "wild-garden",
    images: [
      {
        src: "/artwork/wild-garden.svg",
        alt: "Original botanical painting in moss, chalk and dark berry tones",
        width: 1100,
        height: 1400,
      },
    ],
    type: "original",
    category: "Originals",
    description:
      "Layered stems and half-seen petals painted from memory, leaving space for the raw paper to stay visible.",
    medium: "Mixed media on paper",
    dimensions: "40 × 50 cm",
    price: 420,
    availability: "available",
    year: 2026,
    featured: true,
    placeholder: true,
    layout: "portrait",
    seoTitle: "Wild Garden Original Artwork | Painted by Jules",
    seoDescription: "Wild Garden, an original mixed-media work from Painted by Jules.",
  },
  {
    title: "Blue Hour",
    slug: "blue-hour",
    images: [
      {
        src: "/artwork/blue-hour.svg",
        alt: "Abstract landscape painting in smoky blue, sand and deep brown",
        width: 1500,
        height: 1050,
      },
    ],
    type: "original",
    category: "Originals",
    description:
      "A low horizon and a final strip of light, reduced to broad marks and a restrained evening palette.",
    medium: "Acrylic on board",
    dimensions: "50 × 35 cm",
    price: 390,
    availability: "sold",
    year: 2025,
    featured: false,
    placeholder: true,
    layout: "landscape",
    seoTitle: "Blue Hour Original Artwork | Painted by Jules",
    seoDescription: "Blue Hour, an original landscape work from Painted by Jules.",
  },
  {
    title: "Little Light",
    slug: "little-light",
    images: [
      {
        src: "/artwork/little-light.svg",
        alt: "Child portrait study with soft cream, peach and umber brushwork",
        width: 1100,
        height: 1400,
      },
    ],
    type: "commission-example",
    category: "Portraits",
    description:
      "A softly lit child portrait with simplified surroundings and close attention to the expression in the reference photograph.",
    medium: "Acrylic on archival paper",
    dimensions: "A4",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: false,
    placeholder: true,
    layout: "portrait",
    seoTitle: "Little Light Child Portrait | Painted by Jules",
    seoDescription: "Bespoke child portrait commission example from Painted by Jules.",
  },
];

export const galleryCategories = [
  "All",
  "Portraits",
  "Families",
  "Couples",
  "Pets",
  "Originals",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtwork() {
  return artworks.filter((artwork) => artwork.featured);
}
