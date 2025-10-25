import React, { useState } from "react";
import { Botao } from "../Botao";
import { CampoTexto } from "../CampoTexto";
import { TipoUsuarioToogle } from "../TipoUsuarioToggle";
import { Label } from "../Label";
import "./formulario-cadastro.estilos.css";

export function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [tipoUsuario, setTipoUsuario] = useState("contratar");

  const aoSalvar = async (evento) => {
    evento.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem! Por favor, verifique.");
      return;
    }

    let url = "";
    let dadosParaEnviar = {};

    if (tipoUsuario === "contratar") {
      url = "/api/user/register";
      dadosParaEnviar = {
        name: nome,
        cpf: cpf,
        email: email,
        password: senha,
        phone_number: telefone,
      };
    } else {
      url = "/api/professional/register";
      dadosParaEnviar = {
        name: nome,
        cpf_cnpj: cpf,
        email: email,
        password: senha,
        // Adicione outros campos obrigatórios do backend, como category, bio, etc.
      };
    }

    try {
      const resposta = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dadosParaEnviar),
      });

      const dadosDaResposta = await resposta.json();

      if (!resposta.ok) {
        let mensagemDeErro = dadosDaResposta.message || "Ocorreu um erro.";
        if (dadosDaResposta.errors) {
          mensagemDeErro +=
            `
` +
            Object.values(dadosDaResposta.errors).join(`
`);
        }
        throw new Error(mensagemDeErro);
      }

      alert(dadosDaResposta.message || "Conta criada com sucesso!");
      console.log("Resposta do servidor:", dadosDaResposta);
    } catch (erro) {
      console.error("Falha ao criar conta:", erro);
      alert(`Erro ao criar conta: ${erro.message}`);
    }
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
            aoAlterado={(valor) => setNome(valor)}
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
          <Label htmlFor="telefone">Celular</Label>
          <CampoTexto
            id="telefone"
            type="tel"
            placeholder="(00) 90000-0000"
            valor={telefone}
            aoAlterado={(valor) => setTelefone(valor)}
            obrigatorio={true}
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

        <div className="form-grupo-checkbox">
          <input type="checkbox" id="termos" required />
          <Label htmlFor="termos">
            Eu li e concordo com os <a href="/termos">Termos de Serviço</a> e a{" "}
            <a href="/privacidade">Política de Privacidade</a>.
          </Label>
        </div>

        <Botao>CRIAR MINHA CONTA</Botao>

        <p className="form__link-login">
          Já tem uma conta? <a href="/login">Faça Login</a>
        </p>
      </form>
    </section>
  );
}
