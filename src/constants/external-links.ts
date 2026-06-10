export const EXTERNAL_LINKS = {
  affiliateGoogleForm:
    process.env.NEXT_PUBLIC_AFFILIATE_GOOGLE_FORM_URL ??
    "https://docs.google.com/forms/d/e/1FAIpQLSf_example/viewform",
} as const;
