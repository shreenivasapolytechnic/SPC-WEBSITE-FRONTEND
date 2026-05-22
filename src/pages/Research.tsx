import PageLayout from "@/components/PageLayout";
import { BookOpen, Users, Lightbulb, FileText } from "lucide-react";

const Research = () => (
  <PageLayout title="Research" subtitle="Innovation & Research at SPC">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {[
        { icon: FileText, label: "Papers Published", value: "150+" },
        { icon: BookOpen, label: "Funded Projects", value: "25" },
        { icon: Users, label: "Research Scholars", value: "40+" },
        { icon: Lightbulb, label: "Patents Filed", value: "12" },
      ].map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
          <Icon className="w-8 h-8 mx-auto mb-2 text-accent" />
          <p className="text-2xl font-bold font-heading">{value}</p>
          <p className="text-primary-foreground/70 text-sm font-sans">{label}</p>
        </div>
      ))}
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Research Areas</h2>
        <ul className="space-y-3 text-muted-foreground font-sans">
          {["Renewable Energy Systems", "IoT & Embedded Systems", "Machine Learning & AI", "Advanced Manufacturing", "Structural Engineering", "Environmental Engineering", "VLSI Design", "Robotics & Automation"].map((a) => (
            <li key={a} className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent" />{a}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Recent Publications</h2>
        {[
          { title: "IoT-based Smart Agriculture Monitoring System", journal: "Int. Journal of Engineering Research, 2024" },
          { title: "Analysis of Solar Panel Efficiency in Tropical Climates", journal: "Renewable Energy Letters, 2024" },
          { title: "Machine Learning for Predictive Maintenance", journal: "IEEE Conference Proceedings, 2023" },
        ].map((p, i) => (
          <div key={i} className="bg-card border border-border rounded-md p-4 mb-3">
            <h4 className="font-semibold text-card-foreground text-sm font-heading">{p.title}</h4>
            <p className="text-xs text-muted-foreground font-sans mt-1">{p.journal}</p>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default Research;
