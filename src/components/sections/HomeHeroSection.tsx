import { homeHero } from "../../data/mock/home";
import { PageHero } from "../ui/PageHero";

export function HomeHeroSection() {
  return <PageHero {...homeHero} />;
}
