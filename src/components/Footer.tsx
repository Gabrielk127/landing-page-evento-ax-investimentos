import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="mb-2">
            AX, Negócios, Créditos e Investimentos - Todos os direitos
            reservados
          </p>
          <nav className="flex justify-center space-x-4">
            <Link
              href="https://www.axnegocioseinvestimentos.com.br/política-de-privacidade"
              className="hover:underline"
            >
              Política de Privacidade
            </Link>
            <span>|</span>
            <Link
              href="https://www.axnegocioseinvestimentos.com.br/política-de-cookies"
              className="hover:underline"
            >
              Termos de Uso
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
