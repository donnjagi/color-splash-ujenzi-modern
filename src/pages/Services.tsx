
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, Home, Hammer, PaintBucket, Wrench, HardHat, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes designed and built to the highest standards.",
      features: ["Custom home design", "Apartment complexes", "Townhouses", "Renovations", "Interior finishing"],
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      icon: Building2,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes that drive business success.",
      features: ["Office buildings", "Retail centers", "Warehouses", "Hotels", "Industrial facilities"],
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation and remodeling services.",
      features: ["Kitchen remodeling", "Bathroom upgrades", "Office renovations", "Space optimization", "Structural modifications"],
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      icon: PaintBucket,
      title: "Interior Design & Finishing",
      description: "Complete interior solutions including design, furnishing, and finishing touches.",
      features: ["Interior design", "Flooring installation", "Painting & decoration", "Lighting design", "Furniture selection"],
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      icon: Wrench,
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services to keep your property in perfect condition.",
      features: ["Preventive maintenance", "Emergency repairs", "HVAC services", "Plumbing & electrical", "Landscaping"],
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
      title: "Consultation",
      description: "We meet with you to understand your vision, requirements, and budget."
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our team creates detailed designs and comprehensive project plans."
    },
    {
      step: "03",
      title: "Approval & Permits",
      description: "We handle all necessary approvals and permit applications."
    },
    {
      step: "04",
      title: "Construction",
      description: "Our skilled team executes the project with precision and quality."
    },
    {
      step: "05",
      title: "Quality Check",
      description: "Thorough inspection and quality assurance before handover."
    },
    {
      step: "06",
      title: "Project Delivery",
      description: "Final handover with documentation and warranty information."
    }
  ];

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
              Construction Services
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From design to completion, we offer a full range of construction services to bring your vision to life with quality, efficiency, and excellence.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Professional construction services tailored to your needs
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
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Get Quote</Link>
                  </Button>
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
              A systematic approach to ensure project success
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
                    <h3 className="font-semibold mb-2">Quality Guarantee</h3>
                    <p className="text-muted-foreground">We use only the finest materials and employ skilled craftsmen to ensure superior quality in every project.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Timely Delivery</h3>
                    <p className="text-muted-foreground">Our efficient project management ensures your project is completed on time and within budget.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Comprehensive Support</h3>
                    <p className="text-muted-foreground">From initial consultation to post-construction maintenance, we provide complete support throughout your project journey.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400"
                alt="Construction quality control"
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
            Contact us today to discuss your project requirements and receive a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
