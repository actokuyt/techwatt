"use client"

import React from "react";
import axios from "axios";

interface ServicesCardsProp {
  _id: string;
  imgsrc: string;
  title: string;
  description: string;
}

type ProviderTypes = {
  children: React.ReactNode;
};

interface ServicesContextType {
  services: ServicesCardsProp[];
  setServices: (articles: ServicesCardsProp[]) => void;
}

const ServicesFetchContext = React.createContext<ServicesContextType>({
  services: [],
  setServices: () => {},
});

export const useServicesFetchContext = () =>
  React.useContext(ServicesFetchContext);

export const ServicesFetchProvider = ({ children }: ProviderTypes) => {
  const [services, setServices] = React.useState<ServicesCardsProp[]>(
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/services`);
        setServices(response.data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ServicesFetchContext.Provider value={{services, setServices}}>
      {children}
    </ServicesFetchContext.Provider>
  );
};
