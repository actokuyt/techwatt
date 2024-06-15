"use client"

import React from "react";
import axios from "axios";

interface TechProp {
  _id: string;
  imgsrc: string;
  title: string;
}

type ProviderTypes = {
  children: React.ReactNode;
};

interface StackContextType {
  stack: TechProp[];
  setStack: (stack: TechProp[]) => void;
}

const StackFetchContext = React.createContext<StackContextType>({
  stack: [],
  setStack: () => {},
});

export const useStackFetchContext = () =>
  React.useContext(StackFetchContext);

export const StackFetchProvider = ({ children }: ProviderTypes) => {
  const [stack, setStack] = React.useState<TechProp[]>(
    []
  );


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/stack`);
        setStack(response.data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <StackFetchContext.Provider value={{stack, setStack}}>
      {children}
    </StackFetchContext.Provider>
  );
};
