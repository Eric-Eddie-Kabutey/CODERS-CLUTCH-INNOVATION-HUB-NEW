import React from "react";
import { MessageSquare, Layers, LifeBuoy } from "lucide-react";

function Star() {
  return (
    <div className="w-full bg-white flex flex-col items-center py-12">
      <div className="max-w-6xl grid md:grid-cols-2 gap-12 items-start w-full">
        {/* Left Column: Button + Image */}
        <div className="flex flex-col">
          {/* Button ABOVE the image, aligned left */}
          <button className="border border-black rounded-full px-6 py-2 italic text-sm mb-6 w-fit">
            Our North Star
          </button>

          {/* Image */}
          <img
            src="https://kedrus.io/wp-content/uploads/2024/06/Kedrus-Image.jpg"
            alt="Team discussing"
            className="w-full h-[520px] rounded-2xl shadow-md object-cover"
          />
        </div>

        {/* Right Column: Text + Cards */}
        <div className="flex flex-col justify-between h-[520px]">
          <h2 className="text-base text-gray-800 text-justify leading-relaxed mb-4">
            CodersClutch uniquely combines three elements to help non-tech
            founders succeed in building tech products:
          </h2>

          <div className="flex flex-col justify-between flex-1 space-y-6">
            {/* Card 1 */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: "#e6f6d2" }}
            >
              <MessageSquare className="text-green-700 w-7 h-7 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                We provide resources, workshops, and mentoring to help non-tech
                founders understand the technical aspects of their products in
                order to communicate effectively.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: "#e6f6d2" }}
            >
              <Layers className="text-green-700 w-7 h-7 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                We emphasize collaboration by bridging non-tech and technical
                expertise. Our workshops facilitate communication, understanding,
                and alignment for product success.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="flex items-start gap-4 p-6 rounded-2xl"
              style={{ backgroundColor: "#e6f6d2" }}
            >
              <LifeBuoy className="text-green-700 w-7 h-7 flex-shrink-0" />
              <p className="text-gray-700 text-sm leading-relaxed text-justify">
                We provide holistic support, from idea refinement to post-launch.
                We validate, design, build, & offer ongoing guidance throughout
                the product journey, all the way to market launch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Star;
