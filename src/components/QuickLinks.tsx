import { Link } from "react-router-dom";
import { Building2, Users, Briefcase, Lightbulb, FileCheck2 } from "lucide-react";

const links = [
  { icon: Lightbulb, label: "Anti-Drug Cell", href: "/anti-drug-cell" },
  { icon: FileCheck2, label: "AICTE Approvals", href: "/aicte-approvals" },
  { icon: Building2, label: "Departments", href: "/academics/departments" },
  { icon: Briefcase, label: "Recruiters", href: "/placement" },
  { icon: Users, label: "Institution", href: "/about/institution" },
];

const QuickLinks = () => {
  return (
    <section className="bg-white py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="section-kicker">Explore SPC</p>
          <h2 className="section-heading">Quick Access</h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border bg-muted/40 p-6 text-center transition-all duration-300 hover:border-gold/40 hover:bg-white hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary">
                <link.icon className="h-6 w-6 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <span className="font-sans text-sm font-semibold text-foreground">
                {link.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
