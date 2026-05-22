import PageLayout from "@/components/PageLayout";
import { Target, Eye, Star } from "lucide-react";

const VisionMission = () => (
  <PageLayout title="Vision & Mission" subtitle="Our Guiding Principles">
    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-card border border-border rounded-lg p-8">
        <Eye className="w-10 h-10 text-accent mb-4" />
        <h2 className="text-2xl font-bold text-card-foreground mb-4 font-heading">Vision</h2>
        <p className="text-muted-foreground font-sans">
          To be a globally recognized institution of technical education, fostering innovation, research, and entrepreneurship to produce competent professionals who contribute to the socio-economic development of society.
        </p>
      </div>
      <div className="bg-card border border-border rounded-lg p-8">
        <Target className="w-10 h-10 text-accent mb-4" />
        <h2 className="text-2xl font-bold text-card-foreground mb-4 font-heading">Mission</h2>
        <ul className="text-muted-foreground font-sans space-y-3">
          <li>• Provide quality technical education with industry-relevant curriculum</li>
          <li>• Foster a culture of innovation and research among students and faculty</li>
          <li>• Develop partnerships with industry for practical training and placements</li>
          <li>• Promote ethical values and social responsibility</li>
          <li>• Create an inclusive learning environment for all students</li>
        </ul>
      </div>
    </div>
    <div className="bg-primary/5 rounded-lg p-8">
      <div className="flex items-center gap-3 mb-4">
        <Star className="w-8 h-8 text-accent" />
        <h2 className="text-2xl font-bold text-foreground font-heading">Core Values</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Excellence", "Integrity", "Innovation", "Inclusivity", "Collaboration", "Sustainability", "Leadership", "Service"].map((v) => (
          <div key={v} className="bg-card border border-border rounded-md p-4 text-center">
            <span className="font-semibold text-foreground font-sans">{v}</span>
          </div>
        ))}
      </div>
    </div>
  </PageLayout>
);

export default VisionMission;
