import React, { useState } from "react";
import CheckCircleIcon from "/src/assets/Check circle.svg";
import CreditCardIcon from "/src/assets/Credit card.svg";
import CalendarIcon from "/src/assets/Calendar.svg";
import StarIcon from "/src/assets/Star.svg";
import imagemProfissionais from "../../assets/foto_profissionais.svg";
import "./info-panel.estilos.css";

const funcionalidades = [
  {
    id: 1,
    nome: "checkcircle",
    imagemSrc: CheckCircleIcon,
    texto: "Encontre os melhores profissionais",
  },
  {
    id: 2,
    nome: "calendar",
    imagemSrc: CalendarIcon,
    texto: "Gerencie a sua agenda com facilidade",
  },
  {
    id: 3,
    nome: "creditcard",
    imagemSrc: CreditCardIcon,
    texto: "Pagamentos seguros e rápidos",
  },
  {
    id: 4,
    nome: "staricon",
    imagemSrc: StarIcon,
    texto: "Avaliações e confiança",
  },
];

export function InfoPanel() {
  return <Funcionalidade />;
}

function Funcionalidade() {
  const [idAtivo, setIdAtivo] = useState(1);
  const funcionalidadeAtiva = funcionalidades.find(
    (item) => item.id === idAtivo
  );

  if (!funcionalidadeAtiva) {
    return <p>Funcionalidade não encontrada!</p>;
  }

  return (
    <div className="coluna__esquerda">
      <h1>
        Sua agenda <br /> de serviços a <br /> um clique de <br /> distância.
      </h1>

      <div className="conteudo__interativo">
        <ul className="lista__funcionalidades">
          {funcionalidades.map((item) => (
            <li
              key={item.id}
              className={item.id === idAtivo ? "item__ativo" : "item"}
              onMouseEnter={() => setIdAtivo(item.id)}
            >
              <img src={item.imagemSrc} alt="" className="icone" />
              <span>{item.texto}</span>
            </li>
          ))}
        </ul>

        <img
          src={imagemProfissionais}
          alt="Profissionais de serviços"
          className="imagem__profissionais"
        />
      </div>
    </div>
  );
}
