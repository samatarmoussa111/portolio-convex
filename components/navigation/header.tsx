import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import Typography from "../ui/typography";

const Header = () => {
  return (
    <nav className="py-10 mb-5 flex justify-between items-center">
      <Link href="/">
        <Typography variant="h4"> {"< Component />"} </Typography>
      </Link>
      <ul className="flex items-center ">
        <li>
          <ModeToggle />
        </li>
        <li className="ml-5">
          <Button asChild>
            <Link
              href={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/kg2bfk4fe3ynwbyavxqaxa0k156m3gwg`}
              target="_blank"
            >
              Resume
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
