import React from "react";

function Belive() {
  return (
    <section className="bg-[#F7FCEB] min-h-screen flex flex-col items-center px-6 py-12">
      {/* Button and Text Side-by-Side */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-between items-start md:items-start gap-16 mb-10">
        {/* Button on the left */}
        <button className="px-6 py-2 border border-black rounded-full text-sm italic hover:bg-black hover:text-white transition whitespace-nowrap">
          Our belief
        </button>

        {/* Paragraph on the right, justified and smaller */}
        <div className="max-w-2xl text-right md:text-justify">
          <p className="text-sm md:text-base text-gray-900 leading-relaxed">
            Fundamentally, we believe innovation can come from anyone whether or
            not they have a technical background. Hence, we guide everyday people
            to unlock innovation within their fields of expertise and create
            remarkable products that add value to the world around us.
          </p>
        </div>
      </div>

      {/* Video centered */}
      <div className="w-full max-w-5xl rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-[300px] md:h-[450px] lg:h-[550px]"
          src="https://www.youtube.com/embed/XuM1Oo4VRWo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}

export default Belive;
