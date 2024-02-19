import { Card, Title, Text } from '@tremor/react';
import Search from './search';
import LocationsTable from './table';
import {fetchLocationData} from "@/api/api";
import {useEffect} from "react";

export default async function IndexPage({searchParams}: {
  searchParams: { q: string };
}) {
    const searchTerm = searchParams.q ?? '';
    let locations = await fetchLocationData();
    const filterLocations = (location: Location): boolean => {
        const searchLower = searchTerm.toLowerCase();
        return (
            location.name.toLowerCase().includes(searchLower) ||
            location.residents.some((resident) => resident.name.toLowerCase().includes(searchLower))
        );
    };

    const filteredLocations = locations.filter(filterLocations);



    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>Locations</Title>
            <Text>A list of various locations.</Text>
            <Search />
            <Card className="mt-6">
                <LocationsTable locations={filteredLocations} />
            </Card>
        </main>
    );
}