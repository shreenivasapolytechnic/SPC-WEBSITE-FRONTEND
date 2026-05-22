import PageLayout from "@/components/PageLayout";
import DeptGallery from "@/components/DeptGallery";
import { Monitor, FlaskConical, Target, Phone, Cpu, Wifi } from "lucide-react";

const labs = [
  "Network Laboratory",
  "Operating System Laboratory",
  "Programming Laboratory",
  "Data Structures Laboratory",
];

const systemSpecs = [
  { label: "Systems", value: "HP Elite Desk / Intel Core i7 13th Gen / AMD Ryzen 7" },
  { label: "Memory", value: "16GB / 32GB DDR5 RAM" },
  { label: "Storage", value: "512 GB NVMe SSD + 1TB HDD" },
  { label: "Display", value: '27" HP E27u G5 QHD Monitors' },
  { label: "Graphics", value: "NVIDIA T400 / RTX A2000 GPUs for ML" },
];

const labFacilities = [
  { label: "Capacity", value: "60 Workstations" },
  { label: "Networking", value: "1 Gbps High Speed LAN" },
  { label: "Software", value: "MATLAB, AutoCAD, Python" },
  { label: "Power Backup", value: "UPS + Generator" },
  { label: "Environment", value: "24×7 Lab Access, Fully Air Conditioned" },
];

const CSE = () => (
  <PageLayout
    title="Computer Science & Engineering"
    subtitle="Department of CSE — Established 2007"
  >
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Monitor className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">About the Department</h2>
      </div>
      <p className="text-muted-foreground font-sans leading-relaxed">
        The Department of Computer Science and Engineering (CSE) was established in the academic
        year 2007–2008. It houses well-equipped laboratories with modern infrastructure and
        Hi-Tech computers configured with high-speed processors, provided to undergraduate
        students of all disciplines with round-the-clock uninterrupted power supply. The labs are
        connected with high-speed Internet connectivity of 100 Mbps under lease line mode.
        The department is highly motivated for research, with many young faculty members registered
        for Ph.D. programmes in specialized areas of recent trends. DCSE constantly nurtures
        students through counseling programmes, preparatory classes, and special tutorials,
        achieving 100% placement in top companies every year.
      </p>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To be a centre of excellence in Computer Science & Engineering education, producing
          technically competent and ethically strong professionals for industry and society.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Mission</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To impart quality technical education, foster research culture, and enhance employability
          through industry-aligned curriculum, modern infrastructure, and continuous mentoring.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="bg-card border border-border rounded-lg p-6 flex flex-col sm:flex-row sm:items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
          <Monitor className="w-6 h-6 text-accent" />
        </div>
        <div>
          <p className="text-xs text-accent font-semibold font-sans uppercase tracking-wide mb-1">
            Head of Department (Regular)
          </p>
          <p className="font-bold text-card-foreground font-heading text-lg">
            Prof. V. Jaya Prabu
          </p>
          <p className="text-sm text-muted-foreground font-sans">M.Sc., M.Phil., B.Ed.</p>
          <div className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground font-sans">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>9659350649</span>
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
          <Cpu className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">System Specifications</h3>
        </div>
        <ul className="space-y-3">
          {systemSpecs.map((s) => (
            <li key={s.label} className="text-sm font-sans">
              <span className="font-semibold text-foreground">{s.label}: </span>
              <span className="text-muted-foreground">{s.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <Wifi className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Lab Facilities</h3>
        </div>
        <ul className="space-y-3">
          {labFacilities.map((f) => (
            <li key={f.label} className="text-sm font-sans">
              <span className="font-semibold text-foreground">{f.label}: </span>
              <span className="text-muted-foreground">{f.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    <DeptGallery department="CSE" />
  </PageLayout>
);

export default CSE;
