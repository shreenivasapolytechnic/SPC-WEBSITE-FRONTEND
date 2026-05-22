import campusTour from "@/assets/building1.png";

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-kicker">
              Welcome to
            </p>
            <h2 className="section-heading mb-6">
              Shreenivasa Polytechnic College
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 font-sans">
              Shreenivasa Polytechnic College is one of the premier technical institutions
              dedicated to providing quality diploma education. Since its establishment,
              the Institution has marched towards excellence through its remarkable
              achievements in the field of Technical Education.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-sans">
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
              className="w-full rounded-3xl shadow-2xl shadow-slate-900/15"
              loading="lazy"
              width={1280}
              height={720}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/15 ring-1 ring-slate-200 md:block">
              <p className="stat-counter text-3xl">20+</p>
              <p className="text-sm text-slate-600 font-sans">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
