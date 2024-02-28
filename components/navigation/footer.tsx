import Link from "next/link";
import Typography from "../ui/typography";
import { Button } from "../ui/button";
import { GithubIcon, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <div className="pb-5 pt-40 flex justify-between items-center">
      <div>
        <Typography
          variant="p"
          className="whitespace-nowrap text-sm  underline "
        >
          © 2024 - Samatar Barkadleh - All rights reserved.
        </Typography>
      </div>
      <div className="flex items-center space-x-5">
        <Link href="https://github.com/samatarmoussa111" target="_blank">
          <Button variant="secondary" size="icon">
            <GithubIcon />
          </Button>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCdQdNHEc4L84BXa-3CPS64A"
          target="_blank"
        >
          <Button variant="secondary" size="icon">
            <Youtube />
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/samatar-barkadleh-1155b528a/"
          target="_blank"
        >
          <Button variant="secondary" size="icon">
            <Linkedin />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
