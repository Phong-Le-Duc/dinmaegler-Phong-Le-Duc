import React from "react";
import { Link } from "react-router-dom";
import { type House } from "../../Types";
import { getEnergyLabelColor } from "../../utility/EnergyLabelColor";
import { removeFavorite } from "../../utility/favorites";

type FavoriteCardProps = {
    house: House;
    onFavoriteChange?: () => void;
};

export default function FavoriteCard({ house, onFavoriteChange }: FavoriteCardProps) {
    // Remove from favorites handler
    function handleRemoveFavorite(e: React.MouseEvent) {
        e.preventDefault();
        removeFavorite(String(house.id));
        if (onFavoriteChange) onFavoriteChange(); // Notify parent to refresh
        console.log(`Removed house ${house.id} from favorites`);
    }

    return (
        <div className="rounded-[2px] border-1 border-gray-50 flex my-5 text-sm relative">
            {/* Custom layout for favorite card */}
            <Link to={`/detail-homes/${house.id}`} className="block">
                <figure className="w-60 flex-shrink-0 p-4">
                    <img
                        src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                        alt={`${house.type} i ${house.city}`}
                        className="w-full h-30 object-cover"
                    />
                </figure>
            </Link>
            <div className="flex-1 flex justify-between p-4">
                <div className="flex flex-col gap-3">
                    <Link to={`/detail-homes/${house.id}`} className="block"><h3>{house.adress1}</h3></Link>
                    <h3><span>{house.postalcode}</span> {house.city}</h3>
                    <h3>
                        <span className="font-bold">{house.type}</span>
                        &nbsp;•&nbsp; Ejerudgift: {house.cost.toLocaleString("da-DK")} kr.
                    </h3>
                </div>
                <div className="flex gap-2 ">
                    <p className={`${getEnergyLabelColor(house.energylabel)} px-2 pb-0.75 py-0.5 rounded inline-block self-start`}>
                        {house.energylabel}
                    </p>
                    <p>
                        {house.rooms} Værelser &nbsp;•&nbsp; {house.livingspace} m²
                    </p>

                    <p className="ml-8"><span className="mr-2">kr.</span>{house.price.toLocaleString("da-DK")}</p>
                </div>
                <button
                    className="absolute bottom-4 right-4 bg-dinmaegler-blue text-white p-2 cursor-pointer hover:bg-dinmaegler-darkblue"
                    onClick={handleRemoveFavorite}
                >
                    Fjern fra favoritter
                </button>
            </div>
            {/* Add heart icon or actions as needed */}
        </div>
    );
}