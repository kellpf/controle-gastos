import { TipoRegistro } from "../../utils/registros";
import "./Tag.scss";

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
