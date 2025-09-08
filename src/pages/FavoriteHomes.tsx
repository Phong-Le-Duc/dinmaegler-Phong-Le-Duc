import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import type { House } from "../Types";
import { getFavoriteIds } from "../utility/favorites";
import FavoriteCard from "../components/common/FavoriteCard";
import Headline from "../components/layout/Headline";


export default function FavoriteHomes() {
    // const { token, login, updateFavorites } = useAuth() as AuthContextType;
    useAuth(); // Call useAuth to ensure authentication context is initialized if needed
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
             <Headline headlineText="Mine favoritboliger" />
                <div className="content-width my-15 ">
                    {favoriteHouses.length === 0 ? (
                        <div className="col-span-full flex justify-center">
                            <p className="font-bold my-20">Du har ingen favoritter endnu.</p>
                        </div>
                    ) : (
                        favoriteHouses.map(house => (
                            <FavoriteCard
                                key={house.id}
                                house={house}
                                onFavoriteChange={() => setRefresh(r => !r)}
                            />
                        ))
                    )}
                    {/* <button className="mb-4 p-2 bg-dinmaegler-blue text-white w-20 mx-auto rounded" onClick={() => updateFavorites("12345678")}>Update</button> */}
                </div>
       
        </>
    );
}