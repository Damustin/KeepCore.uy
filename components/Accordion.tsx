"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggleOpen }) => {
  return (
    <div className="mb-4">
      <div
        className={`w-full rounded-lg overflow-hidden ${
          isOpen ? "bg-black dark:bg-gray-900" : "bg-black dark:bg-gray-900"
        }`}
      >
        <button className="w-full text-left p-4 flex justify-between items-center" onClick={toggleOpen}>
          <span className="text-xl font-semibold text-white dark:text-white">{title}</span>
          <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            <FaChevronDown className="text-2xl text-white" />
          </span>
        </button>
        <div
          className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
            isOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <p className="text-white font-light">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const defaultAccordionItems = [
  {
    title: "Profesionalismo",
    content: "Nos comprometemos con la excelencia en cada solución, brindando un servicio responsable y de calidad.",
  },
  {
    title: "Confianza",
    content:
      "Construimos relaciones sólidas con nuestros clientes a través de la transparencia y la seguridad..",
  },
  {
    title: "Innovacion",
    content:
      "Aplicamos la ciencia y la tecnología para ofrecer soluciones creativas y a la vanguardia.",
  },
  {
    title: "Fidelidad",
    content:
      "Acompañamos el crecimiento de cada cliente con compromiso y cercanía.",
  },
  {
    title: "Eficiencia",
    content:
      "Optimizamos recursos y procesos para garantizar rapidez y resultados efectivos.",

  },
  {
    title: "Sostenibilidad",
    content:
      "Trabajamos con responsabilidad social y ambiental, aportando a un futuro más equilibrado.",

  },
  {
    title: "Trabajo en equipo",
    content:
      "Valoramos la colaboración entre personas y tecnologías para alcanzar objetivos comunes.",

  },
];

interface AccordionProps {
  items?: { title: string; content: string }[];
}

const Accordion: React.FC<AccordionProps> = ({ items = defaultAccordionItems }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-[90%]">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          toggleOpen={() => toggleItem(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
