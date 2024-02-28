"use client";

import Container from "@/components/container/container";
import Maths from "@/components/maths/maths";
import MyBadge from "@/components/my-badge/my-badge";
import Iconify from "@/components/projects/iconify";
import { Spinner } from "@/components/spinner/spinner";
import Typography from "@/components/ui/typography";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";

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
          width={1920}
          height={1200}
          className="h-[450px] w-full object-contain rounded-md"
        />
        <div className="flex items-center justify-center gap-x-2">
          {project.techIcons.map((item) => (
            <MyBadge key={item} title={item} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-x-4">
          {project.repoLink !== "" && (
            <Link
              href={project.repoLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Iconify className="text-2xl" icon="akar-icons:github-fill" />
            </Link>
          )}
          {project.sourceLink !== "" && (
            <Link
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
              className="transform transition-all duration-200 hover:scale-110 hover:text-primary"
            >
              <Iconify className="text-2xl" icon="iconoir:open-new-window" />
            </Link>
          )}
        </div>

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
