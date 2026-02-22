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

      {/* Heading + Button */}
      <div className="relative z-10 mt-0 pl-[15px]">
        <h1 className="text-5xl font-medium leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-[78px]">
          Drive Beyond.
          <br />
          Unlock Pure Power
        </h1>

        <div className="mt-6">
          <a
            href="#services"
            className="inline-flex h-12 items-center gap-2 border border-foreground px-5 text-foreground text-sm transition-opacity hover:opacity-70"
          >
            <span>Learn more</span>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" strokeWidth={1}>
              <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
