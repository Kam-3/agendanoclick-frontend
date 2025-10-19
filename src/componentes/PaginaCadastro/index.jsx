import React from 'react';
import { FormularioCadastro } from '../FormularioCadastro';
import { InfoPanel } from '../InfoPanel';
import { TipoUsuarioToogle } from '../TipoUsuarioToggle';
import './pagina-cadastro.estilos.css';

// Componente que junta as duas colunas para formar a página
export function PaginaCadastro() {
    return (
        <div className="pagina__cadastro">
            <InfoPanel />
            <FormularioCadastro />
        </div>
    );
}

