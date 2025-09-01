import { Link } from "react-router-dom";
import homeIcon from "/src/assets/home_din_maegler.svg";
import { useAuth } from "../../../contexts/AuthContext";

export default function Navbar() {

const auth = useAuth();
const token = auth?.token;

    return (
        <>
            <div className=" border-b p-5 " >
                <div className="header-width flex items-center justify-between gap-4">

                    <Link to="/" >
                        <img src={homeIcon} alt="Home" className="w-45 mr-1" />
                    </Link>

                    <ul className="flex items-center space-x-4 bg-dinmaegler-white ml-auto">
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
            </div>
        </>
    )
}