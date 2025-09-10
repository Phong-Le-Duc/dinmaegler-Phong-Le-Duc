// import React from "react";
import type { Agent } from "../../Types";


type AgentCardProps = {
    agent: Agent;
};

export default function AgentDetail({ agent }: AgentCardProps) {
    return (
        <>
            <article className="content-width flex gap-4">
                <section className="flex ">
                    <figure className="mr-4">
                        <img
                            src={agent.image?.url || "/images/placeholder.jpg"}
                            alt={agent.name}
                            className="w-48 h-48 object-cover  border border-gray-300"
                        />
                    </figure>
                    <div>
                        <h1 className="font-bold">{agent.name}</h1>
                        <p className="text-gray-500">{agent.title}</p>
                        <div className="border-b-2 border-gray-300 my-2 w-10"></div>
                        <p>
                            <img src="src/assets/phone_icon.svg" alt="" className="inline-block align-middle mr-2 bg-dinmaegler-blue" />
                            {agent.phone}
                        </p>
                        <p>
                            <img src="src/assets/mail_icon.svg" alt="" className="inline-block align-middle mr-2 bg-dinmaegler-blue" />
                            {agent.email}
                        </p>
                    </div>
                </section>

                <section>
                    
               
                  
                </section>
            </article>
        </>
    );
}