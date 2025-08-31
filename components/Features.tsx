import React from "react";
import FeatureCard from "./FeatureCard";
import { FaReact, FaDatabase, FaShieldAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiStripe } from "react-icons/si";
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { TbLockAccess } from 'react-icons/tb';
import { MdDevices } from 'react-icons/md';
import { FaHelmetSafety } from 'react-icons/fa6';
const Features = () => {
  const features = [
    {
      icon: FaHelmetSafety,
      title: "Equipos calificados",
      description: "Nuestros equipos humanos estan capacitados y actualizados con las mejores tecnologias.",
    },
    {
      icon: FaDatabase,
      title: "Alojamiento seguro y constante",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      icon: MdDevices,
      title: "Dispositivos",
      description: "Garantisamos el correcto funcionamiento y conecciona  la red de sus dispositivos.",
    },
    {
      icon: AiFillSafetyCertificate,
      title: "Seguridad y fiabilidad",
      description: "lorem ipsum dolor sit amet",
    },
    {
      icon: TbLockAccess,
      title: "Control de trafico",
      description: "lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">Te ofrecemos..</h2>
          <p className="mt-8 text-xl text-gray-600 dark:text-gray-300 font-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam aliquam amet nobis enim tenetur eius et quaerat qui inventore quisquam sapiente molestias sit porro, perspiciatis fuga quas pariatur voluptas id.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
