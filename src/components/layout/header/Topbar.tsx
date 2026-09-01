import mailto from "/src/assets/mail_icon.svg";
import phoneIcon from "/src/assets/phone_icon.svg";
import loginIcon from "/src/assets/login_icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useLocation } from "react-router";



export default function Topbar() {
    const auth = useAuth();
    const token = auth?.token;
    const logout = auth?.logout;
    const location = useLocation();
    
    return (
        <>
            <div className="bg-dinmaegler-blue">
                <div className="header-width flex items-center justify-between p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-white">
                        <a
                            href="mailto:4000@dinmaegler.com"
                            className="flex items-center hover:underline"
                        >
                            <img src={mailto} alt="Home" className="w-5 h-5 mr-1" />
                            <span className="text-sm">4000@dinmaegler.com</span>
                        </a>

                        <a href="tel:+45 7070 4000" className="flex items-center hover:underline">
                            <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-1" />
                            <span className="text-sm">+45 7070 4000</span>
                        </a>
                    </div>

                    <div className="flex items-center md:ml-auto">
                        {token ? (
                            <button onClick={logout} className="flex items-center cursor-pointer bg-black px-2 py-1 rounded text-sm transition hover:bg-blue-700 hover:shadow">
                                <img src={loginIcon}
                                    alt="logout"
                                    className="w-4 h-4 mr-2" />
                                <p className="text-white">Log ud</p>
                            </button>
                        ) : (
                            <Link to="/login" state={{ from: location }} className="flex items-center cursor-pointer bg-black px-2 py-1 rounded text-sm transition hover:bg-blue-700 hover:shadow">
                                <img src={loginIcon}
                                    alt="login"
                                    className="w-4 h-4 mr-2" />
                                <p className="text-white">Log in</p>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}