import PageLayout from "@/components/PageLayout";
import { Quote, Sparkles } from "lucide-react";
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
      <section className="mx-auto max-w-7xl">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-[36px] border border-slate-200 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-16 text-white shadow-2xl md:px-10 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.28),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.18),transparent_28%)]" />

          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                Institutional Leadership
              </div>

              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Inspiring Vision.
                <br />
                Transforming Futures.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
                Meet the visionary leaders shaping excellence, innovation, and
                student success at Shreenivasa Polytechnic College.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["Leadership", "Experienced"],
                ["Students", "Future Ready"],
                ["Campus", "Innovation"],
                ["Vision", "Excellence"],
              ].map(([title, value]) => (
                <div
                  key={title}
                  className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.25em] text-white/50">
                    {title}
                  </p>

                  <p className="mt-2 text-xl font-bold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership Cards */}
        <div className="mt-12 space-y-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[34px] border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="grid lg:grid-cols-[320px_1fr]">
                {/* Left Section */}
                <div className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-8 lg:border-b-0 lg:border-r">
                  {/* Background Glow */}
                  <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-indigo-100 blur-3xl" />

                  <div className="relative z-10 flex flex-col items-center">
                    {/* Image */}
                    <div className="relative h-44 w-44 overflow-hidden rounded-full border-[5px] border-white shadow-xl">
                      {leader.image ? (
                        <img
                          src={leader.image}
                          alt={leader.name}
                          loading="lazy"
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-indigo-500 to-emerald-500 text-xl font-bold text-white">
                          {leader.name.charAt(0)}
                        </div>
                      )}
                    </div>

                    {/* Role Badge */}
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />

                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-700">
                        {leader.role}
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="mt-5 text-center text-2xl font-bold text-slate-900">
                      {leader.name}
                    </h3>
                  </div>
                </div>

                {/* Right Section */}
                <div className="relative p-8 md:p-10 lg:p-14">
                  {/* Quote */}
                  <div className="absolute right-8 top-8 opacity-[0.08]">
                    <Quote
                      className="h-24 w-24 text-indigo-600"
                      strokeWidth={1.2}
                    />
                  </div>

                  {/* Label */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className="h-[2px] w-12 bg-emerald-500" />

                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-600">
                      Leadership Message
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="max-w-3xl text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
                    {leader.title}
                  </h2>

                  {/* Divider */}
                  <div className="my-8 h-px w-full bg-gradient-to-r from-slate-200 via-slate-300 to-transparent" />

                  {/* Message */}
                  <p className="max-w-4xl text-[15px] leading-8 text-slate-600 md:text-base">
                    {leader.message}
                  </p>

                  {/* Footer */}
                  <div className="mt-10 flex items-center gap-4">

                    <div>
                      <p className="font-semibold text-slate-900">
                        {leader.name}
                      </p>

                      <p className="text-sm text-slate-500">
                        {leader.role}, SPC
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Line */}
              <div className="h-1 w-0 bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Leadership;