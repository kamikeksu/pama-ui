import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

interface NavItemProps {
  children: ReactNode;
  href?: string;
}
export function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        className="flex font-raleway items-center gap-2"
      >
        {children}
      </Typography>
    </li>
  );
}

export default NavItem;
