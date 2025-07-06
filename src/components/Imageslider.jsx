import React, { useEffect, useState } from "react";

function ImageSlider() {
  const imgs = [
    { id: 0, value: "/carousel_4.jpg" },
    { id: 1, value: "/carousel_5.jpg" },
    { id: 2, value: "/carousel_2.jpg" },
    { id: 3, value: "/carousel_1.jpg" },
  ];

  const [val, setVal] = useState(0);

  const handleNext = () => {
    setVal((prev) => (prev < imgs.length - 1 ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setVal((prev) => (prev > 0 ? prev - 1 : imgs.length - 1));
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [val]);

  return (
    <div className="flex flex-col items-center relative">
      {imgs[val].type === "video/mp4" ? (
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover mask-gradient-video"
        >
          <source src={imgs[val].value} type="video/mp4" />
        </video>
      ) : (
        <img
          src={imgs[val].value}
          alt="Slide"
          className="w-full z-[-1] mb-[-150px] mask-gradient-img"
        />
      )}

      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 z-10">
        <button onClick={handlePrev} className="bg-transparent border-none">
          <img src="/prev.png" alt="Prev" className="w-8 h-8" />
        </button>
        <button onClick={handleNext} className="bg-transparent border-none">
          <img src="/next.png" alt="Next" className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
