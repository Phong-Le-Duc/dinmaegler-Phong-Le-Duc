import heroimg from "/src/assets/homepage_hero.jpg";
import SearchInput from "../common/SearchInput";

type House = {
    adress1: string;
    // ...add other fields if needed
};

export default function HeroSection({ houses = [] }: { houses?: House[] }) {
    console.log("houses", houses);
    return (
        <section className="relative w-full h-[70vh]">
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
    );
}