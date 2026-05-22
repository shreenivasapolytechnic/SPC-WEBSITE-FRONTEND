import PageLayout from "@/components/PageLayout";

const programmes = [
  { name: "Diploma in Mechanical Engineering", duration: "3 Years", intake: 180, code: "MECH" },
  { name: "Diploma in Automobile Engineering", duration: "3 Years", intake: 60, code: "AUTO" },
  { name: "Diploma in Electrical and Electronics Engineering", duration: "3 Years", intake: 60, code: "EEE" },
  { name: "Diploma in Electronics and Communication Engineering", duration: "3 Years", intake: 60, code: "ECE" },
  { name: "Diploma in Computer Science and Engineering", duration: "3 Years", intake: 60, code: "CSE" },
  { name: "Diploma in Aritifical Intelligence And MAchine Learning", duration: "3 Years", intake: 60, code: "CSE" },
];

const Programmes = () => (
  <PageLayout title="Programmes" subtitle="Diploma Programmes Offered">
    <div className="overflow-x-auto">
      <table className="w-full bg-card border border-border rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="px-6 py-3 text-left font-sans text-sm">S.No</th>
            <th className="px-6 py-3 text-left font-sans text-sm">Programme</th>
            <th className="px-6 py-3 text-left font-sans text-sm">Code</th>
            <th className="px-6 py-3 text-left font-sans text-sm">Duration</th>
            <th className="px-6 py-3 text-left font-sans text-sm">Intake</th>
          </tr>
        </thead>
        <tbody>
          {programmes.map((p, i) => (
            <tr key={i} className="border-b border-border hover:bg-muted/50 transition-colors">
              <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{i + 1}</td>
              <td className="px-6 py-4 font-sans text-sm font-medium text-foreground">{p.name}</td>
              <td className="px-6 py-4 font-sans text-sm text-accent font-semibold">{p.code}</td>
              <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{p.duration}</td>
              <td className="px-6 py-4 font-sans text-sm text-muted-foreground">{p.intake}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className="mt-8 bg-primary/5 rounded-lg p-6">
      <h3 className="text-xl font-bold text-foreground mb-3 font-heading">Eligibility</h3>
      <ul className="list-disc list-inside text-muted-foreground font-sans space-y-2">
        <li>Passed 10th Standard (SSLC) or equivalent examination</li>
        <li>Minimum 35% aggregate marks in qualifying examination</li>
        <li>Admission through State-level counselling process</li>
        <li>Lateral entry available for ITI certificate holders</li>
      </ul>
    </div>
  </PageLayout>
);

export default Programmes;
