import dynamic from "next/dynamic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Map Overlay",
  description:
    "Explore the map of Thaum.",
};

// Dynamically import the client-only component so it doesn't cry about "window" property in client? Why even?
const MapOverlayContent = dynamic(() => import("@/components/maps/MapOverlayContent"), {
  ssr: false,
});

export default function MapOverlayPage() {
  return <MapOverlayContent />;
}
