"use client"
import { createContext, useContext, useState, ReactNode } from 'react';
import { Resident } from '@/api/Resident';

interface ResidentContextProps {
    residents: Resident[];
    locationName: string | null;
    setResidents: (residents: Resident[], locationName: string) => void;
}

const ResidentContext = createContext<ResidentContextProps | undefined>(undefined);

const ResidentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [residents, setResidents] = useState<Resident[]>([]);
    const [locationName, setLocationName] = useState<string | null>(null);

    const setResidentsWithContext = (newResidents: Resident[], newLocationName: string) => {
        setResidents(newResidents);
        setLocationName(newLocationName);
    };

    return (
        <ResidentContext.Provider value={{ residents, locationName, setResidents: setResidentsWithContext }}>
            {children}
        </ResidentContext.Provider>
    );
};

const useResidents = () => {
    const context = useContext(ResidentContext);
    if (!context) {
        throw new Error('useResidents must be used within a ResidentProvider');
    }
    return context;
};

export { ResidentProvider, useResidents };