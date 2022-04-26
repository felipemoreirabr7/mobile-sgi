import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard1";
import FolhaDePonto from "./pages/FolhaDePonto"
import Cadastro from "./pages/Cadastro"


const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        Dashboard,
        FolhaDePonto,
        Cadastro
    })
)

export default Routes;