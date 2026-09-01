import { useLoaderData } from "react-router"
import { type Agent } from "../../Types"
import AgentCard from "./AgentCard"

export default function AgentsFetchShell() {
    let { agents } = useLoaderData() as { agents: Agent[] };
    if (!agents || agents.length === 0) {
        return <div>No agents found</div>
    }

    console.log("Agents", agents);

    return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agents.map(agent => (
                <AgentCard key={agent.id} agent={agent} />
            ))}
        </div>
    )
}


