
export type Agent = {
  id: string | number;
  name: string;
  email: string;
  phone: string | number;
  image?: {
    name: string;
    size: number;
    url: string;
  };
  title?: string;
  description?: string;
}

export type House = {
  id: string | number;
  adress1: string; // Note: likely "address" not "adress1"
  city: string;
  price: number;
  rooms: number;
  size: number;
  energylabel: string;
  type: string;
  description?: string;
  images?: Image[];
  postalcode: number
  lotsize: number
  livingspace: number
  basementsize: number;
  built: number;
  remodel: number
  payment: number
  gross: number
  netto: number
  cost: number
  agent: Agent
    floorplan : Floorplan
    search: string;
  // Add other properties you see in the API response

}

export type Floorplan={
  width: number;
  height: number;
  url: string;
}


export type Image = {
  url: string;
  width: number;
  height: number;
  id: string;
  name: string;
  size: number;
}


export interface Property {
  id: string
  energylabel: string
  type: string
  images: Image[]
  gross: number
  payment: number
  price: number
  city: string
  cost: number
  basementsize: number
  lotsize: number
  netto: number

  adress1: string
  adress2: string
  description: string
  livingspace: number
  agent: Agent
  built: number
  remodel?: number
  rooms: string
  floors?: number
  basement?: string
  //   floorplan: PropertyImage
  lat: number
  long: number
  users: any[]
}


