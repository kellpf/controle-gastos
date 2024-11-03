import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useState } from "react";

export interface RegistroFinanceiro {
  tipo: "despesa" | "receita";
  descricao: string;
  valor: number;
  data?: Date;
  categoria?: string;
}

export const ListarDespesas = () => {
  const [registroFinanceiro, setRegistroFinanceiro] = useState<
    RegistroFinanceiro[]
  >([{ tipo: "despesa", descricao: "Mercado", valor: 55 }]);

  console.log(registroFinanceiro);

  return (
    <>
      Controle de gastos
      {registroFinanceiro.map((registro, index) => (
        <div key={index}>
          <div>Tipo: {registro.tipo}</div>
          <div>Descrição: {registro.descricao}</div>
          <div>Valor: {registro.valor}</div>
        </div>
      ))}
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
            {registroFinanceiro.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.tipo}
                </TableCell>
                <TableCell align="right">{row.descricao}</TableCell>
                <TableCell align="right">{row.valor}</TableCell>
                <TableCell align="right">
                  <button onClick={() => console.log('helllou')}>click</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
