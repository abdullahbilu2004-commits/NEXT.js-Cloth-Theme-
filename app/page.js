import Collections from "@/components/home/Collections";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import Newsletter from "@/components/home/Newsletter";
import NewThisWeek from "@/components/home/NewThisWeek";

export default function Home() {
  return (
   <>
   <Hero />
   <NewThisWeek />
   <Collections />
   <Newsletter />
   <FeaturedProducts />
   </>
  );
}
