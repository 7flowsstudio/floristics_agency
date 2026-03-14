import { Star } from "@/lib/types/stars";
import { contactsStars } from "./contactsStars";
import { homeStars } from "./homeStars";
import { aboutStars } from "./aboutStars";
import { historyStars } from "./historyStars";

const starsByRoute: Record<string, Star[]> = {
  "/contacts": contactsStars,
  "/": homeStars,
  "/about": aboutStars,
  "/history": historyStars,
};

export function getStarsForRoute(pathname: string): Star[] {
  return starsByRoute[pathname] ?? [];
}