"use client";

import { api } from "@/convex/_generated/api";
import Container from "../container/container";
import Typography from "../ui/typography";
import ProjectCard from "./project-card";
import { useQuery } from "convex/react";
import { Spinner } from "../spinner/spinner";

const Projects = () => {
  const projects = useQuery(api.projects.projects);

  if (projects === undefined) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <Container className=" flex flex-col items-center justify-center mt-10 sm:mt-36">
      <Typography variant="h1" className="text-center">
        Projects
      </Typography>{" "}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8  mt-10 sm:mt-20">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            href={`/projects/${project._id}`}
          />
        ))}
      </div>
    </Container>
  );
};

export default Projects;
