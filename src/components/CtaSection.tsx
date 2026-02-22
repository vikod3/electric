import { ArrowUpRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl border border-primary/10">
        {/* Video Background */}
        <video
          src="/videos/services_card.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-start px-8 py-24 md:py-32 lg:py-40">
          <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
            Experience the future
            <br />
            of driving today.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary/60 md:text-lg">
            Book your test drive — one click, instant access.
            <br />
            No commitment, pure electric.
          </p>

          <div className="mt-10">
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

export default CtaSection;
