"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // For default back behavior
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button"; // Adjust path if needed
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"; // Adjust path if needed
import { cn } from "@/lib/utils"; // For className merging

// Define the type for a single breadcrumb item
export interface BreadcrumbEntry {
  label: string;
  href?: string;
}

// Define the props for the HeroSection component
export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbEntry[];
  showBackArrow?: boolean;
  onBackClick?: () => void; // Custom back click handler
  className?: string; // Allow custom styling for the section
  titleClassName?: string;
  subtitleClassName?: string;
  backArrowContainerClassName?: string;
  breadcrumbsContainerClassName?: string;
}

const HeroSection = ({
  title,
  subtitle,
  breadcrumbs,
  showBackArrow = true, // Default to true as per the image
  onBackClick,
  className,
  titleClassName,
  subtitleClassName,
  backArrowContainerClassName,
  breadcrumbsContainerClassName,
}: HeroSectionProps) => {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      router.back();
    }
  };

  return (
    <section
      className={cn(
        "py-12 md:py-16 lg:py-20 bg-background text-foreground",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Arrow */}
        {showBackArrow && (
          <div className={cn("mb-6 md:mb-8", backArrowContainerClassName)}>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleBackClick}
              aria-label="Go back"
              className="h-10 w-10 p-0  -ml-2" // Negative margin to align better
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
          </div>
        )}

        {/* Title */}
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 md:mb-6",
            titleClassName
          )}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className={cn(
              "text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 md:mb-16 lg:mb-20",
              subtitleClassName
            )}
          >
            {subtitle}
          </p>
        )}

        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className={cn("mt-auto", breadcrumbsContainerClassName)}>
            {" "}
            {/* mt-auto can be useful in flex parent */}
            <Breadcrumb>
              <BreadcrumbList>
                {breadcrumbs.map((item, index) => (
                  <React.Fragment key={item.label + index}>
                    <BreadcrumbItem>
                      {index === breadcrumbs.length - 1 || !item.href ? (
                        <BreadcrumbPage className="text-sm font-medium text-foreground">
                          {item.label}
                        </BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link
                            href={item.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          >
                            {item.label}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator>
                        <svg
                          width="6"
                          height="10"
                          viewBox="0 0 6 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-auto text-muted-foreground"
                        >
                          <path
                            d="M1 9L5 5L1 1"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
