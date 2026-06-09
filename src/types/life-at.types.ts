export interface LifeAtGalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface LifeAtSectionProps {
  title: string;
  description: string;
  images: {
    leftTop: LifeAtGalleryImage;
    leftBottom: LifeAtGalleryImage;
    center: LifeAtGalleryImage;
    rightTop: LifeAtGalleryImage;
    rightBottom: LifeAtGalleryImage;
  };
  className?: string;
}
