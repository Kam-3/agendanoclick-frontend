import React, { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { TipoUsuarioToogle } from '../TipoUsuarioToggle';
import { Label } from '../Label';
import './formulario-cadastro.estilos.css';

export function FormularioCadastro() {
    // Estados para cada campo do formulário
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState(''); // Estado para confirmação

    // Função executada ao submeter o formulário
    const aoSalvar = (evento) => {
        evento.preventDefault();
        
        // Verificação se as senhas coincidem
        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem! Por favor, verifique.");
            return; // Interrompe a submissão se as senhas forem diferentes
        }

        console.log("Formulário submetido =>", { nome, cpf, email, senha });
        alert("Conta criada com sucesso! Verifique o console.");
        
        // Opcional: Limpar os campos após o envio
        setNome('');
        setCpf('');
        setEmail('');
        setSenha('');
        setConfirmarSenha('');
    }

    return (
        <section className="coluna__form">
            <div className="header__form">
                <img src="/src/assets/logo_agenda.svg" alt="Logo Agenda no Click" className='logo__agenda'/>
                <h2>Crie sua conta</h2>
                <p className='texto__pequeno'>Rápido, fácil e seguro.</p>
            </div>
            
            <TipoUsuarioToogle/>
            
            <form onSubmit={aoSalvar} className="form__inputs">
                
                {/* --- Campo Nome Completo --- */}
                <div className="form-grupo">
                    <Label htmlFor="nome">Nome completo</Label>
                    <CampoTexto
                        obrigatorio={true}
                        id="nome"
                        type="text"
                        placeholder="Digite seu nome completo"
                        valor={nome}
                        aoAlterado={valor => setNome(valor)} // CORRIGIDO
                    />
                </div>

                {/* --- Campo CPF --- */}
                <div className="form-grupo">
                    <Label htmlFor="cpf">CPF</Label>
                    <CampoTexto
                        obrigatorio={true}
                        id="cpf"
                        type="text" // Usar "text" é melhor para CPF para permitir máscaras
                        placeholder="000.000.000-00"
                        valor={cpf}
                        aoAlterado={valor => setCpf(valor)}
                    />
                </div>

                {/* --- Campo Email --- */}
                <div className="form-grupo">
                    <Label htmlFor="email">Email</Label>
                    <CampoTexto
                        obrigatorio={true}
                        id="email"
                        type="email"
                        placeholder="seuemail@dominio.com"
                        valor={email}
                        aoAlterado={valor => setEmail(valor)}
                    />
                </div>

                {/* --- Campo Senha --- */}
                <div className="form-grupo">
                    <Label htmlFor="senha">Senha</Label>
                    <CampoTexto
                        obrigatorio={true}
                        id="senha"
                        type="password"
                        placeholder="Crie sua senha"
                        valor={senha}
                        aoAlterado={valor => setSenha(valor)}
                    />
                </div>

                {/* --- Campo Confirmar Senha --- */}
                <div className="form-grupo">
                    <Label htmlFor="confirmarSenha">Confirmar senha</Label>
                    <CampoTexto
                        obrigatorio={true}
                        id="confirmarSenha"
                        type="password"
                        placeholder="Confirme sua senha"
                        valor={confirmarSenha}
                        aoAlterado={valor => setConfirmarSenha(valor)}
                    />
                </div>
                
                <Botao>
                    CRIAR MINHA CONTA
                </Botao>
            </form>
        </section>
    );
}