import { type Agent } from "../../Types";
import { Link } from "react-router-dom";


export default function AgentCard({ agent }: { agent: Agent }) {

    return (
        <Link to={`/detail-maeglere/${agent.id}`} className="block">
            <article key={agent.id} className="bg-dinmaegler-white border border-gray-50 rounded-sm shadow-md">

                <figure>
                    <img
                        src={agent.image ? agent.image.url : '/images/placeholder.jpg'}
                        alt={`${agent.name} - ${agent.title}`}
                    />
                </figure>
                <div className="text-center py-4">
                    <p className="font-bold text-lg">{agent.name}</p>
                    <p>{agent.title}</p>

                    <figure className="flex gap-2 justify-center py-4">
                        <img src="src/assets/maegler_mail.png" alt="maegler mail" />
                        <img src="src/assets/maegler_linkedin.png" alt="maegler linkedin" />
                    </figure>
                </div>
            </article>
        </Link>
    )
}