import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

import { fetchGallery, resolveImageUrl } from "@/lib/api";

interface DeptGalleryProps {
  department: string;
  title?: string;
}

const DeptGallery = ({ department, title = "Department Gallery" }: DeptGalleryProps) => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const galleryQuery = useQuery({
    queryKey: ["department-gallery", department],
    queryFn: fetchGallery,
  });

  const backendImages =
    galleryQuery.data?.data
      .filter((item) => item.category.toLowerCase() === department?.toLowerCase())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map((item) => ({
        src: resolveImageUrl(item.imageUrl),
        caption: item.title,
      })) || [];

  if (!backendImages.length) return null;

  const prev = () => setLightbox((i) => (i! > 0 ? i! - 1 : backendImages.length - 1));
  const next = () => setLightbox((i) => (i! < backendImages.length - 1 ? i! + 1 : 0));

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
          <Images className="h-6 w-6" />
        </div>
        <h2 className="text-2xl font-bold text-slate-950 font-heading">{title}</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {backendImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightbox(i)}
            className="group relative aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-slate-900/10"
          >
            <img
              src={img.src}
              alt={img.caption || `Photo ${i + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {img.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-slate-950/70 text-white text-xs font-sans px-3 py-2 translate-y-full group-hover:translate-y-0 transition-transform">
                {img.caption}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-4 text-white hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft className="w-9 h-9" />
          </button>
          <img
            src={backendImages[lightbox].src}
            alt={backendImages[lightbox].caption || `Photo ${lightbox + 1}`}
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 text-white hover:text-gold transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight className="w-9 h-9" />
          </button>
          {backendImages[lightbox].caption && (
            <p className="absolute bottom-4 text-white/80 text-sm font-sans">
              {backendImages[lightbox].caption}
            </p>
          )}
          <p className="absolute top-4 left-4 text-white/50 text-xs font-sans">
            {lightbox + 1} / {backendImages.length}
          </p>
        </div>
      )}
    </section>
  );
};

export default DeptGallery;
