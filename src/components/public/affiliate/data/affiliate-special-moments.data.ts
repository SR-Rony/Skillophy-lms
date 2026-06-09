export interface AffiliateMomentImage {
  id: string;
  src: string;
  alt: string;
}

export const affiliateSpecialMomentsData = {
  title: "Some Special Moments of Our Affiliates",
  description:
    "With a mix of experience and stories, become suitable for life's work for the new generation, have a mentality like the new generation",
  columns: [
    {
      id: "left-stack",
      variant: "stack" as const,
      images: [
        {
          id: "team-meeting",
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80",
          alt: "Affiliate partners collaborating during a team meeting",
        },
        {
          id: "affiliate-at-desk",
          src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=80",
          alt: "Affiliate reviewing earnings on a smartphone at a desk",
        },
      ],
    },
    {
      id: "thumbs-up",
      variant: "single" as const,
      images: [
        {
          id: "affiliate-thumbs-up",
          src: "https://images.unsplash.com/photo-1556157382-97eda72d4856?w=900&auto=format&fit=crop&q=80",
          alt: "Affiliate giving a thumbs up while working at a laptop",
        },
      ],
    },
    {
      id: "center-feature",
      variant: "single" as const,
      images: [
        {
          id: "affiliate-smartphone",
          src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=900&auto=format&fit=crop&q=80",
          alt: "Affiliate checking campaign performance on a smartphone",
        },
      ],
    },
    {
      id: "right-stack",
      variant: "stack" as const,
      images: [
        {
          id: "team-celebration",
          src: "https://images.unsplash.com/photo-1529156069898-49953e331792?w=900&auto=format&fit=crop&q=80",
          alt: "Affiliate team sharing a casual working moment together",
        },
        {
          id: "mentor-session",
          src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&auto=format&fit=crop&q=80",
          alt: "Two affiliates reviewing strategy on a laptop",
        },
      ],
    },
  ],
};
