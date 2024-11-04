import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";
import "./AdicionarRegistro.css";
import { TipoRegistro } from "../listar-registros/ListarRegistros";

export const AdicionarRegistro = () => {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState<TipoRegistro>(TipoRegistro.DESPESA);
  const [valor, setValor] = useState(0);
  const navigate = useNavigate();

  const { adicionaRegistro } = useContext(GlobalContext);

  const submit = (e) => {
    e.preventDefault();
    console.log("Clicou!");

    adicionaRegistro({
      id: "3",
      descricao: descricao,
      tipo: tipo,
      valor: valor,
    });

    navigate("/");
  };

  return (
    <div className="container">
      <div className="container-button">
        <Button variant="contained" onClick={() => navigate("/")}>
          Voltar
        </Button>
      </div>
      <h1>Registre sua despesa ou receita</h1>
      <form onSubmit={submit}>
        <div className="radio-button">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Tipo</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={tipo}
              onChange={(event, value: TipoRegistro) => setTipo(value)}
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
            id="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            label="Descrição"
            variant="outlined"
          />
          <TextField
            id="valor"
            prefix="R$"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            label="Valor (R$)"
            variant="outlined"
          />
        </div>

        <div className="container-button">
          <Button type="submit" variant="contained">
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
