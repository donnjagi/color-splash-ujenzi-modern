
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Residential", "Commercial", "Renovation", "Infrastructure"];
  
  const projects = [
    {
      title: "Westlands Luxury Apartments",
      category: "Residential",
      location: "Westlands, Nairobi",
      year: "2024",
      duration: "18 months",
      description: "A modern 50-unit luxury apartment complex featuring contemporary design and premium amenities.",
      image: "photo-1721322800607-8c38375eef04",
      status: "Completed",
      features: ["50 luxury units", "Swimming pool", "Gym facility", "Parking garage"]
    },
    {
      title: "Nairobi Business Center",
      category: "Commercial",
      location: "CBD, Nairobi",
      year: "2023",
      duration: "24 months",
      description: "A state-of-the-art 20-story office building with modern amenities and sustainable features.",
      image: "photo-1605810230434-7631ac76ec81",
      status: "Completed",
      features: ["20 floors", "LEED certified", "Smart building systems", "Conference facilities"]
    },
    {
      title: "Karen Family Residence",
      category: "Residential",
      location: "Karen, Nairobi",
      year: "2024",
      duration: "12 months",
      description: "An elegant 5-bedroom family home with modern architecture and beautiful landscaping.",
      image: "photo-1649972904349-6e44c42644a7",
      status: "In Progress",
      features: ["5 bedrooms", "Swimming pool", "Home office", "Garden landscape"]
    },
    {
      title: "Mombasa Shopping Mall",
      category: "Commercial",
      location: "Mombasa",
      year: "2023",
      duration: "30 months",
      description: "A comprehensive shopping and entertainment complex serving the coastal region.",
      image: "photo-1488590528505-98d2b5aba04b",
      status: "Completed",
      features: ["150 retail units", "Cinema complex", "Food court", "Parking for 1000+ cars"]
    },
    {
      title: "Kilimani Office Renovation",
      category: "Renovation",
      location: "Kilimani, Nairobi",
      year: "2024",
      duration: "6 months",
      description: "Complete renovation of a 10-story office building with modern interiors and energy-efficient systems.",
      image: "photo-1721322800607-8c38375eef04",
      status: "In Progress",
      features: ["10 floors renovated", "Energy efficient", "Modern interiors", "Updated MEP systems"]
    },
    {
      title: "Nakuru Highway Bridge",
      category: "Infrastructure",
      location: "Nakuru",
      year: "2022",
      duration: "15 months",
      description: "A critical infrastructure project connecting major highways with enhanced safety features.",
      image: "photo-1605810230434-7631ac76ec81",
      status: "Completed",
      features: ["500m span", "Steel construction", "Anti-seismic design", "LED lighting"]
    },
    {
      title: "Kisumu Residential Estate",
      category: "Residential",
      location: "Kisumu",
      year: "2023",
      duration: "20 months",
      description: "An affordable housing project providing quality homes for middle-income families.",
      image: "photo-1649972904349-6e44c42644a7",
      status: "Completed",
      features: ["200 housing units", "Community center", "Playground", "Solar water heating"]
    },
    {
      title: "Eldoret Hospital Wing",
      category: "Infrastructure",
      location: "Eldoret",
      year: "2024",
      duration: "18 months",
      description: "A modern medical facility expansion with advanced healthcare infrastructure.",
      image: "photo-1488590528505-98d2b5aba04b",
      status: "In Progress",
      features: ["100 bed capacity", "ICU facilities", "Modern equipment", "Emergency services"]
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Our Portfolio
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Construction
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Projects Portfolio
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore our diverse portfolio of successful construction projects across Kenya, showcasing our expertise in residential, commercial, and infrastructure development.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Sq Ft Built</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">47</div>
              <div className="text-muted-foreground">Counties Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Filters */}
      <section className="py-8 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="min-w-24"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/${project.image}?auto=format&fit=crop&w=600&h=300`}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{project.category}</Badge>
                    <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year} • {project.duration}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="text-xs text-muted-foreground">
                          • {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">
              Testimonials from our satisfied clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "James Kimani",
                project: "Westlands Luxury Apartments",
                quote: "Ujenzi Solutions delivered our apartment complex on time and within budget. The quality is exceptional!",
                rating: 5
              },
              {
                name: "Grace Wanjiru",
                project: "Karen Family Residence",
                quote: "Professional team, excellent communication, and beautiful results. Highly recommended for residential projects.",
                rating: 5
              },
              {
                name: "David Ochieng",
                project: "Nairobi Business Center",
                quote: "Outstanding commercial construction services. They understood our vision and delivered beyond expectations.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                    ))}
                  </div>
                  <CardDescription className="text-base italic">
                    "{testimonial.quote}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-sm">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground">{testimonial.project}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Let us help you bring your construction vision to life with our proven expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
