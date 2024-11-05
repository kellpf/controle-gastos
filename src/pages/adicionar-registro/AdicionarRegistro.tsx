import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import RegistroForm from "../../components/registro-form/RegistroForm";
import { GlobalContext } from "../../context/GlobalState";
import { TipoRegistro } from "../listar-registros/ListarRegistros";

export const AdicionarRegistro = () => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState(TipoRegistro.DESPESA);
  const [valor, setValor] = useState("");

  const { adicionaRegistro } = useContext(GlobalContext);
  const navigate = useNavigate();

  const submit = () => {
    adicionaRegistro({
      id: uuid(),
      descricao: descricao,
      tipo: tipo,
      valor: parseFloat(valor),
    });
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-button">
        <Button variant="outlined" id="botao-voltar" data-testid="botao-voltar" size="small" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          Voltar
        </Button>
      </div>

      <h1>Registre sua despesa ou receita</h1>
      <RegistroForm
        descricao={descricao}
        setDescricao={setDescricao}
        tipo={tipo}
        setTipo={setTipo}
        valor={valor}
        setValor={setValor}
        onSubmit={submit}
      />
    </div>
  );
};
