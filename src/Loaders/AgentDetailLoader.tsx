// In src/Loaders/HouseDetailLoader.tsx
import { type Agent } from "../Types.ts";
import { type LoaderFunctionArgs } from "react-router";

// this loader fetches a single agent by ID
export async function AgentDetailLoader({ params }: LoaderFunctionArgs): Promise<{ agent: Agent }> {
    console.log('Agent ID:', params.id);

    const response = await fetch(`https://dinmaegler.onrender.com/agents/${params.id}`);

    if (!response.ok) {
        throw new Error("Agent not found");
    }

    const agent = await response.json();
    return { agent };  // Single agent, not array
}