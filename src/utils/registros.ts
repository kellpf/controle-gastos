export enum TipoRegistro {
    DESPESA = "despesa",
    RECEITA = "receita",
  }
  
  export interface RegistroFinanceiro {
    id: string;
    tipo: TipoRegistro;
    descricao: string;
    valor: number;
    data?: Date;
    categoria?: string;
  }

  export interface State {
    registros: RegistroFinanceiro[];
  }

  export interface TagProps {
    tipo: TipoRegistro;
  }
  
  export interface GlobalContexProps {
    registros: RegistroFinanceiro[];
    removeRegistro: (id: string) => void;
    adicionaRegistro: (registroFinanceiro: RegistroFinanceiro) => void;
    editaRegistro: (registroFinanceiro: RegistroFinanceiro) => void;
  }
  
export interface RemoveRegistroAction {
    type: "REMOVE_REGISTRO";
    payload: string; 
  }
  
  export interface AdicionaRegistroAction {
    type: "ADICIONA_REGISTRO";
    payload: RegistroFinanceiro; 
  }
  
  export interface EditaRegistroAction {
    type: "EDITA_REGISTRO";
    payload: RegistroFinanceiro;
  }

  export type ActionReducer = RemoveRegistroAction | AdicionaRegistroAction | EditaRegistroAction;