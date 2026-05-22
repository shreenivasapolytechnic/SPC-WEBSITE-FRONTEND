import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  hideHeader?: boolean;
}

const PageLayout = ({ title, subtitle, children, hideHeader }: PageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 md:pt-24">
        {!hideHeader && (
          <div className="bg-slate-950 py-12 md:py-16">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-white font-heading mb-3">
                {title}
              </h1>
              {subtitle && (
                <p className="text-white/70 text-lg font-sans">{subtitle}</p>
              )}
              <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
            </div>
          </div>
        )}
        <div className="container mx-auto px-4 py-12 md:py-16">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
