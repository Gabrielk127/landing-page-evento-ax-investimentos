import Image from "next/image";
import imageEvent from "@/assets/image-event.svg";

export default function EventDescription() {
  const learningPoints = [
    "Está buscando alternativas seguras e eficientes de investimento;",
    "Quer diversificar sua carteira de investimentos de forma estratégica;",
    "Deseja entender como o consórcio pode ser uma ferramenta de rentabilidade;",
    "É um investidor que busca soluções criativas para seus planos financeiros de longo prazo.",
  ];

  return (
    <div className="flex flex-col items-center md:flex-row max-w-[1280px] mx-auto text-white md:p-12">
      <div className="md:w-1/2 relative overflow-hidden rounded-tl-3xl rounded-bl-3xl">
        <Image
          src={imageEvent}
          alt="Três pessoas sorridentes segurando taças de champanhe"
          className="w-64 md:w-96
          lg:w-[400px]
          xl:w-[520px]
  
          "
        />
      </div>
      <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Este evento é para você:
        </h2>
        <ul className="space-y-4">
          {learningPoints.map((point, index) => (
            <li key={index} className="bg-zinc-900 p-3 rounded">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
