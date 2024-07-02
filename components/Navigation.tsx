import { auth } from "@/lib/auth";
import Link from "next/link";

export default async function Navigation() {
  const session = await auth();

  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent transition-colors">
            About
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent transition-colors flex item-center gap-4">
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>Guest area</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent transition-colors">
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
