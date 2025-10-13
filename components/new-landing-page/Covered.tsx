import React from "react";

function Covered() {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          We’ve Got You Covered
        </h2>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* ========== ROW 1 ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT IMAGE CARD */}
          <div
            className="relative min-h-[500px] rounded-2xl overflow-hidden flex items-start p-8 text-white"
            style={{
              backgroundImage: "url('/images/build-pace.jpg')", // replace with actual image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Build your products at your pace
              </h3>
              <p className="text-base leading-relaxed max-w-md">
                Forget about the stress of tight schedules. With our flexible
                approach, you can build your product without the rush, working
                at a pace that suits you.
              </p>
            </div>
          </div>

          {/* RIGHT STACKED CARDS */}
          <div className="flex flex-col gap-6">
            {/* Card 1 */}
            <div className="bg-[#e6f6d2] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                No Need for a Technical Co-founder or In-house Team
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Depending too much on technical talent can be stressful for
                non-tech founders. With <strong>Kedrus,</strong> you maintain
                control and confidence throughout the process, without the need
                for a technical co-founder or full-time team.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#e6f6d2] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-3">
                No Long-term Commitments or Technical Debt
              </h3>
              <p className="text-base leading-relaxed text-gray-700">
                Managing an in-house team can be costly and time-consuming,
                especially for startups or small businesses. We free you from
                those long-term commitments, letting you focus on growing your
                product without added overhead.
              </p>
            </div>
          </div>
        </div>

        {/* ========== ROW 2 ========== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* LEFT IMAGE CARD */}
          <div
            className="relative min-h-[350px] rounded-2xl overflow-hidden flex items-start p-8 text-white"
            style={{
              backgroundImage: "url('/images/affordable.jpg')", // replace with actual image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                Affordable innovation
              </h3>
              <p className="text-base leading-relaxed max-w-md">
                Building a product shouldn’t drain your budget. We offer a
                cost-effective way to create high-quality, sustainable tech
                solutions without sacrificing quality.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div
            className="relative min-h-[350px] rounded-2xl overflow-hidden flex items-start p-8 text-white"
            style={{
              backgroundImage: "url('/images/control.jpg')", // replace with actual image
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                You are in control
              </h3>
              <p className="text-base leading-relaxed max-w-md">
                At Kedrus, we ensure you stay in control of your product’s
                development and all key decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Covered;
