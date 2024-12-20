import React, { useRef } from "react";


export default function Hero() {
  const scrollContainer = useRef(); // Ref for the scroll container

  return (
    <div className="relative bg-white overflow-hidden" ref={scrollContainer}>
    
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Hi, I'm</span>
                <span className="block text-indigo-600">Mark</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              A dedicated developer committed to crafting visually stunning and highly functional web solutions that enhance user experiences.              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get in touch
                  </a>
                </div>


              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
