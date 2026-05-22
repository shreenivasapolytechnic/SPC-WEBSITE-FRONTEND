import PageLayout from "@/components/PageLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => (
  <PageLayout title="Contact Us" subtitle="Get in Touch with SPC">
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <div className="space-y-6 mb-8">
          {[
            { icon: MapPin, title: "Address", desc: "B. Pallipatti (Po), Bommidi, Pappireddipatti-Tk, Dharmapuri-Dt, Tamil Nadu - 635301" },
            { icon: Phone, title: "Phone", desc: "04346-245159 / Cell: 94425 13159" },
            { icon: Mail, title: "Email", desc: "shreenivasapolytechnic@gmail.com" },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="bg-accent/10 rounded-lg p-3 h-fit">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-foreground font-heading">{title}</h3>
                <p className="text-muted-foreground font-sans text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2973.185244798625!2d78.27261777357083!3d11.956590736321086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac0cdea7e06245%3A0xacd0452f7c7a2072!2sSHREENIVASA%20POLYTECHNIC%20COLLEGE%2C%20BOMMIDI!5e1!3m2!1sen!2sin!4v1778765621016!5m2!1sen!2sin"
        title="Shreenivasa Polytechnic College Location"
        className="w-full h-64 md:h-full rounded-lg border border-border"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  </PageLayout>
);

export default Contact;
