// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode realizar a lógica de autenticação com os dados de login (username e password)
    // Por exemplo, fazer uma requisição para um servidor backend
    console.log("Usuário:", username);
    console.log("Senha:", password);
    // Limpar os campos do formulário
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Nome de usuário:</label>
        <br />
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />
        <br />
        <br />

        <label htmlFor="password">Senha:</label>
        <br />

        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <br />
        <br />

        <Link to={"/home"}>
          <input type="submit" value="Entrar" />
        </Link>
        <div className="criar">
          Não tem conta <Link to={'/Cadastro'}> click aqui </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
