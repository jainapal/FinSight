import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";


const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {open && (
        <div className="absolute left-0 top-full w-full border-t border-slate-200 bg-white shadow-lg">
          <div className="flex flex-col gap-6 p-6">
            <NavLinks />

            <hr />

            
              <Link to="/login"
              onClick={() => setOpen(false)}
              className="font-medium text-slate-700"
              >
                Login
              </Link>
          
            

            
              <Link
              to="/register"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-blue-600 px-4 py-3 text-center font-medium text-white"
              >
                Get Started
              </Link>
           
            
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;