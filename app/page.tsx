import AboutMe from "./Components/AboutMe";
import ContactForm from "./Components/ContactForm";
import Hero from "./Components/Hero";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Skills />
      <div className="w-4/5 mx-auto">
        <AboutMe />
        <Projects />
        <ContactForm />
      </div>
    </main>
  );
}
