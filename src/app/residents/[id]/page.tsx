'use client'
import {useParams} from 'next/navigation';
import { useResidents } from '@/context/ResidentContext';
import {Button, Card, Text, Textarea, Title} from "@tremor/react";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import {Resident} from "@/api/Resident";
import {Episode} from "@/api/Episode";
import {fetchEpisodeDetails} from "@/api/api";

export default function ResidentDetailsPage() {
    const { residents } = useResidents();
    const params = useParams();
    const [note, setNote] = useState('');
    const [savedNotes, setSavedNotes] = useState<string[]>([]);

    const { id } = params;
    const resident:Resident = residents.find((r) => r.id === Number(id));

    useEffect(() => {
        const storedNotes = localStorage.getItem(`resident_notes_${resident?.id}`);
        if (storedNotes) {
            setSavedNotes(JSON.parse(storedNotes));
        }
    }, [resident?.id]);

    const handleSaveNote = () => {
        if (note.trim()) {
            const newNotes = [...savedNotes, note];
            setSavedNotes(newNotes);

            localStorage.setItem(`resident_notes_${resident.id}`, JSON.stringify(newNotes));
            setNote('');
        }
    };

    const fetchEpisodes:Episode = async (episodeUrl) => {
        return await fetchEpisodeDetails(episodeUrl);
    };


    if (!resident) {
        return <div>Resident not found</div>;
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Card>
                <Title>{resident.name}</Title>
                <p>Status: {resident.status}</p>
                <p>Species: {resident.species}</p>
                <p>Gender: {resident.gender}</p>
                {resident.type && <p>Type: {resident.type}</p>}
                {resident.episode && (
                    <div>
                        <p>Episodes:</p>
                        <ul>
                            {resident.episode.map((episodeUrl) => (
                                <li key={episodeUrl}>
                                    {fetchEpisodes(episodeUrl).name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {resident.created && <p>Created: {resident.created}</p>}
                {resident.origin && (
                    <div>
                        <p>Origin:</p>
                        <Text>{resident.origin.name}</Text>
                        <a href={resident.origin.url} target="_blank" rel="noopener noreferrer">
                            {resident.origin.url}
                        </a>
                    </div>
                )}
                <Image src={resident.image} alt={resident.name} width={200} height={200}/>
                <div>
                    <p>Notes:</p>
                    <ul>
                        {savedNotes.map((savedNote, index) => (
                            <li key={index}>{savedNote}</li>
                        ))}
                    </ul>
                    <Textarea value={note} onChange={(e) => setNote(e.target.value)}/>
                    <Button onClick={handleSaveNote}>Save Note</Button>
                </div>
            </Card>
        </div>
    );
}
