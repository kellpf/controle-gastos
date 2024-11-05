import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { GlobalContext } from "../../context/GlobalState";
import { EditarRegistro } from "./EditarRegistro";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

describe("EditarRegistro", () => {
  const mockEditarRegistro = vi.fn();

  const renderComponent = () => {
    render(
      <GlobalContext.Provider
        value={{
          registros: [],
          adicionaRegistro: vi.fn(),
          editaRegistro: mockEditarRegistro,
          removeRegistro: vi.fn(),
        }}
      >
        <MemoryRouter>
          <EditarRegistro />
        </MemoryRouter>
      </GlobalContext.Provider>
    );
  };

  beforeEach(() => {
    renderComponent();
  });

  it("deve renderizar o componente corretamente", () => {
    expect(
      screen.getByText("Edite seu registro")
    ).toBeInTheDocument();
  });

  it("deve navegar para a rota '/' ao clicar em 'Voltar'", () => {
    const botaoVoltar = screen.getByRole("button", { name: /voltar/i });
    fireEvent.click(botaoVoltar);
    expect(mockNavigate).toBeCalled(); 
  });
});
