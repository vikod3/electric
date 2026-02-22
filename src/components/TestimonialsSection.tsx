import testimonialBg from "@/assets/testimonial-bg.png";

const testimonials = [
  {
    quote: "My commute is now silent and smooth. This car is the only upgrade I needed.",
    name: "Luca Rossi",
    role: "Daily Commuter",
  },
  {
    quote: "Zero emissions, max torque. Range anxiety dropped. Incredible ROI.",
    name: "Maya Thompson",
    role: "Fleet Manager",
  },
  {
    quote: "No compromise, no trade-offs. It just made every drive better on any road.",
    name: "Nia Patel",
    role: "Driving Enthusiast",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <span className="inline-block rounded-full border border-primary/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
            What Our Drivers
            <br />
            Are Saying
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary/60 md:text-lg">
            Real stories from real drivers who made the switch to electric.
          </p>
        </div>

        {/* Hero Testimonial */}
        <div className="mt-16 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Left: Image */}
          <div className="overflow-hidden rounded-2xl lg:w-[45%]">
            <img
              src={testimonialBg}
              alt="Testimonial visual"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right: Quote */}
          <div className="flex flex-col justify-center lg:w-[55%]">
            <span className="text-9xl font-bold text-[hsl(25,100%,50%)] drop-shadow-[0_0_16px_hsl(25,100%,50%)]">"</span>

            <p className="mt-2 text-2xl font-medium leading-relaxed text-primary md:text-3xl lg:text-4xl">
              "We switched our entire fleet and cut fuel costs while boosting
              driver satisfaction across the board."
            </p>

            <div className="mt-10">
              <p className="text-lg font-medium text-primary">Tom Sullivan</p>
              <p className="text-base text-primary/50">Fleet Director</p>
            </div>
          </div>
        </div>

        {/* Bottom: 3 Smaller Testimonials */}
        <div className="mt-16 grid gap-6 border-t border-primary/10 pt-16 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between border-l border-primary/10 pl-6"
            >
              <p className="text-base leading-relaxed text-primary/70 md:text-lg">
                "{t.quote}"
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10" />
                <div>
                  <p className="text-base font-medium text-primary">{t.name}</p>
                  <p className="text-sm text-primary/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
