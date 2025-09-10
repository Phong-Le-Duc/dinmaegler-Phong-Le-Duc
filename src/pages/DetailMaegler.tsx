// import HouseCard from "../components/common/HouseCard"
import AgentDetail from "../components/common/AgentDetail"
import { useLoaderData } from "react-router"
import { type Agent, type House } from "../Types"
import "../components/common/flickity.css"
import SearchInputSimple from "../components/common/SearchInputSimple";
import Add1 from "../components/common/Add1";
import Headline from "../components/layout/Headline";

export default function DetailMaeglere() {
  const { agent, allHouses } = useLoaderData() as { agent: Agent, allHouses: House[] };


    return (
        <>
            <div>
                <Headline headlineText="Bolig detail" />
                <div className="content-width my-8 flex">
                    <section>
                        <AgentDetail agent={agent} />
                    </section>

                    <section className="overflow-visible">
                        <SearchInputSimple />
                        <Add1 />
                    </section>
                </div>
            </div>
        </>
    )
}