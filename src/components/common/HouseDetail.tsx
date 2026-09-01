import { Link, useSearchParams } from "react-router";
import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { addFavorite, removeFavorite, isFavorite } from "../../utility/favorites";
import { type House } from "../../Types";
import gallery_icon from "/src/assets/gallery_icon.png";
import plantegning_icon from "/src/assets/plantegning_icon.png";
import map_icon from "/src/assets/map_icon.png";
import favorite_icon from "/src/assets/favorite_icon.png";
import GalleryHouse from "./GalleryHouse";
import phone_icon from "/src/assets/phone_icon.svg";
import mail_icon from "/src/assets/mail_icon.svg";

type HouseCardProps = {
    house: House;
};

export default function HouseDetail({ house }: HouseCardProps) {
    const [searchParams] = useSearchParams();
    const showGallery = searchParams.get("modal") === "galleri";
    const showPlan = searchParams.get("modal") === "plantegning";
    const showMap = searchParams.get("modal") === "kort";

    const dialogRef = useRef<HTMLDialogElement>(null);

    // Favorite logic
    const auth = useAuth();
    const token = auth?.token;
    const [favorite, setFavorite] = useState(isFavorite(String(house.id)));

    function handleFavoriteClick() {
        if (favorite) {
            removeFavorite(String(house.id));
            setFavorite(false);
        } else {
            addFavorite(String(house.id));
            setFavorite(true);
        }
    }

    return (
        <>
            <article className="">
                <figure className="full-w">
                    <img
                        className="object-cover h-auto w-full max-h-[65vh]"
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                    />
                </figure>
                <section className="content-width">
                    <div className="flex flex-col md:flex-row justify-between my-6 border-b-2 border-gray-300 pb-4 items-start md:items-center gap-3">
                        <div className="w-full md:w-auto">
                            <p className="font-medium">{house.adress1}</p>
                            <p className="text-sm text-gray-600">{house.postalcode} {house.city}</p>
                        </div>
                        <div className="flex gap-4 items-center justify-start md:justify-center">
                            <Link to="?modal=galleri">
                                <img src={gallery_icon} className="w-10 h-10" alt="Gallery" />
                            </Link>
                            <Link to="?modal=plantegning">
                                <img src={plantegning_icon} className="w-10 h-10" alt="Plantegning" />
                            </Link>
                            <Link to="?modal=kort">
                                <img src={map_icon} className="w-10 h-10" alt="lokation" />
                            </Link>
                            {token && (
                                <button
                                    onClick={handleFavoriteClick}
                                    title={favorite ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                                    className="w-10 h-10 flex items-center justify-center"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={favorite ? "red" : "transparent"}
                                        viewBox="0 0 24 24"
                                        stroke="#888"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.01 13.44 5.36C13.97 4.01 15.64 3 17.5 3C20.58 3 23 5.42 23 8.5C23 13.5 15 21 12 21Z"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>
                        <div className="w-full md:w-auto text-left md:text-right">
                            <p className="mt-2 md:mt-0 font-bold text-lg">Kr. {house.price?.toLocaleString('da-DK')}</p>
                        </div>
                    </div>
                    <div className="mb-12">
                        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-2 w-full">
                            <div className="py-1 font-medium">Sagsnummer:</div>
                            <div className="py-1">123456789</div>

                            <div className="py-1 font-medium">Kælder:</div>
                            <div className="py-1">{house.basementsize > 0 ? 'Ja' : 'Nej'}</div>

                            <div className="py-1 font-medium">Udbetaling:</div>
                            <div className="py-1">Kr. {house.payment?.toLocaleString('da-DK')}</div>

                            <div className="py-1 font-medium">Boligareal:</div>
                            <div className="py-1">{house.livingspace} m²</div>

                            <div className="py-1 font-medium">Byggeår:</div>
                            <div className="py-1">{house.built}</div>

                            <div className="py-1 font-medium">Brutto ex ejerudgift:</div>
                            <div className="py-1">Kr. {house.gross?.toLocaleString('da-DK')}</div>

                            <div className="py-1 font-medium">Grundareal:</div>
                            <div className="py-1">{house.lotsize} m²</div>

                            <div className="py-1 font-medium">Ombygget:</div>
                            <div className="py-1">{house.remodel}</div>

                            <div className="py-1 font-medium">Netto ex ejerudgift:</div>
                            <div className="py-1">Kr. {house.netto?.toLocaleString('da-DK')}</div>

                            <div className="py-1 font-medium">Rum/værelser:</div>
                            <div className="py-1">{house.rooms}</div>

                            <div className="py-1 font-medium">Energimærke:</div>
                            <div className="py-1">{house.energylabel}</div>

                            <div className="py-1 font-medium">Ejerudgifter:</div>
                            <div className="py-1">Kr. {house.cost?.toLocaleString('da-DK')}</div>

                            <div className="py-1 font-medium">Antal plan:</div>
                            <div className="py-1">??</div>
                        </div>
                    </div>
                    <section className="grid grid-cols-1 md:grid-cols-2 content-width gap-4 mb-10">
                        <div>
                            <h3 className="font-bold">Beskrivelse</h3>
                            <div>
                                <p>{house.description}</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-bold">Ansvarlig mægler</h3>
                            <div className="flex flex-col md:flex-row border border-gray-300 p-4 gap-4 md:gap-6 items-center md:items-center h-auto md:h-40">
                                <div className="w-full md:w-auto">
                                    <figure className="mx-auto md:mx-0">
                                        <img
                                            src={
                                                house.agent?.image?.url ||
                                                "/images/placeholder.jpg"
                                            }
                                            alt={house.agent?.name || "Agent"}
                                            className="w-24 h-24 md:w-32 md:h-32 object-cover border border-gray-300 rounded"
                                        />
                                    </figure>
                                </div>
                                {/* agent info */}
                                <div className="flex flex-col justify-center items-start text-left w-full md:w-auto">
                                    <p className="font-bold">{house.agent?.name}</p>
                                    <p className="mb-2">{house.agent?.title}</p>
                                    <div className="flex items-center gap-2">
                                        <img src={phone_icon} alt="Telefon" className="w-4 h-4 img-black" />
                                        <p>{house.agent?.phone}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <img src={mail_icon} alt="Email" className="w-4 h-4 img-black" />
                                        <p>
                                            <a href={`mailto:${house.agent?.email}`} className="text-blue-600 underline">
                                                {house.agent?.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </article>
            <GalleryHouse
                dialogRef={dialogRef}
                gallery_icon={gallery_icon}
                plantegning_icon={plantegning_icon}
                map_icon={map_icon}
                favorite_icon={favorite_icon}
                showGallery={showGallery}
                showPlan={showPlan}
                showMap={showMap}
                house={house}
                favorite={favorite}
                handleFavoriteClick={handleFavoriteClick}
            />
        </>
    );
}