"use client";

import { useEffect, useRef, useState } from "react";
import CategoryCard from "./CategoryCard";

type Category = {
  title: string;
  image: string;
  link: string;
};

type Props = {
  categories: Category[];
};

export default function ScrollTriggeredCategories({ categories }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledDown, setHasScrolledDown] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // For mobile, show categories immediately
    if (window.innerWidth < 1024) {
      setIsVisible(true);
      return;
    }

    // Observer for categories section (desktop only)
    const categoriesObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasScrolledDown(true);
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observer for hero section (desktop only)
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasScrolledDown) {
          // Only hide if we've scrolled down before
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5, // When 50% of hero is visible
        rootMargin: "0px 0px 0px 0px",
      }
    );

    if (sectionRef.current) {
      categoriesObserver.observe(sectionRef.current);
    }

    // Find hero section
    const heroSection = document.querySelector('section:first-of-type');
    if (heroSection) {
      heroObserver.observe(heroSection);
    }

        return () => {
          const currentSectionRef = sectionRef.current;
          if (currentSectionRef) {
            categoriesObserver.unobserve(currentSectionRef);
          }
          if (heroSection) {
            heroObserver.unobserve(heroSection);
          }
        };
  }, [hasScrolledDown]);

  return (
    <section 
      ref={sectionRef}
      className="mx-auto max-w-8xl px-8 md:px-12 lg:px-16 py-10 md:py-12 bg-white"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">Shop By Categories</h2>
      </div>
      <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-[-50px]'
      }`}>
        {categories.map((c, index) => (
          <div 
            key={c.title} 
            className={`group text-center transition-all duration-700 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-[-30px]'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * 100}ms` : '0ms' 
            }}
          >
            <CategoryCard title={c.title} image={c.image} link={c.link} />
          </div>
        ))}
      </div>
    </section>
  );
}
