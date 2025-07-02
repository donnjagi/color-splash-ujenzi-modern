
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Building2, Droplets, Hammer, Settings, HardHat, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Stone Cladding Systems",
      description: "Professional mechanical fixing of natural stone claddings with precision installation techniques.",
      features: ["Wall cladding installation", "Facade cladding systems", "Interior stone panels", "Ventilated facades", "Structural glazing"],
      image: "/Afristone-All things Stone/Tanga Yellow Stone/2025053121292496.jpg"
    },
    {
      icon: Building2,
      title: "Marble & Travertine",
      description: "Expert installation of marble and travertine surfaces with specialized mechanical fixing.",
      features: ["Marble wall installation", "Travertine flooring", "Countertop fixing", "Bathroom installations", "Decorative panels"],
      image: "/Afristone-All things Stone/Silver Stone/2025060723500450.jpg"
    },
    {
      icon: Droplets,
      title: "Water Features & Fountains",
      description: "Custom-made indoor and outdoor fountains with professional stone mechanical fixing.",
      features: ["Indoor fountains", "Outdoor water features", "Garden fountains", "Water wall installations", "Pond surrounds"],
      image: "/Afristone-All things Stone/Blue Stone/2025061307282178.jpg"
    },
    {
      icon: Hammer,
      title: "Architectural Elements",
      description: "Bespoke architectural stone elements including fireplaces and custom features.",
      features: ["Fireplace installation", "Custom stone features", "Architectural details", "Decorative elements", "Stone sculptures"],
      image: "/Afristone-All things Stone/Black stone/Black Irregular stacked/2025053018334056.jpg"
    },
    {
      icon: Settings,
      title: "Sintered Stone & Paving",
      description: "Professional installation of sintered stone surfaces and paving solutions.",
      features: ["Sintered stone panels", "Paving installation", "Outdoor terraces", "Pathway construction", "Driveway paving"],
      image: "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722110055.jpg"
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Comprehensive project management for all stone installation and mechanical fixing projects.",
      features: ["Project planning", "Installation coordination", "Quality control", "Timeline management", "Client communication"],
      image: "/Afristone-All things Stone/Half facing bricks/2025060507530922.jpg"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Site Assessment",
      description: "We evaluate your site and mechanical fixing requirements thoroughly."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our engineers create detailed plans for stone installation and fixing systems."
    },
    {
      step: "03",
      title: "Material Selection",
      description: "Choose from our premium stone collection and fixing systems."
    },
    {
      step: "04",
      title: "Installation",
      description: "Our skilled team executes mechanical fixing with precision and quality."
    },
    {
      step: "05",
      title: "Quality Testing",
      description: "Comprehensive testing to ensure all installations meet safety standards."
    },
    {
      step: "06",
      title: "Handover & Maintenance",
      description: "Project completion with ongoing maintenance support."
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "254700123456";
    const message = "Hello! I'm interested in your stone mechanical fixing and installation services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Stone Installation &
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mechanical Fixing Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We specialize in mechanical fixing of claddings, travertine, wall claddings, marble, sintered stone, paving, custom-made architectural elements, indoor and outdoor fountains, fireplaces and much more.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Expert stone installation and mechanical fixing services
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                    <Button 
                      variant="default" 
                      className="flex-1 bg-green-500 hover:bg-green-600"
                      onClick={handleWhatsAppClick}
                    >
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach to ensure perfect stone installation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                  <CardDescription className="text-base">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Services?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Mechanical Fixing Expertise</h3>
                    <p className="text-muted-foreground">Our team specializes in precision mechanical fixing of all stone types with certified professionals and proven techniques.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Premium Stone Materials</h3>
                    <p className="text-muted-foreground">We work with the finest marble, travertine, sintered stone, and natural cladding materials from trusted suppliers.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Custom Solutions</h3>
                    <p className="text-muted-foreground">From architectural elements to water features and fireplaces, we create bespoke solutions for every project.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="/Afristone-All things Stone/Yellow-beige-cream Stone/2025060400201377.jpg"
                alt="Yellow-beige-cream stone mechanical fixing quality control"
                className="rounded-2xl shadow-xl object-cover"
                style={{ width: '600px', height: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="black-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today to discuss your stone installation and mechanical fixing project requirements.
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
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
