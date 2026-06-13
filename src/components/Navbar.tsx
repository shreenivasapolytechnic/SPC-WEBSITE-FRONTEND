import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import collegeLogo from "@/assets/college-logo.png";



const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about/institution",
    children: [
      { label: "Institution", href: "/about/institution" },
      { label: "Vision & Mission", href: "/about/vision-mission" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Academics",
    href: "/academics/departments",
    children: [
      { label: "Departments", href: "/academics/departments" },
      { label: "Programmes", href: "/academics/programmes" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions/ug",
    children: [
      { label: "Admissions", href: "/admissions/ug" },
    ],
  },
  { label: "Placement", href: "/placement" },
  { label: "Student Life", href: "/student-life" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);


  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gold/25 bg-primary shadow-sm shadow-primary/20 backdrop-blur-xl">

      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        <Link to="/" className="flex items-center gap-3">

          <div className="hidden sm:block">
            <img src={collegeLogo} alt="SPC Logo" className="h-10 md:h-14 w-auto" />
          </div>
          <div className="sm:hidden">
            <img src={collegeLogo} alt="SPC Logo" className="h-9 w-auto" />
          </div>
          <div>
            <p className="font-heading text-xs sm:text-sm font-bold leading-tight text-gold md:text-base">
              Shreenivasa
            </p>
            <p className="font-heading text-xs sm:text-sm font-bold leading-tight text-gold md:text-base">
              Polytechnic College
            </p>
            <p className="hidden sm:block font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-gold">
              Committed to Excellence in Technical Education
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">

          {navItems.map((item) => {
            const isActiveParent = item.children?.some((child) => location.pathname === child.href) ?? false;
            const isActiveSelf = location.pathname === item.href;
            const active = isActiveSelf || isActiveParent;

            return (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  aria-haspopup={item.children ? "menu" : undefined}
                  aria-expanded={item.children ? openDropdown === item.label : undefined}
                  className={`flex items-center gap-1 border-b-2 px-3 py-2 font-sans text-sm font-semibold transition-colors ${
                    active
                      ? "border-gold text-gold"
                      : "border-transparent text-gold/80 hover:text-gold"
                  }`}
                  onFocus={() => item.children && setOpenDropdown(item.label)}
                  onBlur={(e) => {
                    if (!item.children) return;
                    const next = e.relatedTarget as HTMLElement | null;
                    if (!next) setOpenDropdown(null);
                  }}
                  onKeyDown={(e) => {
                    if (!item.children) return;
                    if (e.key === "Escape") setOpenDropdown(null);
                  }}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div
                    role="menu"
                    aria-label={`${item.label} submenu`}
                    tabIndex={-1}
                    className="absolute left-0 top-full min-w-[220px] rounded-lg border border-border bg-white p-2 shadow-xl shadow-primary/10"
                  >
                    {item.children.map((child) => {
                      const childActive = location.pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          to={child.href}
                          role="menuitem"
                          className={`block px-4 py-2 text-sm transition-colors font-sans ${
                            childActive
                              ? "rounded-md bg-primary/5 text-gold-dark"
                              : "rounded-md text-gold-dark/80 hover:bg-muted hover:text-gold-dark"
                          }`}
                          onFocus={() => setOpenDropdown(item.label)}
                          onKeyDown={(e) => {
                            if (e.key === "Escape") setOpenDropdown(null);
                          }}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>




        {/* Mobile Toggle */}
        <button
          className="rounded-md border border-gold/35 p-2 text-gold lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-border bg-white lg:hidden">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="block border-b border-gold/20 px-6 py-3 font-sans text-sm font-semibold text-gold hover:text-gold-light"
                onClick={() => !item.children && setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.href}
                  className="block border-b border-gold/20 px-10 py-2 font-sans text-xs font-medium text-gold/80 hover:text-gold-light"
                  onClick={() => setMobileOpen(false)}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
