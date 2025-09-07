import FactionsContent from "@/components/factions/FactionsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Factions",
  description:
    "Explore the factions of Thaum.",
};

export default function FactionsPage() {
  return <FactionsContent />;
}
