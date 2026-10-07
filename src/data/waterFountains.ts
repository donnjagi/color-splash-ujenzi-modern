import reflectingPool from "@/assets/water-features/reflecting-pool.jpg.asset.json";
import waterRill from "@/assets/water-features/water-rill.jpg.asset.json";
import waterWall from "@/assets/water-features/water-wall.jpg.asset.json";
import cascade from "@/assets/water-features/cascade.jpg.asset.json";
import waterfall from "@/assets/water-features/waterfall.jpg.asset.json";
import spillway from "@/assets/water-features/spillway.jpg.asset.json";
import bubblingFountain from "@/assets/water-features/bubbling-fountain.jpg.asset.json";
import jetFountain from "@/assets/water-features/jet-fountain.jpg.asset.json";
import sheetFlowWater from "@/assets/water-features/sheet-flow-water.jpg.asset.json";
import { productAssetUrl } from "@/lib/productAssetUrl";

export interface WaterFountain {
  id: string;
  name: string;
  description: string;
  benefit: string;
  image: string;
  applications: string[];
}

export const waterFountains: WaterFountain[] = [
  {
    id: "reflecting-pool",
    name: "Reflecting Pool",
    description: "A shallow, still water surface designed to reflect buildings, sky, and landscape.",
    benefit: "Strengthens symmetry and creates a calm visual extension of the architectural space.",
    image: productAssetUrl(reflectingPool),
    applications: ["Courtyards", "Building entrances", "Landscaped gardens", "Architectural focal points"],
  },
  {
    id: "water-rill",
    name: "Water Rill",
    description: "A narrow, linear water channel that becomes part of the landscape or site axis.",
    benefit: "Directs movement and visually connects different architectural zones.",
    image: productAssetUrl(waterRill),
    applications: ["Garden pathways", "Courtyards", "Landscape connections", "Contemporary outdoor spaces"],
  },
  {
    id: "water-wall",
    name: "Water Wall",
    description: "A vertical element over which water flows as a continuous surface.",
    benefit: "Acts as a backdrop, screen, and soothing acoustic element.",
    image: productAssetUrl(waterWall),
    applications: ["Entrance features", "Interior walls", "Outdoor lounges", "Privacy screens"],
  },
  {
    id: "cascade",
    name: "Cascade",
    description: "Water flowing down through a series of stepped levels.",
    benefit: "Integrates naturally with terraces and changes in landscape level.",
    image: productAssetUrl(cascade),
    applications: ["Terraced gardens", "Sloped landscapes", "Pool surrounds", "Courtyards"],
  },
  {
    id: "waterfall",
    name: "Waterfall",
    description: "A vertical drop of water used as a strong landscape or focal element.",
    benefit: "Adds movement, sound, and a sense of drama to courtyards and outdoor spaces.",
    image: productAssetUrl(waterfall),
    applications: ["Swimming pools", "Courtyards", "Garden focal points", "Hospitality spaces"],
  },
  {
    id: "spillway",
    name: "Spillway",
    description: "A controlled edge where water flows from one level or basin into another.",
    benefit: "Creates a clean transition between water surfaces.",
    image: productAssetUrl(spillway),
    applications: ["Ponds", "Multi-level basins", "Garden features", "Pool edges"],
  },
  {
    id: "bubbling-fountain",
    name: "Bubbling Fountain",
    description: "A low fountain where water gently emerges and bubbles.",
    benefit: "Adds subtle movement without dominating the surrounding space.",
    image: productAssetUrl(bubblingFountain),
    applications: ["Entrance courts", "Small gardens", "Patios", "Quiet relaxation spaces"],
  },
  {
    id: "jet-fountain",
    name: "Jet Fountain",
    description: "Water projected upward through controlled nozzles.",
    benefit: "Creates a dynamic focal point in open spaces.",
    image: productAssetUrl(jetFountain),
    applications: ["Public plazas", "Driveway islands", "Commercial entrances", "Large courtyards"],
  },
  {
    id: "sheet-flow-water",
    name: "Sheet-Flow Water",
    description: "A thin, continuous sheet of water flowing over an edge.",
    benefit: "Adds a clean, contemporary architectural detail.",
    image: productAssetUrl(sheetFlowWater),
    applications: ["Modern gardens", "Pool edges", "Feature walls", "Linear water channels"],
  },
];

export const getWaterFountain = (id: string | undefined) =>
  waterFountains.find((fountain) => fountain.id === id);