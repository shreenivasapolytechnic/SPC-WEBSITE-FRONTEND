import { format } from "date-fns";
import { ExternalLink, Loader2, Pin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import { fetchNotices } from "@/lib/api";
import { Button } from "@/components/ui/button";

const NoticesSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["public-notices"],
    queryFn: fetchNotices,
    staleTime: 60_000,
  });

  const notices = data?.data || [];

  if (!isLoading && (isError || notices.length === 0)) {
    return null;
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-kicker">
              News & Events
            </p>
            <h2 className="section-heading">
              Latest Campus Updates
            </h2>
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading notices...
          </div>
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {notices.slice(0, 6).map((notice) => (
              <article
                key={notice._id}
                className="premium-card p-6"
              >
                <div className="mb-3 flex items-center justify-between gap-3 text-xs text-muted-foreground">
                  <span>
                    {notice.publishedAt
                      ? format(new Date(notice.publishedAt), "dd MMM yyyy")
                      : "Notice"}
                  </span>
                  {notice.isPinned ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gold/10 px-2.5 py-1 font-medium text-gold-dark">
                      <Pin className="h-3.5 w-3.5" />
                      Pinned
                    </span>
                  ) : null}
                </div>
                <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-slate-950">
                  {notice.title}
                </h3>
                <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                  {notice.description}
                </p>
                {notice.pdfLink ? (
                  <Button asChild variant="outline" size="sm" className="rounded-full">
                    <a href={notice.pdfLink} target="_blank" rel="noreferrer">
                      View Notice
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ) : null}
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticesSection;
