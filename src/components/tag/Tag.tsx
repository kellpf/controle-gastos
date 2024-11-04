import { TipoRegistro } from "../../pages/listar-registros/ListarRegistros";
import "./Tag.css";

export interface TagProps {
  tipo: TipoRegistro;
}

export const Tag = ({ tipo }: TagProps) => {
  return (
    <div className={`tag ${tipo}`}>
      <span>{tipo}</span>
    </div>
  );
};
