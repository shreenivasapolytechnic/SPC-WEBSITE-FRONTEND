import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

import collegeLogo from "@/assets/college-logo.png";

const quickLinks = [
  { label: "About Us", href: "/about/institution" },
  { label: "Academics", href: "/academics/departments" },
  { label: "Admissions", href: "/admissions/ug" },
  { label: "Placement", href: "/placement" },
  { label: "Student Life", href: "/student-life" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary pb-8 pt-16 text-gold">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-10 md:grid-cols-4">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={collegeLogo} alt="SPC Logo" className="h-12 w-auto" />
              <div>
                <p className="font-heading font-bold text-gold">Shreenivasa</p>
                <p className="font-heading font-bold text-gold">Polytechnic College</p>
              </div>
            </div>
            <p className="font-sans text-sm leading-7 text-gold/80">
              Committed to excellence in technical education and industry-ready diploma learning.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-gold">
              Quick Links
            </h4>
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="block py-1 font-sans text-sm text-gold/80 transition-colors hover:text-gold-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-gold">
              Facilities
            </h4>
            {["Hostel", "Library", "Sports", "Transport"].map((item) => (
              <p key={item} className="py-1 font-sans text-sm text-gold/80">
                {item}
              </p>
            ))}
          </div>

          <div>
            <h4 className="mb-4 font-sans text-sm font-bold uppercase tracking-wider text-gold">
              Contact Us
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 font-sans text-sm text-gold/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>B. Pallipatti (Po), Bommidi, Pappireddipatti-Tk, Dharmapuri-Dt - 635301, Tamil Nadu</span>
              </div>
              <div className="flex items-center gap-2 font-sans text-sm text-gold/80">
                <Phone className="h-4 w-4 shrink-0 text-gold" />
                <span>04346-245159 / 94425 13159</span>
              </div>
              <div className="flex items-center gap-2 font-sans text-sm text-gold/80">
                <Mail className="h-4 w-4 shrink-0 text-gold" />
                <span>shreenivasapolytechnic@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-6 text-center font-sans text-xs text-gold/65">
          © 2025 Shreenivasa Polytechnic College. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
