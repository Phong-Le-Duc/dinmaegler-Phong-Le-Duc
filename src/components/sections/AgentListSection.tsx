// AgentListSection.tsx
import AgentsFetchShell from "../common/AgentsFetchShell";
import { Link, useLocation } from "react-router";

export default function AgentListSection() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section className="bg-dinmaegler-white">
            <div className="content-width pb-20">
                <header className="pt-20 pb-10 text-center">
                    <h2 className="h2">Mød vores engagerede medarbejdere</h2>
                    <p>Din Mægler er garant for altid veluddannet assistance i dit boligsalg. Kontakt en af vores medarbejdere.</p>
                </header>

                <AgentsFetchShell />

                {isHomePage && (
                    <div className="text-center mt-10">
                        <Link
                            to="/list-maeglere"
                            className="inline-block px-6 py-2 mx-auto rounded bg-dinmaegler-blue text-white mt-4 hover:bg-dinmaegler-blue/90 transition"
                        >
                            Se alle mæglere
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}