// import HouseCard from "../components/common/HouseCard"
import AgentDetail from "../components/common/AgentDetail"
import { useLoaderData } from "react-router"
import { type Agent } from "../Types"
import "../components/common/flickity.css"

export default function DetailMaeglere() {
    const { agent } = useLoaderData() as { agent: Agent };


    return (
        <>
            {/* <Headline headlineText="Bolig detail" /> */}
            <AgentDetail agent={agent} />
        </>
    )
}