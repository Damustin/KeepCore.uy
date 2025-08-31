import React from "react";
import {
  AiOutlineDiscord,
  AiTwotoneBug,
  AiTwotoneExperiment,
  AiOutlineTaobao,
  AiOutlineSpotify,
  AiOutlineCode,
  AiOutlineCiCircle,
} from "react-icons/ai";

const icons = [
  { Icon: AiTwotoneBug },
  { Icon: AiOutlineDiscord },
  { Icon: AiTwotoneExperiment },
  { Icon: AiOutlineTaobao },
  { Icon: AiOutlineSpotify },
  { Icon: AiOutlineCode },
  { Icon: AiOutlineCiCircle },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-black dark:bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
           
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white dark:text-black mb-6 md:mb-0 md:mr-8 w-full md:w-1/4">
              VISIÓN
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-gray-200 dark:text-gray-800 text-center md:text-left md:w-1/3">
                Ser referentes en soluciones de conectividad en Uruguay 
                y el mundo, ofreciendo innovación con un servicio
                 confiable y seguro, construyendo un futuro interconectado, 
                 eficiente y sostenible.

            </h2>
          </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              {icons.map(({ Icon }, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <Icon className="text-3xl md:text-4xl text-white dark:text-black" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Customers;
