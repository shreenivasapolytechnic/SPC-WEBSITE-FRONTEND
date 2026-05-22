import PageLayout from "@/components/PageLayout";
import DeptGallery from "@/components/DeptGallery";
import { Wrench, Target, Star, Car, Zap } from "lucide-react";

const highlights = [
  "Qualified and Dedicated faculty team",
  "Extensive Career Guidance and Life Skills programme",
  "Extension activities beyond the curriculum",
  "Excellent placement records consecutively",
  "Value Added and Certification programme to boost the curriculum",
  "MOOC certification programmes",
  "Industry Institute Forum for industry exposure",
];

const missionPoints = [
  "To impart fundamental principles of automobile engineering and latest trends established in industry.",
  "To inculcate practical knowledge through industry connects and provide exposure to entrepreneurship and innovation.",
  "To facilitate staff members to achieve excellence in teaching through staff development programs and technical conferences.",
  "To teach students for life by promoting life skills, work skills, value based sessions and social service activities.",
];

const servicingObjectives = [
  "Identify and analyse faults in a vehicle as per the service manual.",
  "Learn the procedure for servicing of various components of the car.",
  "Illustrate the complete methodology of evaluation and maintenance of automobile.",
  "Perform dismantling and assembling of automobile components using tools.",
  "Enumerate the importance of maintenance and the step by step procedure for maintaining the various automotive systems.",
];

const hevObjectives = [
  "To learn and practice the charging systems of Electric Vehicles.",
  "To understand the concept of Electric Vehicle components.",
  "To study the configurations of Electric Vehicles and assemble.",
  "To acquire knowledge about Energy Storages, Charging System, Effects and Impacts.",
];

const Auto = () => (
  <PageLayout
    title="Automobile Engineering"
    subtitle="Department of AUTO — 1021"
  >
    {/* Highlights */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Highlights</h2>
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {highlights.map((h, i) => (
          <div
            key={h}
            className="bg-card border border-border rounded-lg p-4 flex items-center gap-3 hover:border-accent/30 transition-colors"
          >
            <span className="text-xs font-bold text-accent font-sans w-6">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm text-muted-foreground font-sans">{h}</span>
          </div>
        ))}
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="grid md:grid-cols-2 gap-6 mb-12">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Vision</h3>
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          To develop globally expertise Automobile diploma engineers, innovators and entrepreneurs,
          thereby contributing value to the economy and society.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-5 h-5 text-accent" />
          <h3 className="font-bold text-card-foreground font-heading">Mission</h3>
        </div>
        <ul className="space-y-2">
          {missionPoints.map((m) => (
            <li key={m} className="flex items-start gap-2 text-sm text-muted-foreground font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Automobile Servicing */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Car className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Automobile Servicing</h2>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-xs text-accent font-semibold font-sans uppercase tracking-wide mb-4">Objectives</p>
        <ul className="space-y-3">
          {servicingObjectives.map((obj, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground font-sans">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold font-sans flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* Hybrid Electric Vehicle */}
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <Zap className="w-7 h-7 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Hybrid Electrical Vehicle</h2>
      </div>
      <div className="bg-card border border-border rounded-lg p-6">
        <p className="text-xs text-accent font-semibold font-sans uppercase tracking-wide mb-4">Objectives</p>
        <ul className="space-y-3">
          {hevObjectives.map((obj, i) => (
            <li key={i} className="flex gap-3 text-sm text-muted-foreground font-sans">
              <span className="w-6 h-6 rounded-full bg-accent/10 text-accent text-xs font-bold font-sans flex items-center justify-center shrink-0">
                {i + 1}
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <DeptGallery department="AUTO" />
  </PageLayout>
);

export default Auto;
