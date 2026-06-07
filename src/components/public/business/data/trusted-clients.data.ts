export interface TrustedClientLogo {
  id: string;
  name: string;
}

export const trustedClientsData = {
  title: "Trusted by World's Leading Companies",
  logos: [
    { id: "box", name: "Box" },
    { id: "eventbrite", name: "Eventbrite" },
    { id: "vimeo", name: "Vimeo" },
    { id: "nasdaq", name: "Nasdaq" },
    { id: "netapp", name: "NetApp" },
    { id: "samsung", name: "Samsung" },
  ] satisfies TrustedClientLogo[],
};
