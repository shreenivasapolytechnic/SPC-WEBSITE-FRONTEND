import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Loader2, RefreshCw, X } from "lucide-react";

import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { fetchGallery, resolveImageUrl } from "@/lib/api";

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const galleryQuery = useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGallery,
  });

  const photos = [...(galleryQuery.data?.data || [])].sort( (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime() );


  const prev = () =>
    setLightbox((current) =>
      current !== null ? (current > 0 ? current - 1 : photos.length - 1) : 0
    );
  const next = () =>
    setLightbox((current) =>
      current !== null ? (current < photos.length - 1 ? current + 1 : 0) : 0
    );

  return (
    <PageLayout
      title="Gallery"
      subtitle="Photos from Shreenivasa Polytechnic College"
    >
      

      {galleryQuery.isLoading ? (
        <div className="flex min-h-[240px] items-center justify-center gap-3 rounded-lg border border-dashed text-muted-foreground">
          <Loader2 className="animate-spin" />
          Loading gallery images...
        </div>
      ) : galleryQuery.isError ? (
        <div className="rounded-lg border border-destructive/20 bg-destructive/5 p-6 text-sm text-destructive">
          {(galleryQuery.error as Error).message}
        </div>
      ) : photos.length ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <button
              key={photo._id}
              onClick={() => setLightbox(index)}
              className="group relative aspect-video overflow-hidden rounded-lg border border-border hover:border-accent/40 transition-colors"
            >
              <img
                src={resolveImageUrl(photo.imageUrl)}
                alt={photo.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black/60 px-2 py-1 text-left text-xs text-white translate-y-full group-hover:translate-y-0 transition-transform">
                <div className="font-medium">{photo.title}</div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
          No gallery images are available from the backend yet.
        </div>
      )}

      {lightbox !== null && photos[lightbox] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-4 top-4 text-white hover:text-accent transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="h-7 w-7" />
          </button>
          <button
            className="absolute left-4 text-white hover:text-accent transition-colors"
            onClick={(event) => {
              event.stopPropagation();
              prev();
            }}
          >
            <ChevronLeft className="h-9 w-9" />
          </button>
          <img
            src={resolveImageUrl(photos[lightbox].imageUrl)}
            alt={photos[lightbox].title}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white hover:text-accent transition-colors"
            onClick={(event) => {
              event.stopPropagation();
              next();
            }}
          >
            <ChevronRight className="h-9 w-9" />
          </button>
          <div className="absolute bottom-4 text-center text-white/80">
            <p className="text-sm font-medium">{photos[lightbox].title}</p>
          </div>
          <p className="absolute left-4 top-4 text-xs text-white/50">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </PageLayout>
  );
};

export default Gallery;
