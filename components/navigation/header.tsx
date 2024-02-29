import Link from "next/link";
import { ModeToggle } from "../theme/mode-toggle";
import { Button } from "../ui/button";
import Typography from "../ui/typography";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="py-10 mb-5 flex justify-between items-center">
      <Link href="/">
        <Image
          src="/images/portfolio_logo.svg"
          height={130}
          width={130}
          alt="logo"
        />
      </Link>
      <ul className="flex items-center ">
        <li className="ml-5">
          <Button asChild>
            <Link
              href={`${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/kg26fzhvwsnmqdd2xb87jvjfd16mc7p7`}
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
