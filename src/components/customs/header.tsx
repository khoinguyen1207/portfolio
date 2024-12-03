import Icon from "@/components/customs/icon";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="py-4 inset-0 sticky w-full z-50 top-0 bg-background/60 border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <Icon name="logo" height={44} width={44} />
          </div>

          <nav>
            <ul className="flex items-center gap-10 text-sm">
              <li className="hover:text-blue transition ease-in">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-blue transition ease-in">
                <Link href="/about">About</Link>
              </li>
              <li className="hover:text-blue transition ease-in">
                <Link href="/project">Project</Link>
              </li>
              <li className="hover:text-blue transition ease-in">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="hover:text-blue transition ease-in">
                <Link href="/web3">Web3</Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button className="text-white" size="lg">
              Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
