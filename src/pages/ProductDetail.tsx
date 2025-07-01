
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CheckCircle, MapPin, Palette, Hammer, Phone, Mail } from "lucide-react";

const ProductDetail = () => {
  const { productId } = useParams();

  const productData = {
    "tanga-yellow-stone": {
      name: "Tanga Yellow Stone",
      price: "Ksh. 5,500/M²",
      category: "Premium Natural Stone",
      description: "Bring timeless elegance and natural charm to your spaces with Tanga Natural Stone. Sourced from premium quarries, this richly textured stone features warm, earthy tones and a rugged yet refined surface—perfect for both interior and exterior wall cladding. Its durability, low maintenance, and authentic aesthetic make it a top choice for adding depth and character to any architectural style. Whether you're designing a feature wall, fireplace surround, or outdoor façade, Tanga stone offers a striking and lasting impression.",
      uses: ["Interior wall cladding", "Exterior wall cladding", "Feature walls", "Fireplace surrounds", "Outdoor façades"],
      features: ["Premium quarry sourced", "Warm earthy tones", "Rugged refined surface", "Durable construction", "Low maintenance", "Weather resistant"],
      images: [
        "/Afristone-All things Stone/Tanga Yellow Stone/2025053121292496.jpg",
        "/Afristone-All things Stone/Tanga Yellow Stone/2025053121295949.jpg",
        "/Afristone-All things Stone/Tanga Yellow Stone/2025053121304356.jpg"
      ],
      specifications: {
        "Finish": "Natural textured",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "silver-stone": {
      name: "Silver Stone",
      price: "Ksh. 3,800/M²",
      category: "Modern Natural Stone",
      description: "Elevate your design with the sleek sophistication of Silver Natural Stone. With its cool grey tones and subtle metallic sheen, this premium stone adds a modern, upscale look to any wall cladding project. Ideal for both interior and exterior applications, Silver stone combines natural beauty with lasting strength. Its clean lines and contemporary feel make it perfect for feature walls, facades, and stylish accents that demand attention. Durable, versatile, and effortlessly elegant—Silver Natural Stone is where design meets distinction.",
      uses: ["Feature walls", "Building facades", "Stylish accents", "Interior cladding", "Exterior applications"],
      features: ["Cool grey tones", "Subtle metallic sheen", "Modern upscale look", "Clean lines", "Contemporary feel", "Durable and versatile"],
      images: [
        "/Afristone-All things Stone/Silver Stone/2025060723500450.jpg",
        "/Afristone-All things Stone/Silver Stone/2025060723505803.jpg",
        "/Afristone-All things Stone/Silver Stone/2025060723554758.jpg"
      ],
      specifications: {
        "Finish": "Metallic sheen",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "half-facing-red-bricks": {
      name: "Half Facing Red Bricks",
      price: "Ksh. 3,800/M²",
      category: "Classic Bricks",
      description: "Achieve a classic brick look with the convenience of modern design using Half Facing Bricks. Ideal for wall cladding, these slim, lightweight bricks offer the authentic appearance of full bricks without the added bulk. Perfect for both interior and exterior applications, they bring warmth, texture, and character to feature walls, facades, and decorative surfaces. Durable, easy to install, and available in a range of traditional and contemporary finishes, Half Facing Bricks are a smart choice for timeless style and lasting performance.",
      uses: ["Wall cladding", "Feature walls", "Building facades", "Decorative surfaces", "Interior applications", "Exterior applications"],
      features: ["Classic brick appearance", "Lightweight design", "Easy installation", "Authentic look", "Traditional finishes", "Contemporary options"],
      images: [
        "/Afristone-All things Stone/Half facing bricks/2025060507530922.jpg",
        "/Afristone-All things Stone/Half facing bricks/2025060507534678.jpg",
        "/Afristone-All things Stone/Half facing bricks/2025060507543745.jpg"
      ],
      specifications: {
        "Finish": "Traditional brick",
        "Application": "Interior & Exterior",
        "Installation": "Easy installation",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "stacked-mosaic-pattern-stone": {
      name: "Stacked/Mosaic Pattern Stone",
      price: "Ksh. 6,500/M²",
      category: "Textured Natural Stone",
      description: "Add texture, depth, and natural beauty to your outdoor and indoor spaces with Stacked/Mosaic Pattern Natural Stone. Perfect for wall cladding and garden planter construction, this versatile stone features a dynamic arrangement of varied shapes and sizes, creating a striking visual impact. Its natural color variations and rugged surface bring a handcrafted, organic feel to any project. Durable and weather-resistant, it's ideal for enhancing facades, feature walls, and custom planters with a timeless, earthy elegance.",
      uses: ["Wall cladding", "Garden planter construction", "Feature walls", "Building facades", "Custom planters", "Decorative accents"],
      features: ["Dynamic arrangement", "Varied shapes and sizes", "Natural color variations", "Rugged surface", "Handcrafted feel", "Weather-resistant"],
      images: [
        "/Afristone-All things Stone/Irregular wall stack/2025060821474553.jpg",
        "/Afristone-All things Stone/Irregular wall stack/2025060821483385.jpg",
        "/Afristone-All things Stone/Irregular wall stack/2025060821490339.jpg"
      ],
      specifications: {
        "Finish": "Mosaic pattern",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "grey-stone": {
      name: "Grey Stone",
      price: "Ksh. 3,300/M²",
      category: "Contemporary Natural Stone",
      description: "Bring modern elegance and natural strength to your project with Grey Natural Stone. Featuring cool, neutral tones and a refined texture, this stone is perfect for contemporary and classic wall cladding designs. Its durable composition and weather-resistant properties make it ideal for both interior and exterior use. Whether enhancing a feature wall, fireplace, or building façade, Grey Natural Stone offers a sleek, sophisticated look that stands the test of time.",
      uses: ["Feature walls", "Fireplace surrounds", "Building facades", "Interior cladding", "Exterior applications", "Contemporary designs"],
      features: ["Cool neutral tones", "Refined texture", "Durable composition", "Weather-resistant", "Sleek appearance", "Sophisticated look"],
      images: [
        "/Afristone-All things Stone/Grey stone/Grey Mazeras/2025061310304692.jpg",
        "/Afristone-All things Stone/Grey stone/Grey Mazeras/2025061310312037.jpg",
        "/Afristone-All things Stone/Grey stone/Grey Mazeras/2025061310315704.jpg"
      ],
      specifications: {
        "Finish": "Refined natural",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "army-green-stone": {
      name: "Army Green Stone",
      price: "Ksh. 3,300/M²",
      category: "Unique Natural Stone",
      description: "Make a bold, earthy statement with Army Green Natural Stone. Featuring rich, mossy green tones and a rugged, natural texture, this unique stone adds depth and character to any wall cladding project. Ideal for both interior and exterior applications, it blends beautifully with natural landscapes and architectural elements. Durable, weather-resistant, and visually striking, Army Green stone brings a touch of the outdoors into any space—perfect for feature walls, facades, and garden accents.",
      uses: ["Feature walls", "Building facades", "Garden accents", "Interior applications", "Exterior cladding", "Landscape integration"],
      features: ["Rich mossy green tones", "Rugged natural texture", "Unique appearance", "Weather-resistant", "Visually striking", "Natural integration"],
      images: [
        "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722110055.jpg",
        "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722112676.jpg",
        "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722120345.jpg"
      ],
      specifications: {
        "Finish": "Natural rugged",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "black-stone": {
      name: "Black Stone",
      price: "Ksh. 3,300/M²",
      category: "Elegant Natural Stone",
      description: "Add bold elegance and timeless durability to your space with Black Natural Stone. With its deep, rich tones and natural texture, this stone is perfect for striking wall cladding and stylish garden planter construction. Whether used indoors or outdoors, it offers a sleek, contemporary look that enhances any design. Weather-resistant and low-maintenance, Black Natural Stone combines beauty and strength—ideal for creating modern facades, feature walls, and statement planters that stand out.",
      uses: ["Wall cladding", "Garden planter construction", "Feature walls", "Modern facades", "Statement planters", "Contemporary designs"],
      features: ["Deep rich tones", "Natural texture", "Sleek contemporary look", "Weather-resistant", "Low-maintenance", "Bold elegance"],
      images: [
        "/Afristone-All things Stone/Black stone/Black Irregular stacked/2025053018334056.jpg",
        "/Afristone-All things Stone/Black stone/Black Irregular stacked/2025053018341611.jpg",
        "/Afristone-All things Stone/Black stone/Black chiseled stone/2025060721163646.jpg"
      ],
      specifications: {
        "Finish": "Natural deep",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    },
    "blue-stone": {
      name: "Sky Blue Stone",
      price: "Ksh. 4,200/M²",
      category: "Coastal Natural Stone",
      description: "Bring a fresh, calming touch to your design with Sky Blue Natural Stone. Featuring soft blue tones and a smooth, natural texture, this unique stone adds a serene, contemporary feel to wall cladding and garden planter projects. Ideal for both indoor and outdoor use, it pairs beautifully with modern and coastal designs. Durable, weather-resistant, and visually refreshing, Sky Blue Natural Stone transforms walls and planters into elegant, eye-catching features.",
      uses: ["Wall cladding", "Garden planter projects", "Feature walls", "Coastal designs", "Modern applications", "Contemporary spaces"],
      features: ["Soft blue tones", "Smooth natural texture", "Serene contemporary feel", "Weather-resistant", "Visually refreshing", "Coastal appeal"],
      images: [
        "/Afristone-All things Stone/Blue Stone/2025061307282178.jpg",
        "/Afristone-All things Stone/Blue Stone/2025061307300870.jpg",
        "/Afristone-All things Stone/Blue Stone/2025061307314754.jpg"
      ],
      specifications: {
        "Finish": "Smooth natural",
        "Application": "Interior & Exterior",
        "Installation": "Professional required",
        "Maintenance": "Low maintenance",
        "Warranty": "10 years structural"
      }
    }
  };

  const product = productData[productId as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    );
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = "254700123456";
    const message = `Hello Afristone! I'm interested in ${product.name} at ${product.price}. Could you provide a detailed quote including installation?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen">
      {/* Back Navigation */}
      <div className="bg-muted py-4 px-6">
        <div className="max-w-6xl mx-auto">
          <Button variant="ghost" asChild>
            <Link to="/products">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>
      </div>

      {/* Product Header */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="aspect-square overflow-hidden rounded-2xl mb-4">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.slice(1).map((image, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-lg">
                    <img
                      src={image}
                      alt={`${product.name} ${index + 2}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Information */}
            <div>
              <Badge variant="outline" className="mb-4">
                {product.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="flex gap-4 mb-8">
                <Button size="lg" className="flex-1" onClick={handleWhatsAppClick}>
                  Get Quote via WhatsApp
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  What's Included
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>✓ Premium natural stone material</li>
                  <li>✓ Professional installation service</li>
                  <li>✓ Protective sealing treatment</li>
                  <li>✓ 10-year structural warranty</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-12 px-6 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Uses */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Applications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.uses.map((use, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {use}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="w-5 h-5 mr-2" />
                  Key Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Specifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Hammer className="w-5 h-5 mr-2" />
                  Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{key}:</span>
                        <span className="text-sm text-muted-foreground">{value}</span>
                      </div>
                      <Separator className="mt-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact our team for a personalized quote and professional consultation for your {product.name} project.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg">
              <Phone className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Call Us</div>
                <div className="text-sm text-muted-foreground">+254 700 123 456</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 bg-muted rounded-lg">
              <Mail className="w-5 h-5 text-primary" />
              <div className="text-left">
                <div className="font-semibold">Email Us</div>
                <div className="text-sm text-muted-foreground">info@afristone.co.ke</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleWhatsAppClick}>
              WhatsApp Quote
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Request Site Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
