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

                    <p>here agent description text</p>

                </section>


            </article>
            {/* here write a message to specific agent
containing you name, email,subject, textfield, and send to agents mail button */}


            {/* <section className="my-8">
                <p>Kontakt {agent.name}</p>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const name = formData.get("name");
                        const email = formData.get("email");
                        const subject = formData.get("subject");
                        const message = formData.get("message");
                      
                        console.log({
                            name,
                            email,
                            subject,
                            message,
                            agentEmail: agent.email
                        });
                       
                        e.currentTarget.reset();
                    }}
                    className="flex flex-col gap-6 max-w-md p-6 bg-white rounded border-1 border-gray-300 shadow"
                >
                    <div className="flex gap-4">
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="name" className="mb-1 text-sm text-gray-700">Navn</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                        <div className="flex flex-col w-1/2">
                            <label htmlFor="email" className="mb-1 text-sm text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="subject" className="mb-1 text-sm text-gray-700">Emne</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="message" className="mb-1 text-sm text-gray-700">Besked</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 resize-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        className="bg-dinmaegler-blue text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                        type="submit"
                    >
                        Send besked
                    </button>
                </form>
            </section> */}
        </>
    );
}