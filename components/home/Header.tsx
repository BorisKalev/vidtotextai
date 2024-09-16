import logo from "@/app/images/chatbot.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link
      href={href}
      className=" transition-colors duration-200 text-gray-600 hover:text-blue-500"
    >
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <nav className="container flex items-center justify-between px-8 pt-4 mx-auto bg-blue-200/20 py-4">
      <div className="flex lg:flex-1">
        <NavLink href={"/"}>
          <span className="flex items-center gap-2 shrink-0">
            <Image
              src={logo}
              alt="Verbto logo"
              width={32}
              height={32}
              className="hover:rotate-12 transform transition duration-200 ease-in-out"
            />
            <span className="font-extrabold text-lg">Verbto</span>
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-2 lg:gap-12 lg:items-center">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/posts">Your Posts</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/dashboard">Upload A Video</NavLink>
            <UserButton />
          </div>
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <NavLink href="/signin">Sign In</NavLink>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
