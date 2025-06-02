
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+254 700 123 456</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@ujenzisolutions.co.ke</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Building Excellence Since 2010</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">U</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary">Ujenzi Solutions</h1>
                <p className="text-xs text-muted-foreground">Construction & Engineering</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button>Get Quote</Button>
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t bg-background">
              <nav className="py-4 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-2 font-medium transition-colors hover:text-primary ${
                      isActive(item.href) ? "text-primary bg-muted" : "text-foreground"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-2">
                  <Button className="w-full">Get Quote</Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
