import React, { useEffect } from "react";

const RDStationForm: React.FC = () => {
  useEffect(() => {
    // Verifica se o script já foi carregado
    const existingScript = document.querySelector(
      'script[src="https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js"]'
    );

    // Só adiciona o script se ele ainda não existir no DOM
    if (!existingScript) {
      const script = document.createElement("script");
      script.src =
        "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        console.log("Script do RD Station carregado.");

        // Inicializa o formulário após o script carregar
        if (window.RDStationForms) {
          if (!document.getElementById("rd-form-loaded")) {
            new window.RDStationForms(
              "captura-leads-landing-page-c767b1d0c086e5271280",
              "null"
            ).createForm();

            // Marca que o formulário foi carregado
            const flagDiv = document.createElement("div");
            flagDiv.id = "rd-form-loaded";
            document.body.appendChild(flagDiv);
          }
        }
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <div>
      <div
        role="main"
        id="captura-leads-landing-page-c767b1d0c086e5271280"
        className="my-form-container"
      ></div>
    </div>
  );
};

export default RDStationForm;
