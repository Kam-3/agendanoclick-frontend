

import React from 'react';
import { FormularioCadastro } from '../FormularioCadastro'
import { InfoPanel } from '../InfoPanel'
import './pagina-cadastro.estilos.css'

export function PaginaCadastro() {
    return (
        // O card principal
        <div className="pagina__cadastro">
            
            {/* A coluna da esquerda que ficará azul */}
            <div className="coluna-info"> 
                <InfoPanel />
                {/*<img 
                    src={imagemProfissionais} 
                    alt="Profissionais de serviços" 
                    className="imagem-profissionais-principal" 
                />*/}
            </div>

            {/* A coluna da direita que ficará branca */}
            <div className="coluna-form-container">
                <FormularioCadastro />
            </div>

        </div>
    );
}