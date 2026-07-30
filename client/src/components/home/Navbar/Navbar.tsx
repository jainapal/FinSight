import { Link } from "react-router-dom";
import { SITE } from "@/constants/site";
import Container from "@/components/ui/Container";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            📊 {SITE.name}
          </Link>

          <DesktopNav />

          <MobileNav />
        </div>
      </Container>
    </header>
  );
};

export default Navbar;