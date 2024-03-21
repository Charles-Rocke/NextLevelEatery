// always do your best to put 'use client' as far down the component tree as possible. That way only the components that need it will have it and not those that should be server rendered
"use client";
import Link from "next/link";
import classes from "./nav-link.module.css";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}

export default NavLink;
