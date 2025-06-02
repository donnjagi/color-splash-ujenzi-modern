
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, Building2, Droplets, Hammer, Settings, HardHat, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Wrench,
      title: "Piping Systems",
      description: "Complete piping solutions including design, installation, and maintenance of industrial and residential systems.",
      features: ["Industrial pipe installation", "Residential plumbing", "Gas line installation", "Pipe system design", "Emergency repairs"],
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      icon: Building2,
      title: "Building Works",
      description: "Comprehensive building construction services from foundation to finishing.",
      features: ["Foundation construction", "Structural building", "Renovations", "Building maintenance", "Interior finishing"],
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      icon: Droplets,
      title: "Waterworks",
      description: "Water infrastructure development including supply systems and treatment facilities.",
      features: ["Water supply systems", "Treatment plant construction", "Borehole drilling", "Water storage tanks", "Distribution networks"],
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      icon: Hammer,
      title: "Civil Works",
      description: "Essential civil engineering projects including roads, drainage, and infrastructure.",
      features: ["Road construction", "Drainage systems", "Site preparation", "Earthworks", "Infrastructure development"],
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Settings,
      title: "Pipe Systems (Products)",
      description: "Supply and installation of high-quality pipe systems for various applications.",
      features: ["PVC pipe systems", "Steel pipe installation", "HDPE pipe systems", "Copper piping", "Specialized industrial pipes"],
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      icon: HardHat,
      title: "Project Management",
      description: "Comprehensive project management services ensuring timely and budget-friendly completion.",
      features: ["Project planning", "Budget management", "Timeline coordination", "Quality assurance", "Client communication"],
      image: "photo-1605810230434-7631ac76ec81"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Site Assessment",
      description: "We evaluate your site and infrastructure requirements thoroughly."
    },
    {
      step: "02",
      title: "System Design",
      description: "Our engineers create detailed designs for piping and infrastructure systems."
    },
    {
      step: "03",
      title: "Permits & Approvals",
      description: "We handle all necessary permits and regulatory approvals."
    },
    {
      step: "04",
      title: "Installation",
      description: "Our skilled team executes the project with precision and quality."
    },
    {
      step: "05",
      title: "Testing & Commissioning",
      description: "Comprehensive testing to ensure all systems function perfectly."
    },
    {
      step: "06",
      title: "Handover & Maintenance",
      description: "Project completion with ongoing maintenance support."
    }
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "254700123456";
    const message = "Hello! I'm interested in your piping and infrastructure services.";
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
            Comprehensive
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Infrastructure Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From piping systems to civil works, we offer specialized infrastructure solutions to meet all your construction and engineering needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Specialized infrastructure services tailored to your needs
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={`https://images.unsplash.com/${service.image}?auto=format&fit=crop&w=600&h=300`}
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
              A systematic approach to ensure infrastructure project success
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
                    <h3 className="font-semibold mb-2">Specialized Expertise</h3>
                    <p className="text-muted-foreground">Our team specializes in piping systems, waterworks, and civil engineering with certified professionals.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Quality Pipe Systems</h3>
                    <p className="text-muted-foreground">We supply and install high-quality pipe systems with guaranteed performance and durability.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">24/7 Emergency Support</h3>
                    <p className="text-muted-foreground">Round-the-clock emergency services for critical infrastructure and piping system failures.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400"
                alt="Infrastructure quality control"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Contact us today to discuss your piping, waterworks, or infrastructure project requirements.
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
