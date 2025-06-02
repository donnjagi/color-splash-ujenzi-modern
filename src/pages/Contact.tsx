
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+254 700 123 456", "+254 722 987 654"],
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@ujenzisolutions.co.ke", "projects@ujenzisolutions.co.ke"],
      description: "Send us your project details"
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: ["Westlands Business District", "Nairobi, Kenya"],
      description: "Visit our main office"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 3:00 PM"],
      description: "We're here to help"
    }
  ];

  const services = [
    "Residential Construction",
    "Commercial Construction",
    "Renovation & Remodeling",
    "Interior Design",
    "Project Management",
    "Maintenance Services",
    "Other"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Contact
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ujenzi Solutions
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to start your construction project? Get in touch with our expert team for a free consultation and quote. We're here to help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center border-2 hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                  <CardDescription>{info.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        placeholder="+254 XXX XXX XXX"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service">Service Interested In</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full mt-1 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Office Location & Additional Info */}
            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">Visit Our Office</CardTitle>
                  <CardDescription>
                    Come and discuss your project in person at our Nairobi office
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Westlands Business District, Nairobi</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold">Address:</p>
                    <p className="text-muted-foreground">
                      Ujenzi Solutions Limited<br />
                      Westlands Business District<br />
                      Ring Road, Westlands<br />
                      P.O. Box 12345-00100<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Free initial consultation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Detailed project quotations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Licensed and insured</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>10-year warranty</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>24/7 emergency support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our construction services
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How long does a typical construction project take?",
                answer: "Project timelines vary depending on size and complexity. Residential homes typically take 6-12 months, while commercial projects can take 12-24 months. We provide detailed timelines during consultation."
              },
              {
                question: "Do you handle permits and approvals?",
                answer: "Yes, we handle all necessary permits, approvals, and documentation required for your project. Our team is familiar with local regulations and will ensure compliance."
              },
              {
                question: "What is included in your construction warranty?",
                answer: "We provide a comprehensive 10-year structural warranty and 2-year warranty on finishes. This covers any defects in materials or workmanship under normal use."
              },
              {
                question: "Can you work within my budget?",
                answer: "Absolutely! We work with clients to develop solutions that fit their budget while maintaining quality standards. We provide transparent pricing and cost breakdowns."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-2">
                <CardHeader>
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="brown-gradient py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary-foreground">
            Emergency Construction Services
          </h2>
          <p className="text-primary-foreground/80 mb-6">
            Need urgent construction or repair services? We offer 24/7 emergency response.
          </p>
          <Button size="lg" variant="secondary">
            <Phone className="w-4 h-4 mr-2" />
            Call Emergency Line: +254 700 URGENT
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
