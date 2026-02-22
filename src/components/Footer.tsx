import { ArrowUpRight } from "lucide-react";
import footerSphere from "@/assets/footer-sphere.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[hsl(0,0%,0%)] px-7 pt-16 pb-8 md:px-12 lg:px-20 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-20">
          {/* Left: Sphere image behind text */}
          <div className="relative flex flex-col items-start lg:w-[45%]">
            {/* Sphere */}
            <div className="relative mx-auto mt-[-20%] h-[360px] w-[360px] md:h-[440px] md:w-[440px]">
              <img
                src={footerSphere}
                alt="Decorative sphere"
                className="h-full w-full animate-[spin_20s_linear_infinite] object-contain"
              />
            </div>

          </div>

          {/* Right: Text + Email subscribe */}
          <div className="flex flex-1 flex-col items-start justify-start pt-0">
            <span className="text-xs font-medium uppercase tracking-widest text-primary/40">
              Drive Electric
            </span>
            <h3 className="mt-3 text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
              The Future{" "}
              <span className="italic text-[hsl(25,100%,50%)]">Awaits</span>
            </h3>

            <span className="mt-8 text-sm font-medium uppercase tracking-widest text-primary/40">
              Stay Updated
            </span>
            <h4 className="mt-3 text-2xl font-medium text-primary md:text-3xl">
              Get the latest news
              <br />
              straight to your inbox.
            </h4>

            <div className="mt-8 flex w-full max-w-md items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-[52px] flex-1 rounded-full border border-primary/10 bg-transparent px-5 text-sm text-primary placeholder:text-primary/30 focus:border-primary/30 focus:outline-none"
              />
              <button className="inline-flex h-[52px] items-center gap-8 rounded-full bg-primary pl-5 pr-1 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
                <span>Subscribe</span>
                <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-foreground">
                  <ArrowUpRight className="h-[18px] w-[18px] text-primary" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary/10 pt-8 md:flex-row">
          <span className="text-xs text-primary/30">
            © 2026 Electric Motors. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#privacy" className="text-xs text-primary/30 hover:text-primary/50">Privacy</a>
            <a href="#terms" className="text-xs text-primary/30 hover:text-primary/50">Terms</a>
            <a href="#cookies" className="text-xs text-primary/30 hover:text-primary/50">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
