import { useLoaderData, useSearchParams } from "react-router-dom";
import HomeListSection from "../components/sections/HomeListSection";
import AgentListSection from "../components/sections/AgentListSection";
import NewsletterSection from "../components/sections/NewsletterSection";
import HoldDigOpdateretSection from "../components/sections/HoldDigOpdateretSection";
import HeroSection from "../components/sections/HeroSection";
import CompanyAddSection from "../components/sections/CompanyAddSection";
import type { House } from "../Types";

export default function Home() {
    // Updated to use sampleHouses and allHouses from loader
    const { sampleHouses, allHouses } = useLoaderData() as { sampleHouses: House[]; allHouses: House[] };
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search') || "";

    return (
        <>
            {/* HERO and search homes */}
            <HeroSection houses={allHouses} /> {/* Pass all houses for autocomplete */}

            {/* CONTENT 1 company add */}
            <CompanyAddSection />

            {/* CONTENT 2 highlighted homes, go to home list */}
            <HomeListSection houses={sampleHouses} search={search} /> {/* Pass sample houses for display */}

            {/* CONTENT 3 newsletter */}
            <NewsletterSection />

            {/* CONTENT 4 highlighted agents, go to agent list */}
            <AgentListSection />

            {/* CONTENT 5HOLD DIG OPDATERET SECTION */}
            <HoldDigOpdateretSection />
        </>
    );
}