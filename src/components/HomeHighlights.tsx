import { Link } from "react-router-dom";
import {
  ArrowRight, Award, Building2, Cpu, FlaskConical, GraduationCap, Library, Quote, Users,
} from "lucide-react";
import campusImage from "@/assets/building1.png";

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "6", label: "Diploma Departments" },
  { value: "100+", label: "Recruiter Network" },
  { value: "AICTE", label: "Approved Institution" },
];

const departments = [
  { icon: Cpu, title: "Computer Science", href: "/academics/departments/cse" },
  { icon: Building2, title: "Mechanical Engineering", href: "/academics/departments/mech" },
  { icon: FlaskConical, title: "Electronics & Communication", href: "/academics/departments/ece" },
  { icon: GraduationCap, title: "Electrical & Electronics", href: "/academics/departments/eee" },
];

const facilities = [
  { icon: Library, title: "Library", text: "Academic resources and learning support." },
  { icon: FlaskConical, title: "Laboratories", text: "Practical labs for hands-on engineering training." },
  { icon: Users, title: "Student Life", text: "Clubs, sports, transport, and campus support." },
];

const recruiters = [
  "TURBO ENERGY LIMITED",
  "TVS",
  "BRAKES INDIA",
  "LOTTE",
  "INDIA NIPPON ELECTRICALS",
  "SAINT-GOBAIN",
];

const HomeHighlights = () => {
  return (
    <>
      {/* Stats */}
      <section className="bg-white py-14 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="group rounded-xl border border-border bg-muted/40 p-6 text-center transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-lg">
                <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                <div className="mx-auto my-3 h-0.5 w-8 rounded-full bg-gold/50 transition-all duration-300 group-hover:w-14 group-hover:bg-gold" />
                <p className="font-sans text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="section-kicker">Campus Facilities</p>
              <h2 className="section-heading mb-5">A Campus Built for Technical Learning</h2>
              <p className="max-w-xl font-sans leading-8 text-muted-foreground">
                The college environment supports practical training, disciplined study, and career
                preparation through academic infrastructure and student-focused services.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {facilities.map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:border-gold/40 hover:shadow-md">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-sm font-bold text-primary">{title}</h3>
                    <p className="mt-2 font-sans text-xs leading-6 text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <Link
                to="/about/institution"
                className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary hover:text-gold-dark transition-colors"
              >
                Learn more about SPC <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={campusImage}
                alt="SPC campus facilities"
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-2xl shadow-primary/15"
                loading="lazy"
              />
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-white p-5 shadow-xl shadow-primary/10 md:block">
                <p className="font-heading text-3xl font-bold text-primary">20+</p>
                <p className="mt-1 font-sans text-xs font-medium text-muted-foreground">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placements */}
      <section className="bg-primary py-16">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.4fr] lg:items-center">
            <div>
              <p className="mb-3 font-sans text-xs font-bold uppercase tracking-[0.22em] text-gold">
                Placements
              </p>
              <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
                Career-ready diploma graduates
              </h2>
              <p className="mt-4 font-sans leading-8 text-white/70">
                Training, company interaction, and placement support help students prepare for
                private and industrial opportunities.
              </p>
              <Link
                to="/placement"
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-gold/50 bg-gold/10 px-5 py-2.5 font-sans text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-primary"
              >
                View Placement Details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {recruiters.map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-gold/20 bg-white/5 px-4 py-5 text-center font-sans text-sm font-semibold text-white backdrop-blur transition-all hover:border-gold/50 hover:bg-white/10"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-white shadow-sm">
              <Quote className="h-6 w-6 text-gold-dark" />
            </div>
            <h2 className="section-heading">
              A disciplined place to learn, practice, and grow.
            </h2>
            <p className="mt-5 font-sans text-base leading-8 text-muted-foreground">
              SPC focuses on technical confidence, academic values, and the practical skills needed
              for professional success.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-lg border border-border bg-white px-5 py-2.5 font-sans text-sm font-semibold text-primary shadow-sm">
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
