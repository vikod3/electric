import shape1 from "@/assets/shape-1.png";
import shape2 from "@/assets/shape-2.png";
import shape3 from "@/assets/shape-3.png";

const AboutSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-6 bg-primary/40" />
          <span className="text-sm text-primary/60">About Us</span>
        </div>

        {/* Heading */}
        <h2 className="mt-6 max-w-3xl text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
          Why You Absolutely Should
          <br />
          Experience <span className="text-primary/50">Our Electric Range</span>
        </h2>

        {/* Bottom: Images left, Text right */}
        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20">
          {/* Left: 3 images */}
          <div className="flex items-end gap-4 lg:w-1/2">
            <div className="w-1/3">
              <img
                src={shape1}
                alt="Performance"
                className="h-48 w-full rounded-lg object-contain md:h-64"
              />
            </div>
            <div className="w-1/3">
              <img
                src={shape2}
                alt="Engineering"
                className="h-48 w-full rounded-lg object-contain md:h-64"
              />
            </div>
            <div className="w-1/3">
              <img
                src={shape3}
                alt="Innovation"
                className="h-48 w-full rounded-lg object-contain md:h-64"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="flex flex-col lg:w-1/2">
            <p className="text-base leading-relaxed text-primary/70 md:text-lg">
              Our electric range is the ultimate expression for driving
              enthusiasts, performance seekers, and innovators to explore the
              world of sustainable power, precision engineering, and the future
              of mobility. Each model offers a unique opportunity to experience
              cutting-edge technology, feel unmatched acceleration, and discover
              groundbreaking design. Whether you're a daily commuter, enthusiast.
            </p>

            <p className="mt-6 text-base leading-relaxed text-primary/70 md:text-lg">
              You'll have the chance to explore real-world performance, witness
              next-generation charging tech, and connect with others who are
              driving change on the open road. Be part of the movement that's
              shaping the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
