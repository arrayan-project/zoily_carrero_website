// src/components/gallery/GalleryBottomBanner.tsx
import React from "react";
import PageBanner from "../common/PageBanner";
import images from "../../assets/img/images";

interface GalleryBottomBannerProps {
  isMobileView: boolean;
}

const GalleryBottomBanner: React.FC<GalleryBottomBannerProps> = ({
  isMobileView,
}) => {
  return (
    <>
      {!isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.galleryBannerBottom]}
        ></PageBanner>
      )}
      {isMobileView && (
        <PageBanner
          title="'Te debes este momento'"
          imageSrcs={[images.galleryBannerBottom]}
        ></PageBanner>
      )}
    </>
  );
};

export default GalleryBottomBanner;
