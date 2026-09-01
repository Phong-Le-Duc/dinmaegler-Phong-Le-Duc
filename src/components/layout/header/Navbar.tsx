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
                        <button
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                            className="p-2"
                        >
                            <span className="flex flex-col items-center justify-center gap-1">
                                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? 'translate-y-1.5 rotate-45' : '-translate-y-1'}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${open ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${open ? '-translate-y-1.5 -rotate-45' : 'translate-y-1'}`} />
                            </span>
                        </button>
                    </div>

                    <ul className="hidden md:flex items-center space-x-4 bg-dinmaegler-white ml-auto">
                        <li>
                            <Link to="/list-homes" className="px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Boliger til salg</Link>
                        </li>
                        <li>
                            <Link to="/list-Maeglere" className="px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Mæglere</Link>
                        </li>

                        {token ? (
                            <li>
                                <Link to="/favorite-homes" className="px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Mine favoritter</Link>
                            </li>
                        ) : null}

                        <li>
                            <Link to="/Contact" className="px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Kontakt os</Link>
                        </li>
                    </ul>
                </div>

                <div className={`md:hidden bg-dinmaegler-white border-t transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <ul className="flex flex-col p-4 gap-4">
                        <li>
                            <Link to="/list-homes" onClick={() => setOpen(false)} className="block px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Boliger til salg</Link>
                        </li>
                        <li>
                            <Link to="/list-Maeglere" onClick={() => setOpen(false)} className="block px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Mæglere</Link>
                        </li>
                        {token ? (
                            <li>
                                <Link to="/favorite-homes" onClick={() => setOpen(false)} className="block px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Mine favoritter</Link>
                            </li>
                        ) : null}
                        <li>
                            <Link to="/Contact" onClick={() => setOpen(false)} className="block px-3 py-2 rounded transition-colors duration-200 hover:bg-blue-200/20">Kontakt os</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}