import { RegistroFinanceiro } from "../pages/listar-registros/ListarRegistros";

export interface ActionReducer {
  // ADD ENUM
  type: "REMOVE_REGISTRO" | "ADICIONA_REGISTRO" | "EDITA_REGISTRO";
  payload: any;
}

export default (state: { registros: RegistroFinanceiro[] }, action: any) => {
  switch (action.type) {
    case "REMOVE_REGISTRO":
      return {
        ...state,
        registros: state.registros.filter((registro) => {
          return registro.id !== action.payload;
        }),
      };

    case "ADICIONA_REGISTRO": {
      return {
        ...state,
        registros: [action.payload, ...state.registros],
      };
    }

    case "EDITA_REGISTRO": {
      const updateRegistro = action.payload;

      const updateRegistros = state.registros.map((registro) => {
        if (registro.id === updateRegistro.id) {
          return updateRegistro;
        }
        return registro;
      });
      return {
        ...state,
        registros: updateRegistros,
      };
    }

    default:
      return state;
  }
};
