import React from "react";
import { useTheme } from "../../components/context/useThemeHook";
import AnimationWrapper from "../common/AnimationLayer";

type BannerProps = {
  text: string;
  maxWidth?: string; // New prop to control the maximum width
};

const UGCMiddleBanner: React.FC<BannerProps> = ({
  text,
  maxWidth = "max-w-3xl",
}) => {
  const { colors } = useTheme();

  return (
    <div className="w-full py-6 px-4 text-center mt-24 mb-24 relative overflow-hidden">
      <AnimationWrapper animationClassName="fade-in">
        <div className={`mx-auto ${maxWidth}`}>
          <h1
            className="text-xl md:text-xl font-cinzel italic"
            style={{ color: colors.text }}
          >
            {text}
          </h1>
        </div>
      </AnimationWrapper>
    </div>
  );
};

export default UGCMiddleBanner;
