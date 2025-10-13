import Image from "next/image";
import Link from "next/link";

interface ProgramCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string | React.ReactNode; // Allow ReactNode for <br />
  description: string;
  buttonText?: string;
  buttonLink?: string;
  badgeText?: string;
  imageCredit?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText = "Learn More",
  buttonLink = "#",
  badgeText,
  imageCredit,
}) => {
  return (
    <div className="flex flex-col">
      <div className="relative mb-4 sm:mb-6 group">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600} // Adjust as per your image aspect ratio
          height={400} // Adjust as per your image aspect ratio
          className="w-full h-auto object-cover rounded-xl sm:rounded-2xl aspect-[3/2]" // Maintain aspect ratio
        />
        {imageCredit && (
          <span className="absolute bottom-2 right-2 text-xs text-gray-400 opacity-70 group-hover:opacity-100 transition-opacity duration-200 bg-black/30 px-1 rounded">
            {imageCredit}
          </span>
        )}
      </div>

      {badgeText && (
        <span className="text-xs text-gray-400 mb-1">{badgeText}</span>
      )}

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6 sm:mb-8 flex-grow">
        {description}
      </p>
      <div className="mt-auto">
        {" "}
        {/* Pushes button to the bottom if descriptions have varying lengths */}
        <Link
          href={buttonLink}
          className="inline-block bg-[#4A4A4A] hover:bg-[#5A5A5A] text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-lg transition-colors duration-200 text-sm sm:text-base"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
