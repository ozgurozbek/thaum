import { Metadata } from "next";
import CalendarAltContent from "@/components/calendar/CalendarAltContent";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Calendar of Thaum, detailed moon phases and holidays.",
};

export default function CalendarPage() {
  return <CalendarAltContent />;
}
