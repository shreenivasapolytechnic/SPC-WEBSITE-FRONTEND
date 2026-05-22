import PageLayout from "@/components/PageLayout";
import { Link } from "react-router-dom";
import {
  Cpu,
  Wrench,
  Zap,
  Monitor,
  Cog,
  ArrowRight,
  Users,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchFaculty } from "@/lib/api";

const departments = [
  {
    name: "Diploma in Mechanical Engineering",
    description:
      "Focused on manufacturing, design, thermal engineering, and industrial applications.",
    icon: Cog,
    code: "MECH",
    intake: 180,
    hod: "Prof. K.S. Suresh Kumar",
    link: "/academics/departments/mech",
  },
  {
    name: "Diploma in Automobile Engineering",
    description:
      "Hands-on learning in vehicle technology, engines, maintenance, and automotive systems.",
    icon: Wrench,
    code: "AUTO",
    intake: 60,
    hod: "Prof. A. Selvam",
    link: "/academics/departments/auto",
  },
  {
    name: "Diploma in Electrical and Electronics Engineering",
    description:
      "Practical exposure to electrical systems, circuits, power systems, and automation.",
    icon: Zap,
    code: "EEE",
    intake: 60,
    hod: "Prof. V. Rajan",
    link: "/academics/departments/eee",
  },
  {
    name: "Diploma in Electronics and Communication Engineering",
    description:
      "Training students in communication systems, embedded electronics, and networking.",
    icon: Cpu,
    code: "ECE",
    intake: 60,
    hod: "Dr. S. Meena",
    link: "/academics/departments/ece",
  },
  {
    name: "Diploma in Computer Science and Engineering",
    description:
      "Industry-oriented curriculum covering programming, AI, cloud computing, and software development.",
    icon: Monitor,
    code: "CSE",
    intake: 60,
    hod: "Dr. K. Priya",
    link: "/academics/departments/cse",
  },
  {
    name: "Diploma in Artificial Intelligence and Machine Learning",
    description:
      "Emerging technologies program focused on AI, machine learning, and data-driven applications.",
    icon: Sparkles,
    code: "AIML",
    intake: 60,
    hod: "Dr. K. Priya",
    link: "/academics/departments/cse",
  },
];

const normalizeDepartment = (value: string) =>
  value.trim().toLowerCase();

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
    <PageLayout
      title="Departments"
      subtitle="Academic Departments at SPC"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-background via-card to-muted/20 px-8 py-14 lg:px-14 lg:py-20 mb-14">
        {/* Background Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-0 w-[380px] h-[380px] rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent mb-6">
            <GraduationCap className="w-4 h-4" />
            SPC Academic Excellence
          </div>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-foreground mb-6">
            Explore Our
            <span className="block text-accent">
              Technical Departments
            </span>
          </h2>

          <p className="max-w-3xl text-base lg:text-lg leading-relaxed text-muted-foreground">
            Shreenivasa Polytechnic College offers industry-oriented diploma
            programs with experienced faculty, modern laboratories, practical
            training, and career-focused learning opportunities for students.
          </p>
        </div>
      </section>

      {/* Department Grid */}
      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {departments.map((d, i) => {
          const hod =
            hodByDepartment.get(normalizeDepartment(d.code)) ||
            hodByDepartment.get(normalizeDepartment(d.name)) ||
            d.hod;

          return (
            <div
              key={i}
              className="group relative overflow-hidden rounded-[2rem] border border-border/60 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Top Gradient */}
              <div className="h-1.5 w-full bg-gradient-to-r from-accent via-accent/70 to-accent/30" />

              {/* Hover Glow */}
              <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex h-full flex-col p-7">
                {/* Header */}
                <div className="flex items-start justify-between mb-7">
                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-accent/20 bg-accent/10 transition-transform duration-500 group-hover:scale-105">
                    <d.icon className="h-10 w-10 text-accent" />
                  </div>

                  <div className="rounded-full border border-border bg-muted px-4 py-2 text-xs font-bold tracking-widest text-accent shadow-sm">
                    {d.code}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold leading-snug text-foreground">
                    {d.name}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {d.description}
                  </p>
                </div>

                {/* Info Cards */}
                <div className="mt-8 space-y-4">
                  {/* HOD */}
                  <div className="rounded-2xl border border-border bg-muted/40 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-sm">
                        <Users className="h-5 w-5 text-accent" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Head of Department
                        </p>

                        <p className="mt-1 text-sm font-semibold leading-relaxed text-foreground">
                          {hod}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Intake */}
                  <div className="rounded-2xl border border-border bg-muted/40 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-background shadow-sm">
                        <GraduationCap className="h-5 w-5 text-accent" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Student Intake
                        </p>

                        <p className="mt-1 text-sm font-semibold text-foreground">
                          {d.intake} Seats
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8">
                  {d.link !== "#" ? (
                    <Link
                      to={d.link}
                      className="group/link flex items-center justify-between rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/30"
                    >
                      <span>Explore Department</span>

                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-border bg-muted/30 px-5 py-4 text-center text-sm italic text-muted-foreground">
                      Department Details Coming Soon
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
