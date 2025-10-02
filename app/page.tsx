import Image from "next/image";
import ScrollTriggeredCategories from "./components/ScrollTriggeredCategories";

const categories = [
  { 
    title: "Half Sleeve T-shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/ZYToAesRsdsW1822B0dZll280FqmAwTsD5amASyv.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/half-sleeve-t-shirt"
  },
  { 
    title: "Kids T-shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/hvbgvVMk2j2gc9LOjz2p17mSUlq39I6ZYNykwgtk.jpg",
    link: "https://deenfashionbd.com/category/kids-boys/kids-t-shirt"
  },
  { 
    title: "Football Jersey", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/VrpwmMvEKBtmpEMgl9K5aP1fYJJNFp0mRBIUYp6n.jpg",
    link: "https://deenfashionbd.com/category/sports/football-jersey"
  },
  { 
    title: "Polo T-shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/Ph4exTupZUChKLJhN25ANmGajY6JjPo9L0HIGdy1.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/polo-t-shirt"
  },
  { 
    title: "Calligraphy T-Shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/bo5PXYUHuTBfIkrxYqa6hwpChU5PcnUJHEzSXVxa.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/calligraphy-t-shirt"
  },
  { 
    title: "Sports T- shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/5f8kqZqx1umATm7VoyyBuzvLU7v36f5B4s21iphZ.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/sports-t-shirt"
  },
  { 
    title: "Sports Polo T-Shirt", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/32ERx2mTza2n0mfPlBMIAtnqwzW5gHDTlAWDay3C.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/sports-polo-t-shirt"
  },
  { 
    title: "Sports Trouser", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/tCKbZSZhUbAjwU5hHTtjwvnYtVxunzqSA7oYAySU.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/sports-trouser"
  },
  { 
    title: "Joggers", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/AZO9UCQrfgVrnJyBTtOhp0hWTGNovQQUrZ8Zom4O.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/joggers"
  },
  { 
    title: "Winter Collection", 
    image: "https://deenfashionbd.com/public/storage/images/subCategory/YGAubYsnJW7IOC0d2ke0hrxVcMac5Au9b1u2MO1E.jpg",
    link: "https://deenfashionbd.com/category/mens-fashion/winter-collection"
  }
];


export default function Home() {
  return (
    <main>
      {/* Hero banner */}
      <section className="relative">
        <div className="w-full h-[400px] md:h-[600px]">
          {/* Mobile Hero Image */}
          <Image 
            src="https://deenfashionbd.com/public/storage/images/slider/4cvlSmYy87wQS4PwtpPV9hG89B2JKBDXCcjaGgMM.jpg" 
            alt="Hero Banner Mobile" 
            fill
            className="object-contain md:hidden bg-gray-100"
            priority
          />
          {/* Desktop Hero Image */}
          <Image 
            src="https://deenfashionbd.com/public/storage/images/slider/0rXWDqaCBN0DY1t9uYO0F9JfCCah5zoONEeRlxWB.jpg" 
            alt="Hero Banner Desktop" 
            fill
            className="object-cover hidden md:block"
            priority
          />
        </div>
      </section>

      {/* Categories */}
      <ScrollTriggeredCategories categories={categories} />

      {/* Promotional Cards */}
      <section className="mx-auto max-w-8xl px-8 md:px-12 lg:px-16 py-10 md:py-12 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* T-Shirt and Trouser */}
          <div className="group relative overflow-hidden">
            <a href="#" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/vcfIdFzDG6I9ZNvvHlI48ofFL9QP83vSxmbyrfhP.jpg"
                  alt="T-Shirt and Trouser"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  T-Shirt and Trouser
                </h3>
              </div>
            </a>
          </div>

          {/* Kids T-shirt */}
          <div className="group relative overflow-hidden">
            <a href="https://www.deenfashionbd.com/category/kids-boys/kids-t-shirt" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/IuFTS1LmSn1HszBj62qnf1WybuwMbbpS4rpJ02AP.jpg"
                  alt="Kids T-shirt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  Kids T-shirt
                </h3>
              </div>
            </a>
          </div>

          {/* Half Sleeve T-shirt */}
          <div className="group relative overflow-hidden">
            <a href="https://www.deenfashionbd.com/category/mens-fashion/half-sleeve-t-shirt" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/qgeMueIzENLOdlhOHak4G0JiWMEoALRkAAPIhRyJ.jpg"
                  alt="Half Sleeve T-shirt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  Half Sleeve T-shirt
                </h3>
              </div>
            </a>
          </div>

          {/* Calligraphy T-Shirt */}
          <div className="group relative overflow-hidden">
            <a href="https://www.deenfashionbd.com/category/mens-fashion/calligraphy-t-shirt" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/3cD0cYNuRAF4aLhAQFvSuQJbGMeeKix10xhmynQX.jpg"
                  alt="Calligraphy T-Shirt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  Calligraphy T-Shirt
                </h3>
              </div>
            </a>
          </div>

          {/* Full Sleeve */}
          <div className="group relative overflow-hidden">
            <a href="https://www.deenfashionbd.com/category/mens-fashion/full-sleeve-t-shirt" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/Hao04eoaXcqKIhls8NTdZKNkhf1NPIal5GykSnLX.jpg"
                  alt="Full Sleeve"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  Full Sleeve
                </h3>
              </div>
            </a>
          </div>

          {/* Polo T-shirt */}
          <div className="group relative overflow-hidden">
            <a href="https://www.deenfashionbd.com/category/mens-fashion/polo-t-shirt" className="block">
              <div className="aspect-[4/5] relative">
                <Image
                  src="https://deenfashionbd.com/public/storage/images/banner/mhMddey9RPJra5z8jv2JLw27ttCeKjLqZDVNWPrr.jpg"
                  alt="Polo T-shirt"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold text-center">
                  Polo T-shirt
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
