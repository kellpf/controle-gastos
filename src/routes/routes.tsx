import { createBrowserRouter } from "react-router-dom";
import { AdicionarRegistro } from "../pages/adicionar-registro/AdicionarRegistro";
import { ListarRegistros } from "../pages/listar-registros/ListarRegistros";
import App from "../App";
import { EditarRegistro } from "../pages/editar-registro/EditarRegistro";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <ListarRegistros />,
      },
      {
        path: "/adicionar",
        element: <AdicionarRegistro />,
      },
      {
        path: "/editar/:id",
        element: <EditarRegistro />,
      },
    ],
  },
]);

export default routes;
