import PageLayout from "@/components/PageLayout";
import campusTour from "@/assets/building1.png";

const Institution = () => (
  <PageLayout title="Institution" subtitle="About Shreenivasa Polytechnic College">
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading">Our Heritage</h2>
        <p className="text-muted-foreground font-sans mb-4">
          Shreenivasa Polytechnic College (SPC) was established in 2007 with a vision to provide world-class technical education. Over the years, the institution has grown into a premier polytechnic college recognized for its academic excellence and industry partnerships.
        </p>
        <p className="text-muted-foreground font-sans mb-4">
          SPC is run by Sri Venkateshwara Trust. The college is affiliated to the Directorate of Technical Education and approved by AICTE. Located in a sprawling 10-acre campus, SPC provides state-of-the-art infrastructure and facilities for the holistic development of students.
        </p>
        <h2 className="text-2xl font-bold text-foreground mb-4 font-heading mt-8">Accreditations</h2>
        <ul className="list-disc list-inside text-muted-foreground font-sans space-y-2">
          <li>AICTE Approved</li>
          <li>ISO 9001:2015 Certified</li>
          <li>Affiliated to State Board of Technical Education</li>
        </ul>
      </div>
       <div className="relative">
            <img
              src={campusTour}
              alt="Campus Library"
              className="rounded-lg shadow-2xl w-full"
              loading="lazy"
              width={1280}
              height={720}
            />
          </div>
    </div>
  </PageLayout>
);

export default Institution;
