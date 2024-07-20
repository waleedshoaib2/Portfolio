// pages/index.js
import Image from "next/image";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HomeSection from "./components/HomeSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-5 overflow-x-hidden">
      <div className="min-h-screen bg-black text-white px-4 md:px-10 max-w-screen-2xl mx-auto overflow-x-hidden"> 
        <Header />
        <HomeSection />
        <AboutSection />
        <ContactSection />
      </div>
    </main>
  );
}
