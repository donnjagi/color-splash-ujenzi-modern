import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Stone {
  key: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface StoneSelectorProps {
  stones: Record<string, { name: string; price: number }>;
  selectedStone: string;
  onStoneSelect: (stoneKey: string) => void;
}

const StoneSelector: React.FC<StoneSelectorProps> = ({ 
  stones, 
  selectedStone, 
  onStoneSelect 
}) => {
  // Map stones to include sample images
  const stoneData: Stone[] = Object.entries(stones).map(([key, stone]) => {
    let image = "";
    let description = "";
    
    switch (key) {
      case "tanga-yellow-stone":
        image = "/Afristone-All things Stone/Tanga Yellow Stone/2025053121292496.jpg";
        description = "Premium golden yellow stone for elegant finishes";
        break;
      case "silver-stone":
        image = "/Afristone-All things Stone/Silver Stone/2025060723500450.jpg";
        description = "Sleek silver-grey stone with metallic finish";
        break;
      case "half-facing-red-bricks":
        image = "/Afristone-All things Stone/Half facing bricks/2025060507530922.jpg";
        description = "Classic red brick pattern for traditional appeal";
        break;
      case "stacked-mosaic-pattern-stone":
        image = "/Afristone-All things Stone/Irregular wall stack/2025060821474553.jpg";
        description = "Irregular stacked pattern for modern designs";
        break;
      case "grey-stone":
        image = "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722110055.jpg";
        description = "Versatile grey stone for contemporary looks";
        break;
      case "army-green-stone":
        image = "/Afristone-All things Stone/Grey stone/Army green(grey) stone/2025060722110055.jpg";
        description = "Distinctive army green stone for unique projects";
        break;
      case "black-stone":
        image = "/Afristone-All things Stone/Black stone/Black Irregular stacked/2025053018334056.jpg";
        description = "Bold black stone for dramatic contrasts";
        break;
      case "blue-stone":
        image = "/Afristone-All things Stone/Blue Stone/2025061307282178.jpg";
        description = "Striking blue stone for distinctive applications";
        break;
      default:
        image = "/placeholder.svg";
        description = "Quality natural stone";
    }
    
    return {
      key,
      name: stone.name,
      price: stone.price,
      image,
      description
    };
  });

  return (
    <div>
      <Label className="text-base font-medium mb-4 block">Select Stone Type *</Label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {stoneData.map((stone) => (
          <Card 
            key={stone.key}
            className={cn(
              "cursor-pointer transition-all hover:shadow-md",
              selectedStone === stone.key && "ring-2 ring-primary"
            )}
            onClick={() => onStoneSelect(stone.key)}
          >
            <CardContent className="p-4">
              <div className="aspect-video mb-3 rounded-lg overflow-hidden bg-muted">
                <img 
                  src={stone.image} 
                  alt={stone.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                  }}
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-sm">{stone.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    Ksh {stone.price.toLocaleString()}/M²
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{stone.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StoneSelector;