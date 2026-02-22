import { Zap } from "lucide-react";

const ServicesSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-7 py-24 md:px-12 lg:px-20 lg:py-32">
      {/* Background Video */}
      <video
        src="/videos/services_card.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover" />


      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top: Badge + Heading + Subtext centered */}
        
















        {/* Feature Card — Glass Effect */}
        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-primary/10 bg-primary/5 p-8 backdrop-blur-xl md:p-12">
          <h3 className="text-3xl font-medium leading-tight text-primary md:text-4xl lg:text-[42px]">
            Effortless, All-Electric
            <br />
            Performance
          </h3>

          <p className="mt-5 max-w-[44ch] text-base leading-relaxed text-primary/60 md:text-lg">
            Step inside just once — our tech adapts across drive modes,
            climate settings, battery management, and more.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {[
            "Full-spectrum torque & drivetrain control",
            "Personalised driving & comfort profiles",
            "Track range & plan routes easily"].
            map((item) =>
            <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center">
                  <Zap className="h-4 w-4 text-[hsl(25,100%,50%)] drop-shadow-[0_0_8px_hsl(25,100%,50%)]" />
                </span>
                <span className="text-sm font-medium text-primary">
                  {item}
                </span>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

};

export default ServicesSection;