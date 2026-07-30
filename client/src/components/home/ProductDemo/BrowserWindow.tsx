import type { ReactNode } from "react";

interface BrowserWindowProps {
  children: ReactNode;
  title?: string;
  footerLeft?: string;
  footerRight?: string;
}

const BrowserWindow = ({ 
  children ,
  title = "FinSight AI Demo",
  footerLeft = "Secure Analysis",
  footerRight = "FinSight"
}: BrowserWindowProps) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        <div className="rounded-full bg-white px-5 py-1 text-sm font-medium text-slate-500 shadow-sm">
          {title}
        </div>

        {/* Balance spacing */}
        <div className="w-14" />
      </div>

      {/* Browser Content */}
      <div className="min-h-[420px] p-8">
        <div className="h-full">
        {children}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-wider text-slate-400">
          <span>{footerLeft}</span>

          <span>{footerRight}</span>
        </div>
      </div>
    </div>
  );
};

export default BrowserWindow;