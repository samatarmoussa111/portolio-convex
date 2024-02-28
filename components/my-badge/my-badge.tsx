"use client";

import { Badge } from "../ui/badge";
import Typography from "../ui/typography";

interface Props {
  title: string;
}

const MyBadge = ({ title }: Props) => {
  return (
    <Badge variant="secondary">
      <span className="inline-flex items-center justify-center rounded-full  px-2.5 py-0.5  ">
        <Typography variant="p" className="whitespace-nowrap text-sm">
          {title}
        </Typography>
      </span>
    </Badge>
  );
};

export default MyBadge;
