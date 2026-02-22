import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
import team4 from "@/assets/team-4.jpg";

const TeamSection = () => {
  return (
    <section className="w-full bg-[hsl(0,0%,0%)] px-7 py-16 md:px-12 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">
          {/* Left: Label + Heading + Text */}
          <div className="flex flex-col lg:w-[45%]">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-primary/40" />
              <span className="text-sm text-primary/60">Our Team</span>
            </div>

            <h2 className="mt-6 text-4xl font-medium leading-tight text-primary md:text-5xl lg:text-[56px]">
              Meet Our Team: The
              <br />
              Visionaries Behind{" "}
              <span className="text-primary/50">
                Our Electric Future
              </span>
            </h2>

            <p className="mt-8 max-w-[52ch] text-base leading-relaxed text-primary/60 md:text-lg">
              Our electric range is brought to you by a team of passionate
              engineers and industry leaders. Our team are dedicated to shaping
              the future of mobility by bringing together the brightest minds in
              EV design, autonomous driving, and sustainable manufacturing.
            </p>

            <p className="mt-8 font-serif text-2xl italic text-primary/30">
              Driven by passion
            </p>
          </div>

          {/* Right: Photo Grid */}
          <div className="grid grid-cols-2 gap-3 lg:w-[55%]">
            <div className="row-span-1 overflow-hidden rounded-2xl">
              <img
                src={team1}
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-1 overflow-hidden rounded-2xl">
              <img
                src={team2}
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-1 overflow-hidden rounded-2xl">
              <img
                src={team4}
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="row-span-1 overflow-hidden rounded-2xl">
              <img
                src={team3}
                alt="Team member"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
