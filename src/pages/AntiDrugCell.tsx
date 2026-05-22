

import QuickLinks from "@/components/QuickLinks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// import heroCampus from "@/assets/hero-campus23.jpg";

import antiDrug1 from "@/assets/anti-drug/image1.png";
import antiDrug2 from "@/assets/anti-drug/image2.png";
import antiDrug3 from "@/assets/anti-drug/image3.png";
import antiDrug4 from "@/assets/anti-drug/image4.png";
import antiDrug5 from "@/assets/anti-drug/image5.png";

const AntiDrugCell = () => {
  const galleryImages = [
    antiDrug1,
    antiDrug2,
    antiDrug3,
    antiDrug4,
    antiDrug5,
  ];

  const committeeMembers = [
    ["1", "V.MURUGAN", "PRINCIPAL", "CHAIRPERSON"],
    ["2", "K.S.SURESH KUMAR", "HOD/MECH", "CO-ORDINATOR"],
    ["3", "G.MURUGAN", "HOD/MECH", "MEMBER"],
    ["4", "R.SATHIYAKUMAR", "LECT/MECH", "MEMBER"],
    ["5", "M.RAMAKRISHNAN", "LECT/AUTO", "MEMBER"],
    ["6", "P.DURAI", "HOD/EEE", "MEMBER"],
    ["7", "A.KAVIYA", "LECT/ECE", "MEMBER"],
    ["8", "G.ENBAABISHEK", "LECT/COMP", "MEMBER"],
    ["9", "K.KUMERASAN", "LECT/I YR", "MEMBER"],
    ["10", "THIRUNAVUKARASU", "LECT/I YR", "MEMBER"],
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-24">
        {/* <img
          src={heroCampus}
          alt="Anti Drug Cell"
          className="w-full h-[400px] object-cover"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-primary/70 to-black/60" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-5 py-2 rounded-full">
                <span className="h-2 w-2 rounded-full bg-yellow-400"></span>
                <span className="text-white text-sm tracking-wide">
                  SPC • Student Welfare Committee
                </span>
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
                Anti-Drug Cell
              </h1>

              <p className="mt-5 text-lg text-white/90 leading-8 max-w-2xl">
                Prevention, awareness, education, and strict prohibition to
                maintain a safe and drug-free campus environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <main className="container mx-auto px-4 py-14 space-y-10">

        {/* ABOUT */}
        <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 md:p-10">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold text-primary mb-5">
              About Anti-Drug Cell
            </h2>

            <p className="text-slate-700 leading-8 text-[17px]">
              An Anti-Drug Committee is a designated group in educational
              institutions aimed at fostering a drug-free environment through
              prevention, awareness, education, counseling, and strict
              prohibition of harmful substances.
            </p>
          </div>
        </section>

        {/* OBJECTIVES & ROLES */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-5">
              Objectives
            </h3>

            <ul className="space-y-4 text-slate-700 leading-7">
              <li>
                • Establish a drug-free and supportive campus environment.
              </li>

              <li>
                • Spread awareness about harmful physical and mental effects.
              </li>

              <li>
                • Prevent possession, sale, and consumption within campuses.
              </li>

              <li>
                • Encourage support and counseling for individuals seeking help.
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-5">Roles</h3>

            <ul className="space-y-4 text-slate-700 leading-7">
              <li>
                • Conduct workshops, seminars, and awareness campaigns.
              </li>

              <li>
                • Monitor campus and hostel areas for prohibited activities.
              </li>

              <li>
                • Create reporting mechanisms for suspicious activities.
              </li>

              <li>
                • Collaborate with authorities and promote peer responsibility.
              </li>
            </ul>
          </div>
        </section>

        {/* COMMITTEE TABLE */}
        <section className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
          <div className="px-8 pt-8">
            <h3 className="text-3xl font-bold text-primary">
              Committee Members
            </h3>

            <p className="text-slate-600 mt-2">
              Members responsible for anti-drug awareness and monitoring.
            </p>
          </div>

          <div className="overflow-x-auto mt-6">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="text-left px-6 py-4">Sl.No</th>
                  <th className="text-left px-6 py-4">Member</th>
                  <th className="text-left px-6 py-4">Designation</th>
                  <th className="text-left px-6 py-4">Role</th>
                </tr>
              </thead>

              <tbody>
                {committeeMembers.map((member, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-200 hover:bg-slate-50 transition"
                  >
                    <td className="px-6 py-4">{member[0]}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {member[1]}
                    </td>
                    <td className="px-6 py-4">{member[2]}</td>
                    <td className="px-6 py-4">{member[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* GALLERY */}
        <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-primary mb-3">
              Activity Gallery
            </h3>

            <p className="text-slate-600">
              Photos from anti-drug awareness campaigns and student activities.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-2xl border border-slate-200 shadow-sm"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CLUB ACTIVITIES */}
        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">
            <h3 className="text-2xl font-bold text-primary mb-5">
              Activities of The Club
            </h3>

            <ul className="space-y-4 text-slate-700 leading-7">
              <li>• Rallies and poster-making competitions.</li>
              <li>• Street plays and awareness programmes.</li>
              <li>• Anti-drug hoardings and banners.</li>
              <li>• Anti-drug oaths and campaigns.</li>
              <li>• Counseling and support sessions.</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-primary via-primary to-primary/80 rounded-3xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-5">Anti-Drug Pledge</h3>

            <p className="leading-8 text-white/90">
              <strong>Objective:</strong> Encourage students and youth to
              consciously reject drug use and promote a healthy lifestyle.
            </p>

            <p className="leading-8 text-white/90 mt-5">
              <strong>Importance:</strong> Builds prevention through awareness,
              participation, and public responsibility.
            </p>
          </div>
        </section>

        {/* SEMINAR */}
        <section className="bg-white rounded-3xl shadow-md border border-slate-200 p-8">
          <h3 className="text-3xl font-bold text-primary mb-4">
            Drug Awareness Seminar Programme
          </h3>

          <p className="text-slate-700 leading-8 mb-10">
            Organized by the Anti-Drug Club to educate students about the
            harmful effects of drug use and to promote prevention and healthy
            living.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Objective",
                points: [
                  "Raise awareness about physical and social dangers.",
                  "Provide information about addictive substances.",
                  "Teach signs of addiction and recovery.",
                  "Encourage peer responsibility and positive choices.",
                  "Build confidence against peer pressure.",
                ],
              },

              {
                title: "Importance",
                points: [
                  "Knowledge is prevention.",
                  "Early intervention supports recovery.",
                  "Creates a safer campus environment.",
                  "Promotes mental well-being.",
                  "Encourages healthy coping mechanisms.",
                ],
              },

              {
                title: "Target Audience",
                points: [
                  "Students from all departments",
                  "Faculty and staff",
                  "Student support services and clubs",
                ],
              },

              {
                title: "Expected Outcomes",
                points: [
                  "Improved student awareness",
                  "Better peer support culture",
                  "Reduction in stigma and fear",
                  "Stronger commitment to drug-free living",
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition"
              >
                <h4 className="text-xl font-bold text-primary mb-4">
                  {card.title}
                </h4>

                <ul className="space-y-3 text-slate-700 leading-7">
                  {card.points.map((point, idx) => (
                    <li key={idx}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK LINKS */}
        <div className="pt-4">
          <QuickLinks />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AntiDrugCell;