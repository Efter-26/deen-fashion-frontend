import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  price: string;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <Link href="#" className="group block">
      <div className="aspect-[3/4] w-full overflow-hidden rounded border border-neutral-200 bg-white">
        <Image
          src={image}
          alt={title}
          width={600}
          height={800}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-3">
        <h4 className="text-sm font-medium line-clamp-1">{title}</h4>
        <p className="text-sm text-neutral-600">{price}</p>
      </div>
    </Link>
  );
}


