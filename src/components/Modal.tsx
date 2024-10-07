// Modal.tsx
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Adiciona a classe para bloquear o scroll da página
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      // Cria o novo formulário do RD Station quando o modal é aberto
      const script = document.createElement("script");
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.onload = () => {
        new RDStationForms(
          "landing-page-evento-ax-ff87bfcd39f0a41e6286",
          "null"
        ).createForm();
      };
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="p-6 rounded shadow-lg max-w-lg w-full relative">
        <button
          className="absolute top-2 right-2 text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <div id="landing-page-evento-ax-ff87bfcd39f0a41e6286"></div>
      </div>
    </div>
  );
};

export default Modal;
