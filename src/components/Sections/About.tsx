import Image from "next/image";
import AboutImage from "@/assets/image-about.svg";
import Button from "../Button";
import { useState } from "react";
import Modal from "../Modal";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section
      className="px-8 flex flex-col justify-between items-center max-w-[1280px] mx-auto
    md:flex-row md:p-12 md:gap-8
    "
    >
      <Image
        src={AboutImage}
        alt="Imagem de um evento"
        className="w-64 md:w-96
        lg:w-[400px]
        xl:w-[420px]

        "
      />
      <div
        className="flex flex-col gap-2 items-center pt-8 
      md:items-start md:w-[400px]
      lg:w-[500px]
      xl:w-[700px]
      
      "
      >
        <h2
          className="text-white font-bold text-xl
        lg:text-2xl
        xl:text-3xl
        "
        >
          Sobre o Evento
        </h2>
        <p
          className="text-white text-justify text-sm
        md:text-base md:text-start
        "
        >
          Você já considerou o consórcio como uma{" "}
          <span className="text-custom-text-title">
            ferramenta poderosa de investimento
          </span>
          ?
        </p>
        <p
          className="text-white text-justify text-sm
                  md:text-base md:text-start
                  "
        >
          Neste evento exclusivo, vamos mostrar como essa modalidade,
          frequentemente associada à aquisição de bens, pode ser utilizada de{" "}
          <span className="text-custom-text-title">
            forma estratégica para gerar rentabilidade
          </span>{" "}
          e ajudar a diversificar seu portfólio de investimentos.
        </p>
        <p
          className="text-white text-justify text-sm
                  md:text-base md:text-start
                  "
        >
          <span className="text-custom-text-title">
            Seja você um investidor experiente ou alguém que está começando
          </span>{" "}
          sua jornada no mundo dos investimentos, este evento oferece insights
          práticos para todos os perfis.
        </p>
        <p
          className="text-white text-justify text-sm
                  md:text-base md:text-start
                  "
        >
          Venha conhecer estratégias inovadoras para transformar o consórcio em
          uma peça fundamental para seus investimentos de longo prazo!
        </p>
        <Button
          label="SAIBA MAIS"
          onClick={openModal}
          className="text-white mt-4 md:w-96 h-14 items-start"
        />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default About;
