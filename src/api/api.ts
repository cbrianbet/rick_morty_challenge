// api.ts
import { Location } from './Location';
import { Resident } from './Resident';
import {Episode} from "@/api/Episode";

//Episodes apis
const fetchEpisodeDetails = async (episodeUrl: string): Promise<Episode> => {
    const response = await fetch(episodeUrl);
    const episodeData = await response.json();
    return {
        id: episodeData.id,
        name: episodeData.name,
        air_date: episodeData.air_date,
        episode: episodeData.episode,
        };
};

//Residents apis
const fetchResidentData = async (residentUrl: string): Promise<Resident> => {
    const response = await fetch(residentUrl);
    return  response.json();
};

//Locations api
const fetchLocationData = async (): Promise<Location[]> => {
    let locations: Location[] = [];
    let nextPage = 'https://rickandmortyapi.com/api/location';

    do {
        const response = await fetch(nextPage);
        const locationData = await response.json();

        // Extract relevant information
        const { results, info } = locationData;

        // Fetch residents' details for each location
        const locationPromises = results.map(async (location) => {
            const { id, name, type, residents } = location;
            const residentPromises = residents.map((residentUrl: string) => fetchResidentData(residentUrl));
            const residentsData: Resident[] = await Promise.all(residentPromises);
            return { id, name, type, residents: residentsData };
        });

        locations = [...locations, ...await Promise.all(locationPromises)];

        // Update nextPage for the next iteration
        nextPage = info.next;

    } while (nextPage);

    return locations;
};


export { fetchLocationData, fetchResidentData, fetchEpisodeDetails };