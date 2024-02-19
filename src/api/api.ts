// api.ts
import { Location } from './Location';
import { Resident } from './Resident';
import { Note } from './Note';

//Notes apis
const addNote = async (residentId: number, note: string): Promise<Note> => {
    const response = await fetch(`/api/residents/${residentId}/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ note }),
    });
    return response.json();
};

//Residents apis
const fetchResidentData = async (residentUrl: string): Promise<Resident> => {
    const response = await fetch(residentUrl);
    return response.json();
};

//Locations api
const fetchLocationData = async (locationUrl: string): Promise<Location> => {
    const response = await fetch(locationUrl);
    const locationData = await response.json();

    // Extract relevant information
    const { id, name, type, residents } = locationData;

    // Fetch residents' details
    const residentPromises = residents.map((residentUrl: string) => fetchResidentData(residentUrl));
    const residentsData: Resident[] = await Promise.all(residentPromises);

    return { id, name, type, residents: residentsData };
};


export { fetchLocationData, fetchResidentData, addNote };