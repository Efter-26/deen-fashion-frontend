"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Product = {
  id: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
  savings: number;
  code: string;
  color: string;
  description: string;
  features: string[];
  sizeChart: Array<{
    size: string;
    chest: string;
    length: string;
    sleeve: string;
  }>;
  images: string[];
  relatedProducts: Array<{
    id: string;
    title: string;
    image: string;
    originalPrice: number;
    currentPrice: number;
    savings: number;
  }>;
};

type Props = {
  product: Product;
};

export default function ProductPageClient({ product }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("L");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2">
        <div className="mx-auto max-w-7xl px-4">
          <nav className="text-sm">
            <Link href="/" className="text-indigo-600 hover:underline">Home</Link>
            <span className="mx-2 text-gray-500">/</span>
            <Link href="/shop" className="text-indigo-600 hover:underline">Shop</Link>
            <span className="mx-2 text-gray-500">/</span>
            <span className="text-gray-700">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Details Section */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Product Images */}
            <div className="space-y-4">
              {/* Main Product Image */}
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.title}
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Premium Badge */}
                <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  PREMIUM
                </div>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-indigo-600' : 'border-gray-200'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="space-y-6">
              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-900">{product.title}</h1>

              {/* Price Information */}
              <div className="space-y-2">
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-indigo-600">৳{product.currentPrice}</span>
                  <span className="text-xl text-gray-500 line-through">৳{product.originalPrice}</span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
                    Save ৳{product.savings}
                  </span>
                </div>
              </div>

              {/* Product Code */}
              <div className="text-sm text-gray-600">
                <span className="font-medium">Code:</span> {product.code}
              </div>

              {/* Color Selection */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Color: {product.color}</span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gray-400 rounded-full border-2 border-gray-300"></div>
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-3">
                <span className="text-sm font-medium text-gray-700">Select Size</span>
                <div className="flex gap-2">
                  {product.sizeChart.map((size) => (
                    <button
                      key={size.size}
                      onClick={() => setSelectedSize(size.size)}
                      className={`px-4 py-2 border rounded-lg text-sm font-medium transition-colors ${
                        selectedSize === size.size
                          ? 'border-indigo-600 bg-indigo-600 text-white'
                          : 'border-gray-300 text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {size.size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <span className="text-sm font-medium text-gray-700">Quantity</span>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Add To Cart
                </button>
                <button className="flex-1 bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                  Order Now
                </button>
              </div>

              {/* Product Description */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Description</h3>
                <p className="text-gray-600 leading-relaxed">{product.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Fabric & Finish Details</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-gray-600">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Chart */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">Size Chart</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Size</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Chest (Round)</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Length</th>
                        <th className="border border-gray-300 px-4 py-2 text-left font-semibold text-gray-900">Sleeve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.sizeChart.map((size) => (
                        <tr key={size.size} className="bg-white">
                          <td className="border border-gray-300 px-4 py-2 font-medium text-gray-900">{size.size}</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">{size.chest}</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">{size.length}</td>
                          <td className="border border-gray-300 px-4 py-2 text-gray-700">{size.sleeve}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600">Size chart - In inches (Expected Deviation &lt; 3%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">RELATED PRODUCTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-sm mb-2 overflow-hidden" style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      lineHeight: '1.4',
                      height: '2.8em'
                    }}>
                      {relatedProduct.title}
                    </h3>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-indigo-600">৳{relatedProduct.currentPrice}</span>
                        <span className="text-sm text-gray-500 line-through">৳{relatedProduct.originalPrice}</span>
                      </div>
                      <p className="text-sm text-red-600 font-medium">Save ৳{relatedProduct.savings}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
