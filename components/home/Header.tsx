"use client";
import logo from "@/app/images/chatbot.png";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="container flex items-center justify-between px-8 mx-auto py-4">
      <div className="flex lg:flex-1">
        <NavLink href={"/"}>
          <span className="flex items-center gap-2 shrink-0">
            <Image
              src={logo}
              alt="Verbto logo"
              width={32}
              height={32}
              className="relative bottom-[4px] hover:rotate-12 transform transition duration-200 ease-in-out"
            />
            <span className="font-extrabold text-lg">Verbto</span>
          </span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-12 lg:items-center md-max:hidden">
        <NavLink href="/#pricing">Pricing</NavLink>
        <SignedIn>
          <NavLink href="/posts">Your Posts</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex gap-2 items-center">
            <NavLink href="/dashboard">
              <span className="md-max:hidden">Upload A Video</span>
            </NavLink>
            <UserButton />
            <div onClick={toggleMenu} className="md:hidden cursor-pointer">
              {isMenuOpen ? (
                <X className="text-blue-500 bg-none" />
              ) : (
                <Menu className="text-blue-500 bg-none" />
              )}
            </div>
          </div>

          {/* Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute right-8 top-16 bg-white shadow-lg rounded-lg p-4 z-10 md:hidden">
              <ul className="flex flex-col space-y-4">
                <li>
                  <NavLink href="/#pricing">Pricing</NavLink>
                </li>
                <li>
                  <NavLink href="/posts">Your Posts</NavLink>
                </li>
                <li>
                  <NavLink href="/dashboard">Upload A Video</NavLink>
                </li>
              </ul>
            </div>
          )}
        </SignedIn>

        <SignedOut>
          <SignInButton>
            <NavLink href="/sign-in">Sign In</NavLink>
          </SignInButton>
        </SignedOut>
      </div>
    </nav>
  );
}
