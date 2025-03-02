// BackgroundSVG.js
import React from 'react';

interface ServicesBackgroundSVGProps {
    className?: string;
}

const ServicesBackgroundSVG: React.FC<ServicesBackgroundSVGProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      version="1.1" 
      xmlnsXlink="http://www.w3.org/1999/xlink" 
      width="1440" 
      height="560" 
      preserveAspectRatio="none" 
      viewBox="0 0 1440 560"
      className={className}
      >
      <g mask="url(#SvgjsMask1015)" fill="none">
        <path d="M1669.22 259.49C1490.29 263.07 1339.54 501.83 995.07 500.29 650.6 498.75 532.43 5.22 320.92-24.48" stroke="rgba(243, 145, 226, 0.2)" strokeWidth="2"></path>
        <path d="M1467.56 327.96C1290.23 329.17 1135.23 499.18 778.39 495.96 421.55 492.74 305.78-12.33 89.22-43.05" stroke="rgba(243, 145, 226, 0.2)" strokeWidth="2"></path>
        <path d="M1679.57 55.94C1578.31 55.68 1480.09-14.06 1280.61-14.06 1081.12-14.06 1082.51 56.1 881.64 55.94 680.78 55.78 590.48-104.98 482.68-108.14" stroke="rgba(243, 145, 226, 0.2)" strokeWidth="2"></path>
        <path d="M1475.18 437.33C1292 435.36 1146.79 244.32 770.71 235.73 394.63 227.14 260.21-83.07 66.24-90.89" stroke="rgba(243, 145, 226, 0.2)" strokeWidth="2"></path>
        <path d="M1461.43 340.63C1337.96 335.28 1255.43 134.37 1015.22 127.83 775 121.29 686.23-14.67 569-16.45" stroke="rgba(243, 145, 226, 0.2)" strokeWidth="2"></path>
      </g>
      <defs>
        <mask id="SvgjsMask1015">
          <rect width="1440" height="560" fill="#ffffff"></rect>
        </mask>
      </defs>
    </svg>
  );
};

export default ServicesBackgroundSVG;