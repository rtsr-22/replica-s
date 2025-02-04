import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const useLocomotiveScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return; // Ensure ref exists before initializing

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, [scrollRef]); // Add ref as dependency

  return scrollRef;
};

export default useLocomotiveScroll;
