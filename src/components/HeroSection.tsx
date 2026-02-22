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

      {/* Learn More button */}
      <div className="relative z-10 mt-auto">
        <a
          href="#services"
          className="inline-flex h-12 items-center gap-1 px-4 pr-8 text-primary transition-opacity hover:opacity-80"
        >
          <span className="text-sm pt-0.5">Learn more</span>
          <span className="flex items-center justify-center h-6 w-4">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path
                d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
