interface CardProps {
  image: string;
  title: string;
  desc: string;
}

import Image from "next/image";

const Card: React.FC<CardProps> = ({ image, title, desc }) => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 bg-custom-background p-8 mx-8 my-4 rounded-xl h-64 sm:h-96 lg:h-64">
      <Image src={image} alt="Ícone de estrela" className="w-24" />
      <p className="text-center text-base font-bold text-white">{title}</p>
      <p className="text-center text-sm text-custom-text-title">{desc}</p>
    </section>
  );
};

export default Card;
