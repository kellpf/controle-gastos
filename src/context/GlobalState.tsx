import { createContext, ReactNode, useReducer } from "react";

import AppReducer from "./AppReducer";
import { GlobalContexProps, RegistroFinanceiro, State } from "../utils/registros";



const initialState: State = {
  registros: [],
};

export const GlobalContext = createContext<GlobalContexProps>(
  {} as GlobalContexProps
);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

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
