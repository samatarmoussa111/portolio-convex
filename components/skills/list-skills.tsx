import {
  TbBrandNextjs,
  TbBrandPrisma,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiStrapi, SiSupabase, SiTailwindcss, SiTrpc } from "react-icons/si";
import { BiLogoFirebase } from "react-icons/bi";
import { IconType } from "react-icons/lib";

export interface iconProps {
  icon: IconType;
}

type ListSkills = {
  icon: iconProps;
  title: string;
};

export const ListSkills: ListSkills[] = [
  {
    icon: { icon: TbBrandNextjs },
    title: "Next.js",
  },
  {
    icon: { icon: TbBrandTypescript },
    title: "Typescript",
  },
  {
    icon: { icon: SiTailwindcss },
    title: "Tailwind CSS",
  },
  {
    icon: { icon: TbBrandPrisma },
    title: "Prisma",
  },
  {
    icon: { icon: SiTrpc },
    title: "tRPC",
  },
  {
    icon: { icon: BiLogoFirebase },
    title: "Firebase",
  },
  {
    icon: { icon: SiSupabase },
    title: "Supabase",
  },
  {
    icon: { icon: SiStrapi },
    title: "Strapi",
  },
];
