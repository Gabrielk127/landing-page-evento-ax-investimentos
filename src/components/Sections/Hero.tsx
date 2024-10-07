import Image from "next/image";
import hero from "@/assets/image-hero.svg";
import Button from "../Button";
import { useState } from "react";
import Modal from "../Modal";

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="bg-custom-background px-4 pt-16 max-w-[1280px] justify-center mx-auto
    md:flex md:flex-row md:justify-center md:items-center md:gap-20 md:p-12
    xl:pt-20
    "
    >
      <div
        className="md:flex md:flex-col md:gap-2 md:w-[500px]
      xl:w-[700px]
      "
      >
        <p
          className="font-bold text-custom-text-title text-base text-center pb-4
        md:text-start md:pb-0 md:text-lg
        lg:text-xl
        xl:text-2xl
        "
        >
          APENAS 30 VAGAS
        </p>
        <h1
          className="font-bold text-white text-lg text-center
        md:text-start md:text-xl
        lg:text-2xl
        xl:text-4xl
        "
        >
          Faça parte de um evento exclusivo em Londrina, e descubra como
          investir com rentabilidade garantida
        </h1>
        <Button
          label="QUERO MINHA VAGA!"
          onClick={openModal}
          className="text-white hidden mt-4 md:flex md:w-96 h-14 items-center"
        />
      </div>

      <Image
        src={hero}
        alt="Imagem de um brinde"
        className="w-64 mx-auto py-8
        md:w-72
        lg:w-96 
        xl:w-[420px]
        "
      />
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      <Button
        label="QUERO MINHA VAGA!"
        className="text-white md:hidden"
        onClick={openModal}
      />
    </section>
  );
};

export default Hero;
