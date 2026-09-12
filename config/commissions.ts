export const commissionPricing = [
  { size: "A5", price: 150, note: "A small, intimate portrait" },
  { size: "A4", price: 250, note: "The most requested format" },
  { size: "A3", price: 350, note: "More room for detail" },
  { size: "Large or complex", price: null, note: "Quoted individually" },
] as const;

export const commissionSubjects = [
  "Individual",
  "Couple",
  "Family",
  "Pet",
  "Wedding",
  "Memorial",
  "Other",
] as const;

export const commissionSizes = ["A5", "A4", "A3", "Custom", "Not sure"] as const;

export const commissionSteps = [
  {
    number: "01",
    title: "Share your idea",
    description: "Send photographs and a few words about what you have in mind.",
  },
  {
    number: "02",
    title: "Consultation & quote",
    description: "Jules reviews the references, then confirms composition, size and price.",
  },
  {
    number: "03",
    title: "Composition approval",
    description: "The crop and arrangement are agreed before the final piece begins.",
  },
  {
    number: "04",
    title: "Painted by hand",
    description: "Your artwork is created, with progress updates where they are useful.",
  },
  {
    number: "05",
    title: "Finished artwork",
    description: "The piece is prepared carefully for collection or delivery.",
  },
] as const;
