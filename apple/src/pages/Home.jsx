import React, { useRef, useState } from "react";

const iphone = "./iphone15black.jpg";
const iphone2 = "./iphone15white.jpg";
const card1 = "./card1.jpg";
const card2 = "./card2.jpg";
const card3 = "./card3.jpg";
const card4 = "./card5.jpg";

const Home = () => {
  const videoRef = useRef(null); // Reference to the video element
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause

  // Function to toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* Prevents horizontal scroll issues */}
      <section>
        <div className="relative">
          {/* Background Video */}
          <video
            ref={videoRef}
            src="./Iphone16.webm"
            className="w-full h-[50vh] md:h-[85vh] object-cover"
            muted
            loop
          ></video>

          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </button>

          {/* Parent Div for Content */}
          <div
            id="parent-div"
            className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-end mb-4 md:mb-6 px-4"
          >
            {/* First H1 (iPhone 16 Text) */}
            <h1 className="text-sm md:text-lg text-white text-center mb-2 md:mb-4 max-w-2xl">
              The iPhone 16 brings you advanced AI features, improved cameras,
              and a more refined design for an enhanced user experience.
            </h1>

            {/* Flex Row for "Hello, Apple intelligence" and Button */}
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 bg-opacity-50 px-4 md:px-6 py-2 rounded-lg">
              <h1
                style={{ opacity: "90%" }}
                className="text-white text-xl md:text-3xl font-bold text-center md:text-left"
              >
                Hello, Apple intelligence
              </h1>
              <button className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-bold py-1 px-3 md:py-1.5 md:px-4 rounded-xl text-sm md:text-base">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* iPhone Image Section with Text Overlay */}
      <section className="flex justify-center mt-1 relative">
        <div className="w-full max-w relative">
          <img
            src={iphone}
            alt="iPhone 15"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 md:px-6 py-1 md:py-2 rounded-lg">
            <h2 className="text-lg md:text-2xl font-semibold text-center">
              Experience the speed in new M2 chip
            </h2>
          </div>
          {/* Text Overlay at Middle Bottom */}
          <div className="mt-4 md:mt-8 absolute bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-white px-2 md:px-4 py-1 rounded-lg flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <a
              className="text-sm md:text-lg border-1 rounded-2xl py-1 px-2 md:py-1.5 md:px-4 hover:bg-white hover:text-black"
              href="#/"
            >
              Learn More
            </a>
            <a
              className="bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white text-white py-1 px-2 md:py-1.5 md:px-4 rounded-xl text-sm md:text-base"
              href="#/"
            >
              Buy
            </a>
          </div>
        </div>
      </section>

      {/* Second iPhone Image Section with Text Overlay */}
      <section className="flex justify-center mt-1 relative">
        <div className="w-full max-w relative">
          <img
            src={iphone2}
            alt="iPhone 15"
            className="w-full h-[300px] md:h-[500px] object-cover"
          />
          <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 bg-opacity-50 text-black px-4 md:px-6 py-1 md:py-2 rounded-lg">
            <h2 className="text-lg md:text-2xl font-semibold text-center">
              Capture your moments with our lens
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-4 md:mt-10">
              <a
                className="text-sm md:text-base border-1 rounded-2xl py-1 px-2 md:py-1.5 md:px-4 hover:bg-black hover:text-white"
                href="#/"
              >
                Learn More
              </a>
              <a
                className="text-sm md:text-base border-1 border-blue-400 rounded-2xl py-1 px-2 md:py-1.5 md:px-4 hover:bg-blue-400 hover:text-white"
                href="#/"
              >
                Buy
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
  <div className="grid grid-cols-2 gap-1">
    {/* Card 1 */}
    <div className="relative">
      <img className="w-full" src={card1} alt="Card" />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <p className="bg-black/50 text-white px-2 py-1 rounded">Hello</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View
        </button>
      </div>
    </div>

    {/* Card 2 */}
    <div className="relative">
      <img className="w-full" src={card2} alt="Card" />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <p className="bg-black/50 text-white px-2 py-1 rounded">Hello</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View
        </button>
      </div>
    </div>
    <div className="relative">
      <img className="w-full" src={card3} alt="Card" />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <p className="bg-black/50 text-white px-2 py-1 rounded">Hello</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View
        </button>
      </div>
    </div>
    <div className="relative">
      <img className="w-full" src={card4} alt="Card" />
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <p className="bg-black/50 text-white px-2 py-1 rounded">Hello</p>
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
          View
        </button>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
