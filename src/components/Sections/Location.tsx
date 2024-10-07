import Image from "next/image";
import fontana from "@/assets/fontana.svg";
import Map from "./map";
import { MapPin, MessageCircle, Phone, Sparkles } from "lucide-react";
import Button from "../Button";
import { useState } from "react";
import Modal from "../Modal";

const Location: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="px-8 max-w-[1280px] mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-white pb-8 md:p-12">
        <span className="text-custom-text-title">Villa Fontana</span> <br />
        Aurora Shopping
      </h2>
      <div
        className="flex flex-col justify-center items-center gap-8
      sm:flex-row sm:justify-between
      "
      >
        <Image src={fontana} alt="Restaurante" className="w-64 lg:w-[400px]" />
        <div className="flex flex-col justify-center items-center bg-white rounded-xl p-10 gap-4 h-full lg:h-[350px]">
          <p className="text-center font-bold text-custom-text-title lg:text-lg">
            09 Outubro 2024
          </p>
          <p className="text-center font-bold text-custom-text-title lg:text-lg">
            19:30
          </p>
          <p className="text-center font-bold">
            <MapPin className="mx-auto text-custom-text-title" />
            Av. Ayrton Senna da Silva, 400 Palhano 1, Londrina - PR, 86050-460
          </p>
          <div className="mx-auto">
            <Map />
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-8">
        <Button
          label="GARANTA SUA VAGA"
          onClick={openModal}
          className="text-white mt-4 md:w-96 h-14"
        />
      </div>
      <section className="max-w-3xl mx-auto my-12 lg:my-32 overflow-hidden rounded-lg shadow-lg bg-gradient-to-br from-zinc-900 to-zin-950 text-white">
        <div className="relative p-6">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-10 transform -skew-y-6"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Sparkles className="mr-2" />
              Fale Conosco
            </h2>
            <p className="mb-6">
              Se você tem alguma dúvida sobre o evento ou gostaria de mais
              informações, entre em contato com nossa equipe:
            </p>
            <div className="flex items-center mb-4">
              <Phone className="mr-3" />
              <a
                href="https://api.whatsapp.com/send?phone=5543991708520
"
                className="text-xl font-semibold hover:underline"
              >
                43 99170-8520
              </a>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=5543991708520
"
            >
              <button className="w-full py-2 px-4 bg-white text-custom-text-title rounded-full font-bold hover:bg-opacity-90 transition duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2" />
                Enviar Mensagem
              </button>
            </a>
          </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} />
      </section>
    </section>
  );
};

export default Location;
