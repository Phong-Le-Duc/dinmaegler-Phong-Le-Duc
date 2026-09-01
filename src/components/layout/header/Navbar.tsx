import { Link } from "react-router-dom";
import { useState } from "react";
import homeIcon from "/src/assets/home_din_maegler.svg";
import { useAuth } from "../../../contexts/AuthContext";

export default function Navbar() {

    const auth = useAuth();
    const token = auth?.token;
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className=" border-b p-5 " >
                <div className="header-width flex items-center justify-between gap-4">

                    <Link to="/" >
                        <img src={homeIcon} alt="Home" className="h-10 md:h-12 mr-1" />
                    </Link>

                    <div className="md:hidden ml-auto">
                        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex items-center space-x-4 bg-dinmaegler-white ml-auto">
                        <li>
                            <Link to="/list-homes">Boliger til salg</Link>
                        </li>
                        <li>
                            <Link to="/list-Maeglere">Mæglere</Link>
                        </li>

                        {token ? (
                            <li>
                                <Link to="/favorite-homes">Mine favoritter</Link>
                            </li>
                        ) : null}

                        <li>
                            <Link to="/Contact">Kontakt os</Link>
                        </li>
                    </ul>
                </div>

                {open && (
                    <div className="md:hidden bg-dinmaegler-white border-t">
                        <ul className="flex flex-col p-4 gap-4">
                            <li>
                                <Link to="/list-homes" onClick={() => setOpen(false)}>Boliger til salg</Link>
                            </li>
                            <li>
                                <Link to="/list-Maeglere" onClick={() => setOpen(false)}>Mæglere</Link>
                            </li>
                            {token ? (
                                <li>
                                    <Link to="/favorite-homes" onClick={() => setOpen(false)}>Mine favoritter</Link>
                                </li>
                            ) : null}
                            <li>
                                <Link to="/Contact" onClick={() => setOpen(false)}>Kontakt os</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}