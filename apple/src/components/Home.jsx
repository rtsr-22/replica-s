import React from "react";
import useLocomotiveScroll from "../hooks/useLocomotiveScroll";

const Home = () => {
  const scrollRef = useLocomotiveScroll();

  return (
    <div ref={scrollRef} data-scroll-container className="overflow-hidden">
      <section className="h-screen flex items-center justify-center bg-gray-900 text-white">
        <h1 data-scroll data-scroll-speed="2">Smooth Scroll Effect</h1>
      </section>

      <section className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <h1 data-scroll data-scroll-speed="-2">Parallax Effect</h1>
      </section>
    </div>
  );
};

export default Home;
