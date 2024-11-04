import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TipoRegistro } from "../../pages/listar-registros/ListarRegistros";
import { Tag } from "./Tag"; // ajuste o caminho conforme necessário

describe("Tag component", () => {
  it("deve render", () => {
    render(<Tag tipo={TipoRegistro.DESPESA} />);

    expect(screen.getByText(TipoRegistro.DESPESA)).toBeInTheDocument();
  });

  it("deve aplicar a classe correta", () => {
    const tipo = TipoRegistro.DESPESA;

    render(<Tag tipo={tipo} />);
    const tagElement = screen.getByText(tipo).parentElement; 

    expect(tagElement).toHaveClass(`tag ${tipo}`);
  });
});
