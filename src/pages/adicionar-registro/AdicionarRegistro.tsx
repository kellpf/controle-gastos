import { useState } from "react";

export const AdicionarRegistro = () => {
  const [descricao, setDescricao] = useState("");

    const submit = (e) => { 
        e.preventDefault();
        console.log('Clicou!')
    }

  return (
    <form onSubmit={submit}> 
      <label>
        Descrição
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
};