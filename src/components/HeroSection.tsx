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

      {/* Heading */}
      <h1 className="relative z-10 mt-0 text-5xl font-medium leading-tight text-foreground sm:text-6xl md:text-7xl lg:text-[78px]">
        Drive Beyond.
        <br />
        Unlock Pure Power
      </h1>

      {/* Learn More button */}
      <div className="relative z-10 mt-4">
        <a
          href="#services"
          className="inline-flex h-12 items-center pl-4 pr-8 text-foreground no-underline"
          style={{ maxWidth: "100%" }}
        >
          <span className="flex items-center grow cursor-pointer pt-[2px] h-[1em] max-w-full">
            <span className="px-1.5 pt-1.5 -mt-[5px] overflow-hidden text-sm">
              Learn more
            </span>
            <span className="flex items-center justify-center h-6 min-w-[1rem]">
              <span className="inline-grid w-[1em] h-[1em] overflow-hidden" style={{ gridTemplateColumns: "16px", gridTemplateRows: "16px", justifyContent: "center", margin: "-0.075em" }}>
                <span className="col-start-1 row-start-1 h-full">
                  <svg viewBox="0 0 16 16" fill="none" className="inline w-4 h-[1em]" role="img">
                    <path d="M8 2 6.95 3.05l4.2 4.2H2v1.5h9.15l-4.2 4.2L8 14l6-6-6-6Z" fill="currentColor" />
                  </svg>
                </span>
              </span>
            </span>
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
