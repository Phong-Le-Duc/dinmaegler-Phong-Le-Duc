import { useLoaderData } from "react-router";
import { type House } from "../../Types";
import HouseCard from "./HouseCard";

type HouseFetchShellProps = {
    search: string;
};

export default function HouseFetchShell({ search }: HouseFetchShellProps) {
    const { sampleHouses: houses } = useLoaderData() as { sampleHouses: House[] };
    console.log(houses);

 
    return (
        <div className="grid grid-cols-2 gap-6">
            {houses.map(house => (
                <HouseCard key={house.id} house={house} />
            ))}
        </div>
    );
}