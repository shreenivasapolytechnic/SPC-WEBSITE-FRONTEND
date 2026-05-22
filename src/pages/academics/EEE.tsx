import PageLayout from "@/components/PageLayout";
import DeptGallery from "@/components/DeptGallery";
import { Zap, FlaskConical, Award, Briefcase, Target, Users, Building, MapPin } from "lucide-react";

const electricalLabs = [
  "Electrical DC Machines Lab",
  "Electrical AC Machines Lab",
  "Electrical Wiring and Winding Lab",
  "Control of Electrical Machines Lab",
];

const electronicsLabs = [
  "Electronic Devices and Circuits Lab",
  "Digital Electronics Lab",
  "Micro Controller Lab",
];

const govtPlacements = [
  { name: "S. Ramki", batch: "2010", posting: "Power House IV – Kundah", org: "TNEB" },
  { name: "K. Sekar", batch: "2010", posting: "MTPS – Mettur", org: "TNEB" },
  { name: "M. Sudhakar", batch: "2010", posting: "Sub Station – Chennai", org: "TNEB" },
  { name: "A. Priya", batch: "2010", posting: "S.E Office – Dharmapuri", org: "TNEB" },
];

const privateRecruiters = [
  "Brakes India Ltd., Padi, Chennai",
  "Lucas TVS, Chennai",
  "Eureka Forbes, Coimbatore",
  "Ashok Leyland, Hosur",
  "Hyundai Pvt. Ltd., Chennai",
  "Saint Gobain Pvt. Ltd., Bangalore",
  "TAFE Pvt. Ltd., Chennai",
  "Turbo Energy Pvt. Ltd.",
];

const associations = [
  "1st association inauguration started in 2009 in the name of \"Live Wire\".",
  "9th Live Wire Association programme conducted in March 2015 — \"Vetri Padikattu\", presided by Mr. V.P. Ramesh, Senior Officer, Lucas TVS, Chennai.",
  "10th Live Wire Association programme conducted on 10.08.2015 — \"Journey with Future\", presided by Er. I. Nedumaran, Chief Engineer, NLC.",
  "Conducted \"Two Days Workshop on Winding Technology\" through the association.",
];

const industrialVisits = [
  "Power Grid – K.R. Thoppur, Salem",
  "Aavin Dairy – Salem",
  "Neyveli Lignite Corporation – Neyveli",
  "ISRO – Trivandrum",
  "Radio Astronomy Centre – Ooty",
  "Doordarshan – Kodaikanal",
  "Hydro Power Plant – Mazhampuzha",
  "Wind Power Plant – Tirunelveli",
  "Thermal Power Plant – Ennore, Chennai",
  "Crisp Infotech – Cochin",
];

const EEE = () => (
  <PageLayout
    title="Electrical & Electronics Engineering"
    subtitle="Department of EEE — Diploma Programme"
  >
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <Zap className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">About the Department</h2>
      </div>
      <p className="text-muted-foreground font-sans leading-relaxed">
        The Department of Electrical and Electronics Engineering at Shreenivasa Polytechnic College
        offers a 3-year Diploma programme equipping students with strong fundamentals in electrical
        machines, power systems, control systems, and modern electronics. Our department is housed
        with highly equipped modern machinery, divided into two blocks — the Electrical Machines
        Lab and the Electronics Lab — ensuring students graduate industry-ready with hands-on
        expertise across both disciplines.
      </p>
    </section>

    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To provide our students a Diploma education of the highest quality, producing technically
          competent engineers for industry and society.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Mission</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To educate Diploma Engineering students in highly innovative practical knowledge and
          intellectual life, so that every student becomes a <em>"well-known technocrat"</em>.
        </p>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <FlaskConical className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Laboratories</h2>
      </div>
      <p className="text-sm text-muted-foreground font-sans mb-6">
        Our department is divided into two well-equipped blocks — Electrical Machines Lab and Electronics Lab.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-card-foreground font-heading">Electrical Laboratories</h3>
          </div>
          <ul className="space-y-2">
            {electricalLabs.map((lab) => (
              <li key={lab} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{lab}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <FlaskConical className="w-5 h-5 text-accent" />
            <h3 className="font-bold text-card-foreground font-heading">Electronics Laboratories</h3>
          </div>
          <ul className="space-y-2">
            {electronicsLabs.map((lab) => (
              <li key={lab} className="flex items-center gap-2 text-sm text-muted-foreground font-sans">
                <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />{lab}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Achievements</h2>
      </div>
      <h3 className="font-bold text-foreground font-heading mb-4 flex items-center gap-2">
        <Building className="w-5 h-5 text-accent" />
        Placements in Government Sector — Tamil Nadu Electricity Board (TNEB)
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {govtPlacements.map((p) => (
          <div key={p.name} className="bg-card border border-border rounded-lg p-5 hover:border-accent/30 transition-colors">
            <p className="font-bold text-card-foreground font-heading">{p.name}</p>
            <p className="text-xs text-accent font-semibold font-sans mt-1">{p.org} • Batch {p.batch}</p>
            <div className="flex items-start gap-1 mt-3 text-xs text-muted-foreground font-sans">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span>{p.posting}</span>
            </div>
          </div>
        ))}
      </div>
      <h3 className="font-bold text-foreground font-heading mb-4 flex items-center gap-2">
        <Briefcase className="w-5 h-5 text-accent" />
        Placements in Private Sector
      </h3>
      <div className="bg-primary/5 rounded-lg p-6">
        <div className="flex flex-wrap gap-2">
          {privateRecruiters.map((c) => (
            <span key={c} className="px-3 py-1.5 bg-accent/10 text-accent text-xs font-semibold rounded-full font-sans">{c}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Users className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Association Programme</h2>
      </div>
      <ul className="space-y-3">
        {associations.map((a, i) => (
          <li key={i} className="flex gap-3 bg-card border border-border rounded-lg p-4">
            <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold font-sans flex items-center justify-center shrink-0">{i + 1}</span>
            <span className="text-sm text-muted-foreground font-sans">{a}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <MapPin className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Industrial Visits</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {industrialVisits.map((visit, i) => (
          <div key={visit} className="bg-card border border-border rounded-lg p-4 hover:border-accent/30 transition-colors flex items-center gap-3">
            <span className="text-xs font-bold text-accent font-sans w-6">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-sm text-muted-foreground font-sans">{visit}</span>
          </div>
        ))}
      </div>
    </section>

    <DeptGallery department="EEE" />
  </PageLayout>
);

export default EEE;
