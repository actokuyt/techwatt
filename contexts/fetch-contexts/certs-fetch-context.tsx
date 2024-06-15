"use client"

import React from "react";
import axios from "axios";

interface CertProp {
  _id: string;
  imgsrc: string;
  title: string;
}

type ProviderTypes = {
  children: React.ReactNode;
};

interface CertContextType {
  certs: CertProp[];
  setCerts: (certs: CertProp[]) => void;
}

const CertsFetchContext = React.createContext<CertContextType>({
  certs: [],
  setCerts: () => {},
});

export const useCertsFetchContext = () =>
  React.useContext(CertsFetchContext);

export const CertsFetchProvider = ({ children }: ProviderTypes) => {
  const [certs, setCerts] = React.useState<CertProp[]>(
    []
  );

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/certs");
        setCerts(response.data.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CertsFetchContext.Provider value={{certs, setCerts}}>
      {children}
    </CertsFetchContext.Provider>
  );
};
