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
      const details = item.description ? ` - ${item.description}` : "";
      return `${item.title}${details}`;
    }) || [];
  const tickerItems = dynamicAnnouncements.length
    ? dynamicAnnouncements
    : fallbackAnnouncements;

  return (
    <div className="mt-16 overflow-hidden border-y border-blue-100 bg-blue-50 py-2 md:mt-20">
      <div className="ticker-scroll flex whitespace-nowrap">
        {[...tickerItems, ...tickerItems].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-block px-8 font-sans text-sm font-semibold text-blue-800"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
