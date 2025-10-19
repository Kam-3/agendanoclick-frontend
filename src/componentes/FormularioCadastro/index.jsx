import React, { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { TipoUsuarioToogle } from "../TipoUsuarioToggle";
import { Label } from "../Label";
import "./formulario-cadastro.estilos.css";

export function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [tipoUsuario, setTipoUsuario] = useState("contratar");

  const aoSalvar = (evento) => {
    evento.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem! Por favor, verifique.");
      return;
    }

    console.log("Formulário submetido =>", {
      nome,
      cpf,
      email,
      senha,
      tipoUsuario,
    });
    alert(
      `Conta do tipo "${tipoUsuario}" criada com sucesso! Verifique o console.`
    );
  };

  return (
    <section className="coluna__form">
      <div className="header__form">
        <img
          src="/src/assets/logo_agenda.svg"
          alt="Logo Agenda no Click"
          className="logo__agenda"
        />
        <h2>Crie sua conta</h2>
        <p className="texto__pequeno">Rápido, fácil e seguro.</p>
      </div>

      <TipoUsuarioToogle children={tipoUsuario} onTipoChange={setTipoUsuario} />

      <form onSubmit={aoSalvar} className="form__inputs">
        <div className="form-grupo">
          <Label htmlFor="nome">Nome completo</Label>
          <CampoTexto
            obrigatorio={true}
            id="nome"
            type="text"
            placeholder="Digite seu nome completo"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)} // CORRIGIDO
          />
        </div>

        <div className="form-grupo">
          <Label htmlFor="cpf">CPF</Label>
          <CampoTexto
            obrigatorio={true}
            id="cpf"
            type="text"
            placeholder="000.000.000-00"
            valor={cpf}
            aoAlterado={(valor) => setCpf(valor)}
          />
        </div>

        <div className="form-grupo">
          <Label htmlFor="email">Email</Label>
          <CampoTexto
            obrigatorio={true}
            id="email"
            type="email"
            placeholder="seuemail@dominio.com"
            valor={email}
            aoAlterado={(valor) => setEmail(valor)}
          />
        </div>

        <div className="form-grupo">
          <Label htmlFor="senha">Senha</Label>
          <CampoTexto
            obrigatorio={true}
            id="senha"
            type="password"
            placeholder="Crie sua senha"
            valor={senha}
            aoAlterado={(valor) => setSenha(valor)}
          />
        </div>

        <div className="form-grupo">
          <Label htmlFor="confirmarSenha">Confirmar senha</Label>
          <CampoTexto
            obrigatorio={true}
            id="confirmarSenha"
            type="password"
            placeholder="Confirme sua senha"
            valor={confirmarSenha}
            aoAlterado={(valor) => setConfirmarSenha(valor)}
          />
        </div>

        <Botao>CRIAR MINHA CONTA</Botao>
      </form>
    </section>
  );
}
