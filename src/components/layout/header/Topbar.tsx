import mailto from "/src/assets/mail_icon.svg";
import phoneIcon from "/src/assets/phone_icon.svg";
import loginIcon from "/src/assets/login_icon.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

export default function Topbar() {
    const auth = useAuth();
    const token = auth?.token;
    const logout = auth?.logout;

    return (
        <>
            <div className="bg-dinmaegler-blue">
                <div className="header-width flex items-center justify-between p-5 gap-4">
                    <a
                        href="mailto:4000@dinmaegler.com"
                        className="flex items-center text-white hover:underline"
                    >
                        <img src={mailto} alt="Home" className="w-5 h-5 mr-1" />
                        4000@dinmaegler.com
                    </a>

                    <a href="tel:+45 7070 4000" className="flex items-center text-white hover:underline">
                        <img src={phoneIcon} alt="Phone" className="w-5 h-5 mr-1" />
                        +45 7070 4000
                    </a>

                    {token ? (
                        <button onClick={logout} className="flex items-center ml-auto cursor-pointer bg-black p-2 rounded">
                            <img src={loginIcon}
                                alt="logout"
                                className="mr-2" />
                            <p className="text-white">Log ud</p>
                        </button>
                    ) : (
                        <Link to="/login" className="flex items-center ml-auto cursor-pointer bg-black p-2 rounded">
                            <img src={loginIcon}
                                alt="login"
                                className="mr-2" />
                            <p className="text-white">Log in</p>
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}