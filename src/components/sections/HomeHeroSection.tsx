import { homeHero } from "../../data/mock/home";
import { PageHero } from "../ui/PageHero";
import { ProfessorCard } from "../ui/ProfessorCard";

export function HomeHeroSection() {
  return <PageHero {...homeHero} sidebarExtra={<ProfessorCard />} />;
}
