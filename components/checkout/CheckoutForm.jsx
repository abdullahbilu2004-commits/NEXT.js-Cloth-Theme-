// "use client";

// import { useState } from "react";

// export default function CheckoutForm({
//   initialData,
//   onSubmit,
// }) {
//   const [form, setForm] = useState({
//     email: initialData?.email || "",
//     phone: initialData?.phone || "",
//     firstName: initialData?.firstName || "",
//     lastName: initialData?.lastName || "",
//     country: initialData?.country || "",
//     state: initialData?.state || "",
//     address: initialData?.address || "",
//     city: initialData?.city || "",
//     postalCode: initialData?.postalCode || "",
//   });


//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     onSubmit(form);
//   };


//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="max-w-[600px]"
//     >

//       {/* ================= CONTACT INFO ================= */}
//       <section>

//         <h2 className="text-[10px] font-medium uppercase">
//           Contact Info
//         </h2>


//         <div className="mt-3 space-y-2">

//           <input
//             required
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Email"
//             className="h-7 w-full border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//           />

//           <input
//             required
//             type="tel"
//             name="phone"
//             value={form.phone}
//             onChange={handleChange}
//             placeholder="Phone"
//             className="h-7 w-full border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//           />

//         </div>

//       </section>


//       {/* ================= SHIPPING ADDRESS ================= */}
//       <section className="mt-6">

//         <h2 className="text-[10px] font-medium uppercase">
//           Shipping Address
//         </h2>


//         <div className="mt-3 space-y-2">

//           {/* First + Last */}
//           <div className="grid grid-cols-2 gap-2">

//             <input
//               required
//               name="firstName"
//               value={form.firstName}
//               onChange={handleChange}
//               placeholder="First Name"
//               className="h-7 border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//             />

//             <input
//               required
//               name="lastName"
//               value={form.lastName}
//               onChange={handleChange}
//               placeholder="Last Name"
//               className="h-7 border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//             />

//           </div>


//           {/* Country */}
//           <div className="relative">

//             <select
//               required
//               name="country"
//               value={form.country}
//               onChange={handleChange}
//               className="h-7 w-full appearance-none border border-black/10 bg-transparent px-3 text-[9px] outline-none"
//             >
//               <option value="">
//                 Country
//               </option>

//               <option value="Pakistan">
//                 Pakistan
//               </option>

//               <option value="United States">
//                 United States
//               </option>

//               <option value="United Kingdom">
//                 United Kingdom
//               </option>

//               <option value="Canada">
//                 Canada
//               </option>

//             </select>

//             <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[12px]">
//               ⌄
//             </span>

//           </div>


//           {/* State */}
//           <input
//             required
//             name="state"
//             value={form.state}
//             onChange={handleChange}
//             placeholder="State / Region"
//             className="h-7 w-full border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//           />


//           {/* Address */}
//           <input
//             required
//             name="address"
//             value={form.address}
//             onChange={handleChange}
//             placeholder="Address"
//             className="h-7 w-full border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//           />


//           {/* City + Postal */}
//           <div className="grid grid-cols-2 gap-2">

//             <input
//               required
//               name="city"
//               value={form.city}
//               onChange={handleChange}
//               placeholder="City"
//               className="h-7 border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//             />

//             <input
//               required
//               name="postalCode"
//               value={form.postalCode}
//               onChange={handleChange}
//               placeholder="Postal Code"
//               className="h-7 border border-black/10 bg-transparent px-3 text-[9px] outline-none placeholder:text-[#777] focus:border-black/30"
//             />

//           </div>

//         </div>

//       </section>


//       {/* ================= NEXT ================= */}
//       <button
//         type="submit"
//         className="mt-2 flex h-7 w-full max-w-[292px] items-center justify-between bg-[#dededc] px-3 text-[10px] transition hover:bg-black hover:text-white"
//       >
//         <span>Shipping</span>

//         <span className="text-[17px] font-light">
//           ⟶
//         </span>
//       </button>

//     </form>
//   );
// }


"use client";

import { useState } from "react";

export default function CheckoutForm({
  initialData,
  onSubmit,
}) {
  const [form, setForm] = useState({
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    country: initialData?.country || "",
    state: initialData?.state || "",
    address: initialData?.address || "",
    city: initialData?.city || "",
    postalCode: initialData?.postalCode || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[650px]"
    >

      {/* ================= CONTACT INFO ================= */}
      <section>

        <h2 className="text-[14px] font-medium uppercase tracking-[0.04em]">
          Contact Info
        </h2>

        <div className="mt-5 space-y-3">

          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="h-11 w-full border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
          />

          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="h-11 w-full border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
          />

        </div>

      </section>


      {/* ================= SHIPPING ADDRESS ================= */}
      <section className="mt-10">

        <h2 className="text-[14px] font-medium uppercase tracking-[0.04em]">
          Shipping Address
        </h2>

        <div className="mt-5 space-y-3">

          {/* First + Last */}
          <div className="grid grid-cols-2 gap-3">

            <input
              required
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="h-11 border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
            />

            <input
              required
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="h-11 border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
            />

          </div>


          {/* Country */}
          <div className="relative">

            <select
              required
              name="country"
              value={form.country}
              onChange={handleChange}
              className="h-11 w-full appearance-none border border-black/10 bg-transparent px-4 text-[13px] outline-none"
            >
              <option value="">
                Country
              </option>

              <option value="Pakistan">
                Pakistan
              </option>

              <option value="United States">
                United States
              </option>

              <option value="United Kingdom">
                United Kingdom
              </option>

              <option value="Canada">
                Canada
              </option>

            </select>

            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[18px]">
              ⌄
            </span>

          </div>


          {/* State */}
          <input
            required
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State / Region"
            className="h-11 w-full border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
          />


          {/* Address */}
          <input
            required
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            className="h-11 w-full border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
          />


          {/* City + Postal */}
          <div className="grid grid-cols-2 gap-3">

            <input
              required
              name="city"
              value={form.city}
              onChange={handleChange}
              placeholder="City"
              className="h-11 border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
            />

            <input
              required
              name="postalCode"
              value={form.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              className="h-11 border border-black/10 bg-transparent px-4 text-[13px] outline-none placeholder:text-[#777] focus:border-black/30"
            />

          </div>

        </div>

      </section>


      {/* ================= NEXT ================= */}
      <button
        type="submit"
        className="mt-6 cursor-pointer flex h-11 w-full max-w-[360px] items-center justify-between bg-[#dededc] px-5 text-[12px] uppercase tracking-[0.05em] transition hover:bg-black hover:text-white"
      >
        <span>
          Shipping
        </span>

        <span className="text-[22px]  font-light">
          ⟶
        </span>

      </button>

    </form>
  );
}

