import React from 'react';
import './campo-texto.estilos.css';

// Componente para cada campo de input do formulário
export function CampoTexto({ children }) {

    return (
    <input {...children}
     className='campo__texto'/>
    );
}
