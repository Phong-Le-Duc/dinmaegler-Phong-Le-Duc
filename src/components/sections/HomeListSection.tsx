import HouseFetchShell from "../common/HouseFetchShell";
import { Link, useLocation } from "react-router";
import type { House } from "../../Types";

type HomeListSectionProps = {
    houses: House[];
    search: string;
};

export default function HomeListSection({ search }: HomeListSectionProps) {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        <section className="bg-dinmaegler-grey">
            <div className="content-width pb-15 ">
                <header className=" pt-15 pb-15 text-center">
                    <h2 className="h2">Udvalgte Boliger</h2>
                    <p>There are many variations of passages of Lorem Ipsum available but the this in <br />majority have suffered alteration in some</p>
                </header>

                <HouseFetchShell search={search} />

                {isHomePage && (
                    <div className="text-center mt-10">
                        <Link
                            to="/list-homes"
                            className="inline-block px-6 py-2 mx-auto rounded bg-dinmaegler-blue text-white mt-4 hover:bg-dinmaegler-blue/90 transition"
                        >
                            Se alle boliger
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}