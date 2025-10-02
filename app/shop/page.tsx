"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

// Mock products data - in real app this would come from API
const products = [
  {
    id: "1001",
    title: "Mens Premium Half Sleeve T-Shirt Combo",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/ZYToAesRsdsW1822B0dZll280FqmAwTsD5amASyv.jpg",
    originalPrice: 1260,
    currentPrice: 1050,
    savings: 210,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1002",
    title: "Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/hvbgvVMk2j2gc9LOjz2p17mSUlq39I6ZYNykwgtk.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1003",
    title: "Stronger Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/VrpwmMvEKBtmpEMgl9K5aP1fYJJNFp0mRBIUYp6n.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Olive Green",
    brand: "Deen Fashion"
  },
  {
    id: "1004",
    title: "Brand Value Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/Ph4exTupZUChKLJhN25ANmGajY6JjPo9L0HIGdy1.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1005",
    title: "Mens Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/bo5PXYUHuTBfIkrxYqa6hwpChU5PcnUJHEzSXVxa.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1006",
    title: "King Mens Premium Sports T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/5f8kqZqx1umATm7VoyyBuzvLU7v36f5B4s21iphZ.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Sports T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1007",
    title: "Mens Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/32ERx2mTza2n0mfPlBMIAtnqwzW5gHDTlAWDay3C.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1008",
    title: "Signature Premium Half Sleeve T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/tCKbZSZhUbAjwU5hHTtjwvnYtVxunzqSA7oYAySU.jpg",
    originalPrice: 750,
    currentPrice: 420,
    savings: 330,
    category: "Design T-Shirt",
    size: ["L", "M", "XL", "XXL"],
    color: "Multicolor",
    brand: "Deen Fashion"
  },
  {
    id: "1009",
    title: "Kids Premium T-Shirt",
    image: "https://deenfashionbd.com/public/storage/images/subCategory/AZO9UCQrfgVrnJyBTtOhp0hWTGNovQQUrZ8Zom4O.jpg",
    originalPrice: 650,
    currentPrice: 380,
    savings: 270,
    category: "Kids T-Shirt",
    size: ["S", "M", "L"],
    color: "Multicolor",
    brand: "Deen Fashion"
  }
];

// Filter options
const categories = ["Design T-Shirt", "Polo", "Print", "Sports T-Shirt", "Kids T-Shirt"];
const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["Multicolor", "Black", "White", "Olive Green", "Navy Blue", "Red", "Blue"];
const brands = ["Deen Fashion", "Premium Brand", "Sports Brand"];

export default function ShopPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 420, max: 1250 });
  const [sortBy, setSortBy] = useState("Newest");
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    size: true,
    priceRange: true,
    color: true,
    brands: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const sizeMatch = selectedSizes.length === 0 || product.size.some(size => selectedSizes.includes(size));
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(product.color);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = product.currentPrice >= priceRange.min && product.currentPrice <= priceRange.max;
    
    return categoryMatch && sizeMatch && colorMatch && brandMatch && priceMatch;
  });
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="text-sm">
            <Link href="/" className="text-indigo-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/shop" className="text-indigo-600 hover:underline">mens-fashion</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">half-sleeve-t-shirt</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="bg-gray-50 border-r border-gray-300 p-6">
              {/* Filters Header */}
              <div className="flex items-center justify-center mb-6">
                <FontAwesomeIcon icon={faFilter} className="text-gray-600 mr-2" style={{ width: '16px', height: '16px' }} />
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('categories')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                >
                  <span>CATEGORIES</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedSections.categories ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.categories && (
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleCategory(category)}
                          className="mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Size */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('size')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                >
                  <span>SIZE</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedSections.size ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.size && (
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => toggleSize(size)}
                        className={`px-3 py-2 border rounded text-sm font-medium transition-colors ${
                          selectedSizes.includes(size)
                            ? 'border-indigo-600 bg-indigo-600 text-white'
                            : 'border-gray-300 text-gray-700 hover:border-gray-400'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('priceRange')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                >
                  <span>PRICE RANGE</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedSections.priceRange ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.priceRange && (
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={priceRange.min}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        placeholder="Min"
                      />
                      <input
                        type="number"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 1000 }))}
                        className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                        placeholder="Max"
                      />
                    </div>
                    <div className="relative h-2">
                      {/* Background track */}
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gray-200 rounded-lg"></div>
                      
                      {/* Active range track */}
                      <div 
                        className="absolute top-0 h-2 bg-indigo-600 rounded-lg"
                        style={{
                          left: `${(priceRange.min / 2000) * 100}%`,
                          width: `${((priceRange.max - priceRange.min) / 2000) * 100}%`
                        }}
                      ></div>
                      
                      {/* Min range input */}
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange.min}
                        onChange={(e) => {
                          const newMin = parseInt(e.target.value);
                          if (newMin <= priceRange.max) {
                            setPriceRange(prev => ({ ...prev, min: newMin }));
                          }
                        }}
                        className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        style={{ zIndex: priceRange.min > priceRange.max - 100 ? 5 : 3 }}
                      />
                      
                      {/* Max range input */}
                      <input
                        type="range"
                        min="0"
                        max="2000"
                        value={priceRange.max}
                        onChange={(e) => {
                          const newMax = parseInt(e.target.value);
                          if (newMax >= priceRange.min) {
                            setPriceRange(prev => ({ ...prev, max: newMax }));
                          }
                        }}
                        className="absolute top-0 w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        style={{ zIndex: priceRange.max < priceRange.min + 100 ? 5 : 4 }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Color */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('color')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                >
                  <span>COLOR</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedSections.color ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.color && (
                  <div className="space-y-2">
                    {colors.map((color) => (
                      <label key={color} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedColors.includes(color)}
                          onChange={() => toggleColor(color)}
                          className="mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{color}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="mb-6">
                <button
                  onClick={() => toggleSection('brands')}
                  className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3"
                >
                  <span>BRANDS</span>
                  <svg className={`w-4 h-4 transition-transform ${expandedSections.brands ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {expandedSections.brands && (
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => toggleBrand(brand)}
                          className="mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <span className="text-sm text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Content - Products */}
          <div className="flex-1">
            {/* Products Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-gray-600">
                {filteredProducts.length} ITEMS
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 text-sm"
                >
                  <option value="Newest">Newest</option>
                  <option value="Price Low to High">Price Low to High</option>
                  <option value="Price High to Low">Price High to Low</option>
                  <option value="Name A-Z">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`}>
                  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Save Badge */}
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                        Save ৳{product.savings}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-sm mb-2 group-hover:text-indigo-600 transition-colors overflow-hidden" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        lineHeight: '1.4',
                        height: '2.8em'
                      }}>
                        {product.title}
                      </h3>
                      
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-indigo-600">৳{product.currentPrice}</span>
                          <span className="text-sm text-gray-500 line-through">৳{product.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
