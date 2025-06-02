
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">U</span>
              </div>
              <div>
                <h3 className="font-bold">Ujenzi Solutions</h3>
                <p className="text-xs opacity-80">Construction & Engineering</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Leading construction company in Kenya, delivering quality projects with excellence and innovation since 2010.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100">Services</Link></li>
              <li><Link to="/projects" className="opacity-80 hover:opacity-100">Projects</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Residential Construction</li>
              <li className="opacity-80">Commercial Buildings</li>
              <li className="opacity-80">Road Construction</li>
              <li className="opacity-80">Interior Design</li>
              <li className="opacity-80">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 opacity-80" />
                <span className="opacity-80">Nairobi, Kenya<br />Westlands Business District</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 opacity-80" />
                <span className="opacity-80">+254 700 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 opacity-80" />
                <span className="opacity-80">info@ujenzisolutions.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Ujenzi Solutions. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
