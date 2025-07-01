
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "254700123456";
    const message = "Hello Afristone! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">A</span>
              </div>
              <div>
                <h3 className="font-bold">Afristone</h3>
                <p className="text-xs opacity-80">Piping & Infrastructure</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Leading piping and infrastructure company in Kenya, specializing in waterworks, civil works, and building projects since 2010.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Twitter className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Instagram className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <Linkedin className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer" />
              <svg 
                viewBox="0 0 24 24" 
                className="w-5 h-5 opacity-80 hover:opacity-100 cursor-pointer fill-current"
                onClick={handleWhatsAppClick}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Home</Link></li>
              <li><Link to="/about" className="opacity-80 hover:opacity-100">About Us</Link></li>
              <li><Link to="/services" className="opacity-80 hover:opacity-100">Services</Link></li>
              <li><Link to="/products" className="opacity-80 hover:opacity-100">Products</Link></li>
              <li><Link to="/projects" className="opacity-80 hover:opacity-100">Projects</Link></li>
              <li><Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="opacity-80">Piping Systems</li>
              <li className="opacity-80">Building Works</li>
              <li className="opacity-80">Waterworks</li>
              <li className="opacity-80">Civil Works</li>
              <li className="opacity-80">Pipe Systems (Products)</li>
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
                <span className="opacity-80">info@afristone.co.ke</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
          <p>&copy; 2024 Afristone. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
