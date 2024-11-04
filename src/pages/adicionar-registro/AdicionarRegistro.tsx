import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { GlobalContext } from "../../context/GlobalState";
import {
  TipoRegistro
} from "../listar-registros/ListarRegistros";
import "./AdicionarRegistro.css";

export const AdicionarRegistro = () => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState<TipoRegistro>(TipoRegistro.DESPESA);
  const [valor, setValor] = useState("");

  const { registros, adicionaRegistro, editaRegistro } =
    useContext(GlobalContext);

  const navigate = useNavigate();
  const paramsId = useParams();

  useEffect(() => {
    if (paramsId.id) {
      console.log("tem params!");
      const findRegistro = registros.find(
        (registro) => registro.id === paramsId.id
      );
      if (findRegistro) {
        setDescricao(findRegistro.descricao);
        setValor(findRegistro.valor.toString());
        setTipo(findRegistro.tipo);
        console.log("registroSelecionado", findRegistro);
      }
    }
  }, [registros, paramsId]);

  const submit = () => {
    if (paramsId.id) {
      console.log("edit");
      editaRegistro({
        id: paramsId?.id,
        descricao: descricao,
        tipo: tipo,
        valor: parseFloat(valor),
      });
    } else {
      console.log("add");
      adicionaRegistro({
        id: uuid(),
        descricao: descricao,
        tipo: tipo,
        valor: parseFloat(valor),
      });
    }
    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-button">
        <Button variant="outlined" size="small" onClick={() => navigate("/")}>
          <ArrowBackIcon />
          Voltar
        </Button>
      </div>

      <h1>Registre sua despesa ou receita</h1>
      <form onSubmit={submit}>
        <div className="radio-button">
          <FormControl>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={tipo}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTipo(event.target.value as TipoRegistro)
              }
            >
              <FormControlLabel
                value={TipoRegistro.DESPESA}
                control={<Radio />}
                label="Despesa"
              />
              <FormControlLabel
                value={TipoRegistro.RECEITA}
                control={<Radio />}
                label="Receita"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="group-field">
          <TextField
            required
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            label="Descrição"
            variant="outlined"
          />
          <TextField
            required
            id="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            label="Valor (R$)"
            variant="outlined"
          />
        </div>

        <div className="container-button">
          <Button onClick={() => navigate("/")} variant="outlined">
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Adicionar
          </Button>
        </div>
      </form>
    </div>
  );
};
