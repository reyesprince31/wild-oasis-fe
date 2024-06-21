"use client";

import SignOutButton from "./SignOutButton";
import { Home, CalendarDays, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <Home className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDays className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <User className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();

  return (
    <nav className="border-r border-muted-foreground ">
      <ul className="flex flex-col gap-2 h-full text-lg ">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary hover:text-secondary transition-colors flex items-center gap-4 font-semibold text-primary ${
                pathname === link.href ? "bg-primary" : ""
              }`}
              href={link.href}>
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
