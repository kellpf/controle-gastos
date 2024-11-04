
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import RegistroForm from "../../components/registro-form/RegistroForm";
import { GlobalContext } from "../../context/GlobalState";
import { TipoRegistro } from "../listar-registros/ListarRegistros";

export const EditarRegistro = () => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState(TipoRegistro.DESPESA);
  const [valor, setValor] = useState("");

  const { registros, editaRegistro } = useContext(GlobalContext);
  const navigate = useNavigate();
  const paramsId = useParams();

  useEffect(() => {
    if (paramsId.id) {
      const findRegistro = registros.find(
        (registro) => registro.id === paramsId.id
      );
      if (findRegistro) {
        setDescricao(findRegistro.descricao);
        setValor(findRegistro.valor.toString());
        setTipo(findRegistro.tipo);
      }
    }
  }, [registros, paramsId]);

  const submit = () => {
    if (paramsId.id) {
      editaRegistro({
        id: paramsId.id,
        descricao: descricao,
        tipo: tipo,
        valor: parseFloat(valor),
      });
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="container-button">
        <Button variant="outlined" size="small" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          Voltar
        </Button>
      </div>

      <h1>Edite seu registro</h1>
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
