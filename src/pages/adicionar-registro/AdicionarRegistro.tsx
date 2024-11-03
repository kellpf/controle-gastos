import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AdicionarRegistro = () => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const navigate = useNavigate();


  const submit = (e) => {
    e.preventDefault();
    console.log("Clicou!");
  };

  return (
    <>
      <Button onClick={() => navigate('/')}>Voltar</Button>
      <h1>Adicionar</h1>
      <form onSubmit={submit}>
        <label>
          Descrição
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>

        <label>
          Tipo
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </label>

        <label>
          Descrição
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </>
  );
};
