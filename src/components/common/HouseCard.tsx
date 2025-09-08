import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { type House } from "../../Types";
import { addFavorite, removeFavorite, isFavorite } from "../../utility/favorites";
import { getEnergyLabelColor } from "../../utility/energyLabelColor";
import { useAuth } from "../../contexts/AuthContext";

type HouseCardProps = {
    house: House;
    onFavoriteChange?: () => void;
    shadow?: string;
};

export default function HouseCard({ house, onFavoriteChange, shadow }: HouseCardProps) {
    const [favorite, setFavorite] = useState(false);
    const auth = useAuth();
    const token = auth?.token;

    useEffect(() => {
        setFavorite(isFavorite(String(house.id)));
    }, [house.id]);

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent navigating to detail page
        if (favorite) {
            removeFavorite(String(house.id));
            setFavorite(false);
            if (onFavoriteChange) onFavoriteChange(); // Notify parent to refresh
            console.log(`Removed house ${house.id} from favorites`);
        } else {
            addFavorite(String(house.id));
            setFavorite(true);
            if (onFavoriteChange) onFavoriteChange(); // Notify parent to refresh
            console.log(`Added house ${house.id} to favorites`);
        }
    };

    return (
        <Link to={`/detail-homes/${house.id}`} className="block">
            <article className={`bg-dinmaegler-white shadow ${shadow ? shadow : ""} hover:shadow-lg transition-shadow cursor-pointer relative `}>
                {/* Heart icon in top right, only visible when logged in */}
                {token && (
                    <span
                        className="absolute top-4 right-4 w-6 h-6 z-10 cursor-pointer"
                        onClick={handleFavoriteClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={favorite ? "red" : "transparent"}
                            viewBox="0 0 24 24"
                            stroke="white"
                            className="w-full h-full"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={1.5}
                                d="M12 21C12 21 4 13.5 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 4.01 13.44 5.36C13.97 4.01 15.64 3 17.5 3C20.58 3 23 5.42 23 8.5C23 13.5 15 21 12 21Z"
                            />
                        </svg>
                    </span>
                )}
                <figure className="w-full h-48 overflow-hidden flex items-center justify-center">
                    <img
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                        className="w-full h-full object-cover"
                    />
                </figure>
                <div className="p-4">
                    <h3>{house.adress1}</h3>
                    <h3><span>{house.postalcode}</span> {house.city}</h3>
                    <h3 className="border-b-1 pb-2 mb-2">{house.type}</h3>
                    <div className="flex gap-2">
                        <p className={`${getEnergyLabelColor(house.energylabel)} px-2 py-0.5 rounded-[2px]`}>
                            {house.energylabel}
                        </p>
                        <p>
                            {house.rooms} Værelser &nbsp;•&nbsp; {house.livingspace} m²
                        </p>
                        <p className="ml-auto font-bold"><span className="mx-1">kr.</span> {house.price.toLocaleString("da-DK")}</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}