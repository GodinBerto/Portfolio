import Welcome from "./welcome/page";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="w-full">
      <div className="absolute inset-0 bg-black opacity-50 h-screen"></div>
      <Navbar />
      <Welcome />
      <About />
      <Skills />
      <div className="h-20 bg-black inset-0 opacity-50"></div>
      <Contact />
      <Footer />
    </main>
  );
}
