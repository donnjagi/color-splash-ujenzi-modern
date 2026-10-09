import { ArrowLeft, CheckCircle, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import LazyImage from "@/components/LazyImage";
import { getWaterFountain, waterFountains } from "@/data/waterFountains";

const WaterFountainDetail = () => {
  const { fountainId } = useParams();
  const fountain = getWaterFountain(fountainId);

  if (!fountain) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6 text-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold">Water fountain not found</h1>
          <Button asChild><Link to="/products/water-fall">View Water Fountains</Link></Button>
        </div>
      </div>
    );
  }

  const related = waterFountains.filter((item) => item.id !== fountain.id).slice(0, 3);
  const whatsappUrl = `https://wa.me/254729304190?text=${encodeURIComponent(
    `Hello Afristone! I'm interested in the ${fountain.name}. Could you provide a quotation for my space?`
  )}`;

  return (
    <div className="min-h-screen">
      <div className="bg-muted px-4 py-3 sm:px-6 sm:py-4">
        <div className="mx-auto max-w-6xl">
          <Button variant="ghost" asChild>
            <Link to="/products/water-fall"><ArrowLeft className="h-4 w-4" />All Water Fountains</Link>
          </Button>
        </div>
      </div>

      <section className="px-4 py-8 sm:px-6 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:gap-10 lg:grid-cols-2 lg:items-center">
          <div className="aspect-[4/3] overflow-hidden rounded-lg bg-muted">
            <LazyImage src={fountain.image} alt={fountain.name} className="h-full w-full" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="min-w-0">
            <Badge variant="outline" className="mb-4">Water Fountains</Badge>
            <h1 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">{fountain.name}</h1>
            <p className="mb-4 text-2xl font-bold text-primary">Price on Request</p>
            <p className="mb-4 text-lg leading-relaxed text-muted-foreground">{fountain.description}</p>
            <p className="mb-8 leading-relaxed">{fountain.benefit}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Get a quotation
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild><Link to="/contact">Request a site visit</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-7 text-3xl font-bold">Suitable applications</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {fountain.applications.map((application) => (
              <div key={application} className="flex items-center gap-3 rounded-md border bg-card p-4">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{application}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-7 text-3xl font-bold">Explore more Water Fountains</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link key={item.id} to={`/products/water-fall/${item.id}`} className="group overflow-hidden rounded-md border bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <LazyImage src={item.image} alt={item.name} className="h-full w-full transition-transform duration-300 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
                <div className="p-4 font-semibold group-hover:text-primary">{item.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WaterFountainDetail;