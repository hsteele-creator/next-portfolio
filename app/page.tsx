import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />

      <div className="w-4/5 mx-auto">
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
