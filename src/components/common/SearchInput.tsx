

export default function SearchInput() {

    return (
        <div className="bg-white p-5 min-w-[300px] max-w-[600px] w-full">
            <p className="font-bold">Søg blandt 158 boliger til salg i 74 butikker</p>
            <p>Hvad skal din næste bolig indeholde</p>

            <div className="flex gap-2">
                <input
                    type="search"
                    placeholder="Søg på fx. glaskeramisk komfur, bryggers, kælder eller lignende"
                    className="p-2 rounded border border-gray-300 min-w-[300px] max-w-[600px] w-full"
                />
                <button className="bg-dinmaegler-blue text-white p-2 rounded">Søg</button>
            </div>
        </div>
    )
}