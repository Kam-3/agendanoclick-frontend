import React from "react";
import { FormularioCadastro } from "../FormularioCadastro";
import { InfoPanel } from "../InfoPanel";
import "./pagina-cadastro.estilos.css";

export function PaginaCadastro() {
  return (
    <div className="pagina__cadastro">
      <div className="coluna__info">
        <InfoPanel />
      </div>
      <div className="coluna__container">
        <FormularioCadastro />
      </div>
    </div>
  );
}
