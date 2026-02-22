import { ArrowRight, Download, Check } from "lucide-react";

const SmartInsightsSection = () => {
  return (
    <section className="relative w-full bg-foreground px-7 py-24 md:px-12 lg:px-20 lg:py-32">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:gap-20">
        {/* Left Content */}
        <div className="flex flex-col lg:w-[45%]">
          <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
            Smart communication
            <br />& updates
          </h2>
          <p className="mt-5 max-w-[42ch] text-sm leading-relaxed text-primary/60">
            Clients get meaningful updates — not noise. Every change, file,
            task, and message appears instantly and stays connected to the right
            context.
          </p>

          {/* Stat */}
          <div className="mt-auto pt-16">
            <div className="text-6xl font-medium text-accent-warm md:text-7xl">
              40%
            </div>
            <div className="mt-2 text-sm text-primary/60">
              fewer status check-ins
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#waitlist"
              className="inline-flex h-[48px] items-center gap-3 rounded-full bg-primary pl-5 pr-1.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
            >
              <span>Get early access</span>
              <span className="flex h-[38px] w-[38px] items-center justify-center rounded-full bg-accent-warm">
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </a>
          </div>
        </div>

        {/* Right: UI Card Mockup */}
        <div className="flex items-center justify-end lg:w-[55%]">
          <div className="w-full max-w-md overflow-hidden rounded-2xl bg-accent-warm p-3 shadow-2xl md:p-4">
            {/* Top bar - milestones */}
            <div className="rounded-xl bg-foreground p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  Project milestones
                </span>
                <span className="text-xs text-primary/60">3/6</span>
              </div>
              <div className="mt-3 flex gap-2">
                {[true, true, true, false, false, false].map((filled, i) => (
                  <div
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${
                      filled ? "bg-accent-warm" : "bg-primary/10"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Recent updates card */}
            <div className="mt-3 rounded-xl bg-primary p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-medium text-foreground md:text-3xl">
                  Recent
                  <br />
                  updates
                </h3>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-warm">
                  <ArrowRight className="h-4 w-4 text-primary" />
                </span>
              </div>

              <div className="mt-6 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Download className="h-4 w-4 text-primary" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">
                    Homepage visuals uploaded
                  </span>
                  <span className="text-xs text-foreground/50">5h ago</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-foreground">
                    <Check className="h-4 w-4 text-primary" />
                  </span>
                  <span className="flex-1 text-sm font-medium text-foreground">
                    Brand guidelines approved
                  </span>
                  <span className="text-xs text-foreground/50">5h ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartInsightsSection;
