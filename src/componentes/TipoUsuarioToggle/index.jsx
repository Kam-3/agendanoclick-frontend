import React, { useState } from 'react';
import './tipo-usuario-toggle.estilos.css' // Importa o CSS para este componente

export function TipoUsuarioToogle() {
    // O estado 'activeButton' guarda qual botão está ativo: 'contratar' ou 'oferecer'
    const [activeButton, setActiveButton] = useState('contratar'); // 'contratar' começa ativo

    // Opcional: Você pode passar o estado ativo para um componente pai, se precisar
    // Por exemplo, se quiser que a página de cadastro saiba qual tipo foi selecionado
    // function handleSelection(type) {
    //     setActiveButton(type);
    //     if (props.onSelect) { // Se o pai passou uma função onSelect
    //         props.onSelect(type);
    //     }
    // }

    return (
        <div className="toggle-container">
            <button
                // Adiciona a classe 'active' se activeButton for 'contratar'
                className={`toggle-btn ${activeButton === 'contratar' ? 'active' : ''}`}
                onClick={() => setActiveButton('contratar')} // Quando clicado, define 'contratar' como ativo
            >
                Quero contratar
            </button>
            <button
                // Adiciona a classe 'active' se activeButton for 'oferecer'
                className={`toggle-btn ${activeButton === 'oferecer' ? 'active' : ''}`}
                onClick={() => setActiveButton('oferecer')} // Quando clicado, define 'oferecer' como ativo
            >
                Quero oferecer serviços
            </button>
        </div>
    );
}
