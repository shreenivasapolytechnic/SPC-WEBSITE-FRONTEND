import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  Cpu,
  FlaskConical,
  GraduationCap,
  Library,
  Quote,
  Users,
} from "lucide-react";

import campusImage from "@/assets/building1.png";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "6", label: "Diploma Departments" },
  { value: "100+", label: "Recruiter Network" },
  { value: "AICTE", label: "Approved Institution" },
];

const departments = [
  {
    icon: Cpu,
    title: "Computer Science",
    href: "/academics/departments/cse",
  },
  {
    icon: Building2,
    title: "Mechanical Engineering",
    href: "/academics/departments/mech",
  },
  {
    icon: FlaskConical,
    title: "Electronics & Communication",
    href: "/academics/departments/ece",
  },
  {
    icon: GraduationCap,
    title: "Electrical & Electronics",
    href: "/academics/departments/eee",
  },
];

const facilities = [
  {
    icon: Library,
    title: "Library",
    text: "Academic resources and learning support.",
  },
  {
    icon: FlaskConical,
    title: "Laboratories",
    text: "Practical labs for hands-on engineering training.",
  },
  {
    icon: Users,
    title: "Student Life",
    text: "Clubs, sports, transport, and campus support.",
  },
];

const recruiters = [
  "TURBO ENERYGY LIMITED",
  "TVS",
  "BRAKES INDIA",
  "LOTTE",
  "INDIA NIPPON ELECTRICALS LIMITED",
  "SAINT-GOBAIN",
];

const HomeHighlights = () => {
  return (
    <>
      {/* Stats Section */}
      <section className="bg-white py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="premium-card p-6 text-center"
              >
                <p className="font-heading text-3xl font-bold text-blue-700">
                  {stat.value}
                </p>

                <p className="mt-2 font-sans text-sm font-medium text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.9fr] lg:items-center">
            <div>
              <p className="section-kicker">Facilities</p>

              <h2 className="section-heading mb-5">
                A Campus Built for Technical Learning
              </h2>

              <p className="max-w-2xl font-sans leading-8 text-slate-600">
                The college environment supports practical training,
                disciplined study, and career preparation through
                academic infrastructure and student-focused services.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {facilities.map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <Icon className="mb-4 h-6 w-6 text-gold-dark" />

                    <h3 className="font-heading text-base font-bold text-slate-950">
                      {title}
                    </h3>

                    <p className="mt-2 font-sans text-sm leading-6 text-slate-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <img
              src={campusImage}
              alt="SPC campus facilities"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-slate-900/15"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-[0.8fr,1.2fr] lg:items-center">
            <div>
              <p className="mb-3 font-sans text-sm font-bold uppercase tracking-[0.18em] text-gold">
                Placements
              </p>

              <h2 className="font-heading text-3xl font-bold md:text-4xl">
                Career-ready diploma graduates
              </h2>

              <p className="mt-4 font-sans leading-8 text-slate-300">
                Training, company interaction, and placement support
                help students prepare for private and industrial
                opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {recruiters.map((name) => (
                <div
                  key={name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center font-sans font-semibold text-white backdrop-blur"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Quote className="mx-auto mb-5 h-10 w-10 text-gold-dark" />

            <h2 className="section-heading">
              A disciplined place to learn, practice, and grow.
            </h2>

            <p className="mt-5 font-sans text-lg leading-8 text-slate-600">
              SPC focuses on technical confidence, academic values,
              and the practical skills needed for professional success.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 font-sans text-sm font-semibold text-slate-700 shadow-sm">
              <Award className="h-4 w-4 text-gold-dark" />
              Shreenivasa Polytechnic College
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeHighlights;