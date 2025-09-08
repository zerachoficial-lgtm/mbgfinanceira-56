interface PageBannerProps {
  title: string;
  subtitle?: string;
}

const PageBanner = ({ title, subtitle }: PageBannerProps) => {
  return (
    <section className="relative py-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="container relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageBanner;