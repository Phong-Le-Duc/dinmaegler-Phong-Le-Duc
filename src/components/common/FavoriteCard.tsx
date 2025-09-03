import React from "react";
import { Link } from "react-router-dom";
import { type House } from "../../Types";

type FavoriteCardProps = {
    house: House;
    onFavoriteChange?: () => void;
};

export default function FavoriteCard({ house, onFavoriteChange }: FavoriteCardProps) {
    // Add your favorite logic if needed

    return (
        <div className=" rounded-xl shadow-2xl p-6 flex ">
            {/* Custom layout for favorite card */}
            <figure className="mb-4">
                <img
                    src={house.images ? house.images[0].url : '/images/placeholder.jpg'}
                    alt={`${house.type} i ${house.city}`}
                    className="rounded-lg w-40 h-40 object-cover"
                />
            </figure>
            <div className="text-center">

                <div>
                    <h3>{house.adress1}</h3>
                    <h3><span>{house.postalcode}</span> {house.city}</h3>
                    <h3>{house.type}</h3>
                </div>
                <div>
                    <p>Energy label: {house.energylabel}</p>
                    <p>{house.size} m²</p>
                    <p>{house.price} kr.</p>
                </div>
            </div>
            {/* Add heart icon or actions as needed */}
        </div>
    );
}