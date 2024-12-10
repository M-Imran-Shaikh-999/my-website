import React from "react";

const HeroSection = () => {
  return (
    <div className="w-full h-[704px] px-[80px] py-[60px] bg-white opacity-0">
      {/* Hero Content */}
      <h1 className="text-4xl font-bold">Your Hero Title</h1>
      <p className="mt-4 text-lg">Some description or tagline for the hero section.</p>

      {/* Image inside Hero Section */}
      <div className="relative w-[1280px] h-[584px] mt-[60px] ml-[80px] opacity-100">
        <img
          src="/Container.png" 
          alt="Hero Image"
          className="w-full h-full object-cover" // Ensures the image fills the container without distortion
        />
      </div>

      {/* Container inside Hero Section */}
      <div className="w-[1280px] h-[584px] mt-[60px] ml-[80px] bg-[#2A254B] opacity-100">
        <h2 className="text-white text-xl font-bold">Container Title</h2>
        <p className="text-white mt-4">Some content inside the container.</p>
      </div>
    </div>
  );
};

export default HeroSection;
