import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block"
    >

      {/* IMAGE */}
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e9e9e7]">

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />

      </div>


      {/* PRODUCT INFO */}
      <div className="pt-2">

        <div className="flex items-start justify-between gap-3">

          <div>

            <p className="text-[9px] text-[#888]">
              {product.category}
          </p>

            <h3 className="mt-1 text-[11px] font-medium">
              {product.name}
            </h3>

          </div>

          <span className="shrink-0 text-[10px]">
            ${product.price}
          </span>

        </div>

      </div>

    </Link>
  );
}