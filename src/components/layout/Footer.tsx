import { Link } from "react-router-dom";
import homeIcon from "/src/assets/home_din_maegler.svg";

export default function Footer() {
    return (
        <>
            <footer className="bg-dinmaegler-grey flex flex-col items-center relative">
                <div className="content-width py-10 relative z-10">
                    <div className="my-10">
                        <Link to="/" >
                            <img src={homeIcon} alt="Home" className="w-45 mr-1" />
                        </Link>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have <br />
                            suffered alteration in some form, by injected humour, or randomised words.
                        </p>
                    </div>
                    <div className="flex">
                        <div className="bg-dinmaegler-white px-8 py-10 shadow-2xl flex flex-col gap-4">
                            <div className="flex">
                                <figure>
                                    <img src="src/assets/phone-round-Icon.png" alt="" />
                                </figure>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Ring til os</p>
                                    <p>+45 7070 4000</p>
                                </div>
                            </div>
                            <div className="flex">
                                <figure>
                                    <img src="src/assets/mail-round-icon.png" alt="" />
                                </figure>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Send en mail</p>
                                    <p>4000@dinmaegler.com</p>
                                </div>
                            </div>
                            <div className="flex">
                                <figure>
                                    <img src="src/assets/map-round-icon.png" alt="" />
                                </figure>
                                <div className="ml-4">
                                    <p className="text-sm text-gray-500">Butik</p>
                                    <p>Stændertorvet 78, 4000 Roskilde</p>
                                </div>
                            </div>
                            <p className="mt-4 pl-2">
                                Din Mægler Roskilde, er din <br /> boligibutik i lokalområdet.
                            </p>
                        </div>

                        <div className="p-5 ml-10 flex flex-col gap-4">
                            <h3 className="text-lg font-semibold">Quick links</h3>
                            <ul className="gap-2 flex flex-col">
                                <li>
                                    <Link to="/list-homes">Boliger til salg</Link>
                                </li>
                                <li>
                                    <Link to="/list-Maeglere">Mæglere</Link>
                                </li>
                                <li>
                                    <Link to="/favorite-homes">Mine favoritter</Link>
                                </li>
                                <li>
                                    <Link to="/Contact">Kontakt os</Link>
                                </li>
                                <li>
                                    <Link to="/list-homes" className="flex items-center ml-auto">Log in / bliv bruger</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* Overlapping bottom section */}
                <div className="w-full -mt-8 z-0 absolute top-120 left-0">
                    <div className="bg-dinmaegler-white w-full h-50 py-7 flex flex-col  pl-174.5">
                        <p className="mb-2">medlem af</p>
                        <img src="src/assets/DMS.png" alt="" className="mb-2 w-24 h-auto" />
                        <p>Dansk Mægler Sammenslutning</p>
                    </div>
                    <div className="bg-dinmaegler-blue w-full">
                        <p className="text-white text-center p-10">Layout By Jit Banik 2020</p>
                    </div>
                </div>
            </footer>
        </>
    );
}