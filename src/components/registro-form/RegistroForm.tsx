// RegistroForm.jsx
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { TipoRegistro } from "../../pages/listar-registros/ListarRegistros";
import './RegistroForm.css';

export interface RegistroFormProps {
  descricao: string;
  setDescricao: React.Dispatch<React.SetStateAction<string>>;
  tipo: TipoRegistro;
  setTipo: React.Dispatch<React.SetStateAction<TipoRegistro>>;
  valor: number;
  setValor: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}
const RegistroForm = ({
  descricao,
  setDescricao,
  tipo,
  setTipo,
  valor,
  setValor,
  onSubmit,
}: RegistroFormProps) => {
  const navigate = useNavigate();
  return (
    <form onSubmit={onSubmit}>
      <div className="radio-button">
        <FormControl>
          <RadioGroup
            row
            value={tipo}
            onChange={(event) => setTipo(event.target.value as TipoRegistro)}
          >
            <FormControlLabel
              value={TipoRegistro.DESPESA}
              control={<Radio />}
              data-testid="despesa"
              label="Despesa"
            />
            <FormControlLabel
              value={TipoRegistro.RECEITA}
              control={<Radio />}
              data-testid="receita"
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
          data-testid="descricao"
        />
        <TextField
          required
          id="valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          label="Valor (R$)"
          variant="outlined"
          data-testid="valor"
        />
      </div>

      <div className="container-button">
        <Button type="button" variant="outlined" onClick={() => navigate("/")}>
          Cancelar
        </Button>
        <Button type="submit" variant="contained">
          Salvar
        </Button>
      </div>
    </form>
  );
};

export default RegistroForm;
