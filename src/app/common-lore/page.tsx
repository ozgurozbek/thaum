import CommonLoreContent from "@/components/commonlore/CommonLoreContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Common Lore",
  description:
    "Read on Thaum lore.",
};

export default function CommonLorePage() {
  return <CommonLoreContent />;
}
