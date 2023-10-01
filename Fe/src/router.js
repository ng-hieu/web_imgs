import { useRoutes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/layouts/Menu";
import Imgs from "./components/Imgs";

export default function Router() {
    return useRoutes([
        {
            path: "/", element: <Menu />,
            children: [
                { path: "/home", element: <Home /> },
                {path: "/imgs", element: <Imgs />},
                
            ]
        },
    ])
}