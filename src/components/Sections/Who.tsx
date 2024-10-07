import Card from "../Card";
import icon1 from "@/assets/icon1.svg";
import icon2 from "@/assets/icon2.svg";
import icon3 from "@/assets/icon3.svg";

const Who: React.FC = () => {
  return (
    <section className="max-w-[1280px] mx-auto md:p-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">
        Por que Participar?
      </h1>

      <div className="grid sm:grid-cols-3 justify-between items-center">
        <Card
          image={icon1}
          title="Conteúdo Exclusivo"
          desc="Aprenda com especialistas do setor e descubra novas oportunidades de investimento."
        />
        <Card
          image={icon2}
          title="Networking"
          desc="Conecte-se com outros investidores e profissionais do setor."
        />
        <Card
          image={icon3}
          title="Estratégias Personalizada"
          desc="Dicas práticas que você pode aplicar imediatamente aos seus investimentos."
        />
      </div>
    </section>
  );
};

export default Who;
