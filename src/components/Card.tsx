import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  icon: string | StaticImageData;
  title: string;
}

const Card: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <main className="w-full">
      <div className="w-full bg-[#101c28] p-4 rounded-xl flex flex-col items-center border-2 border-cyan-700">
        <div className="bg-[#ffc95411] p-8 rounded-full hover:border hover:border-cyan-700">
          <Image src={icon} alt={title} className="w-12" />
        </div>
        <p className="text-xl font-bold text-white text-center mt-4">{title}</p>
      </div>
    </main>
  );
};

export default Card;
