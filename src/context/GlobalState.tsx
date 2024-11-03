import { createContext, ReactNode, useReducer } from "react";
import { RegistroFinanceiro } from "../pages/listar-registros/ListarRegistros";
import AppReducer from "./AppReducer";

interface State {
  registros: RegistroFinanceiro[];
}
interface GlobalContexProps {
  registros: RegistroFinanceiro[];
  removeRegistro: (id: string) => void;
}

// Initial State
const initialState: State = {
  registros: [
    {
      id: "1",
      tipo: "despesa",
      descricao: "Mercado",
      valor: 98,
    },
    {
      id: "2",
      tipo: "receita",
      descricao: "Remuneração",
      valor: 800,
    },
  ],
};

// Create Context
export const GlobalContext = createContext<GlobalContexProps>(
  {} as GlobalContexProps
);

// Provicer Component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const removeRegistro = (id: string) => {
    dispatch({
      type: "REMOVE_REGISTRO",
      payload: id,
    });
  };

  return (
    <GlobalContext.Provider
      value={{ registros: state.registros, removeRegistro }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
