import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { type House } from "../../Types";
import { addFavorite, removeFavorite, isFavorite } from "../../utility.ts/favorites";

type HouseCardProps = {
    house: House;
    onFavoriteChange?: () => void;
    shadow?: string;
};

export default function HouseCard({ house, onFavoriteChange, shadow }: HouseCardProps) {
    const [favorite, setFavorite] = useState(false);

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
            <article className={`bg-dinmaegler-white ${shadow} hover:shadow-lg transition-shadow cursor-pointer relative content-width`}>
                {/* Heart icon in top right */}
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
                <figure>
                    <img
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                    />
                </figure>
                <div className="p-4">
                    <h3>{house.adress1}</h3>
                    <h3><span>{house.postalcode}</span> {house.city}</h3>
                    <h3>{house.type}</h3>
                    <p>{house.size} m²</p>
                    <p>Energy label: {house.energylabel}</p>
                </div>
            </article>
        </Link>
    );
}