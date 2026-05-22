import PageLayout from "@/components/PageLayout";
import DeptGallery from "@/components/DeptGallery";
import { Cpu, FlaskConical, Target, Phone, BookOpen, Briefcase, GraduationCap, Users } from "lucide-react";

const labs = [
  "Electronic Devices Lab",
  "Digital Electronics Lab",
  "Microprocessor & Microcontroller Lab",
  "Communication Engineering Lab",
  "Embedded Systems Lab",
  "Computer Hardware & Networking Lab",
  "Simulation & Project Lab",
];

const subjects = [
  "Electronic Devices and Circuits",
  "Digital Electronics",
  "Communication Engineering",
  "Microprocessors and Microcontrollers",
  "Embedded Systems",
  "Computer Hardware & Networking",
  "Wireless Communication",
  "Industrial Electronics",
];

const careers = [
  "Electronics Technician",
  "Communication Engineer",
  "Embedded System Developer",
  "Network Technician",
  "Service Engineer",
  "Quality Control Engineer",
  "Production Supervisor",
];

const activities = [
  "Technical Seminars",
  "Workshops",
  "Industrial Visits",
  "Mini Projects",
  "Technical Competitions",
  "Skill Development Programs",
];

const ECE = () => (
  <PageLayout
    title="Electronics & Communication Engineering"
    subtitle="Department of ECE — Diploma Programme"
  >
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Cpu className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">About the Department</h2>
      </div>
      <p className="text-muted-foreground font-sans leading-relaxed">
        The Department of Electronics and Communication Engineering was established with the
        objective of offering quality diploma education and creating technically competent
        professionals. Our department focuses on developing skilled diploma engineers with strong
        technical abilities, innovation, and industry readiness. With experienced faculty members,
        well-equipped laboratories, and industry-oriented training, the department prepares students
        for successful careers in electronics and communication industries.
      </p>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To become a center of excellence in electronics and communication education by producing
          skilled and innovative diploma engineers for industry and society.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Mission</h3>
        </div>
        <ul className="space-y-2">
          {[
            "To provide quality technical education with practical exposure.",
            "To enhance students' technical and communication skills.",
            "To encourage innovation, teamwork, and ethical values.",
            "To prepare students for higher education and employment opportunities.",
          ].map((m) => (
            <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <Cpu className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="text-xs text-accent font-semibold font-sans uppercase tracking-wide mb-1">Head of Department</p>
          <p className="font-bold text-card-foreground font-heading text-lg">Dr. S. Meena</p>
          <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground font-sans">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>Contact via college office</span>
          </div>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <FlaskConical className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Established Laboratories</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {labs.map((lab, i) => (
          <div key={lab} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
            <span className="text-xs font-bold text-accent font-sans w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground font-sans">{lab}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Subjects Covered</h3>
        </div>
        <ul className="space-y-2">
          {subjects.map((s) => (
            <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{s}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Career Opportunities</h3>
        </div>
        <ul className="space-y-2">
          {careers.map((c) => (
            <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{c}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Student Activities</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {activities.map((a, i) => (
          <div key={a} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
            <span className="text-xs font-bold text-accent font-sans w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground font-sans">{a}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <GraduationCap className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Higher Education Opportunities</h2>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <ul className="space-y-3">
          {["B.E / B.Tech through Lateral Entry", "Specialized Certification Courses", "Government Technical Examinations"].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{item}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <DeptGallery department="ECE" />
  </PageLayout>
);

export default ECE;
