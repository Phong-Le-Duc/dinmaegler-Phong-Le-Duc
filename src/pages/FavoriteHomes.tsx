import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import type { House } from "../Types";
import { getFavoriteIds } from "../utility.ts/favorites";
import HouseCard from "../components/common/HouseCard";

type AuthContextType = {
    token: string;
    setToken: (token: string) => void;
    login: (token: string) => void;
    updateFavorites: (id: string) => void;
    // add other properties if needed
};

export default function FavoriteHomes() {
    const { token, login, updateFavorites } = useAuth() as AuthContextType;
    const [houses, setHouses] = useState<House[]>([]);
    const [favoriteHouses, setFavoriteHouses] = useState<House[]>([]);
    const [refresh, setRefresh] = useState(false); // Add this

    useEffect(() => {
        fetch("https://dinmaegler.onrender.com/homes")
            .then(res => res.json())
            .then(data => setHouses(data));
    }, []);

    useEffect(() => {
        const favoriteIds = getFavoriteIds();
        setFavoriteHouses(
            houses.filter(house => favoriteIds.includes(String(house.id)))
        );
    }, [houses, refresh]); // Add refresh as dependency

    // Pass setRefresh to HouseCard so it can trigger a refresh after unfavorite
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favoriteHouses.length === 0 ? (
                    <p className="mx-auto font-bold my-20">Du har ingen favoritter endnu.</p>
                ) : (
                    favoriteHouses.map(house => (
                        <HouseCard
                            key={house.id}
                            house={house}
                            onFavoriteChange={() => setRefresh(r => !r)} // Add this prop
                        />
                    ))
                )}
                <button className="mb-4 p-2 bg-dinmaegler-blue text-white w-20 mx-auto rounded" onClick={() => updateFavorites("12345678")}>Update</button>
            </div>
        </>
    );
}