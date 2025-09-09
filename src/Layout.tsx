import { Header, Footer } from "./components";
import { Outlet } from "react-router";
import { ScrollRestoration } from "react-router";





export default function Layout() {
  

    return (
        <div>
          <ScrollRestoration />
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}