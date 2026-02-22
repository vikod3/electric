import { ChevronRight, Gauge, Zap, Shield, Cog, Fuel, Navigation, Bluetooth, Wifi, Radio, Car, Wrench, Settings } from "lucide-react";

const integrationIcons = [
  { Icon: Gauge, label: "Performance" },
  { Icon: Zap, label: "Charging" },
  { Icon: Shield, label: "Safety" },
  { Icon: Cog, label: "Engine" },
  { Icon: Fuel, label: "Efficiency" },
  { Icon: Navigation, label: "Navigation" },
  { Icon: Bluetooth, label: "Bluetooth" },
  { Icon: Wifi, label: "Connectivity" },
  { Icon: Radio, label: "Infotainment" },
  { Icon: Car, label: "Autopilot" },
  { Icon: Wrench, label: "Diagnostics" },
  { Icon: Settings, label: "Controls" },
];

const links = [
  { label: "Find a dealer", href: "#dealers" },
  { label: "Fleet & lease", href: "#fleet" },
  { label: "Book a test drive", href: "#testdrive" },
];

const BigLinksSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)]">
      {/* Top: Integrations area */}
      <div className="relative overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
        <video
          src="/videos/integrations_bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center text-center">
          <span className="inline-block rounded-full border border-primary/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            Connected Systems
          </span>

          <h2 className="mt-6 text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
            Seamlessly Integrate
            <br />
            Every System
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary/60 md:text-lg">
            From performance monitoring to in-car entertainment, every system
            works together to deliver a unified driving experience.
          </p>

          {/* Icon Grid */}
          <div className="mt-14 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-12">
            {integrationIcons.map(({ Icon, label }) => (
              <div
                key={label}
                className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <Icon className="h-8 w-8 text-[hsl(25,100%,50%)] drop-shadow-[0_0_8px_hsl(25,100%,50%)]" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#systems"
              className="inline-flex items-center rounded-full border border-primary/20 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/5"
            >
              Explore All
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Big Links */}
      <div className="px-[3vw] pb-10 md:px-6 lg:px-8 lg:pb-16 xl:px-20">
        <div className="mx-auto max-w-[1760px]">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center justify-between border-b border-primary/10 py-4 transition-opacity hover:opacity-60"
            >
              <span className="text-5xl font-medium text-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">
                {link.label}
              </span>
              <ChevronRight className="h-8 w-8 flex-shrink-0 text-primary md:h-10 md:w-10 lg:h-12 lg:w-12" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BigLinksSection;
