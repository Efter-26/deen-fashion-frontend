import Image from "next/image";
import Link from "next/link";
import ProductPageClient from "./ProductPageClient";

// Generate static params for all product IDs
export async function generateStaticParams() {
  // In a real app, this would fetch from your API
  const productIds = [
    "1001", "1002", "1003", "1004", "1005", 
    "1006", "1007", "1008", "1009", "1010", 
    "1011", "1012"
  ];
  
  return productIds.map((id) => ({
    id: id,
  }));
}

// Mock product data - in real app this would come from API
const productData = {
  id: "1006",
  title: "Brand Value Premium Half Sleeve T-Shirt",
  originalPrice: 750,
  currentPrice: 420,
  savings: 330,
  code: "1006",
  color: "Multicolor",
  description: "Experience unmatched comfort with our 100% premium cotton t-shirt, featuring a bold and modern design. With a solid 180 GSM fabric weight, it's soft, durable and breathable - perfect for everyday wear. Proudly made in Deen Fashion's in-house factory, ensuring authenticity and quality in every stitch.",
  features: [
    "Crafted from Organic Ringpun Combed Compact Cotton for superior softness and strength",
    "Made with 100% Pure Cotton ensuring comfort and breathability",
    "Regular Fit - designed for a relaxed yet structured silhouette",
    "Treated with Reactive Dye and enzyme silicon wash for vibrant color, smooth texture, and a refined finish",
    "Pre-shrunk to reduce post-wash shrinkage and maintain perfect sizing"
  ],
  sizeChart: [
    { size: "M", chest: "38", length: "27", sleeve: "8.5" },
    { size: "L", chest: "40", length: "28", sleeve: "8.5" },
    { size: "XL", chest: "42", length: "29", sleeve: "9" },
    { size: "XXL", chest: "44", length: "30", sleeve: "9" }
  ],
  images: [
    "https://deenfashionbd.com/public/storage/images/subCategory/ZYToAesRsdsW1822B0dZll280FqmAwTsD5amASyv.jpg",
    "https://deenfashionbd.com/public/storage/images/subCategory/hvbgvVMk2j2gc9LOjz2p17mSUlq39I6ZYNykwgtk.jpg",
    "https://deenfashionbd.com/public/storage/images/subCategory/VrpwmMvEKBtmpEMgl9K5aP1fYJJNFp0mRBIUYp6n.jpg"
  ],
  relatedProducts: [
    {
      id: "1001",
      title: "Mens Premium Half Sleeve T-Shirt Combo",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/ZYToAesRsdsW1822B0dZll280FqmAwTsD5amASyv.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1002",
      title: "Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/hvbgvVMk2j2gc9LOjz2p17mSUlq39I6ZYNykwgtk.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1003",
      title: "Stronger Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/VrpwmMvEKBtmpEMgl9K5aP1fYJJNFp0mRBIUYp6n.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1004",
      title: "Brand Value Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/Ph4exTupZUChKLJhN25ANmGajY6JjPo9L0HIGdy1.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1005",
      title: "Mens Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/bo5PXYUHuTBfIkrxYqa6hwpChU5PcnUJHEzSXVxa.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1007",
      title: "King Mens Premium Sports T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/5f8kqZqx1umATm7VoyyBuzvLU7v36f5B4s21iphZ.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1008",
      title: "Mens Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/32ERx2mTza2n0mfPlBMIAtnqwzW5gHDTlAWDay3C.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    },
    {
      id: "1009",
      title: "Signature Premium Half Sleeve T-Shirt",
      image: "https://deenfashionbd.com/public/storage/images/subCategory/tCKbZSZhUbAjwU5hHTtjwvnYtVxunzqSA7oYAySU.jpg",
      originalPrice: 750,
      currentPrice: 420,
      savings: 330
    }
  ]
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productData; // In real app, fetch by params.id

  return (
    <ProductPageClient product={product} />
  );
}
