import { ArrowUpRight } from "lucide-react";
import icon1 from "@/assets/icon-1.avif";
import icon2 from "@/assets/icon-2.avif";
import icon3 from "@/assets/icon-3.avif";

const features = [
  {
    icon: icon1,
    title: "Real-Time Telemetry",
    description: "Fast, actionable data without any guesswork needed.",
  },
  {
    icon: icon2,
    title: "Personalised Drive Profiles",
    description: "Tailored settings adapted to your unique driving style.",
  },
  {
    icon: icon3,
    title: "Complete Vehicle Monitoring",
    description: "Combining performance, efficiency, and safety data in one place.",
  },
];

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col px-7 pb-10 pt-[89px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero_bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-[hsl(0,0%,0%)] via-[hsl(0,0%,0%)]/60 to-transparent" />

      {/* Heading */}
      <h1 className="relative z-10 mt-0 text-5xl font-medium leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-[78px]">
        Drive Beyond.
        <br />
        Unlock Pure Power
      </h1>

      {/* Bottom content */}
      <div className="relative z-10 mt-auto flex flex-col items-start gap-8 md:flex-row md:items-end md:gap-0">
        {/* Left: Features */}
        <div className="flex flex-col gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-5">
              <div className="h-12 w-12 flex-shrink-0 md:h-12 md:w-12">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="h-full w-full object-cover brightness-0 invert"
                />
              </div>
              <div className="flex flex-col gap-2 text-primary">
                <div className="text-base font-medium">{feature.title}</div>
                <div className="max-w-[36ch] text-xs text-primary/60">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Subheading + CTA */}
        <div className="flex w-full flex-col items-start justify-end md:ml-auto md:w-[48%]">
          <h2 className="text-3xl font-medium text-primary sm:text-4xl lg:text-[48px] lg:leading-tight">
            Your car holds the answers
            <br />— we help you feel them.
          </h2>

          <div className="mt-6">
            <a
              href="#waitlist"
              className="inline-flex h-[52px] items-center gap-12 rounded-full bg-primary pl-5 pr-1 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              <span>Book a Test Drive</span>
              <span className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-foreground">
                <ArrowUpRight className="h-[18px] w-[18px] text-primary" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
