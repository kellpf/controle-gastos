import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TipoRegistro } from "../../pages/listar-registros/ListarRegistros";
import RegistroForm, { RegistroFormProps } from "./RegistroForm";

describe("RegistroForm", () => {
  const mockProps: RegistroFormProps = {
    descricao: "Mercado",
    tipo: TipoRegistro.DESPESA,
    valor: 50,
    onSubmit: vi.fn(),
    setDescricao: vi.fn(),
    setTipo: vi.fn(),
    setValor: vi.fn(),
  };

  beforeEach(() => {});

  const renderComponent = () => {
    render(
      <RegistroForm
        descricao={mockProps.descricao}
        setDescricao={mockProps.setDescricao}
        tipo={TipoRegistro.DESPESA}
        setTipo={mockProps.setTipo}
        valor={mockProps.valor}
        setValor={mockProps.setValor}
        onSubmit={mockProps.onSubmit}
      />,
      { wrapper: MemoryRouter }
    );
  };

  it("renderiza os campos de entrada corretamente", () => {
    renderComponent();
    screen.debug();

    expect(screen.getAllByTestId("descricao")).toBeTruthy();
    expect(screen.getAllByTestId("valor")).toBeTruthy();
    expect(screen.getAllByTestId("receita")).toBeTruthy();
    expect(screen.getAllByTestId("despesa")).toBeTruthy();
  });
});
