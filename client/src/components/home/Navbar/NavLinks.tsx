import { NAV_LINKS } from "@/constants/navigation";

const NavLinks = () => {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default NavLinks;