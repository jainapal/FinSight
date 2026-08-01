import { Container } from "@/components/ui";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#demo" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900">
            📊 FinSight AI
            </h2>

            <p className="mt-4 max-w-md leading-7 text-slate-600">
              AI-powered financial report analysis that transforms lengthy
              annual reports into actionable insights within minutes.
            </p>

            <div className="mt-6 flex gap-4">
              <a
                href="https://linkedin.com/in/yourusername"
                className="rounded-lg border border-slate-200 p-2 text-sm text-slate-500 hover:bg-slate-400 transition-colors"
              >
                Github
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                className="rounded-lg border border-slate-200 p-2 text-sm text-slate-500 hover:bg-slate-400 transition-colors"
              >
                Linkedln
              </a>

              <a
                href="#"
                className="rounded-lg border border-slate-200 p-2 text-sm text-slate-500 hover:bg-slate-400 transition-colors"
              >
                Email
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-slate-900">
                {title}
              </h3>

              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-slate-600 transition hover:text-blue-600"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row">
          <p>© 2026 FinSight AI. All rights reserved.</p>

          <p>Built with React • TypeScript • Tailwind CSS</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;