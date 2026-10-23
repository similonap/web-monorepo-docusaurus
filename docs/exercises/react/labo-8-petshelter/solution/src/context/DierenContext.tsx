import { createContext, useContext, useState } from 'react';
import { DIEREN, type Dier } from '../app/dieren';

interface IDierenContext {
  dieren: Dier[];
  adopteer: (id: number) => void;
  annuleer: (id: number) => void;
}

export const DierenContext = createContext<IDierenContext>({
  dieren: [],
  adopteer: () => {},
  annuleer: () => {},
});

export const DierenProvider = ({ children }: { children: React.ReactNode }) => {
  const [dieren, setDieren] = useState<Dier[]>(DIEREN);

  const adopteer = (id: number) => {
    setDieren(dieren.map((dier) => (dier.id === id ? { ...dier, geplaatst: true } : dier)));
  };

  // Extra: een adoptie ongedaan maken
  const annuleer = (id: number) => {
    setDieren(dieren.map((dier) => (dier.id === id ? { ...dier, geplaatst: false } : dier)));
  };

  return (
    <DierenContext.Provider value={{ dieren: dieren, adopteer: adopteer, annuleer: annuleer }}>
      {children}
    </DierenContext.Provider>
  );
};

export const useDieren = () => {
  return useContext(DierenContext);
};
