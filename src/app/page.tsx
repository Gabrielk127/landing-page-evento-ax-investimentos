"use client";

import CountdownTimer from "@/components/Sections/CountdownTimer";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import ProfileInfographic from "@/components/Sections/ProfileInfographic";
import Condition from "@/components/Sections/Condition";
import Who from "@/components/Sections/Who";
import Location from "@/components/Sections/Location";

export default function Home() {
  return (
    <>
      <Header />
      <section className=" bg-custom-background pt-12 pb-16 h-screen">
        <Hero />
      </section>
      <section>
        <CountdownTimer />
      </section>
      <section className="bg-custom-background py-12">
        <About />
      </section>
      <section className="bg-custom-background-black">
        <ProfileInfographic />
      </section>
      <section className="bg-custom-background py-12">
        <Condition />
      </section>
      <section className="bg-custom-background-black py-12">
        <Who />
      </section>
      <section className="bg-custom-background py-12">
        <Location />
      </section>
      <Footer />
    </>
  );
}
