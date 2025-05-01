// src/data/coursesData.tsx
import { ModalContent } from "../components/modals/ModalInterfaces"; // Importamos ModalContent
import { Course} from "../types/CourseInterfaces"; // Importamos Course y CourseItem
import images from "../assets/images"; // Importamos el objeto images

// Funciones para las descripciones
export const getCoursesDescription = () => {
  return [
    "Aprende a maquillarte como un profesional con nuestros cursos!",
    "Desde técnicas básicas hasta avanzadas, resalta tu belleza y domina el arte del maquillaje.",
  ];
};

export const termsContent = () => {
  try {
    return (
      <div>
        <h1 className="font-cinzel font-bold mb-8 text-sm md:text-base">Términos y Condiciones del Curso</h1>
        <div>
          <h2 className="font-cinzel font-bold mb-4 text-sm md:text-base">Materiales:</h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">Se proveerán los materiales durante el curso</p>
        </div>
        <div>
          <h2 className="font-cinzel font-bold mb-4 text-sm md:text-base">Requisitos:</h2>
          <p className="font-cinzel mb-4 text-xs md:text-sm">No se requieren conocimientos previos</p>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error al generar los términos y condiciones:", error);
    return (
      <div className="text-red-500">
        Error al cargar los términos y condiciones.
      </div>
    );
  }
};

export const coursesData: Course[] = [
  {
    category: "Curso Básico",
    description: "Aprende las bases del maquillaje profesional.",
    items: [
      {
        name: "Maquillaje de día",
        price: "$45.000",
        description: [
          "Preparación de la piel",
          "Aplicación de bases",
          "Uso de correctores",
          "Sellado del maquillaje",
          "Uso de iluminador",
          "Aplicación de rubor",
          "Aplicación de sombras",
          "Técnica de delineado",
          "Aplicación de labial",
        ],
      },
    ],
    modalContent: {
      images: [images.cbasico],
      title: "Curso Básico",
      infoContent: (
        <div className="font-cinzel">
          <div className="mb-6">
            <h4 className="font-bold mb-4 text-sm md:text-base">
              Maquillaje de día
            </h4>
            <p className="mb-2 text-xs md:text-sm">Precio: $45.000</p>
            <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
              <li>Preparación de la piel</li>
              <li>Aplicación de bases</li>
              <li>Uso de correctores</li>
              <li>Sellado del maquillaje</li>
              <li>Uso de iluminador</li>
              <li>Aplicación de rubor</li>
              <li>Aplicación de sombras</li>
              <li>Técnica de delineado</li>
              <li>Aplicación de labial</li>
            </ul>
          </div>
        </div>
      ),
      termsContent: termsContent(),
    },
  },
  {
    category: "Curso Intermedio",
    description: "Curso intermedio de maquillaje donde aprenderás técnicas de perfeccionamiento y acabados más sofisticados.",
    items: [
      {
        name: "Curso Intermedio",
        price: "$45.000",
        description: [
          "Corrección de cejas y técnicas avanzadas de diseño",
          "Maquillaje de ojos ahumado para ocasiones especiales",
          "Corte de cuenca y delineado avanzado",
          "Aplicación de pigmentos y glitters para efectos especiales",
          "Piel madura: Técnicas y productos para una aplicación perfecta",
        ],
      },
    ],
    modalContent: {
      images: [images.cintermedio],
      title: "Curso Intermedio",
      infoContent: (
        <div className="font-cinzel">
          <div className="mb-6">
            <h4 className="font-bold mb-4 text-sm md:text-base">
              Curso Intermedio
            </h4>
            <p className="mb-2 text-xs md:text-sm">Precio: $45.000</p>
            <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
              <li>Corrección de cejas y técnicas avanzadas de diseño</li>
              <li>Maquillaje de ojos ahumado para ocasiones especiales</li>
              <li>Corte de cuenca y delineado avanzado</li>
              <li>Aplicación de pigmentos y glitters para efectos especiales</li>
              <li>Piel madura: Técnicas y productos para una aplicación perfecta</li>
            </ul>
          </div>
        </div>
      ),
      termsContent: termsContent(),
    },
  },
  {
    category: "Curso Avanzado",
    description: "Curso avanzado de maquillaje para llevar tus habilidades a un nivel profesional con técnicas complejas.",
    items: [
      {
        name: "Curso Avanzado",
        price: "$45.000",
        description: [
          "Maquillaje de novias y eventos especiales",
          "Maquillaje editorial y para fotografía de alta gama",
          "Maquillaje de quinceañeras y looks juveniles",
          "Delineado gráfico y técnicas de diseño",
          "Corte de cuenca profundo para ojos dramáticos",
        ],
      },
    ],
    modalContent: {
      images: [images.cavanzado],
      title: "Curso Avanzado",
      infoContent: (
        <div className="font-cinzel">
          <div className="mb-6">
            <h4 className="font-bold mb-4 text-sm md:text-base">
              Curso Avanzado
            </h4>
            <p className="mb-2 text-xs md:text-sm">Precio: $45.000</p>
            <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
              <li>Maquillaje de novias y eventos especiales</li>
              <li>Maquillaje editorial y para fotografía de alta gama</li>
              <li>Maquillaje de quinceañeras y looks juveniles</li>
              <li>Delineado gráfico y técnicas de diseño</li>
              <li>Corte de cuenca profundo para ojos dramáticos</li>
            </ul>
          </div>
        </div>
      ),
      termsContent: termsContent(),
    },
  },
  {
    category: "Curso Profesional",
    description: "Curso profesional intensivo para especializarte en técnicas avanzadas y adaptadas a las necesidades de tus clientes.",
    items: [
      {
        name: "Curso Profesional",
        price: "$45.000",
        description: [
          "Práctica en modelos reales y maquillaje personalizado",
          "Maquillaje para todos los tonos y tipos de piel",
          "Maquillaje profesional para distintas estructuras faciales",
          "Técnicas avanzadas de aplicación de pestañas postizas",
          "Asesoría en marca personal y redes sociales para maquilladoras",
        ],
      },
    ],
    modalContent: {
      images: [images.cprofesional],
      title: "Curso Profesional",
      infoContent: (
        <div className="font-cinzel">
          <div className="mb-6">
            <h4 className="font-bold mb-4 text-sm md:text-base">
              Curso Profesional
            </h4>
            <p className="mb-2 text-xs md:text-sm">Precio: $45.000</p>
            <ul className="text-[0.7rem] text-xs md:text-sm list-disc list-inside">
              <li>Práctica en modelos reales y maquillaje personalizado</li>
              <li>Maquillaje para todos los tonos y tipos de piel</li>
              <li>Maquillaje profesional para distintas estructuras faciales</li>
              <li>Técnicas avanzadas de aplicación de pestañas postizas</li>
              <li>Asesoría en marca personal y redes sociales para maquilladoras</li>
            </ul>
          </div>
        </div>
      ),
      termsContent: termsContent(),
    },
  },
];

export const getInfoContent = (index: number): ModalContent => {
  const course = coursesData[index];
  return course ? course.modalContent : coursesData[0].modalContent;
};

export const coursesArray: Course[] = coursesData;
