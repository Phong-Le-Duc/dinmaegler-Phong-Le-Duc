import { type House } from "../Types.ts"
// det her DRopDOWN SEARCH

// this loader fetches houses from the API
export async function HouseLoader({ request }: { request: Request }): Promise<{ houses: House[] }> {
    console.log(request);

    const url = new URL(request.url);
    const type = url.searchParams.get('hustype'); //henter værdien fra type_eq....

    console.log('Search params:', url.searchParams);
    console.log('Type filter:', type);

    const response = await fetch(`https://dinmaegler.onrender.com/homes${type ? `?type_eq=${type}` : ''}`);
    if (!response.ok) {
        throw new Error("Failed to fetch houses");
    }
    const houses = await response.json();
    return { houses };  // Wrap in object like HomeLoader to maintain consistency and fetchshell remain simple. not contain both object and array
}