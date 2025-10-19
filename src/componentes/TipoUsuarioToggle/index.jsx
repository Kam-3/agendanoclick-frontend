import React from 'react';
import './tipo-usuario-toggle.estilos.css';


export function TipoUsuarioToogle({ children, onTipoChange }) {
    


    return (
        <div className="toggle__container">
            <button

                className={`toggle__btn ${children === 'contratar' ? 'active' : ''}`}

                onClick={() => onTipoChange('contratar')}
            >
                Quero contratar
            </button>
            <button
                className={`toggle__btn ${children === 'oferecer' ? 'active' : ''}`}
                onClick={() => onTipoChange('oferecer')}
            >
                Quero oferecer serviços
            </button>
        </div>
    );
}