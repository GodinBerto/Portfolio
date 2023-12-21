import Image from "next/image";
import Welcome from "./welcome/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
