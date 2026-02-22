import { ArrowRight } from "lucide-react";

const SustainabilitySection = () => {
  return (
    <section className="w-full bg-foreground px-7 md:px-6 lg:px-8 xl:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-4 md:grid-cols-8 lg:grid-cols-12">
        <div className="col-span-4 md:col-span-5 lg:col-span-4 flex flex-col justify-start py-20 lg:py-0 lg:min-h-[660px] lg:justify-center">
          <h2 className="text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
            Reducing emissions by 25%
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-primary/70">
            Since launching, our vehicles have cut greenhouse gas emissions
            per car sold by a full quarter. Read more in our latest
            sustainability impact report.
          </p>

          <div className="mt-6">
            <a
              href="#report"
              className="group inline-flex items-center gap-2 text-sm text-primary transition-opacity hover:opacity-70"
            >
              <span>Read more</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
