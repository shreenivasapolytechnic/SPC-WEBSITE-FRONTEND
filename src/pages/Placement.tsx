import PageLayout from "@/components/PageLayout";
import { Building2, GraduationCap, Loader2, Target, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchGallery, fetchPlacements, PlacementItem, resolveImageUrl } from "@/lib/api";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const getCompaniesForYear = (placement: PlacementItem) =>
  Array.from(
    new Set(
      placement.records.flatMap((record) =>
        record.companies.map((company) => company.company)
      )
    )
  );

const getCompanyCount = (
  record: PlacementItem["records"][number],
  companyName: string
) => record.companies.find((company) => company.company === companyName)?.count ?? "-";


const Placement = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["public-placements"],
    queryFn: fetchPlacements,
    staleTime: 60_000,
  });
  const galleryQuery = useQuery({
    queryKey: ["placement-gallery"],
    queryFn: fetchGallery,
    staleTime: 60_000,
  });

  const placements = data?.data || [];
  const placementImages = [...(galleryQuery.data?.data || [])]
    .filter((item) => item.category.toLowerCase() === "placement")
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <PageLayout title="Placement" subtitle="Training & Placement Cell">
      <div className="space-y-8">
      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <Target className="w-6 h-6 text-accent" />
          <div>
            <h2 className="text-2xl font-bold font-heading">TRAINING &amp; PLACEMENT CELL</h2>
            <p className="text-muted-foreground font-sans mt-1">“Transferring every student’s dream in to reality”</p>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-2 font-heading">PLACEMENT OFFICER MESSAGE</h3>
          <p className="text-accent font-semibold mb-3">“Embracing New Opportunities”</p>

          <p className="text-foreground/80 leading-relaxed">
            [SHREENIVASA POLYTECHNIC COLLEGE], we are committed to shaping young minds into
            industry-ready professionals. Our rigorous academic curriculum is augmented by soft
            skill training, industrial visits, and internships to ensure our students excel in a
            fast-paced business environment.
            <br />
            <br />
            We highly value our relationship with recruiters and continuously strive to meet their
            high standards. I am confident that our students will add significant value to your
            esteemed organizations. We look forward to a successful and mutually beneficial placement
            season.
          </p>

          <div className="mt-6">
            <p className="font-semibold">-PROF.K.S.SURESH KUMAR,B.E.,</p>
            <p className="font-semibold">PLACEMENT OFFICER.</p>
            <p className="text-muted-foreground mt-1">SPC-Training &amp; Placement Cell</p>
          </div>
        </div>

        <div className="lg:col-span-5 rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold mb-2 font-heading">SPC-Training &amp; Placement Cell</h3>
          <p className="text-foreground/80 leading-relaxed">
            The Training &amp; Placement Cell guide the students to choose right career, provide knowledge,
            aptitude and skills that suits the industry requirements in the form of core knowledge and skill sets.
            The cell trains the students for the process of recruitment and creates awareness among companies about
            the potential recruitment opportunities.
            <br />
            <br />
            The cell imparts continuous training in learning-skills, behavioral-skills, life-skills in addition to
            aptitude and communication skills.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-bold font-heading">PLACEMENT CELL</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="py-3 px-2 border-b border-border text-sm font-semibold text-foreground">
                  SL.NO
                </th>
                <th className="py-3 px-2 border-b border-border text-sm font-semibold text-foreground">
                  NAME
                </th>
                <th className="py-3 px-2 border-b border-border text-sm font-semibold text-foreground">
                  DESIGNATION
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">1</td>
                <td className="py-3 px-2 text-sm text-foreground/80">E.THANGARAJ</td>
                <td className="py-3 px-2 text-sm text-foreground/80">CHAIRMAN</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">2</td>
                <td className="py-3 px-2 text-sm text-foreground/80">P.NAINAMALAI</td>
                <td className="py-3 px-2 text-sm text-foreground/80">TRUSTEE / PLACEMENT CO-ORDINATOR</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">3</td>
                <td className="py-3 px-2 text-sm text-foreground/80">P.N.ANBUAZHAGAN</td>
                <td className="py-3 px-2 text-sm text-foreground/80">TRUSTEE / PLACEMENT CO-ORDINATOR</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">4</td>
                <td className="py-3 px-2 text-sm text-foreground/80">C.ANBALAGAN</td>
                <td className="py-3 px-2 text-sm text-foreground/80">TRUSTEE / PLACEMENT CO-ORDINATOR</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">5</td>
                <td className="py-3 px-2 text-sm text-foreground/80">V.MURUGAN</td>
                <td className="py-3 px-2 text-sm text-foreground/80">PRINCIPAL</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">6</td>
                <td className="py-3 px-2 text-sm text-foreground/80">P.K.SARAVANAN</td>
                <td className="py-3 px-2 text-sm text-foreground/80">VICE PRINCIPAL</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">7</td>
                <td className="py-3 px-2 text-sm text-foreground/80">K.S.SURESH KUMAR</td>
                <td className="py-3 px-2 text-sm text-foreground/80">PLACEMENT OFFICER</td>
              </tr>
              <tr>
                <td className="py-3 px-2 text-sm text-foreground/80">8</td>
                <td className="py-3 px-2 text-sm text-foreground/80">K.S.SURESH KUMAR</td>
                <td className="py-3 px-2 text-sm text-foreground/80">PLACEMENT OFFICER</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-bold font-heading">Placement Statistics</h3>
        <p className="text-foreground/80 text-sm mt-2">
          Year-wise branch placement statistics and recruiter counts.
        </p>

        {isLoading ? (
          <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading placement records...
          </div>
        ) : placements.length ? (
          <Accordion type="single" collapsible className="mt-5 space-y-3">
            {placements.map((placement, index) => {
              const companies = getCompaniesForYear(placement);
              const records = [...placement.records].sort(
                (a, b) => a.displayOrder - b.displayOrder
              );

              return (
                <AccordionItem
                  key={placement._id}
                  value={placement.academicYear}
                  className="rounded-lg border border-border bg-background px-4"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-card-foreground hover:no-underline">
                    {placement.academicYear}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse text-sm">
                        <thead>
                          <tr className="text-left">
                            <th className="whitespace-nowrap border-b border-border px-3 py-3 font-semibold text-foreground">
                              Branch
                            </th>
                            <th className="whitespace-nowrap border-b border-border px-3 py-3 font-semibold text-foreground">
                              Student Strength
                            </th>
                            {companies.map((company) => (
                              <th
                                key={company}
                                className="whitespace-nowrap border-b border-border px-3 py-3 font-semibold text-foreground"
                              >
                                {company}
                              </th>
                            ))}
                            <th className="whitespace-nowrap border-b border-border px-3 py-3 font-semibold text-foreground">
                              Placed Qty
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {records.map((record) => (
                            <tr key={`${placement.academicYear}-${record.branch}`}>
                              <td className="whitespace-nowrap px-3 py-3 font-medium text-foreground/90">
                                {record.branch}
                              </td>
                              <td className="whitespace-nowrap px-3 py-3 text-foreground/80">
                                {record.studentStrength}
                              </td>
                              {companies.map((company) => (
                                <td
                                  key={`${record.branch}-${company}`}
                                  className="whitespace-nowrap px-3 py-3 text-foreground/80"
                                >
                                  {getCompanyCount(record, company)}
                                </td>
                              ))}
                              <td className="whitespace-nowrap px-3 py-3 font-semibold text-foreground/90">
                                {record.placedQty}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        ) : (
          <p className="mt-5 text-sm text-muted-foreground">
            Placement statistics will be updated soon.
          </p>
        )}
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-bold font-heading">Placement Activities Photos</h3>
        <p className="text-foreground/80 text-sm mt-2">
          Photos from training and placement activities conducted by the Training &amp; Placement Cell.
        </p>

        {galleryQuery.isLoading ? (
          <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading placement photos...
          </div>
        ) : placementImages.length ? (
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {placementImages.map((image) => (
              <div key={image._id} className="rounded-lg overflow-hidden border border-border bg-background">
                <img
                  src={resolveImageUrl(image.imageUrl)}
                  alt={image.title}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-sm text-muted-foreground">
            Placement activity photos will be updated soon.
          </p>
        )}

      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold font-heading">Vision</h3>
          <ul className="mt-4 space-y-2 text-foreground/80 list-disc pl-5">
            <li>Empowerment &amp; Success: To empower students to meet industry challenges, transforming their career dreams into reality.</li>
            <li>Global Employability: To develop industry-ready, globally employable graduates with ethical values.</li>
            <li>Bridge to Industry: To serve as a proactive conduit between educational institutions and corporate bodies.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold font-heading">Mission</h3>
          <ul className="mt-4 space-y-2 text-foreground/80 list-disc pl-5">
            <li>Skill Development: To impart quality training in soft skills, aptitude, and technical skills to boost employability.</li>
            <li>Industry Collaboration: To strengthen institute-industry partnerships through campus visits, guest lectures, and MoUs.</li>
            <li>Placement Opportunities: To organize on-campus and off-campus recruitment drives with reputable organizations.</li>
            <li>Career Guidance: To offer counseling that helps students align their skills with market demand.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-bold font-heading">Objectives of T&amp;P Cells</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-5">
          <div className="flex items-start gap-3">
            <Users className="w-6 h-6 text-accent mt-1" />
            <div>
              <p className="font-semibold">100% Placement</p>
              <p className="text-foreground/80 text-sm">Ensuring students secure rewarding positions</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <GraduationCap className="w-6 h-6 text-accent mt-1" />
            <div>
              <p className="font-semibold">Skill Training</p>
              <p className="text-foreground/80 text-sm">Mock interviews, group discussions, resume-building workshops</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Building2 className="w-6 h-6 text-accent mt-1" />
            <div>
              <p className="font-semibold">Industry Visits</p>
              <p className="text-foreground/80 text-sm">Providing practical insight into industry work culture</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Target className="w-6 h-6 text-accent mt-1" />
            <div>
              <p className="font-semibold">Career Guidance</p>
              <p className="text-foreground/80 text-sm">Assisting students in making informed career decisions</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold font-heading">Industry – Institute Interaction</h3>
          <ul className="mt-4 space-y-2 text-foreground/80 list-disc pl-5">
            <li>Arranging in-plant training, industrial visit, expert lectures based on the requirements.</li>
            <li>Facilitating the Faculty members to visit the industries and get exposure on industrial practices.</li>
            <li>
              Assisting the Departments in organizing workshops, conferences and symposium in collaboration with industries
              and take up industry supported mini projects and projects.
            </li>
            <li>Facilitate the faculty members to involve in consultancy activities.</li>
            <li>Arranging for MoUs between the institute and industries.</li>
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="text-xl font-bold font-heading">Centre for Excellence &amp; R&amp;D</h3>
          <ul className="mt-4 space-y-2 text-foreground/80 list-disc pl-5">
            <li>To create ‘Centre for Excellence’ and R&amp;D Laboratories with the support of Industries.</li>
            <li>Arranging for students training on latest technologies and also on soft skills and inviting the industries for campus recruitment.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h3 className="text-xl font-bold font-heading">Career Guidance Programmes</h3>
        <p className="text-foreground/80 leading-relaxed mt-3">
          Career guidance programmes in colleges are structured initiatives—often led by placement cells—designed to help
          students identify strengths, explore career paths, and secure employment through workshops, skill assessments, and
          industry mentorship.
          <br />
          <br />
          These programs bridge the gap between academic learning and industry demands, covering resume building, interview
          preparation, and emerging fields like AI and data science.
        </p>

        <h4 className="text-lg font-bold mt-6">Key Focus Areas for Students:</h4>
        <ul className="mt-3 space-y-2 text-foreground/80 list-disc pl-5">
          <li>Emerging Sectors: Highlighting opportunities in AI, Data Science, Digital Marketing, and renewable energy.</li>
          <li>Entrepreneurship: Encouraging self-employment and entrepreneurial skill development.</li>
          <li>Virtual Experience: Utilizing tools like virtual internships for practical, immersive industry exposure.</li>
        </ul>
      </section>
      </div>
    </PageLayout>
  );
};

export default Placement;
