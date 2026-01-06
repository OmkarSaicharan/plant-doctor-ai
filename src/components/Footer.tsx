import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/20">
                <Leaf className="h-5 w-5 text-primary" />
              </div>
              <span className="text-lg font-display font-bold">
                Plant<span className="text-primary">Diagnosis</span>Pro
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              AI-powered plant disease detection for sustainable agriculture and healthier crops.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/thornala-omkar-saicharan-a913702b7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-foreground transition-all hover:-translate-y-1"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/zl_omkar_sai_charan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-foreground transition-all hover:-translate-y-1"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/OmkarSaicharan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-background/10 hover:bg-primary hover:text-foreground transition-all hover:-translate-y-1"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About", path: "/about" },
                { label: "Detection", path: "/detection" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Features</h4>
            <ul className="space-y-3">
              {[
                "AI Detection",
                "History Tracking",
                "Treatment Guide",
                "Disease Library",
              ].map((feature) => (
                <li key={feature}>
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:omkarsaicharan@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  omkarsaicharan@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                +91 9392965097
              </li>
              <li className="text-muted-foreground">Plant Diagnosis Pro</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Plant Diagnosis Pro | All Rights Reserved | Made by{" "}
            <span className="text-primary font-semibold">OMKAR</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
