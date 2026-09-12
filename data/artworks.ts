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

const image = (slug: string, alt: string): ArtworkImage => ({
  src: `/collection-v2/${slug}.webp`,
  alt,
  width: 1122,
  height: 1402,
});

export const artworks: Artwork[] = [
  {
    title: "Soft Hours",
    slug: "soft-hours",
    images: [image("soft-hours", "Soft Hours, a tactile figurative oil painting installed on a merlot gallery wall")],
    type: "original",
    category: "Originals",
    description:
      "A poised figure held between rose, linen and black cherry. Built in slow layers, the surface keeps the evidence of every revision.",
    medium: "Oil and cold wax on linen",
    dimensions: "80 × 110 cm",
    price: 780,
    availability: "available",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Soft Hours Original Painting | Painted by Jules",
    seoDescription: "Soft Hours, an original figurative oil painting by Painted by Jules.",
  },
  {
    title: "Afterlight",
    slug: "afterlight",
    images: [image("afterlight", "Afterlight, an expressive portrait of a woman beside an evening window")],
    type: "commission-example",
    category: "Portraits",
    description:
      "A quiet study of a woman at the edge of evening, where the room falls away and the last colour gathers around her.",
    medium: "Oil on linen",
    dimensions: "70 × 100 cm",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Afterlight Portrait | Painted by Jules",
    seoDescription: "Afterlight, a bespoke painted portrait example by Painted by Jules.",
  },
  {
    title: "The Garden at Eleven",
    slug: "garden-at-eleven",
    images: [image("garden-at-eleven", "The Garden at Eleven, a deeply textured botanical oil painting")],
    type: "original",
    category: "Originals",
    description:
      "Climbing stems, open blooms and the darker shapes beneath them, remembered rather than copied from life.",
    medium: "Oil on linen",
    dimensions: "75 × 105 cm",
    price: null,
    availability: "sold",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "The Garden at Eleven | Painted by Jules",
    seoDescription: "The Garden at Eleven, an original botanical oil painting by Painted by Jules.",
  },
  {
    title: "Sunday Silk",
    slug: "sunday-silk",
    images: [image("sunday-silk", "Sunday Silk, an abstract painting of blush, pearl and merlot folds")],
    type: "original",
    category: "Originals",
    description:
      "Folded colour and broad, physical marks move across the linen like fabric being gathered into a hand.",
    medium: "Oil and marble dust on linen",
    dimensions: "70 × 100 cm",
    price: 620,
    availability: "available",
    year: 2026,
    featured: false,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Sunday Silk Original Painting | Painted by Jules",
    seoDescription: "Sunday Silk, an original abstract painting by Painted by Jules.",
  },
  {
    title: "Blue Before Morning",
    slug: "blue-before-morning",
    images: [image("blue-before-morning", "Blue Before Morning, a textured dark-blue coastal oil painting")],
    type: "original",
    category: "Originals",
    description:
      "A low horizon before sunrise, reduced to dark water, pale air and one thin seam of warmth.",
    medium: "Oil on linen",
    dimensions: "80 × 110 cm",
    price: 950,
    availability: "available",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Blue Before Morning | Painted by Jules",
    seoDescription: "Blue Before Morning, an original coastal oil painting by Painted by Jules.",
  },
  {
    title: "She Kept the Light",
    slug: "she-kept-the-light",
    images: [image("she-kept-the-light", "She Kept the Light, an expressive painted portrait in rose and blue-grey")],
    type: "commission-example",
    category: "Portraits",
    description:
      "A close portrait built around expression and posture, with the likeness held inside loose, visible brushwork.",
    medium: "Oil on linen",
    dimensions: "60 × 85 cm",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "She Kept the Light Portrait | Painted by Jules",
    seoDescription: "She Kept the Light, a bespoke painted portrait example by Painted by Jules.",
  },
  {
    title: "Two of Us",
    slug: "two-of-us",
    images: [image("two-of-us", "Two of Us, a tender mother and daughter portrait painting")],
    type: "commission-example",
    category: "Families",
    description:
      "Two figures brought into one quiet shape, painted with enough detail to feel familiar and enough freedom to stay alive.",
    medium: "Oil on linen",
    dimensions: "70 × 100 cm",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Two of Us Family Portrait | Painted by Jules",
    seoDescription: "Two of Us, a bespoke family portrait example by Painted by Jules.",
  },
  {
    title: "Wild Peonies",
    slug: "wild-peonies",
    images: [image("wild-peonies", "Wild Peonies, a dramatic floral oil painting in shell pink and plum")],
    type: "original",
    category: "Originals",
    description:
      "Peonies at every stage of opening, from taut buds to the full weight of petals beginning to fall.",
    medium: "Oil on linen",
    dimensions: "75 × 105 cm",
    price: null,
    availability: "sold",
    year: 2026,
    featured: false,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Wild Peonies Original Painting | Painted by Jules",
    seoDescription: "Wild Peonies, an original floral oil painting by Painted by Jules.",
  },
  {
    title: "The Red Room",
    slug: "the-red-room",
    images: [image("the-red-room", "The Red Room, a semi-abstract interior painting of an oxblood salon")],
    type: "original",
    category: "Originals",
    description:
      "An emptied room, an open threshold and the pale route light takes across a dark, lacquered floor.",
    medium: "Oil and wax on linen",
    dimensions: "85 × 120 cm",
    price: 1200,
    availability: "available",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "The Red Room Original Painting | Painted by Jules",
    seoDescription: "The Red Room, an original architectural oil painting by Painted by Jules.",
  },
  {
    title: "Low Tide",
    slug: "low-tide",
    images: [image("low-tide", "Low Tide, a luminous coastal oil painting in oyster and weathered rose")],
    type: "original",
    category: "Originals",
    description:
      "Wet sand and the almost-erased horizon after the water has pulled back, leaving the light behind.",
    medium: "Oil on linen",
    dimensions: "80 × 110 cm",
    price: 860,
    availability: "available",
    year: 2026,
    featured: false,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Low Tide Original Painting | Painted by Jules",
    seoDescription: "Low Tide, an original coastal oil painting by Painted by Jules.",
  },
  {
    title: "Quiet Company",
    slug: "quiet-company",
    images: [image("quiet-company", "Quiet Company, a poised painted portrait of a black whippet")],
    type: "commission-example",
    category: "Pets",
    description:
      "A character-led portrait that keeps the long silhouette, alert eye and particular stillness of its subject.",
    medium: "Oil on linen",
    dimensions: "60 × 85 cm",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "Quiet Company Pet Portrait | Painted by Jules",
    seoDescription: "Quiet Company, a bespoke pet portrait example by Painted by Jules.",
  },
  {
    title: "First Dance",
    slug: "first-dance",
    images: [image("first-dance", "First Dance, an intimate painted wedding portrait")],
    type: "commission-example",
    category: "Couples",
    description:
      "A wedding portrait taken from the unguarded photograph: movement, closeness and the shape of the dress held in paint.",
    medium: "Oil on linen",
    dimensions: "70 × 100 cm",
    price: null,
    availability: "not-for-sale",
    year: 2026,
    featured: true,
    placeholder: false,
    layout: "portrait",
    seoTitle: "First Dance Wedding Portrait | Painted by Jules",
    seoDescription: "First Dance, a bespoke wedding portrait example by Painted by Jules.",
  },
];

export const galleryCategories = [
  "All",
  "Originals",
  "Portraits",
  "Families",
  "Couples",
  "Pets",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export function getArtwork(slug: string) {
  return artworks.find((artwork) => artwork.slug === slug);
}

export function getFeaturedArtwork() {
  return artworks.filter((artwork) => artwork.featured);
}
