import campusTour from "@/assets/building1.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="section-kicker">Welcome to</p>
            <h2 className="section-heading mb-6">Shreenivasa Polytechnic College</h2>
            <div className="gold-bar mb-6" />
            <p className="mb-5 font-sans leading-8 text-muted-foreground">
              Shreenivasa Polytechnic College is one of the premier technical institutions
              dedicated to providing quality diploma education. Since its establishment,
              the institution has marched towards excellence through its remarkable
              achievements in the field of Technical Education.
            </p>
            <p className="font-sans leading-8 text-muted-foreground">
              The college offers a range of diploma programmes with industry-aligned
              curriculum, state-of-the-art laboratories, and experienced faculty members.
              SPC is committed to nurturing skilled professionals who are ready to
              contribute to the industry and society.
            </p>
          </div>
          <div className="relative">
            <img
              src={campusTour}
              alt="Shreenivasa Polytechnic College campus"
              className="w-full rounded-2xl border border-border shadow-2xl shadow-primary/15"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-border bg-white p-5 shadow-xl shadow-primary/10 md:block">
              <p className="font-heading text-3xl font-bold text-primary">20+</p>
              <p className="mt-1 font-sans text-xs font-medium text-muted-foreground">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
