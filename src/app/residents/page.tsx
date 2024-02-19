'use client';
import Link from 'next/link';
import {Card, Text, Title, Flex, Grid, Subtitle} from '@tremor/react';
import { useResidents } from '@/context/ResidentContext';
import React from "react";
import Image from "next/image";

export default function ResidentPage() {
    const { residents, locationName } = useResidents();
    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title>{locationName} Residents</Title>
            <Grid numItemsSm={2} numItemsLg={3} className="gap-6">
                {residents.map((resident) => (
                    <Link key={resident.id} href={`/residents/${resident.id}`}>
                        <Card key={resident.id}>

                        <Title>{resident.name}</Title>
                        <Flex
                            justifyContent="start"
                            alignItems="baseline"
                            className="space-x-2"
                        >
                            <Text>Status:</Text>
                            <Subtitle>{resident.status}</Subtitle>

                        </Flex>
                        <Flex className="mt-6">
                            <Image src={resident.image} alt={resident.name} width={200} height={200}/>
                        </Flex>
                    </Card>
                    </Link>
                ))}
            </Grid>
        </main>
    );
}