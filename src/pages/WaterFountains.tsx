import { ArrowRight, MessageCircle, Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import LazyImage from "@/components/LazyImage";
import { waterFountains } from "@/data/waterFountains";

const WaterFountains = () => {
  const handleWhatsApp = () => {
    const message = "Hello Afristone! I'm interested in a water fountain. Could you help me choose a suitable design?";
    window.open(`https://wa.me/254729304190?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen">
      <section className="modern-gradient px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <Badge variant="secondary" className="mb-5">Water Fountains</Badge>
          <div className="max-w-3xl">
            <h1 className="mb-5 text-4xl font-bold md:text-6xl">Water Fountains</h1>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Explore nine water-feature styles for gardens, courtyards, entrances, pools, and interior spaces. Each design is tailored and priced for your site.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase text-primary">Choose a style</p>
              <h2 className="text-3xl font-bold md:text-4xl">Our fountain collection</h2>
            </div>
            <Waves className="hidden h-10 w-10 text-primary md:block" aria-hidden="true" />
          </div>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {waterFountains.map((fountain, index) => (
              <Card key={fountain.id} className="group overflow-hidden border-2 transition-shadow hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <LazyImage
                    src={fountain.image}
                    alt={fountain.name}
                    className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                    priority={index < 3}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle>{fountain.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-5 min-h-16 text-sm leading-relaxed text-muted-foreground">{fountain.description}</p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/products/water-fall/${fountain.id}`}>
                      View details
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-14">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold">Need help selecting a fountain?</h2>
          <p className="mb-7 max-w-2xl text-muted-foreground">Share your site dimensions and preferred style for a tailored recommendation and quotation.</p>
          <Button size="lg" onClick={handleWhatsApp}>
            <MessageCircle className="h-5 w-5" />
            Request a quotation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default WaterFountains;