"use client";

import Container from "@/components/container/container";
import Maths from "@/components/maths/maths";
import { Spinner } from "@/components/spinner/spinner";
import Typography from "@/components/ui/typography";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";

interface Props {
  params: {
    projectId: Id<"projects">;
  };
}

const ProjectIdPage = ({ params }: Props) => {
  const project = useQuery(api.projects.getProjectById, {
    id: params.projectId,
  });
  if (project === undefined) {
    return (
      <div className="h-full flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }
  return (
    <Container>
      <div className="h-full w-full space-y-10">
        <Image
          src={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${project.imgSrc}`}
          alt={project.title}
          width={1800}
          height={1200}
          className="h-[450px] w-full object-cover rounded-md"
        />
        <Typography variant="h2" className="text-center max-w-3xl  mx-auto">
          {project.title}
        </Typography>
        <div className="max-w-3xl mx-auto p-5">
          <Typography className="font-semibold ml-[-10px] mb-3 text-xl">
            Features :{" "}
          </Typography>
          <Maths input={project.content} />
        </div>
      </div>
    </Container>
  );
};

export default ProjectIdPage;
