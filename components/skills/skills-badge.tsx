import Typography from "../ui/typography";
import { Badge } from "../ui/badge";
import { IconType } from "react-icons/lib";

export interface iconProps {
  icon: IconType;
}

interface Props {
  title: string;
  icon: iconProps;

  className?: string;
}

export const SkillsBadge = ({
  title,
  icon,

  className = "mr-2 h-5 w-5",
}: Props) => {
  return (
    <>
      <Badge variant="secondary">
        <span className="inline-flex items-center justify-center rounded-full  px-2.5 py-0.5  ">
          <icon.icon className={className} />
          <Typography variant="p" className="whitespace-nowrap text-sm">
            {title}
          </Typography>
        </span>
      </Badge>
    </>
  );
};
