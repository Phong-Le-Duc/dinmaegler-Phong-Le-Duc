import Headline from "../components/layout/Headline";
import type { House } from "../Types";
import { useLoaderData, useSearchParams } from "react-router";
import HouseCard from "../components/common/HouseCard";
import DropDownHouse from "../components/common/DropDownHouse";
import SliderPrice from "../components/common/SliderPrice";
import { useState } from "react";


export default function ListBolig() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const { houses } = useLoaderData() as { houses: House[] };

    const [priceRange, setPriceRange] = useState([0, 12000000]);

    const filteredHouses = houses.filter(house =>
        (
            house.type.toLowerCase().includes(search.toLowerCase()) ||
            house.adress1.toLowerCase().includes(search.toLowerCase()) ||
            house.city.toLowerCase().includes(search.toLowerCase()) ||
            String(house.postalcode).includes(search)
        ) &&
        house.price >= priceRange[0] &&
        house.price <= priceRange[1]
    );

    return (
        <>
            <div>
                <Headline headlineText="Bolig liste" />
                <div className="content-width flex items-center gap-6">
                    <DropDownHouse />
                    <div className="flex-1 flex items-center mt-18 mr-5 ">
                        <SliderPrice value={priceRange} onChange={setPriceRange} />
                    </div>
                </div>
                <div className="content-width mx-auto grid grid-cols-2 gap-6 py-10">
                    {filteredHouses.length === 0 ? (
                        <div className="col-span-2 text-center text-lg text-gray-500 h-50 mt-10">
                            Der findes desværre ingen ejendomme i denne prisklasse.
                        </div>
                    ) : (
                        filteredHouses.map((house) => (
                            <HouseCard key={house.id} house={house} />
                        ))
                    )}
                </div>
            </div>
        </>
    );
}