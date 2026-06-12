import heroBg from "@/assets/building1.png";
import { ArrowRight, Award, BookOpen, Building2, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-primary">
      <img
        src={heroBg}
        alt="SPC Campus"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      {/* Option 2: Dark moody - deep maroon across whole image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a08]/80 via-[#2a0f0c]/75 to-[#1a0a08]/90" />
      {/* Option 4 (swap with above to try): Full maroon tint */}
      {/* <div className="absolute inset-0" style={{ backgroundColor: 'hsl(344 64% 20% / 0.82)' }} /> */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-4xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-md border border-gold/40 bg-white/10 px-4 py-2 font-sans text-sm font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            <Award className="h-4 w-4 text-gold" />
            AICTE Approved Polytechnic College
          </p>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Engineering skills for tomorrow's industries.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base leading-8 text-white/80 md:text-lg">
            Shreenivasa Polytechnic College delivers practical diploma education with modern laboratories,
            strong placement support, and a disciplined academic environment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/academics/departments"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gold px-6 py-3 font-sans text-sm font-bold text-primary shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-gold-light"
            >
              Explore Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/admissions/ug"
              className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/10 px-6 py-3 font-sans text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-gold/70 hover:bg-white/20"
            >
              Admissions
            </Link>
          </div>

          <div className="mt-10 grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { icon: GraduationCap, label: "Diploma Programmes" },
              { icon: Building2, label: "Modern Laboratories" },
              { icon: BookOpen, label: "Industry Curriculum" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur transition hover:border-gold/50 hover:bg-white/15">
                <Icon className="mb-3 h-6 w-6 text-gold" />
                <p className="font-sans text-sm font-semibold text-white">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
