import { createBrowserRouter } from "react-router-dom";
import { AdicionarRegistro } from "../pages/adicionar-registro/AdicionarRegistro";
import { ListarRegistros } from "../pages/listar-registros/ListarRegistros";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ListarRegistros />,
        children: [
            {
                path: 'adicionar',
                element: <AdicionarRegistro />
            }
        ]
    },
]);

export default routes;