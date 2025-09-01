import heroimg from "/src/assets/homepage_hero.jpg";
import SearchInput from "../common/SearchInput";

export default function HeroSection() {

    return (
        <section className="relative w-full">
            <img
                src={heroimg}
                alt="hero image"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="h1 text-white m-4">Søg efter din drømmebolig</h1>
                <SearchInput />

            </div>
        </section>
    )
}