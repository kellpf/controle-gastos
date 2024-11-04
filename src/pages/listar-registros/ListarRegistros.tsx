import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Tag } from "../../components/tag/Tag";
import { GlobalContext } from "../../context/GlobalState";
import "./ListarRegistros.css";

export enum TipoRegistro {
  DESPESA = "despesa",
  RECEITA = "receita",
}

export interface RegistroFinanceiro {
  id: string;
  tipo: TipoRegistro;
  descricao: string;
  valor: number;
  data?: Date;
  categoria?: string;
}

export const ListarRegistros = () => {
  const { registros, removeRegistro } = useContext(GlobalContext);
  const navigate = useNavigate();
  // console.log("registros context", registros);

  return (
    <>
      <div className="header">
        <h1>Controle de gastos pessoais</h1>
        <Button variant="contained" onClick={() => navigate("/adicionar")}>
          Adicionar
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead style={{ backgroundColor: "#E9ECEF" }}>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell >Descrição</TableCell>
              <TableCell >Valor</TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registros &&
              registros.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">
                    <Tag tipo={row.tipo} />
                  </TableCell>
                  <TableCell>{row.descricao}</TableCell>
                  <TableCell>R$ {row.valor}</TableCell>
                  <TableCell align="right" width="40px">
                    <EditIcon color={"primary"} fontSize="small" onClick={() => navigate(`editar/${row.id}`)} />
                  </TableCell>
                  <TableCell align="right" width="10px">
                    <DeleteIcon
                      color={"primary"}
                      fontSize="small"
                      onClick={() => removeRegistro(row.id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
