// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function ProductGallery({ product }) {
//   const images = [
//     product.image,
//     product.image,
//     product.image,
//   ];

//   const [activeImage, setActiveImage] = useState(0);

//   return (
//     <div>

//       {/* Main Image */}
//       <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#e8e8e6]">

//         <Image
//           src={images[activeImage]}
//           alt={product.name}
//           fill
//           priority
//           className="object-cover"
//           sizes="(max-width: 768px) 100vw, 50vw"
//         />

//       </div>


//       {/* Thumbnails */}
//       <div className="mt-3 grid grid-cols-3 gap-3">

//         {images.map((image, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveImage(index)}
//             className={`relative aspect-[4/5] overflow-hidden ${
//               activeImage === index
//                 ? "ring-1 ring-black"
//                 : ""
//             }`}
//           >

//             <Image
//               src={image}
//               alt={`${product.name} ${index + 1}`}
//               fill
//               className="object-cover"
//             />

//           </button>
//         ))}

//       </div>

//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProductGallery({ product }) {

  // Agar product ke paas images array hai to use karo.
  // Warna existing product.image use hoga.
  const images =
    product.images && product.images.length > 0
      ? product.images
      : [
          product.image,
          product.image,
          product.image,
          product.image,
          product.image,
        ];

  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex w-full gap-4">

      {/* ================= MAIN IMAGE ================= */}
      <div className="relative aspect-[1/1] w-full max-w-[500px] overflow-hidden bg-[#e8e8e6]">

        <Image
          src={images[activeImage]}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 90vw, 500px"
        />

        {/* Wishlist Icon */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center border border-black/10 bg-[#f5f5f3]/80 text-[10px] transition hover:bg-black hover:text-white"
        >
          ♡
        </button>

      </div>


      {/* ================= THUMBNAILS ================= */}
      <div className="flex w-[45px] shrink-0 flex-col gap-2">

        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveImage(index)}
            aria-label={`View image ${index + 1}`}
            className={`relative aspect-square w-full overflow-hidden bg-[#e8e8e6] transition ${
              activeImage === index
                ? "ring-1 ring-black"
                : "opacity-80 hover:opacity-100"
            }`}
          >

            <Image
              src={image}
              alt={`${product.name} ${index + 1}`}
              fill
              className="object-cover"
              sizes="45px"
            />

          </button>
        ))}

      </div>

    </div>
  );
}