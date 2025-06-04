import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Award, Target, Eye, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Quality Excellence",
      description: "We never compromise on quality, using only the best materials and proven construction methods."
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Our clients are at the heart of everything we do. We listen, understand, and deliver."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We embrace new technologies and methods to deliver cutting-edge construction solutions."
    }
  ];

  const team = [
    {
      name: "John Mwangi",
      role: "Managing Director",
      experience: "20+ years",
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Sarah Wanjiku",
      role: "Chief Engineer",
      experience: "15+ years",
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "David Kiprotich",
      role: "Project Manager",
      experience: "12+ years",
      image: "photo-1605810230434-7631ac76ec81"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            About Afristone
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Building Excellence
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Since 2010
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are a leading construction company in Kenya, committed to delivering exceptional projects that stand the test of time. Our passion for excellence and attention to detail sets us apart.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2010 by a team of experienced engineers and construction professionals, Afristone began with a simple mission: to transform the construction landscape in Kenya through quality, innovation, and exceptional service.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Over the years, we have grown from a small local contractor to one of Kenya's most trusted construction companies, completing over 500 projects across residential, commercial, and industrial sectors.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Today, we continue to push boundaries, embracing sustainable construction practices and cutting-edge technology to deliver projects that exceed expectations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/projects">View Our Work</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=600&h=300"
                alt="Our construction site"
                className="rounded-2xl shadow-xl"
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="bg-card p-4 rounded-xl border text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional construction services that exceed client expectations while contributing to Kenya's infrastructure development through innovation, quality craftsmanship, and sustainable building practices.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-xl mb-4 flex items-center justify-center">
                  <Eye className="w-6 h-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be East Africa's most trusted and innovative construction company, known for transforming communities through world-class infrastructure and sustainable development solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:shadow-xl transition-all duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground">
              Meet the experienced professionals leading our company
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={`https://images.unsplash.com/${member.image}?auto=format&fit=crop&w=200&h=200&face`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                  <Badge variant="secondary">{member.experience}</Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
                alt="Construction team meeting"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {[
                  "ISO 9001:2015 certified quality management",
                  "Licensed by National Construction Authority",
                  "Comprehensive insurance coverage",
                  "Experienced team of 50+ professionals",
                  "State-of-the-art equipment and technology",
                  "Environmental sustainability focus",
                  "24/7 customer support",
                  "10-year structural warranty"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Join hundreds of satisfied clients who have trusted us with their construction projects.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Start Your Project Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
