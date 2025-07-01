
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Palette, Hammer } from "lucide-react";

const Products = () => {
  const products = [
    {
      id: "tanga-yellow-stone",
      name: "Tanga Yellow Stone",
      price: "Ksh. 5,500/M²",
      shortDescription: "Timeless elegance with warm, earthy tones and rugged refined surface.",
      image: "photo-1544027993-37dbfe43562a",
      category: "Premium Natural Stone",
      color: "yellow"
    },
    {
      id: "silver-stone",
      name: "Silver Stone",
      price: "Ksh. 3,800/M²",
      shortDescription: "Sleek sophistication with cool grey tones and subtle metallic sheen.",
      image: "photo-1615971677499-5467cbab01c0",
      category: "Modern Natural Stone",
      color: "silver"
    },
    {
      id: "half-facing-red-bricks",
      name: "Half Facing Red Bricks",
      price: "Ksh. 3,800/M²",
      shortDescription: "Classic brick look with modern convenience and lightweight design.",
      image: "photo-1558618666-fcd25c85cd64",
      category: "Classic Bricks",
      color: "red"
    },
    {
      id: "stacked-mosaic-pattern-stone",
      name: "Stacked/Mosaic Pattern Stone",
      price: "Ksh. 6,500/M²",
      shortDescription: "Dynamic arrangement with varied shapes creating striking visual impact.",
      image: "photo-1600298881974-6be191ceeda1",
      category: "Textured Natural Stone",
      color: "mixed"
    },
    {
      id: "grey-stone",
      name: "Grey Stone",
      price: "Ksh. 3,300/M²",
      shortDescription: "Modern elegance with cool, neutral tones and refined texture.",
      image: "photo-1600298882105-b2e8b8d18178",
      category: "Contemporary Natural Stone",
      color: "grey"
    },
    {
      id: "army-green-stone",
      name: "Army Green Stone",
      price: "Ksh. 3,300/M²",
      shortDescription: "Bold, earthy statement with rich mossy green tones and rugged texture.",
      image: "photo-1600298882041-b8dbad13c15c",
      category: "Unique Natural Stone",
      color: "green"
    },
    {
      id: "black-stone",
      name: "Black Stone",
      price: "Ksh. 3,300/M²",
      shortDescription: "Bold elegance with deep, rich tones and contemporary appeal.",
      image: "photo-1600298881886-8e3b6b5b2e6e",
      category: "Elegant Natural Stone",
      color: "black"
    },
    {
      id: "blue-stone",
      name: "Sky Blue Stone",
      price: "Ksh. 4,200/M²",
      shortDescription: "Fresh, calming touch with soft blue tones and smooth texture.",
      image: "photo-1600298882229-7d93b6f7b6e6",
      category: "Coastal Natural Stone",
      color: "blue"
    }
  ];

  const handleWhatsAppClick = (productName: string) => {
    const phoneNumber = "254700123456";
    const message = `Hello Afristone! I'm interested in ${productName}. Could you provide more details and a quote?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="modern-gradient py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            Natural Stone Products
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Premium
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Natural Stone Collection
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our extensive range of natural stones and bricks, perfect for wall cladding, facades, and architectural features. Each product includes material, installation, and sealing.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-lg text-muted-foreground">
              Premium natural stones for every architectural vision
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="border-2 hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={`https://images.unsplash.com/${product.image}?auto=format&fit=crop&w=400&h=250`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <span className="text-lg font-bold text-primary">{product.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>Interior & Exterior</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Palette className="w-3 h-3" />
                      <span>Natural Finish</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link to={`/products/${product.id}`}>
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                    <Button 
                      className="bg-green-500 hover:bg-green-600"
                      onClick={() => handleWhatsAppClick(product.name)}
                    >
                      Quote
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Natural Stones?</h2>
            <p className="text-lg text-muted-foreground">
              Complete solutions with material, installation, and sealing included
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Hammer className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Complete Installation</h3>
              <p className="text-muted-foreground">Material, installation, and sealing all included in our competitive pricing.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <Palette className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Natural Beauty</h3>
              <p className="text-muted-foreground">Authentic natural stones with unique textures and colors for lasting appeal.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Versatile Applications</h3>
              <p className="text-muted-foreground">Perfect for feature walls, facades, fireplaces, and garden accents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="brown-gradient py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-foreground">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Get a free quote for your natural stone project today. Our team will help you choose the perfect stone for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Free Quote</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => handleWhatsAppClick("Natural Stone Products")}
            >
              WhatsApp Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
