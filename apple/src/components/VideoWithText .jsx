import React from "react";

const VideoWithText = () => {
  return (
    <div className="relative w-full max-w-2xl mx-auto min-h-screen">
      {/* Video */}
      <video
        className="w-full h-auto"
        src="./Iphone16.webm"
        autoPlay
        loop
        muted
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex object-bottom items-center justify-center mb-12 ">
        <h1 style={{opacity:"90%"}} className="text-white text-3xl font-bold   p-4 rounded-lg">
          Blah Blah
        </h1>
        <button className="bg-tranparent border-1 border-white hover:bg-white hover:text-black text-white font-bold py-1.5 px-3 rounded-4xl" > Buy Now </button>
      </div>
    </div>
  );
};

export default VideoWithText;
