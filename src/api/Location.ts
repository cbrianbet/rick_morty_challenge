// Location.ts
import {Resident} from "./Resident";

export interface Location {
    id: number;
    name: string;
    type: string;
    residents: Resident[];
}

