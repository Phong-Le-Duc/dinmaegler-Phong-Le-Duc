import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./pages/Home";
import ListBolig from "./pages/ListBolig";
import DetailBolig from "./pages/DetailBolig";
import ListMaeglere from "./pages/ListMaeglere";
import FavoriteHomes from "./pages/FavoriteHomes";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { HomeLoader } from "./Loaders/HomeLoader";
import { HouseLoader } from "./Loaders/HouseLoader";
import { AgentLoader } from "./Loaders/AgentLoader";
import { HouseDetailLoader } from "./Loaders/HouseDetailLoader";
import RequireAuth from "./components/common/RequireAuth"; // <-- import RequireAuth
import Loading from "./components/common/Loading"; // <-- import Loading component

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        hydrateFallbackElement: <Loading />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: HomeLoader
            },
            {
                path: 'list-homes',
                element: <ListBolig />,
                loader: HouseLoader
            },
            {
                path: 'detail-homes/:id',
                element: <DetailBolig />,
                loader: HouseDetailLoader
            },
            {
                path: 'list-maeglere',
                element: <ListMaeglere />,
                loader: AgentLoader
            },
            {
                path: 'favorite-homes',
                element: (
                    <RequireAuth>
                        <FavoriteHomes />
                    </RequireAuth>
                ),
                  loader: HouseLoader
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]);
export default router;