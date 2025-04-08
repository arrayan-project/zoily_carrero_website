import CourseNavigation from "./CourseCarouselNavigation";
import useWindowSize from "../../hooks/useWindowSize";
import { getTextColorClass } from "../../utils/utils";
import { useTheme } from "../context/useThemeHook";
import { useModal } from "../context/ModalContext";
import { getInfoContent, coursesData } from "../../data/coursesData";
import { ModalContent } from "../modals/ModalInterfaces";
import CourseLogic from "./CourseCarouselLogic";
import CourseContent from "./CourseCarouselContent";
import { Course } from '../../types/CourseInterfaces';

const CourseCarouselSection: React.FC = () => {
  const { windowWidth, isMobileView } = useWindowSize();
  const { theme, colors } = useTheme();
  const { openModal } = useModal();

  const initialCourseItems: Course[] = coursesData;

  const { courseItems, handleCourseTransition } = CourseLogic({ initialCourseItems });

  // Calculate responsive offset
  const calculateOffset = (index: number) => {
    const offsets = {
      mobile: 120,
      tablet: 160,
      desktop: 220,
    };

    if (windowWidth >= 768 && windowWidth < 1024) {
      return index * offsets.tablet;
    } else if (isMobileView) {
      return index * offsets.mobile;
    } else {
      return index * offsets.desktop;
    }
  };

  // Calculate responsive item width
  const getItemWidth = (isCurrentItem: boolean) => {
    const widths = {
      mobile: "w-[120px] h-[180px] z-20",
      tablet: "w-[140px] h-[200px] z-20",
      desktop: "w-[180px] h-[260px] z-20",
      main: "w-full h-full left-0 z-10",
    };

    if (isCurrentItem) {
      return widths.main;
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      return widths.tablet;
    } else if (isMobileView) {
      return widths.mobile;
    } else {
      return widths.desktop;
    }
  };

  // Determine the opacity based on the theme
  const imageOpacityClass = theme === 'dark' ? 'opacity-60' : 'opacity-70';

  return (
    <CourseNavigation handleCourseTransition={handleCourseTransition} windowWidth={windowWidth}>
      {courseItems.map((item, index) => {
        const isCurrentItem = index === 0;
        const offset = calculateOffset(index);

        return (
          <div
            key={`course-${index}`}
            className={`carousel-item absolute top-1/2 -translate-y-1/2 rounded-2xl shadow-lg transition-all duration-700 ${getItemWidth(isCurrentItem)} overflow-hidden`}
            style={{
              left: isCurrentItem ? "50%" : `calc(-30% + ${offset}px)`,
              transform: isCurrentItem
                ? "translate(-50%, -50%)"
                : "translateY(-50%)",
              backgroundColor: colors.background,
              color: colors.text,
            }}
          >
            {/* Background Image */}
            <div
              className={`absolute inset-0 bg-no-repeat bg-cover bg-center ${imageOpacityClass}`}
              style={{
                backgroundImage: `url(${item.modalContent.images[0]})`,
                backgroundPosition: "65% 30%",
              }}
            />
            {/* Content */}
            <CourseContent isCurrentItem={isCurrentItem} isMobileView={isMobileView} windowWidth={windowWidth}>
              {isCurrentItem && (
                <>
                  <h2
                    className={`carousel-name mb-2 font-cinzel opacity-100 transition-opacity duration-500 ${getTextColorClass(
                      theme
                    )} ${isMobileView ? "text-[24px]" : "text-[44px]"}`}
                  >
                    {item.category}
                  </h2>
                  <p
                    className={`carousel-description mb-3 font-cinzel opacity-100 transition-opacity duration-500 ${getTextColorClass(
                      theme
                    )} ${isMobileView ? "text-sm" : "text-base"}`}
                  >
                    {item.description}
                  </p>
                  <button
                    className={`p-2 border-none bg-white font-cinzel text-black rounded-none cursor-pointer absolute left-center top-[110%] -translate-y-1/2 opacity-100 transition-opacity duration-500 ${
                      isMobileView ? "text-sm" : "text-base"
                    }`}
                    onClick={() => {
                      const currentItem = courseItems[0];
                      const modalIndex = coursesData.findIndex(course => course.category === currentItem.category);
                      const modalContent: ModalContent = getInfoContent(modalIndex);
                      openModal(modalContent);
                    }}
                  >
                    Ver más
                  </button>
                </>
              )}
            </CourseContent>
          </div>
        );
      })}
    </CourseNavigation>
  );
};

export default CourseCarouselSection;
