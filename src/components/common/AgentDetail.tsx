// import React from "react";
import type { Agent } from "../../Types";


type AgentCardProps = {
    agent: Agent;
};

export default function AgentDetail({ agent }: AgentCardProps) {


   

    return (
        <>
            <article className="">
                <h1>{agent.name}</h1>
                <p>Phone: {agent.phone}</p>
                <p>Email: {agent.email}</p>
            </article>
      
      
      
            {/* <GalleryHouse
                dialogRef={dialogRef}
                gallery_icon={gallery_icon}
                plantegning_icon={plantegning_icon}
                map_icon={map_icon}
                favorite_icon={favorite_icon}
                showGallery={showGallery}
                showPlan={showPlan}
                showMap={showMap}
                house={house}
                favorite={favorite}
                handleFavoriteClick={handleFavoriteClick}
            /> */}
        </>
    );
}