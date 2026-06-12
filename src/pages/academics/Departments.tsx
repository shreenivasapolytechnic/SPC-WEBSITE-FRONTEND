import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import {
  Cpu, Wrench, Zap, Monitor, Cog, ArrowRight, Users, GraduationCap, Sparkles,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchFaculty } from "@/lib/api";

const departments = [
  {
    name: "Diploma in Mechanical Engineering",
    description: "Focused on manufacturing, design, thermal engineering, and industrial applications.",
    icon: Cog,
    code: "MECH",
    intake: 180,
    hod: "Prof. K.S. Suresh Kumar",
    link: "/academics/departments/mech",
  },
  {
    name: "Diploma in Automobile Engineering",
    description: "Hands-on learning in vehicle technology, engines, maintenance, and automotive systems.",
    icon: Wrench,
    code: "AUTO",
    intake: 60,
    hod: "Prof. A. Selvam",
    link: "/academics/departments/auto",
  },
  {
    name: "Diploma in Electrical and Electronics Engineering",
    description: "Practical exposure to electrical systems, circuits, power systems, and automation.",
    icon: Zap,
    code: "EEE",
    intake: 60,
    hod: "Prof. V. Rajan",
    link: "/academics/departments/eee",
  },
  {
    name: "Diploma in Electronics and Communication Engineering",
    description: "Training students in communication systems, embedded electronics, and networking.",
    icon: Cpu,
    code: "ECE",
    intake: 60,
    hod: "Dr. S. Meena",
    link: "/academics/departments/ece",
  },
  {
    name: "Diploma in Computer Science and Engineering",
    description: "Industry-oriented curriculum covering programming, AI, cloud computing, and software development.",
    icon: Monitor,
    code: "CSE",
    intake: 60,
    hod: "Dr. K. Priya",
    link: "/academics/departments/cse",
  },
  {
    name: "Diploma in Artificial Intelligence and Machine Learning",
    description: "Emerging technologies program focused on AI, machine learning, and data-driven applications.",
    icon: Sparkles,
    code: "AIML",
    intake: 60,
    hod: "Dr. K. Priya",
    link: "/academics/departments/cse",
  },
];

const normalizeDepartment = (value: string) => value.trim().toLowerCase();

const Departments = () => {
  const { data } = useQuery({
    queryKey: ["department-hods"],
    queryFn: fetchFaculty,
    staleTime: 60_000,
  });

  const hodByDepartment = new Map(
    (data?.data || []).map((faculty) => [
      normalizeDepartment(faculty.department),
      faculty.name,
    ])
  );

  return (
    <PageLayout title="Departments" subtitle="Academic Departments at SPC">
      {/* Intro */}
      <section className="mb-12 rounded-2xl border border-border bg-white p-8 shadow-sm md:p-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="gold-bar" />
          <span className="section-kicker !mb-0">SPC Academic Excellence</span>
        </div>
        <h2 className="section-heading mb-4">Explore Our Technical Departments</h2>
        <p className="max-w-3xl font-sans leading-8 text-muted-foreground">
          Shreenivasa Polytechnic College offers industry-oriented diploma programs with experienced
          faculty, modern laboratories, practical training, and career-focused learning opportunities.
        </p>
      </section>

      {/* Department Grid */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((d, i) => {
          const hod =
            hodByDepartment.get(normalizeDepartment(d.code)) ||
            hodByDepartment.get(normalizeDepartment(d.name)) ||
            d.hod;

          return (
            <div
              key={i}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl"
            >
              <div className="h-1 w-full bg-gradient-to-r from-primary via-gold to-gold-light" />

              <div className="flex flex-1 flex-col p-6">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <d.icon className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold tracking-widest text-gold-dark">
                    {d.code}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-lg font-bold leading-snug text-foreground mb-3">
                  {d.name}
                </h3>
                <p className="font-sans text-sm leading-7 text-muted-foreground flex-1">
                  {d.description}
                </p>

                {/* Info */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3">
                    <Users className="h-4 w-4 shrink-0 text-gold-dark" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Head of Department</p>
                      <p className="text-sm font-semibold text-foreground">{hod}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/40 px-4 py-3">
                    <GraduationCap className="h-4 w-4 shrink-0 text-gold-dark" />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Student Intake</p>
                      <p className="text-sm font-semibold text-foreground">{d.intake} Seats</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-5">
                  {d.link !== "#" ? (
                    <Link
                      to={d.link}
                      className="flex items-center justify-between rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-secondary hover:shadow-lg"
                    >
                      <span>Explore Department</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="rounded-xl border border-dashed border-border bg-muted/30 px-5 py-3.5 text-center text-sm italic text-muted-foreground">
                      Coming Soon
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </PageLayout>
  );
};

export default Departments;
