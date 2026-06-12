import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";

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
      <div className="pt-16 md:pt-20">
        <Ticker />
        {!hideHeader && (
          <div className="page-header relative overflow-hidden py-14 md:py-20">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(42,82%,46%,0.15),transparent_55%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <div className="container relative mx-auto px-4 text-center">
              <div className="gold-bar mx-auto mb-5" />
              <h1 className="font-heading text-3xl font-bold text-white md:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-3 font-sans text-base text-white/65 md:text-lg">{subtitle}</p>
              )}
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
