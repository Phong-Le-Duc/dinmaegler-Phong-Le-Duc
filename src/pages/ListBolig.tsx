
import Headline from "../components/layout/Headline";

import type { House } from "../Types";

import { useLoaderData, useSearchParams } from "react-router";
import HouseCard from "../components/common/HouseCard";
import DropDownHouse from "../components/common/DropDownHouse";

export default function ListBolig() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const { houses } = useLoaderData() as { houses: House[] };
    console.log(houses);
    console.log(search);
    

   // Filter houses by type or address
    const filteredHouses = houses.filter(house =>
        house.type.toLowerCase().includes(search.toLowerCase()) ||
        house.adress1.toLowerCase().includes(search.toLowerCase()) ||
        house.city.toLowerCase().includes(search.toLowerCase()) ||
        String(house.postalcode).includes(search)
    );
console.log(filteredHouses);



    if (!filteredHouses || filteredHouses.length === 0) {
        return <div>No houses found</div>;
    }

    return (
        <>
            <Headline headlineText="Bolig liste" />
            <DropDownHouse />
            {/* <HomeListSection houses={houses} search={search} /> */}
            <div className="container mx-auto grid grid-cols-2 gap-6 py-10">
                {filteredHouses.map((house) => (
                    <HouseCard key={house.id} house={house} />
                ))}
            </div>
        </>
    );
}