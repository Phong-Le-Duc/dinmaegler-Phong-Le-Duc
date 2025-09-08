export function getEnergyLabelColor(label: string) {
    switch (label) {
        case "A": return "bg-green-500 text-white";
        case "B": return "bg-yellow-400 text-black";
        case "C": return "bg-orange-400 text-black";
        case "D": return "bg-red-500 text-white";
        default: return "bg-gray-300 text-black";
    }
}