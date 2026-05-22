import PageLayout from "@/components/PageLayout";
import { ExternalLink, FileCheck2 } from "lucide-react";

const approvalDocuments = [
  {
    title: "EOA Report 2025-26",
    description: "AICTE extension of approval report for the academic year 2025-26.",
    href: new URL("../assets/aicte-approvals/EOA Report 2025-26.pdf", import.meta.url).href,
  },
  {
    title: "EOA",
    description: "AICTE extension of approval document.",
    href: new URL("../assets/aicte-approvals/EOA.pdf", import.meta.url).href,
  },
  {
    title: "Grievance Redressal Cell",
    description: "Official document for the Grievance Redressal Cell.",
    href: new URL("../assets/aicte-approvals/1-Grievance Redressal Cell.pdf", import.meta.url).href,
  },
  {
    title: "Anti Ragging Committee",
    description: "Official document for establishment of the Anti Ragging Committee.",
    href: new URL("../assets/aicte-approvals/2-Establishment of Anti Ragging Committee (1).pdf", import.meta.url).href,
  },
  {
    title: "Internal Complaint Committee",
    description: "Official document for establishment of Internal Complaint Committee.",
    href: new URL("../assets/aicte-approvals/4-Establishment of Internal Complaint Committee(ICC).pdf", import.meta.url).href,
  },
  {
    title: "Committee for SC/ST",
    description: "Official document for establishment of Committee for SC/ST.",
    href: new URL("../assets/aicte-approvals/5-Establishmnet of Committee for SC,ST.pdf", import.meta.url).href,
  },
  {
    title: "IQAC",
    description: "Official document for establishment of IQAC.",
    href: new URL("../assets/aicte-approvals/6-Establishment of IQAC.pdf", import.meta.url).href,
  },
  {
    title: "Industry-Institute Interaction Cell",
    description: "Official document for Industry-Institute Interaction Cell.",
    href: new URL("../assets/aicte-approvals/27-Industry-Institute Interaction Cell.pdf", import.meta.url).href,
  },
  {
    title: "Women Helpline & Security System",
    description: "Official document for Women Helpline and Security System.",
    href: new URL("../assets/aicte-approvals/33-Establishment Women Helpline & Security System.pdf", import.meta.url).href,
  },
  {
    title: "SWAYAM",
    description: "Official SWAYAM document.",
    href: new URL("../assets/aicte-approvals/38-SWAYAM.pdf", import.meta.url).href,
  },
];

const AicteApprovals = () => (
  <PageLayout
    title="AICTE Approvals"
    subtitle="Official AICTE approval documents"
  >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {approvalDocuments.map((document) => (
        <a
          key={document.title}
          href={document.href}
          className="group rounded-lg border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          target="_blank"
          rel="noreferrer"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-accent transition-colors group-hover:bg-accent/20">
            <FileCheck2 className="h-7 w-7" />
          </div>
          <h2 className="font-heading text-xl font-bold text-card-foreground">
            {document.title}
          </h2>
          <p className="mt-2 font-sans text-sm leading-6 text-muted-foreground">
            {document.description}
          </p>
          <div className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-primary">
            View Document
            <ExternalLink className="h-4 w-4" />
          </div>
        </a>
      ))}
    </div>
  </PageLayout>
);

export default AicteApprovals;
