import PageLayout from "@/components/PageLayout";
import DeptGallery from "@/components/DeptGallery";
import { Cog, Target, FlaskConical, Briefcase, BookOpen, Building, Phone } from "lucide-react";

const missionPoints = [
  "To be regionally and nationally recognized as a department of excellence by providing high quality mechanical engineering education leading to well qualified engineers who are ready to contribute effectively to the advancement of the industry and society.",
  "To provide technically strong and industry ready and focused mechanical engineers in order to meet the needs of industries and achieve excellence in teaching-learning process.",
  "To impart affordable value added and high quality education and knowledge.",
  "To create a heart to feel and hands to work students leading to be outstanding professionals.",
  "To practice and encourage high standards of professional ethics, transparency and accountability.",
];

const peos = [
  "To prepare the diploma students with fundamental knowledge to formulate, analyze and apply mechanical engineering knowledge for a successful career in industry in national and multinational companies and motivate them to pursue higher education.",
  "To inculcate entrepreneurship skills among the students and to grow innovative ideas, effective communication skills for solving engineering problems with team work to become a successful professional.",
];

const labs = [
  "Basic Workshop Practices Lab",
  "Basic Engineering Practices Lab",
  "Workshop Practices — Welding & Foundry Shop",
  "Machine Tool Technology Lab — Lathe Lab",
  "Metrology & Measurement Lab",
  "Strength of Materials Lab",
  "Fluid Mechanics Lab",
  "AutoCAD Lab",
  "Special Machines Lab",
  "Thermal Laboratory",
  "Advanced Manufacturing Lab — CNC Lab",
  "Process Automation Lab",
  "Sensor & Actuators Lab",
  "Mechanical Instrumentation Lab",
];

const internshipCompanies = [
  "Brakes India Pvt Ltd, Padi",
  "Brakes India Pvt Ltd, Pollampakkam",
  "Turbo Energy Ltd, Paiyanur",
  "India Nippon Electricals Ltd, Hosur",
  "STS Engineering, Hosur",
  "Dharmapuri CNC Center, Dharmapuri",
];

const govtJobs = [
  { role: "Assistant Engineer / Junior Engineer (AE/JE)", dept: "PWD / CPWD / MES / BRO" },
  { role: "Technical Officer", dept: "DRDO & ISRO" },
  { role: "Executive Trainee / Engineer in PSUs", dept: "ONGC, IOCL, GAIL, and BHEL" },
  { role: "Section Engineer / Assistant Executive Engineer", dept: "Army / Navy / Air Force" },
  { role: "MVI Inspector", dept: "Transport Department" },
  { role: "Railways and State Transport Corporations", dept: "Maintenance of locomotives and transport vehicles" },
  { role: "Public Sector Undertakings (PSUs)", dept: "Power, petroleum, and manufacturing sectors" },
];

const privateJobs = [
  "Design Engineer", "Production Engineer", "Quality Engineer", "Maintenance Engineer",
  "Thermal Engineer", "R&D Engineer", "Sales & Service Engineer", "Mechanical Piping Engineer", "Entrepreneurship",
];

const Mech = () => (
  <PageLayout title="Mechanical Engineering" subtitle="Department of MECH — Diploma Programme">
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Cog className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">About the Department</h2>
      </div>
      <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
        <p>Mechanical engineering is the branch of engineering that focuses on the design, development, production, and maintenance of mechanical systems. These systems can range from tiny micro machines to massive power plants.</p>
        <p>At its core, mechanical engineering involves the application of physics, mathematics, and material science to analyse, design, and manufacture mechanical systems. It is one of the broadest engineering disciplines and intersects with many other fields, such as electrical engineering, aerospace, automotive, civil, and even biomedical engineering.</p>
        <p>Today, mechanical engineering has evolved into a high-tech discipline incorporating elements of computer-aided design (CAD), artificial intelligence, data analysis, and sustainability.</p>
      </div>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To prepare our students for meeting global Mechanical Engineering challenges and contribute to the prosperity of society through excellence in education and research.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Mission</h3>
        </div>
        <ul className="space-y-2">
          {missionPoints.map((m, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />{m}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Programme Educational Objectives</h2>
      </div>
      <div className="space-y-3">
        {peos.map((peo, i) => (
          <div key={i} className="flex gap-3 bg-card border border-border rounded-lg p-4">
            <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold font-sans flex items-center justify-center shrink-0">{i + 1}</span>
            <span className="text-sm text-muted-foreground font-sans">{peo}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <Cog className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="text-xs text-accent font-semibold font-sans uppercase tracking-wide mb-1">Head of Department</p>
          <p className="font-bold text-card-foreground font-heading text-lg mb-1">Prof. K.S. Suresh Kumar, B.E.</p>
          <p className="text-sm text-muted-foreground font-sans leading-relaxed">
            This department has set standards under the leadership of Prof. K.S. Sureshkumar. An excellent faculty and sound infrastructure have ensured that students get the best of education to pursue the careers of their choice. The noble idea of our department is to identify raw talents among the students and shape them into champions with imperishable knowledge to face the global challenges.
          </p>
          <p className="mt-3 text-sm text-accent font-semibold font-sans italic">"Hard work is the key to Success."</p>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <FlaskConical className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Lab Facilities</h2>
      </div>
      <p className="text-sm text-muted-foreground font-sans mb-6">Our department has excellent infrastructural facilities in a separate well-planned building with all machinery in proper working condition.</p>
      <div className="grid sm:grid-cols-2 gap-3">
        {labs.map((lab, i) => (
          <div key={lab} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
            <span className="text-xs font-bold text-accent font-sans w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground font-sans">{lab}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Building className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Internship Training</h2>
      </div>
      <p className="text-sm text-muted-foreground font-sans mb-6">Internship training offers structured, practical work experience designed to bridge the gap between academic learning and professional requirements.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {internshipCompanies.map((company, i) => (
          <div key={company} className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors">
            <span className="text-xs font-bold text-accent font-sans w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground font-sans">{company}</span>
          </div>
        ))}
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Job Opportunities</h2>
      </div>
      <h3 className="font-bold text-foreground font-heading mb-4 flex items-center gap-2">
        <Building className="w-5 h-5 text-accent" />Government Job Roles
      </h3>
      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {govtJobs.map((job, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition-colors">
            <p className="font-semibold text-sm text-card-foreground font-heading">{job.role}</p>
            <p className="text-xs text-accent font-sans mt-1">{job.dept}</p>
          </div>
        ))}
      </div>
      <h3 className="font-bold text-black font-heading mb-4 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-black" />Private Job Opportunities
      </h3>
      <div className="bg-primary/5 rounded-lg p-6">
        <div className="flex flex-wrap gap-2">
          {privateJobs.map((job) => (
            <span key={job} className="px-3 py-1.5 bg-accent/10 text-black text-xs font-semibold rounded-full font-sans">{job}</span>
          ))}
        </div>
      </div>
    </section>

    <DeptGallery department="MECH" />
  </PageLayout>
);

export default Mech;
