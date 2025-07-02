
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, CheckCircle, ArrowRight, Hammer, Wrench, Droplets, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Wrench,
      title: "Natural Stone Cladding",
      description: "Professional mechanical fixing of premium natural stone wall cladding for interior and exterior applications."
    },
    {
      icon: Building2,
      title: "Marble & Travertine",
      description: "Expert installation of marble and travertine surfaces with precision mechanical fixing techniques."
    },
    {
      icon: Droplets,
      title: "Fountains & Water Features",
      description: "Custom-made indoor and outdoor fountains with professional stone mechanical fixing and installation."
    },
    {
      icon: Hammer,
      title: "Architectural Elements",
      description: "Bespoke stone solutions including fireplaces, paving, and custom-made architectural elements."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "8+", label: "Stone Varieties" }
  ];

  const projects = [
    {
      title: "Tanga Yellow Stone Feature Wall",
      category: "Premium Natural Stone",
      image: "/Afristone-All things Stone/Tanga Yellow Stone/2025053121292496.jpg"
    },
    {
      title: "Silver Stone Modern Facade",
      category: "Contemporary Cladding",
      image: "/Afristone-All things Stone/Silver Stone/2025060723500450.jpg"
    },
    {
      title: "Black Stone Elegant Installation",
      category: "Luxury Stonework",
      image: "/Afristone-All things Stone/Black stone/Black Irregular stacked/2025053018334056.jpg"
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "254700123456";
    const message = "Hello Afristone! I'm interested in your mechanical fixing and stone cladding services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg"
          size="icon"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Mechanical Fixing Specialists Since 2010
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Mechanical Fixing of
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Stone Claddings & More
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in mechanical fixing of claddings, travertine, wall claddings, marble, sintered stone, paving, custom-made architectural elements, indoor and outdoor fountains, fireplaces and much more.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/products">View Stone Collection</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/Afristone-All things Stone/Tanga Yellow Stone/2025053121292496.jpg"
                alt="Tanga Yellow Stone natural stone cladding"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Certified</p>
                    <p className="text-sm text-muted-foreground">Stone Fixing Specialists</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialties</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert mechanical fixing services for all your stone and architectural needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Afristone?</h2>
              <div className="space-y-4">
                {[
                  "Premium natural stone from certified quarries",
                  "Expert mechanical fixing with precision installation",
                  "Custom-made architectural elements and fountains",
                  "Marble, travertine, and sintered stone specialists",
                  "Professional paving and fireplace installation",
                  "Free consultation and site assessment"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button className="mt-8" size="lg" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div>
              <img
                src="/Afristone-All things Stone/Silver Stone/2025060723500450.jpg"
                alt="Silver Stone installation showcase"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
            <p className="text-lg text-muted-foreground">
              Discover our latest mechanical fixing installations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge variant="secondary" className="w-fit">{project.category}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">View All Stone Types</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="black-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free consultation and quote for your stone mechanical fixing project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={handleWhatsAppClick}
            >
              WhatsApp Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
