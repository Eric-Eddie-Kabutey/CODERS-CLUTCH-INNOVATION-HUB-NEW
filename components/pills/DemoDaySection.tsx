const DemoDaySection = () => {
  return (
    <div className="bg-[#F9A03F] text-white min-h-screen flex flex-col items-start justify-center p-8 sm:p-16 lg:p-24">
      <div className="w-full max-w-4xl">
        {" "}
        {/* Adjust max-width as needed */}
        <p className="text-base sm:text-lg uppercase tracking-wider opacity-90 mb-3 sm:mb-4">
          {" // OUR INITIATIVES"}
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-8 sm:mb-10">
          BIH Inhouse <br />
          Demo Day
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed sm:leading-loose opacity-95">
          BlueSPACE Innovation Hub’s{" "}
          <strong className="font-semibold">in-house Demo Day</strong> showcases
          distinctive products and innovations developed by the BIH team, along
          with demos from participants from{" "}
          <strong className="font-semibold">Lancaster University</strong> and
          other companies, highlighting what they are currently working on
        </p>
      </div>
    </div>
  );
};

export default DemoDaySection;
