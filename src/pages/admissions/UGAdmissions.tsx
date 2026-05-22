import PageLayout from "@/components/PageLayout";
import { FileText, Calendar, CheckCircle } from "lucide-react";

const UGAdmissions = () => (
  <PageLayout title="Admissions" subtitle="Diploma Programme Admissions 2025-26">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Eligibility Criteria</h2>
        <ul className="space-y-3 text-muted-foreground font-sans">
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Passed 10th (SSLC) or equivalent with minimum 35% marks</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Age limit: No upper age limit for diploma admissions</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Admission through State-level single window counselling</li>
          <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Management quota seats available as per norms</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Required Documents</h2>
        <ul className="space-y-3 text-muted-foreground font-sans">
          <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-accent mt-0.5 shrink-0" /> 10th Mark Sheet & Transfer Certificate</li>
          <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Community Certificate (if applicable)</li>
          <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Passport size photographs (4 copies)</li>
          <li className="flex items-start gap-2"><FileText className="w-5 h-5 text-accent mt-0.5 shrink-0" /> Aadhaar Card copy</li>
        </ul>
      </div>
    </div>
  </PageLayout>
);

export default UGAdmissions;
