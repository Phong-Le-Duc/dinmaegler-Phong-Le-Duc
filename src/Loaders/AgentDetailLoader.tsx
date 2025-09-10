// In src/Loaders/HouseDetailLoader.tsx
import { type Agent, type House } from "../Types.ts";
import { type LoaderFunctionArgs } from "react-router";

// this loader fetches a single agent by ID
export async function AgentDetailLoader({ params }: LoaderFunctionArgs): Promise<{ agent: Agent, allHouses: House[] }> {
    console.log('Agent ID:', params.id);

    // Fetch agent
    const agentRes = await fetch(`https://dinmaegler.onrender.com/agents/${params.id}`);
    if (!agentRes.ok) throw new Error("Agent not found");
    const agent = await agentRes.json();

    // Fetch all homes needed for autocomplete search
    const homesRes = await fetch("https://dinmaegler.onrender.com/homes");
    if (!homesRes.ok) throw new Error("Could not fetch homes");
    const allHouses = await homesRes.json();

    return { agent, allHouses };
}