export const contactMapSectionData = {
  mapEmbedUrl:
    "https://maps.google.com/maps?q=74%2FA%2F67%2C+Mirpur+12%2C+Dhaka%2C+Bangladesh&z=15&output=embed",
  mapTitle: "Skillophy office location on map",
  cards: [
    {
      id: "address",
      title: "Address",
      lines: [{ text: "74/A/67, Mirpur 12, Dhaka, Bangladesh" }],
      iconTone: "orange" as const,
    },
    {
      id: "phone",
      title: "Phone Number",
      lines: [
        { text: "+8801 710000000", href: "tel:+8801710000000" },
        { text: "+8801 574900307", href: "tel:+8801574900307" },
      ],
      iconTone: "teal" as const,
    },
    {
      id: "email",
      title: "Email",
      lines: [
        { text: "info@skillophy.com", href: "mailto:info@skillophy.com" },
        { text: "contact@skillophy.com", href: "mailto:contact@skillophy.com" },
      ],
      iconTone: "purple" as const,
    },
  ],
} as const;
