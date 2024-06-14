import { projects } from "@/utils/data";
import { IframeCards } from "../../components/mui-card";
import { useProjectsFetchContext } from "@/contexts/fetch-contexts/projects-fetch-context";

export default async function Projects() {
  const allProjects = await projects()
 
  if (!allProjects) {
    return <></>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:w-[90%] mx-auto">
      {allProjects.map((project, index) => {
        return (
          <IframeCards
            key={index}
            src={project.src}
            title={project.title}
            description={project.description}
          />
        );
      })}
    </div>
  );
}
