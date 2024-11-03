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
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

export interface RegistroFinanceiro {
  id: string;
  tipo: "despesa" | "receita";
  descricao: string;
  valor: number;
  data?: Date;
  categoria?: string;
}

export const ListarRegistros = () => {
  const [registroFinanceiro, setRegistroFinanceiro] = useState<
    RegistroFinanceiro[]
  >([{ id: "123", tipo: "despesa", descricao: "Mercado", valor: 55 }]);
  const navigate = useNavigate();

  const { registros, removeRegistro } = useContext(GlobalContext);

  console.log("registros context", registros);

  console.log(registroFinanceiro);

  return (
    <>
      <h4>Controle de gastos</h4>
      <Button onClick={() => navigate("/adicionar")}>Adicionar</Button>
      {/* <AdicionarRegistro /> */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Tipo</TableCell>
              <TableCell align="right">Descrição</TableCell>
              <TableCell align="right">Valor</TableCell>
              <TableCell align="right">action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registros && registros.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tipo}
                </TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">
                  <button onClick={() => removeRegistro(row.id)}>click</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
