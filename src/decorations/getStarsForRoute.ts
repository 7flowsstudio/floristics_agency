import { Star } from "@/lib/types/stars";
import { contactsStars } from "./contactsStars";
import { homeStars } from "./homeStars";
import { aboutStars } from "./aboutStars";
import { historyStars } from "./historyStars";
import { galleryStars } from "./galleryStars";

const starsByRoute: Record<string, Star[]> = {
  "/contacts": contactsStars,
  "/": homeStars,
  "/about": aboutStars,
  "/history": historyStars,
  "/photos": galleryStars
};

export function getStarsForRoute(pathname: string): Star[] {
  return starsByRoute[pathname] ?? [];
}