export default function ProfileInfographic() {
  const profilePoints = [
    "Como utilizar consórcios como uma ferramenta estratégica para investimento;",
    "Vantagens do consórcio em comparação a outras modalidades de investimento;",
    "Como maximizar seus retornos utilizando a contemplação e lances;",
    "Dicas práticas de como integrar consórcios ao seu portfólio de investimentos;",
    "Casos reais de sucesso de investidores que utilizaram consórcios estrategicamente.",
  ];

  return (
    <div className="min-h-screen bg-custom-background-two text-white px-6 flex flex-col items-center justify-center relative z-0">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Neste evento, você terá a oportunidade de aprender:
        </h1>

        <div className="relative">
          {profilePoints.map((point, index) => (
            <div key={index} className="flex items-start mb-6">
              <div className="flex-shrink-0 w-4 h-4 rounded-full bg-custom-background-button mt-1.5 mr-4"></div>
              <div className="flex-grow">
                <div className="bg-custom-background p-4 rounded-lg">
                  <p className="text-sm md:text-base">{point}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-custom-background-button"></div>
        </div>
      </div>
    </div>
  );
}
