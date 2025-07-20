import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-gradient-secondary border-b border-border">
      <div className="container mx-auto px-4 py-2">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-4 w-4" />
              <span>info@peanechestate.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center gap-3">
            <span className="text-muted-foreground text-xs mr-2">Follow Us:</span>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;