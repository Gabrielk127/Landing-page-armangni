import Image, { StaticImageData } from "next/image";
import React from "react";

interface CardProps {
  icon: string | StaticImageData;
  title: string;
}

const CardText: React.FC<CardProps> = ({ icon, title }) => {
  return (
    <main className="w-full">
      <div className="w-full bg-[#101c28] p-4 rounded-xl flex flex-row gap-4 border-2 border-cyan-700">
        <div>
          <Image src={icon} alt={title} className="w-12" />
        </div>
        <p className="text-md text-white font-light text-start mt-4">{title}</p>
      </div>
    </main>
  );
};

export default CardText;
