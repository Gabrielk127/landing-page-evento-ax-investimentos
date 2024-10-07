import Image from "next/image";
import logoAx from "@/assets/logo-ax.svg";
import logoUniao from "@/assets/logo-uniao.svg";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="bg-custom-background-black fixed top-0 left-0 w-full z-10">
      <div
        className="md:flex md:flex-row md:justify-around md:items-center px-4
      lg:px-0
      "
      >
        <div
          className="flex flex-row justify-between items-center p-2 gap-12
          lg:gap-14 lg:p-2
          xl:gap-40
      "
        >
          <Image
            src={logoAx}
            alt="Logo Ax Negócios, Créditos e Investimentos"
            className="w-36 h-full
            md:w-40
            lg:w-48
            "
          />
          <Image
            src={logoUniao}
            alt="Logo Ax Negócios, Créditos e Investimentos"
            className="w-36 h-full
            md:w-40
            lg:w-48
            "
          />
        </div>
        <Button
          label="Saiba mais"
          onClick={openModal}
          className="hidden md:flex md:w-48 text-center
          lg:w-48
          "
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Header;
