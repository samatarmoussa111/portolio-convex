import Container from "@/components/container/container";
import Hero from "@/components/hero/hero";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
export default function Home() {
  return (
    <Container className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
    </Container>
  );
}
