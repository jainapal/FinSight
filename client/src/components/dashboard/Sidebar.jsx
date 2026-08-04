import {
    LayoutDashboard,
    FileText,
    BarChart3,
    MessageSquare,
    Settings,
    LogOut,
  } from "lucide-react";
  
  import { NavLink } from "react-router-dom";
  
  const Sidebar = () => {
    const menu = [
      {
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
      },
      {
        name: "Reports",
        icon: FileText,
        path: "/reports",
      },
      {
        name: "Analytics",
        icon: BarChart3,
        path: "/analytics",
      },
      {
        name: "AI Chat",
        icon: MessageSquare,
        path: "/chat",
      },
      {
        name: "Settings",
        icon: Settings,
        path: "/settings",
      },
    ];
  
    return (
      <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
        {/* Logo */}
        <div className="border-b border-slate-200 p-6">
          <h1 className="text-2xl font-bold text-blue-600">
            FinSight AI
          </h1>
  
          <p className="mt-1 text-sm text-slate-500">
            Financial Intelligence
          </p>
        </div>
  
        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menu.map((item) => {
              const Icon = item.icon;
  
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-slate-600 hover:bg-slate-100"
                      }`
                    }
                  >
                    <Icon size={20} />
  
                    <span>{item.name}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
  
        {/* Bottom */}
        <div className="border-t border-slate-200 p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-600 transition hover:bg-slate-100">
            <LogOut size={20} />
  
            Logout
          </button>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;