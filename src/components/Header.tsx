import { useState } from "react";
import { Code, Menu, X } from "lucide-react";

type NavLink = { href: string; label: string };
export default function Header({
  navLinks,
  onNavLinkClick,
}: {
  navLinks: NavLink[];
  onNavLinkClick: (e: React.MouseEvent, href: string) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          onClick={(e) => onNavLinkClick(e, "#hero")}
          className="text-2xl font-bold text-cyan-400 flex items-center">
          <Code size={28} className="mr-2" /> <span>Duban Alejandro</span>
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => onNavLinkClick(e, l.href)}
              className="hover:text-cyan-400">
              {l.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden z-50 text-gray-200">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-40">
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  setOpen(false);
                  onNavLinkClick(e, l.href);
                }}
                className="text-2xl hover:text-cyan-400">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
