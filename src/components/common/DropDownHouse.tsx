import { useRef } from "react";
import { useSearchParams } from "react-router-dom";

export default function DropDownHouse() {
    const formRef = useRef<HTMLFormElement>(null);
    const [searchParams] = useSearchParams();
    const currentType = searchParams.get('hustype') || '';

    return (
        <div className="p-4 content-width">
            <p className="mb-4 font-bold">Søg efter dit drømmehus</p>
            <p className="mb-2">Ejendomstype</p>

            <form method="GET" ref={formRef}>
                <select
                    name="hustype"
                    value={currentType} // Set current value from URL
                    onChange={() => {
                        formRef.current?.submit();
                    }}
                    className="p-2 border border-gray-300 rounded bg-white min-w-[200px]"
                >
                    <option value="">Alle typer</option>
                    <option value="Villa">Villa</option>
                    <option value="Ejerlejlighed">Ejerlejlighed</option>
                    <option value="Landejendom">Landejendom</option>
                    <option value="Byhus">Byhus</option>
                </select>
            </form>
        </div>
    );
}