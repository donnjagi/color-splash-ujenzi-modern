
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Award, CheckCircle, ArrowRight, Hammer, Home as HomeIcon, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const services = [
    {
      icon: Building2,
      title: "Residential Construction",
      description: "Building beautiful homes with modern designs and quality materials."
    },
    {
      icon: Building,
      title: "Commercial Buildings",
      description: "Professional commercial spaces designed for business success."
    },
    {
      icon: Hammer,
      title: "Renovation & Remodeling",
      description: "Transform your existing space with our expert renovation services."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "15+", label: "Years Experience" },
    { number: "100+", label: "Happy Clients" },
    { number: "50+", label: "Expert Team" }
  ];

  const projects = [
    {
      title: "Westlands Residential Complex",
      category: "Residential",
      image: "photo-1721322800607-8c38375eef04"
    },
    {
      title: "Nairobi Business Center",
      category: "Commercial",
      image: "photo-1605810230434-7631ac76ec81"
    },
    {
      title: "Karen Family Home",
      category: "Residential",
      image: "photo-1649972904349-6e44c42644a7"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Building Excellence Since 2010
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                Building Your
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Dreams Into Reality
                </span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ujenzi Solutions is Kenya's premier construction company, delivering exceptional residential and commercial projects with unmatched quality and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" asChild>
                  <Link to="/projects">View Projects</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={`https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=400`}
                alt="Modern construction project"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-semibold">Award Winning</p>
                    <p className="text-sm text-muted-foreground">Construction Company</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive construction services from planning to completion
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Ujenzi Solutions?</h2>
              <div className="space-y-4">
                {[
                  "Licensed and insured professionals",
                  "Quality materials and workmanship",
                  "On-time project delivery",
                  "Competitive pricing",
                  "Excellent customer service",
                  "10-year warranty on all projects"
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
                src={`https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400`}
                alt="Construction team at work"
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
              Discover our latest construction achievements
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=400&h=300`}
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
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team today for a free consultation and quote for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Call Us Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
