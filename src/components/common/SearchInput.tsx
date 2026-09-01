import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";

type House = {
    adress1: string;
    // ...add other fields if needed
};

export default function SearchInput() {
    const { allHouses: houses } = useLoaderData() as { allHouses: House[] };
    const navigate = useNavigate();
    const [input, setInput] = useState("");
    const [suggestions, setSuggestions] = useState<string[]>([]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setInput(value);

        if (value.length > 0 && houses.length > 0) {
            setSuggestions(
                houses
                    .map(house => house.adress1)
                    .filter(addr =>
                        addr.toLowerCase().includes(value.toLowerCase())

                    )
            );
        } else {
            setSuggestions([]);
        }
    }

    function handleSelectSuggestion(addr: string) {
        setInput(addr);
        setSuggestions([]);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        navigate(`/list-homes?search=${encodeURIComponent(input)}`);
    }

    return (
        <div className="bg-white px-4 py-5 w-[calc(100%-32px)] md:w-full md:px-4 md:min-w-[300px] max-w-[600px] mx-auto md:mx-0 rounded-sm">
            <p className="font-bold">Søg blandt 158 boliger til salg <span className="hidden md:inline">i 74 butikker</span></p>
            <p>Hvad skal din næste bolig indeholde</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="w-full relative">
                    <input
                        type="search"
                        name="search"
                        value={input}
                        onChange={handleChange}
                        autoComplete="off"
                        placeholder="Søg på fx. hus, villa, lejlighed eller lignende"
                        className="p-2 rounded border border-gray-300 w-full md:min-w-[300px] max-w-[600px]"
                    />
                    {suggestions.length > 0 && (
                        <ul className="absolute left-0 right-0 bg-white border mt-1 rounded shadow z-10">
                            {suggestions.map((addr, idx) => (
                                <li
                                    key={idx}
                                    className="p-2 hover:bg-gray-100 cursor-pointer"
                                    onClick={() => handleSelectSuggestion(addr)}
                                >
                                    {addr}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className="bg-dinmaegler-blue text-white p-2 rounded" type="submit">
                    Søg
                </button>
            </form>
        </div>
    );
}