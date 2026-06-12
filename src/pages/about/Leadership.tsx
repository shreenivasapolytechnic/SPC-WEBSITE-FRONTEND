import PageLayout from "@/components/PageLayout";
import { Quote } from "lucide-react";
import Principal from "@/assets/principal.png";

const leaders = [
  {
    name: "E. Thangaraj",
    role: "Chairman",
    title: "Empowering Young Minds to Lead the Future",
    message:
      "Education is not just about learning facts, but about training the mind to think and the heart to serve. Our goal at Shreenivasa Polytechnic College is to produce holistic individuals who are not just competent technicians or managers, but conscientious citizens ready to make an impact.",
  },
  {
    name: "Prof. V. Murugan, M.E.",
    role: "Principal",
    image: Principal,
    title: "Empowering Futures, Creating Leaders",
    message:
      "At Shreenivasa Polytechnic College, our Training & Placement Cell is dedicated to nurturing potential and creating opportunities. We aim to equip our students with both technical proficiency and soft skills, bridging the gap between rigorous academic training and the evolving needs of the industry.",
  },
];

const Leadership = () => {
  return (
    <PageLayout
      title="Leadership"
      subtitle="Guided by Vision, Driven by Excellence"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        {leaders.map((leader, index) => (
          <section
            key={index}
            className="overflow-hidden border border-[#e7d8c7] bg-[#fffdf9]"
          >
            <div className="grid lg:grid-cols-[320px_1fr]">
              {/* LEFT SIDE */}
              <div className="flex flex-col items-center justify-center border-b border-[#e7d8c7] bg-[#faf6ef] px-8 py-12 lg:border-b-0 lg:border-r">
                <div className="h-52 w-52 overflow-hidden rounded-sm border-4 border-white shadow-md">
                  {leader.image ? (
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#5b0f19] text-5xl font-bold text-white">
                      {leader.name.charAt(0)}
                    </div>
                  )}
                </div>

                <div className="mt-8 text-center">
                  <span className="border border-[#d4a017]/40 bg-[#d4a017]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6914]">
                    {leader.role}
                  </span>

                  <h3 className="mt-4 font-heading text-3xl font-bold text-[#5b0f19]">
                    {leader.name}
                  </h3>

                  <div className="mx-auto mt-5 h-[2px] w-16 bg-[#d4a017]" />
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="relative px-8 py-12 md:px-14">
                <Quote
                  className="absolute right-10 top-10 h-24 w-24 text-[#5b0f19]/5"
                  strokeWidth={1}
                />

                <div className="mb-5 flex items-center gap-3">
                  <div className="h-[1px] w-10 bg-[#d4a017]" />

                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#8b6914]">
                    Leadership Message
                  </span>
                </div>

                <h2 className="max-w-3xl font-heading text-4xl font-bold leading-tight text-[#5b0f19]">
                  {leader.title}
                </h2>

                <div className="my-8 h-px bg-[#e7d8c7]" />

                <p className="max-w-3xl text-[17px] leading-9 text-[#4b4b4b]">
                  {leader.message}
                </p>

                <div className="mt-10">
                  <p className="font-semibold text-[#5b0f19]">
                    {leader.name}
                  </p>

                  <p className="mt-1 text-sm uppercase tracking-wider text-[#8b6914]">
                    {leader.role}, Shreenivasa Polytechnic College
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </PageLayout>
  );
};

export default Leadership;