import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Fade-in animation when scrolling
    gsap.from(".fade-in", {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Button click animation
    buttonRef.current.addEventListener("click", () => {
      gsap.to(buttonRef.current, {
        scale: 1.2,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center p-10 space-y-6">
      <h1 className="text-3xl text-white fade-in">Welcome to GSAP Animations</h1>
      <p className="text-lg text-gray-300 fade-in">This text fades in on scroll.</p>
      <button
        ref={buttonRef}
        className="bg-blue-500 text-white px-6 py-2 rounded-lg fade-in"
      >
        Click Me!
      </button>
    </div>
  );
};

export default AnimatedComponent;
