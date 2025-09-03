import { type Agent, type House } from "../Types.ts";

// this loader fetches agents, sample houses, and all houses for autocomplete
export async function HomeLoader(): Promise<{ agents: Agent[]; sampleHouses: House[]; allHouses: House[] }> {
    const [agents, sampleHouses, allHouses] = await Promise.all([
        fetch('https://dinmaegler.onrender.com/agents?_limit=3').then(res => res.json()),
        fetch('https://dinmaegler.onrender.com/homes?_limit=4').then(res => res.json()),
        fetch('https://dinmaegler.onrender.com/homes').then(res => res.json())
    ]);
    return { agents, sampleHouses, allHouses };
}



