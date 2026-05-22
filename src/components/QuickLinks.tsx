import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Briefcase,
  Lightbulb,
  FileCheck2,
} from "lucide-react";

const links = [
  { icon: Lightbulb, label: "Anti-Drug Cell", href: "/anti-drug-cell" },
  { icon: FileCheck2, label: "AICTE Approvals", href: "/aicte-approvals" },
  { icon: Building2, label: "Departments", href: "/academics/departments" },
  { icon: Briefcase, label: "Recruiters", href: "/placement" },
  { icon: Users, label: "Institution", href: "/about/institution" },
];

const QuickLinks = () => {
  return (
    <section className="section-alt py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="section-kicker">Explore SPC</p>
          <h2 className="section-heading">Quick Access</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className="premium-card group flex flex-col items-center gap-3 p-6"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 transition-colors group-hover:bg-blue-100">
                <link.icon className="h-7 w-7 text-blue-700" />
              </div>
              <span className="text-sm font-medium text-card-foreground text-center font-sans">
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
