import { Users, Gauge, Wrench, Zap } from "lucide-react";
import audienceIcon from "@/assets/audience-icon.png";

const audiences = [
  {
    icon: null,
    image: audienceIcon,
    label: "Fleet Managers",
    active: true,
  },
  {
    icon: Users,
    image: null,
    label: "Daily Commuters",
    active: false,
  },
  {
    icon: Gauge,
    image: null,
    label: "Enthusiasts",
    active: false,
  },
  {
    icon: Wrench,
    image: null,
    label: "Service Partners",
    active: false,
  },
];

const AudienceSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-primary/40" />
          <span className="text-sm text-primary/60">For Whom?</span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 max-w-4xl text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
          Who Should Experience
          <br />
          <span className="text-primary/50">Our Electric Range</span>
        </h2>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {audiences.map((item) =>
            item.image ? (
              <div
                key={item.label}
                className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full border border-primary/10"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ) : (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center rounded-3xl border border-primary/10 p-8"
              >
                <div className="flex h-16 w-16 items-center justify-center">
                  {item.icon && (
                    <item.icon className="h-8 w-8 text-primary/50" />
                  )}
                </div>
                <span className="mt-6 text-base font-medium text-primary md:text-lg">
                  {item.label}
                </span>
              </div>
            )
          )}
        </div>

        {/* Bottom info bar */}
        <div className="mt-8 rounded-2xl border border-primary/10 px-8 py-6">
          <p className="text-base leading-relaxed text-primary/60 md:text-lg">
            Whether you manage a fleet, commute daily, chase performance, or
            service vehicles — our electric range is built to exceed your
            expectations and transform how you drive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
