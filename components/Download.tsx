import Image from "next/image";
import Link from "next/link";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Download: React.FC = () => (
  <section className="container mx-auto py-24 px-4 md:px-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2 order-1 p-4 flex justify-center md:justify-start items-center">
        <Image
          src="/img_1.png"
          alt="Financial app interface"
          width={500}
          height={500}
          className="w-1/2 h-auto mx-auto md:mx-0"
        />
    </div>
    </div>
  </section>
);

export default Download;
