"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Typography from "../ui/typography";

interface Props {
  input: string;
  className?: string;
}

const Maths = ({ input, className }: Props) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className={className}
      components={{
        h1(props) {
          return (
            <Typography variant="h1" className="mb-7">
              {props.children}
            </Typography>
          );
        },
        h2(props) {
          return <Typography variant="h2">{props.children}</Typography>;
        },
        h3(props) {
          return (
            <Typography variant="h3" className="mt-9 mb-2">
              {props.children}
            </Typography>
          );
        },
        h4(props) {
          return (
            <Typography variant="h4" className="my-2">
              {props.children}
            </Typography>
          );
        },

        p(props) {
          return <Typography variant="p">{props.children}</Typography>;
        },
        li(props) {
          return <li className="ml-4 mb-7  list-disc" {...props} />;
        },
      }}
    >
      {input}
    </Markdown>
  );
};

export default Maths;
