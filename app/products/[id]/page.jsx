// import Link from "next/link";
// import Image from "next/image";
// import { notFound } from "next/navigation";

// import { products } from "@/lib/products";

// import ProductGallery from "@/components/products/ProductGallery";

// export default async function ProductDetailPage({ params }) {
//   const { id } = await params;

//   const product = products.find(
//     (item) => item.id === Number(id)
//   );

//   if (!product) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-[#f5f5f3] px-5 py-10 text-[#222] md:px-10">

//       <div className="mx-auto max-w-[1100px]">

//         {/* Breadcrumb */}
//         <div className="mb-8 text-[9px] text-[#777]">

//           <Link href="/">
//             Home
//           </Link>

//           <span className="mx-2">
//             /
//           </span>

//           <Link href="/products">
//             Products
//           </Link>

//           <span className="mx-2">
//             /
//           </span>

//           {product.name}

//         </div>


//         {/* PRODUCT */}
//         <div className="grid gap-10 md:grid-cols-2">


//           {/* Gallery */}
//           <ProductGallery
//             product={product}
//           />


//           {/* Details */}
//           <div className="flex flex-col">

//             <p className="text-[10px] uppercase text-[#777]">
//               {product.category}
//             </p>

//             <h1 className="mt-2 text-[28px] font-bold uppercase leading-none tracking-[-0.04em]">
//               {product.name}
//             </h1>

//             <p className="mt-5 text-[14px]">
//               ${product.price}
//             </p>


//             {/* Description */}
//             <p className="mt-8 max-w-[400px] text-[11px] leading-[1.7] text-[#666]">
//               A minimal and comfortable everyday piece
//               designed with a clean silhouette and premium
//               quality fabric.
//             </p>


//             {/* SIZE */}
//             <div className="mt-8">

//               <p className="mb-3 text-[10px] font-semibold uppercase">
//                 Select Size
//               </p>

//               <div className="flex gap-2">

//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     className="flex h-8 min-w-8 items-center justify-center border border-black/15 px-2 text-[10px] hover:bg-black hover:text-white"
//                   >
//                     {size}
//                   </button>
//                 ))}

//               </div>

//             </div>


//             {/* ADD CART */}
//             <button
//               className="mt-8 flex h-11 w-full items-center justify-center bg-black text-[11px] uppercase tracking-[0.08em] text-white transition hover:bg-[#333]"
//             >
//               Add To Cart
//             </button>


//             {/* Wishlist */}
//             <button
//               className="mt-3 flex h-11 w-full items-center justify-center border border-black/15 text-[11px] uppercase tracking-[0.08em] hover:bg-black hover:text-white"
//             >
//               Add To Wishlist
//             </button>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }


import Link from "next/link";
import { notFound } from "next/navigation";

import { products } from "@/lib/products";

import ProductGallery from "@/components/products/ProductGallery";
import ProductDetails from "@/components/products/ProductDetails";

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#222]">

      <div className="mx-auto max-w-[1200px] px-5 pb-20 pt-8 md:px-8 lg:px-10">

        {/* ================= BREADCRUMB ================= */}
        <div className="mb-10 text-[9px] text-[#777]">

          <Link
            href="/"
            className="transition-opacity hover:opacity-50"
          >
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/products"
            className="transition-opacity hover:opacity-50"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <span>
            {product.name}
          </span>

        </div>


        {/* ================= PRODUCT AREA ================= */}
        <div className="mx-auto grid max-w-[960px] items-start gap-8 md:grid-cols-[minmax(0,1fr)_190px] lg:grid-cols-[minmax(0,1fr)_190px]">

          {/* ================= LEFT ================= */}
          <ProductGallery product={product} />


          {/* ================= RIGHT ================= */}
          <ProductDetails product={product} />

        </div>

      </div>

    </main>
  );
}