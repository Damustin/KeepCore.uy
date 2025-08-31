import Header from "components/Header";
import Hero from "components/Hero";
import Features from "components/Features";
import Section from "components/Section";
import Footer from "components/Footer";
import Customers from "components/Customers";
import Image from "next/image";
import Accordion from "components/Accordion";
import Reviews from "components/Reviews";
import Download from "components/Download";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main>
        <Hero />
        <Features />
        <Section
          leftHalf={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Sobre nosotros.
              </h1>
              <p className="text-xl font-light">
              En Keepcore.uy somos una empresa uruguaya dedicada a ofrecer soluciones de conectividad y redes que impulsan a las empresas hacia el futuro digital. Apostamos por la calidad, la innovación y la seguridad, brindando un servicio confiable que garantiza eficiencia y crecimiento sostenido.
              Nos destacamos por transformar la complejidad tecnológica en procesos simples, accesibles y efectivos, acompañando a nuestros clientes desde la instalación hasta la gestión y el mantenimiento de sus sistemas.
              Nuestro equipo multidisciplinario —integrado por especialistas en redes, informática e instalación tecnológica— trabaja con profesionalismo y pasión para que cada proyecto sea una experiencia exitosa. En Keepcore.uy creemos en la mejora continua, en la construcción de relaciones de confianza y en llevar la conectividad a un nivel superior: “The science of networking”.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/working_1.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
       <Section
          leftHalf={
            <>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Visión
              </h1>
              <p className="text-xl font-light">
              Ser referentes en soluciones de conectividad en Uruguay y 
              el mundo, ofreciendo innovación con un servicio confiable 
              y seguro, construyendo un futuro interconectado
              , eficiente y sostenible.
              </p>
            </>
          }
          rightHalf={
            <Image src={"/working_2.png"} alt="section-image" width={500} height={100} className="w-1/2 h-auto" />
          }
        />
        <Section
          leftHalf={<Accordion />}
          rightHalf={
            <div className="flex flex-col justify-end">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
                Nuestros valores como empresa.
              </h2>
              <p className="text-xl font-light">
                Nuestros valores no solo hablan de nosotros sino tambien de nuestros clientes 
                y la relacion que creamos 
                con ellos.
              </p>
            </div>
          }
        />
        <Reviews />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
