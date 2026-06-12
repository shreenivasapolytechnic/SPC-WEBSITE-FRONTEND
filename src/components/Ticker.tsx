import { useQuery } from "@tanstack/react-query";
import { fetchLatestNewsEvents } from "@/lib/api";

const fallbackAnnouncements = [
  "AICTE Approved Polytechnic College",
  "Committed to Excellence in Technical Education",
  "Industry-Ready Diploma Programmes",
  "Nationally Recognized Institution",
  "Outstanding Placement Record",
];

const Ticker = () => {
  const { data } = useQuery({
    queryKey: ["latest-news-events"],
    queryFn: () => fetchLatestNewsEvents(8),
    staleTime: 10,
  });

  const dynamicAnnouncements =
    data?.data.map((item) => {
      const details = item.description ? ` — ${item.description}` : "";
      return `${item.title}${details}`;
    }) || [];

  const tickerItems = dynamicAnnouncements.length ? dynamicAnnouncements : fallbackAnnouncements;

  return (
    <div className="overflow-hidden border-y border-border bg-white py-2.5">
      <div className="ticker-scroll flex whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span key={`${item}-${i}`} className="inline-flex items-center gap-0">
            <span className="inline-block px-6 font-sans text-sm font-semibold text-primary">
              {item}
            </span>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold/60" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
