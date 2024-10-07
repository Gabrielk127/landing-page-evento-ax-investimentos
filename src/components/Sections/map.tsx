interface MapProps {
  address?: string; // Tornar o address opcional
}

export default function Map({ address }: MapProps) {
  // Usar um valor padrão caso address não seja fornecido
  const defaultAddress =
    "Av. Ayrton Senna da Silva, 400 Palhano 1, Londrina - PR, 86050-460";
  const effectiveAddress = address || defaultAddress; // Verifica se o address foi passado, caso contrário usa o padrão

  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    effectiveAddress
  )}`;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <a href={mapUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Ver no Google Maps
        </button>
      </a>
    </div>
  );
}
