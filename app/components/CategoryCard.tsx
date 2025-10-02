import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  link: string;
};

export default function CategoryCard({ title, image }: Props) {
  return (
    <div className="group text-center">
      <div className="aspect-[4/5] w-full overflow-hidden rounded border border-neutral-200 bg-white relative">
            <Link href="/shop">
          <Image
            src={image}
            alt={title}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
          />
          {/* Title overlay with white background */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white px-5 py-0 rounded-sm">
            <span className="text-xs font-medium text-neutral-900 leading-tight whitespace-nowrap hover:text-amber-600 transition-colors duration-200">{title}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}


