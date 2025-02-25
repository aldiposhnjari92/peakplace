"use client";

import Logo from "@/components/logo";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="flex items-center bg-white-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-80 py-4 z-10 dark:bg-white/5">
        <section className="w-full flex items-center justify-between max-w-[1400px] mx-auto px-4 xxl:px-0">
          <Link href={"/"}>
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Button
              variant="link"
              className="cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline"
            >
              Home
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline"
            >
              Services
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline"
            >
              Projects
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline"
            >
              Prices
            </Button>
            <Button
              variant="link"
              className="cursor-pointer text-foreground hover:text-primary focus:text-primary focus:underline"
            >
              Contact us
            </Button>

            <div className="flex items-center gap-2 ml-8">
              <ModeToggle />
              <Link href={"sign-in"}>
                <Button variant={"outline"} className="cursor-pointer">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </section>
      </nav>
      {/* Mobile Menu with Transition */}
      <div
        className={`md:hidden dark:bg-black/95 absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-start p-4 space-y-4 transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="link"
          className="text-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Button>
        <Button
          variant="link"
          className="text-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Services
        </Button>
        <Button
          variant="link"
          className="text-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Button>
        <Button
          variant="link"
          className="text-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Prices
        </Button>
        <Button
          variant="link"
          className="text-foreground hover:text-primary"
          onClick={() => setIsOpen(false)}
        >
          Contact us
        </Button>

        <Link href={"sign-in"} className="flex w-full">
          <Button className="cursor-pointer w-full">Sign in</Button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
