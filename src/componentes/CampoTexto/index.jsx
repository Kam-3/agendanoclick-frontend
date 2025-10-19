import React from "react";
import "./campo-texto.estilos.css";

export function CampoTexto({
  valor,
  aoAlterado,
  placeholder,
  type = "text",
  obrigatorio,
}) {
  const aoDigitar = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <input
      className="campo__texto"
      type={type}
      placeholder={placeholder}
      value={valor}
      onChange={aoDigitar}
      required={obrigatorio}
    />
  );
}
