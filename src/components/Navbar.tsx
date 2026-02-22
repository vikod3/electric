import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full px-7 pt-4">
      <nav className={`flex items-center gap-4 rounded-full px-4 py-2 transition-all duration-300 md:px-6 ${scrolled ? "border border-primary/10 bg-[hsl(0,0%,0%)]/80 backdrop-blur-xl" : "border border-transparent bg-transparent"}`}>
        {/* Logo */}
        <a href="#" className={`mr-auto text-lg font-semibold tracking-tight transition-colors duration-300 ${scrolled ? "text-primary" : "text-[hsl(0,0%,0%)]"}`}>
          Electric<span className="text-[hsl(25,100%,50%)]">.</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`group relative overflow-hidden rounded-full px-4 py-2 text-sm transition-colors ${scrolled ? "text-primary/70 hover:text-primary" : "text-[hsl(0,0%,0%)]/70 hover:text-[hsl(0,0%,0%)]"}`}
            >
              <span className="absolute inset-0 scale-0 rounded-full bg-primary/10 transition-transform duration-300 group-hover:scale-100" />
              <span className="relative">{link.label}</span>
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="#waitlist"
          className={`hidden items-center gap-8 rounded-full py-[3px] pl-5 pr-[3px] text-sm font-medium transition-all duration-300 md:inline-flex ${scrolled ? "bg-primary text-primary-foreground hover:opacity-90" : "bg-[hsl(0,0%,0%)] text-primary hover:opacity-90"}`}
        >
          <span>Get Started</span>
          <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-foreground">
            <ArrowUpRight className="h-[18px] w-[18px] text-primary" />
          </span>
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`ml-auto md:hidden transition-colors duration-300 ${scrolled ? "text-primary" : "text-[hsl(0,0%,0%)]"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-2xl border border-primary/10 bg-[hsl(0,0%,0%)]/95 p-4 backdrop-blur-xl md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-full px-4 py-2.5 text-sm text-primary/70 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#waitlist"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary py-2.5 pl-4 pr-2 text-sm font-semibold text-primary-foreground"
          >
            <span>Get Started</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(25,100%,50%)]">
              <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
            </span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
