import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { Bus, Home, Loader2, Music, RefreshCw, Trophy, Users } from "lucide-react";

import PageLayout from "@/components/PageLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  fetchStudentLife,
  resolveImageUrl,
  StudentLifeItem,
} from "@/lib/api";

const fallbackItems: StudentLifeItem[] = [
  {
    _id: "fallback-clubs",
    title: "Student Clubs",
    description:
      "Students participate in coding contests, technical clubs, workshops, and creative campus activities.",
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
    description:
      "Students take part in athletics, volleyball, cricket, football, and indoor games.",
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
    description:
      "Cultural programmes and celebrations encourage student creativity and stage confidence.",
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
    description:
      "Hostel facilities provide safe accommodation and a supportive study environment.",
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
            "Sammandahalli Pudur",
            "M. Velampatti",
            "Pallipatti",
            "Marudipatti",
            "Morappur",
            "Chindalpadi",
            "Pasuvapuram",
            "Kandagoundanur",
            "Nochikuttai",
            "Thalanatham",
            "Veppilaipatti",
            "Kethureddipatti",
            "Pilparunthi X Road",
            "College",
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
] satisfies {
  key: StudentLifeItem["category"];
  title: string;
  description: string;
}[];

const iconMap = {
  clubs: Users,
  sports: Trophy,
  cultural: Music,
  hostel: Home,
  transport: Bus,
} satisfies Record<StudentLifeItem["category"], typeof Users>;

const StudentLifeCard = ({
  category,
  count,
  active,
  onClick,
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
      className={`premium-card group p-6 text-left ${
        active ? "border-blue-300 bg-blue-50 shadow-xl shadow-blue-900/10" : ""
      }`}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-700 group-hover:text-white">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="mb-2 font-heading text-lg font-bold text-slate-950">
        {category.title}
      </h3>
      <p className="font-sans text-sm leading-6 text-slate-600">
        {category.description}
      </p>
      <p className="mt-4 font-sans text-xs font-semibold uppercase tracking-wide text-blue-700">
        {count} {count === 1 ? "record" : "records"}
      </p>
    </button>
  );
};

const CategoryDetails = ({
  category,
  items,
}: {
  category: StudentLifeItem["category"];
  items: StudentLifeItem[];
}) => {
  const Icon = iconMap[category];
  const firstItem = items[0];
  const routes = items.flatMap((item) => item.additionalContent?.routes || []);

  if (items.length === 0) return null;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-start gap-3">
        <Icon className="mt-1 h-6 w-6 text-blue-700" />
        <div>
          <h2 className="font-heading text-2xl font-bold text-slate-950">
            {firstItem?.title || categories.find((item) => item.key === category)?.title}
          </h2>
          <p className="mt-1 text-sm text-slate-600">{firstItem?.description}</p>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items
          .filter((item) => item.imageUrl)
          .map((item) => (
            <article key={item._id} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src={resolveImageUrl(item.imageUrl)}
                alt={item.title}
                className="aspect-video w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-heading text-base font-bold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
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
              className="rounded-2xl border border-slate-200 bg-slate-50 px-4"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Bus No: {route.busNumber} - {route.routeName}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="grid gap-2 pb-2 sm:grid-cols-2 lg:grid-cols-3">
                  {route.stops.map((stop) => (
                    <li
                      key={stop}
                      className="flex items-start gap-2 text-sm text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
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
  const [selectedCategory, setSelectedCategory] =
    useState<StudentLifeItem["category"]>("clubs");
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
        {
          clubs: [],
          sports: [],
          cultural: [],
          hostel: [],
          transport: [],
        }
      ),
    [items]
  );

  return (
    <PageLayout title="Student Life" subtitle="Life at SPC Campus">

      {studentLifeQuery.isLoading ? (
        <div className="flex min-h-[220px] items-center justify-center gap-3 rounded-lg border border-dashed text-muted-foreground">
          <Loader2 className="animate-spin" />
          Loading student life content...
        </div>
      ) : (
        <div className="space-y-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
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
