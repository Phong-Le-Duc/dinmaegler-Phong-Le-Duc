import React, { useEffect } from "react";
import { Link } from "react-router";
import type { House } from "../../Types";
import { useNavigate } from "react-router";
import FlickityTest from "./FlickityTest";
import { useAuth } from "../../contexts/AuthContext";
// import { addFavorite, removeFavorite, isFavorite } from "../../utility/favorites";

type GalleryHouseProps = {
    dialogRef: React.RefObject<HTMLDialogElement | null>;
    gallery_icon: string;
    plantegning_icon: string;
    map_icon: string;
    favorite_icon: string;
    showGallery: boolean;
    showPlan: boolean;
    showMap: boolean;
    house: House;
    favorite: boolean;
    handleFavoriteClick: () => void;
};

export default function GalleryHouse({
    dialogRef,
    showGallery,
    showPlan,
    showMap,
    gallery_icon,
    plantegning_icon,
    map_icon,
    // favorite_icon,
    house,
    favorite,
    handleFavoriteClick
}: GalleryHouseProps) {

    const navigate = useNavigate();

    // Favorite logic
    const auth = useAuth();
    const token = auth?.token;

    // const [favorite, setFavorite] = useState(false);

    // useEffect(() => {
    //     setFavorite(isFavorite(String(house.id)));
    // }, [house.id]);

    // function handleFavoriteClick() {
    //     if (favorite) {
    //         removeFavorite(String(house.id));
    //         setFavorite(false);
    //     } else {
    //         addFavorite(String(house.id));
    //         setFavorite(true);
    //     }
    // }

    useEffect(() => {
        const dialog = dialogRef.current;
        if (showGallery || showPlan || showMap) {
            if (dialog && !dialog.open) {
                dialog.showModal();
            }
        } else {
            dialog?.close();
        }
    }, [showGallery, showPlan, showMap, dialogRef]);

    // Listen for dialog close (Escape or button)
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        const handleClose = () => {
            navigate("#");
        };

        dialog.addEventListener("close", handleClose);
        return () => {
            dialog.removeEventListener("close", handleClose);
        };
    }, [dialogRef, navigate]);

    return (
        <dialog
            className="backdrop:bg-black backdrop:opacity-75 mx-auto my-4 w-[40rem] h-[30rem] bg-transparent border-0"
            ref={dialogRef}
        >
            <button
                className="fixed top-2 right-3 text-white text-4xl"
                aria-label="Close dialog"
                onClick={() => {
                    dialogRef.current?.close();
                    // navigate("#"); // now handled by close event
                }}
            >
                &times;
            </button>
            {showGallery ? (
                <FlickityTest house={house} />
            ) : showPlan ? (
                <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src={house.floorplan && house.floorplan.url ? house.floorplan.url : "/images/placeholder.jpg"} />
            ) : showMap ? (
                // <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src="/src/assets/house_lokation.png" />
                <iframe
                    className=" block"
                    width="100%"
                    height="90%"
                    style={{ border: 0 }}
                    src={`https://www.google.com/maps?q=${house.lat},${house.long}&z=15&output=embed`}
                    allowFullScreen
                    title="Map"
                />
            ) : (
                <img className="max-w-full max-h-[70vh] object-contain block mx-auto" src="/src/assets/house_lokation.png" />
            )}

            <div className="flex gap-4 justify-center mt-4 absolute left-1/2 transform -translate-x-1/2">
                <Link to="?modal=galleri">
                    <img src={gallery_icon} className="w-8 h-8 img-white" alt="Gallery" />
                </Link>
                <Link to="?modal=plantegning">
                    <img src={plantegning_icon} className="w-8 h-8 img-white object-cover" alt="Plantegning" />
                </Link>
                <Link to="?modal=kort">
                    <img src={map_icon} className="w-8 h-8 img-white" alt="lokation" />
                </Link>
                {token && (
                    <span
                        className="w-8 h-8 flex items-center justify-center cursor-pointer"
                        onClick={handleFavoriteClick}
                        title={favorite ? "Fjern fra favoritter" : "Tilføj til favoritter"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={favorite ? "red" : "transparent"}
                            viewBox="0 0 24 24"
                            stroke="#888"
                            className="w-8 h-8"
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
            </div>
        </dialog>
    );
}