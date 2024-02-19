"use client"
import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Button
} from '@tremor/react';
import {Location} from "@/api/Location";
import {Resident} from "@/api/Resident";
import {useRouter} from "next/navigation";
import { useResidents } from '@/context/ResidentContext';


export default function LocationsTable({ locations }: { locations: Location[] }) {
    const router = useRouter();
    const { setResidents } = useResidents();
    const handleResidentsClick = (residents: Resident[], locationName: string) => {
        setResidents(residents, locationName);
        router.push('/residents');
    };

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Name</TableHeaderCell>
                        <TableHeaderCell>Type</TableHeaderCell>
                        <TableHeaderCell>Residents</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {locations?.map((location) => (
                        <TableRow key={location?.id}>
                            <TableCell>{location?.name}</TableCell>
                            <TableCell>
                                <Text>{location?.type}</Text>
                            </TableCell>
                            <TableCell>
                                <Button onClick={() => handleResidentsClick(location?.residents, location?.name)}>
                                    {location?.residents.length}
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

        </>
    );
}