import { AccentKey } from "./accent-styles";

export type Product = {
  name: string;
  category: string;
  image: string;
  accent: AccentKey;
};

// Drop matching files into /public/images using these exact names,
// or edit the `image` paths below to match whatever you upload.
export const featuredProducts: Product[] = [
  { name: "Sunset Marble Wall Clock", category: "Wall Clocks", image: "/images/wall-clock-1.jpg", accent: "coral" },
  { name: "Initial Charm Keychain", category: "Keychains", image: "/images/keychain-1.jpg", accent: "gold" },
  { name: "Blush Petal Photo Frame", category: "Photo Frames", image: "/images/photo-frame-1.jpg", accent: "blush" },
  { name: "Gold Vein Nameplate", category: "Nameplates", image: "/images/nameplate-1.jpg", accent: "plum" },
  { name: "Ocean Geode Coaster Set", category: "Coasters", image: "/images/coaster-1.jpg", accent: "terracotta" },
  { name: "Dried Flower Jewellery Tray", category: "Jewellery Trays", image: "/images/tray-1.jpg", accent: "sand" },
];
