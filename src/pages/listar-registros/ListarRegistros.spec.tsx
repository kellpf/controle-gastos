import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GlobalContext } from "../../context/GlobalState";
import { RegistroFinanceiro, TipoRegistro } from "../../utils/registros";
import { ListarRegistros } from "./ListarRegistros";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("ListarRegistros", () => {
  const mockRemoveRegistro = vi.fn();
  const mockRegistros: RegistroFinanceiro[] = [
    { id: "1", tipo: TipoRegistro.DESPESA, descricao: "Despesa 1", valor: 100 },
    { id: "2", tipo: TipoRegistro.RECEITA, descricao: "Receita 1", valor: 200 },
  ];

  const renderComponent = () => {
    render(
      <GlobalContext.Provider
        value={{
          registros: mockRegistros,
          removeRegistro: mockRemoveRegistro,
          adicionaRegistro: vi.fn(),
          editaRegistro: vi.fn()
        }}
      >
        <MemoryRouter>
          <ListarRegistros />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
  };

  beforeEach(() => {
    mockNavigate.mockClear();
    mockRemoveRegistro.mockClear();
  });

  it("deve renderizar o título e o botão de adicionar", () => {
    renderComponent();

    expect(screen.getByText("Controle de gastos pessoais")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /adicionar/i })).toBeInTheDocument();
  });

  it("deve renderizar registros corretamente", () => {
    renderComponent();

    expect(screen.getByText("Despesa 1")).toBeInTheDocument();
    expect(screen.getByText("R$ 100")).toBeInTheDocument();
    expect(screen.getByText("Receita 1")).toBeInTheDocument();
    expect(screen.getByText("R$ 200")).toBeInTheDocument();
  });
});
