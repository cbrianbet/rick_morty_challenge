import React, {Fragment} from 'react';
import {Button, Title} from '@tremor/react';
import { Resident } from '@/api/Resident';
import {Modal} from "@headlessui/react/dist/internal/modal";
import {Dialog, Transition} from "@headlessui/react";

interface ResidentModalProps {
    isOpen: boolean;
    onClose: () => void;
    residents: Resident[];
    locationName: string;
}

export default function ResidentModal({ isOpen, onClose, residents, locationName }: React.FC<ResidentModalProps>) {
    return
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={onClose} open={isOpen}>
            <Dialog.Panel>
                <Dialog.Title>{locationName} Residents</Dialog.Title>
                <div>
                    <ul>
                        {residents.map((resident) => (
                            <li key={resident.id}>
                                <div style={{display: 'flex', alignItems: 'center'}}>
                                    <img src={resident.image} alt={resident.name} style={{marginRight: '10px'}}/>
                                    <div>
                                        <p>Name: {resident.name}</p>
                                        <p>Status: {resident.status}</p>
                                        {/* Add other resident details as needed */}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <Button onClick={onClose}>Close</Button>
            </Dialog.Panel>
        </Dialog>
    </Transition>
};
