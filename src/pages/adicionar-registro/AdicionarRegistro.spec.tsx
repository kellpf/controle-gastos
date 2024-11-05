import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { AdicionarRegistro } from "./AdicionarRegistro";
import { GlobalContext } from "../../context/GlobalState";
import { TipoRegistro } from "../listar-registros/ListarRegistros";
import "@testing-library/jest-dom";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("AdicionarRegistro", () => {
  const mockAdicionaRegistro = vi.fn();

  const renderComponent = () => {
    render(
      <GlobalContext.Provider
        value={{
          registros: [],
          adicionaRegistro: mockAdicionaRegistro,
          editaRegistro: vi.fn(),
          removeRegistro: vi.fn(),
        }}
      >
        <MemoryRouter>
          <AdicionarRegistro />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
  };

  beforeEach(() => {
    renderComponent();
  });

  it("deve renderizar o componente corretamente", () => {
    expect(
      screen.getByText("Registre sua despesa ou receita")
    ).toBeInTheDocument();
  });

  it("deve navegar para a rota '/' ao clicar em 'Voltar'", () => {
    const botaoVoltar = screen.getByTestId("botao-voltar");
    fireEvent.click(botaoVoltar);
    expect(mockNavigate).toBeCalled();
  });

  it("deve chamar adicionaRegistro e navegar ao submeter o formulário", () => {
    const descricaoInput = screen.getByRole("textbox", { name: /descrição/i });
    const valorInput = screen.getByRole("textbox", { name: /valor/i });
    const botaoSalvar = screen.getByRole("button", { name: /salvar/i });

    fireEvent.change(descricaoInput, { target: { value: "Nova Despesa" } });
    fireEvent.change(valorInput, { target: { value: "100" } });

    fireEvent.click(botaoSalvar);

    expect(mockAdicionaRegistro).toHaveBeenCalledWith({
      id: expect.any(String),
      descricao: "Nova Despesa",
      tipo: TipoRegistro.DESPESA,
      valor: 100,
    });
  });
});
