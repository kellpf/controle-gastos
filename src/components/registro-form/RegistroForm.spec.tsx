import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TipoRegistro } from "../../pages/listar-registros/ListarRegistros";
import RegistroForm, { RegistroFormProps } from "./RegistroForm";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

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

  beforeEach(() => {
    renderComponent();
  });

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

  it("deve renderizar os campos corretamente", () => {
    expect(screen.getAllByTestId("valor")).toBeTruthy();
    expect(screen.getAllByTestId("valor")).toBeTruthy();
    expect(screen.getAllByTestId("receita")).toBeTruthy();
    expect(screen.getAllByTestId("despesa")).toBeTruthy();
  });

  it("deve navegar para a rota '/' ao clicar em 'cancelar'", () => {
    const botaoCancelar = screen.getByTestId("botao-cancelar");
    fireEvent.click(botaoCancelar);

    expect(mockNavigate).toBeCalledWith("/");
  });

  it("deve chamar a o metodo submit ao clicar em 'salvar'", () => {
    const botaoSalvar = screen.getByTestId("botao-salvar");
    fireEvent.click(botaoSalvar);

    expect(mockProps.onSubmit).toBeCalled();
  });

  it("deve atualizar o campo 'descrição' quando o valor for alterado", () => {
    const campoDescricao = screen.getByRole("textbox", { name: /descrição/i });
    fireEvent.change(campoDescricao, { target: { value: "Nova descrição" } });

    expect(mockProps.setDescricao).toHaveBeenCalledWith("Nova descrição");
  });

  it("deve atualizar o campo 'valor' quando o valor for alterado", () => {
    const campoValor = screen.getByRole("textbox", { name: /valor/i });
    fireEvent.change(campoValor, { target: { value: "20" } });

    expect(mockProps.setValor).toHaveBeenCalledWith("20");
  });
});
