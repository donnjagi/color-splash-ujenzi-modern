
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            Modern Design
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Welcome to Our
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Modern Website
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the perfect blend of white, brown, and black in a contemporary design that speaks elegance and sophistication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our design stand out with these key features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-primary rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary-foreground rounded"></div>
                </div>
                <CardTitle className="text-2xl">Clean Design</CardTitle>
                <CardDescription className="text-lg">
                  Minimalist approach with perfect color harmony
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our white, brown, and black palette creates a timeless and sophisticated look that never goes out of style.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-accent-foreground rounded-full"></div>
                </div>
                <CardTitle className="text-2xl">Modern Layout</CardTitle>
                <CardDescription className="text-lg">
                  Contemporary spacing and typography
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Carefully crafted layouts that provide excellent user experience across all devices and screen sizes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary rounded-xl mb-4 flex items-center justify-center">
                  <div className="w-6 h-6 bg-secondary-foreground rounded-lg"></div>
                </div>
                <CardTitle className="text-2xl">Premium Feel</CardTitle>
                <CardDescription className="text-lg">
                  Luxury aesthetics with attention to detail
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every element is designed to convey quality and professionalism, making a lasting impression on visitors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Experience Modern Design?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already embraced our modern aesthetic approach.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Start Your Journey
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-lg">
            © 2024 Modern Website. Designed with white, brown, and black elegance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
