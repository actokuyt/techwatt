"use client"

import React from "react";
import axios from "axios";

interface ProjectCardsProp {
  _id: string;
  src: string;
  title: string;
  description: string;
}

type ProviderTypes = {
  children: React.ReactNode;
};

interface ProjectsContextType {
  projects: ProjectCardsProp[];
  setProjects: (articles: ProjectCardsProp[]) => void;
}

const ProjectsFetchContext = React.createContext<ProjectsContextType>({
  projects: [],
  setProjects: () => {},
});

export const useProjectsFetchContext = () =>
  React.useContext(ProjectsFetchContext);

export const ProjectsFetchProvider = ({ children }: ProviderTypes) => {
  const [projects, setProjects] = React.useState<ProjectCardsProp[]>(
    []
  );


  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`api/projects`);
        setProjects(response.data.data);
      } catch (error) {
        console.error("Error fetching blog articles:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProjectsFetchContext.Provider value={{projects, setProjects}}>
      {children}
    </ProjectsFetchContext.Provider>
  );
};
