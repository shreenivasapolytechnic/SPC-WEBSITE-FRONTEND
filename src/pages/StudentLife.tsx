import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Bus, Home, Loader2, Music, Trophy, Users } from "lucide-react";

import PageLayout from "@/components/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  fetchStudentLife,
  resolveImageUrl,
  StudentLifeItem,
} from "@/lib/api";

const fallbackItems: StudentLifeItem[] = [
  {
    _id: "fallback-clubs",
    title: "Student Clubs",
    description: "Students participate in coding contests, technical clubs, workshops, and creative campus activities.",
    category: "clubs",
    imageUrl: "",
    publicId: null,
    additionalContent: null,
    displayOrder: 1,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-sports",
    title: "Sports",
    description: "Students take part in athletics, volleyball, cricket, football, and indoor games.",
    category: "sports",
    imageUrl: "",
    publicId: null,
    additionalContent: null,
    displayOrder: 2,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-cultural",
    title: "Cultural Events",
    description: "Cultural programmes and celebrations encourage student creativity and stage confidence.",
    category: "cultural",
    imageUrl: "",
    publicId: null,
    additionalContent: null,
    displayOrder: 3,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-hostel",
    title: "Hostel",
    description: "Hostel facilities provide safe accommodation and a supportive study environment.",
    category: "hostel",
    imageUrl: "",
    publicId: null,
    additionalContent: null,
    displayOrder: 4,
    createdAt: "",
    updatedAt: "",
  },
  {
    _id: "fallback-transport",
    title: "Transport",
    description: "College bus facilities are available for students.",
    category: "transport",
    imageUrl: "",
    publicId: null,
    additionalContent: {
      routes: [
        {
          busNumber: "1",
          routeName: "Thottampatti Vellalapatti Route",
          stops: [
            "Sammandahalli Pudur", "M. Velampatti", "Pallipatti", "Marudipatti",
            "Morappur", "Chindalpadi", "Pasuvapuram", "Kandagoundanur",
            "Nochikuttai", "Thalanatham", "Veppilaipatti", "Kethureddipatti",
            "Pilparunthi X Road", "College",
          ],
        },
      ],
    },
    displayOrder: 5,
    createdAt: "",
    updatedAt: "",
  },
];

const categories = [
  { key: "clubs", title: "Student Clubs", description: "Technical clubs, workshops, and student activities." },
  { key: "sports", title: "Sports", description: "Outdoor and indoor sports activities." },
  { key: "cultural", title: "Cultural Events", description: "Celebrations, stage events, and creative programmes." },
  { key: "hostel", title: "Hostel", description: "Safe accommodation and student support." },
  { key: "transport", title: "Transport", description: "College bus routes and transport facilities." },
] satisfies { key: StudentLifeItem["category"]; title: string; description: string; }[];

const iconMap = {
  clubs: Users,
  sports: Trophy,
  cultural: Music,
  hostel: Home,
  transport: Bus,
} satisfies Record<StudentLifeItem["category"], typeof Users>;

const StudentLifeCard = ({
  category, count, active, onClick,
}: {
  category: (typeof categories)[number];
  count: number;
  active: boolean;
  onClick: () => void;
}) => {
  const Icon = iconMap[category.key];

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group w-full rounded-xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        active
          ? "border-gold/50 bg-primary text-white shadow-lg"
          : "border-border bg-white hover:border-gold/40"
      }`}
    >
      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${
        active
          ? "bg-white/15"
          : "bg-primary/10 group-hover:bg-primary group-hover:text-white"
      }`}>
        <Icon className={`h-6 w-6 ${active ? "text-gold" : "text-primary group-hover:text-white"}`} />
      </div>
      <h3 className={`mb-1 font-heading text-base font-bold ${active ? "text-white" : "text-foreground"}`}>
        {category.title}
      </h3>
      <p className={`font-sans text-xs leading-5 ${active ? "text-white/70" : "text-muted-foreground"}`}>
        {category.description}
      </p>
      <p className={`mt-3 font-sans text-xs font-bold uppercase tracking-wider ${active ? "text-gold" : "text-gold-dark"}`}>
        {count} {count === 1 ? "record" : "records"}
      </p>
    </button>
  );
};

const CategoryDetails = ({
  category, items,
}: {
  category: StudentLifeItem["category"];
  items: StudentLifeItem[];
}) => {
  const Icon = iconMap[category];
  const firstItem = items[0];
  const routes = items.flatMap((item) => item.additionalContent?.routes || []);

  if (items.length === 0) return null;

  return (
    <section className="rounded-2xl border border-border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="font-heading text-2xl font-bold text-foreground">
            {firstItem?.title || categories.find((item) => item.key === category)?.title}
          </h2>
          <p className="mt-1 font-sans text-sm text-muted-foreground">{firstItem?.description}</p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items
          .filter((item) => item.imageUrl)
          .map((item) => (
            <article key={item._id} className="overflow-hidden rounded-xl border border-border bg-muted/30">
              <img
                src={resolveImageUrl(item.imageUrl)}
                alt={item.title}
                className="aspect-video w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                <p className="mt-1 font-sans text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            </article>
          ))}
      </div>

      {category === "transport" && routes.length ? (
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {routes.map((route) => (
            <AccordionItem
              key={`${route.busNumber}-${route.routeName}`}
              value={`${route.busNumber}-${route.routeName}`}
              className="rounded-xl border border-border bg-muted/30 px-4"
            >
              <AccordionTrigger className="font-semibold text-foreground hover:no-underline">
                Bus No: {route.busNumber} — {route.routeName}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-2 pb-2 sm:grid-cols-2 lg:grid-cols-3">
                  {route.stops.map((stop) => (
                    <li key={stop} className="flex items-center gap-2 font-sans text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {stop}
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : null}
    </section>
  );
};

const StudentLife = () => {
  const [selectedCategory, setSelectedCategory] = useState<StudentLifeItem["category"]>("clubs");
  const studentLifeQuery = useQuery({
    queryKey: ["student-life"],
    queryFn: () => fetchStudentLife(),
  });

  const backendItems = studentLifeQuery.data?.data || [];
  const items = backendItems.length ? backendItems : fallbackItems;

  const itemsByCategory = useMemo(
    () =>
      categories.reduce<Record<StudentLifeItem["category"], StudentLifeItem[]>>(
        (grouped, category) => ({
          ...grouped,
          [category.key]: items.filter((item) => item.category === category.key),
        }),
        { clubs: [], sports: [], cultural: [], hostel: [], transport: [] }
      ),
    [items]
  );

  return (
    <PageLayout title="Student Life" subtitle="Life at SPC Campus">
      {studentLifeQuery.isLoading ? (
        <div className="flex min-h-[220px] items-center justify-center gap-3 rounded-xl border border-dashed border-border text-muted-foreground">
          <Loader2 className="animate-spin" />
          Loading student life content...
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <StudentLifeCard
                key={category.key}
                category={category}
                count={itemsByCategory[category.key].length}
                active={selectedCategory === category.key}
                onClick={() => setSelectedCategory(category.key)}
              />
            ))}
          </div>
          <CategoryDetails
            category={selectedCategory}
            items={itemsByCategory[selectedCategory]}
          />
        </div>
      )}
    </PageLayout>
  );
};

export default StudentLife;
