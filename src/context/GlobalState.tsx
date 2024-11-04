import { createContext, ReactNode, useReducer } from "react";
import {
  RegistroFinanceiro
} from "../pages/listar-registros/ListarRegistros";
import AppReducer from "./AppReducer";

interface State {
  registros: RegistroFinanceiro[];
}
interface GlobalContexProps {
  registros: RegistroFinanceiro[];
  removeRegistro: (id: string) => void;
  adicionaRegistro: (registroFinanceiro: RegistroFinanceiro) => void;
  editaRegistro: (registroFinanceiro: RegistroFinanceiro) => void;
}

// Initial State
const initialState: State = {
  registros: [],
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

  const adicionaRegistro = (registroFinanceiro: RegistroFinanceiro) => {
    dispatch({
      type: "ADICIONA_REGISTRO",
      payload: registroFinanceiro,
    });
  };

  const editaRegistro = (registroFinanceiro: RegistroFinanceiro) => {
    dispatch({
      type: "EDITA_REGISTRO",
      payload: registroFinanceiro,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        registros: state.registros,
        removeRegistro,
        adicionaRegistro,
        editaRegistro,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
