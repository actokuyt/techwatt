import Projects from "@/components/projects/projects";
import { ProjectsFetchProvider } from "@/contexts/fetch-contexts/projects-fetch-context";

export default function Page() {
  return (
    <div className="p-2 pt-[5em]">
      <ProjectsFetchProvider>
        <Projects />
      </ProjectsFetchProvider>
    </div>
  );
}
