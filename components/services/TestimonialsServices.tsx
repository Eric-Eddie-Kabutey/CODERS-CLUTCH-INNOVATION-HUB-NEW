import React from "react";
import Image from "next/image";

function TestimonialsServices() {
  return (
    <section className="bg-[#f6fdf6] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-5xl font-semibold text-black mb-12">
          What our client’s are saying
        </h2>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#eaf6e7] rounded-2xl p-6 text-left shadow-sm">
            <p className="text-gray-800 mb-6">
              Kedrus was key to bringing VitalSwap to life. Their deep
              understanding of cross-border payments and user-focused design
              helped us create a seamless platform for Nigerians in the US. With
              effortless currency exchange and payments, their innovation and
              dedication have been the driving force behind our success.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/clients/akinsola.png" // replace with actual path
                alt="Akinsola Jegede"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-black">Akinsola Jegede</h4>
                <p className="text-gray-600 text-sm">Co-founder VitalSwap</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#eaf6e7] rounded-2xl p-6 text-left shadow-sm">
            <p className="text-gray-800 mb-6">
              Kedrus completely transformed our web app, resolving critical
              usability issues that were driving users away. The new, intuitive
              design has not only boosted customer satisfaction but also renewed
              our ability to focus on what matters most caring for parents and
              the elderly. Kedrus truly helped us fulfill our mission.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/clients/ebi.png" // replace with actual path
                alt="Dr. Ebi Ofrey"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-black">Dr. Ebi Ofrey</h4>
                <p className="text-gray-600 text-sm">Co-Founder Genocare</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#eaf6e7] rounded-2xl p-6 text-left shadow-sm">
            <p className="text-gray-800 mb-6">
              The Kedrus team has been exceptional in rebranding and
              repositioning GTA Mortgage. Their strategic insights and
              automation solutions have streamlined our business processes,
              allowing us to scale and penetrate new markets. Kedrus support has
              been invaluable in our growth journey.
            </p>
            <div className="flex items-center gap-3">
              <Image
                src="/clients/justin.png" // replace with actual path
                alt="Justin Jukentech"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-bold text-black">Justin Jukentech</h4>
                <p className="text-gray-600 text-sm">COO, GRA Mortgage</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsServices;
