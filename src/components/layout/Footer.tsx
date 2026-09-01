import { Link } from "react-router-dom";
import homeIcon from "/src/assets/home_din_maegler.svg";

export default function Footer() {
    return (
        <>
            <footer className="bg-dinmaegler-grey flex flex-col items-center relative">
                <div className="content-width py-10 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        <div className="px-0">
                            <Link to="/">
                                <img src={homeIcon} alt="Home" className="h-10 mr-1" />
                            </Link>
                            <p className="mt-4">
                                There are many variations of passages of Lorem Ipsum available, but the majority have
                                suffered alteration in some form, by injected humour, or randomised words.
                            </p>
                        </div>

                        <div>
                            <div className="bg-dinmaegler-white px-6 py-6 shadow-2xl flex flex-col gap-4 w-full">
                                <div className="flex transition-colors duration-200 ease-in-out rounded-md hover:bg-blue-200/20 cursor-pointer">
                                    <figure>
                                        <img src="src/assets/phone-round-Icon.png" alt="" />
                                    </figure>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-500">Ring til os</p>
                                        <p>+45 7070 4000</p>
                                    </div>
                                </div>
                                <div className="flex transition-colors duration-200 ease-in-out rounded-md hover:bg-blue-200/20 cursor-pointer">
                                    <figure>
                                        <img src="src/assets/mail-round-icon.png" alt="" />
                                    </figure>
                                    <div className="ml-4">
                                        <p className="text-sm text-gray-500">Send en mail</p>
                                        <p>4000@dinmaegler.com</p>
                                    </div>
                                </div>
                                <div className="flex transition-colors duration-200 ease-in-out rounded-md hover:bg-blue-200/20 cursor-pointer">
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
                        </div>

                        <div className="px-0">
                            <div className="p-5 flex flex-col gap-4">
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
                                        <Link to="/login" className="flex items-center ml-auto">Log in / bliv bruger</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-8">
                    <div className="bg-dinmaegler-white w-full py-7">
                        <div className="content-width flex items-center justify-between px-4 md:px-0">
                            <div>
                                <p className="mb-2">medlem af</p>
                                <img src="src/assets/DMS.png" alt="" className="mb-2 w-24 h-auto" />
                                <p>Dansk Mægler Sammenslutning</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-dinmaegler-blue w-full">
                        <p className="text-white text-center p-6 md:p-10">Made by Phong Le Duc</p>
                    </div>
                </div>
            </footer>
        </>
    );
}