'use client';

import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '@/lib/data';

export default function PromoSection() {
  const promoProducts = products.filter((p) => p.originalPrice);
  const repeated = [...promoProducts, ...promoProducts, ...promoProducts]; // ulang 3x buat loop
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardWidth = 270; // card width + gap (250 + 20 padding)

  // Atur scroll ke tengah saat pertama kali render
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.scrollLeft = (repeated.length / 3) * cardWidth;
    }
  }, []);

  // Geser ke kanan
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  // Geser ke kiri
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  // Reset scroll kalau terlalu kiri atau kanan
  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = cardWidth * promoProducts.length;

    if (container.scrollLeft <= cardWidth) {
      container.scrollLeft += maxScroll;
    } else if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft -= maxScroll;
    }
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
          Sedang Promo
        </h2>

        <div className="relative flex items-center">
          {/* Tombol kiri */}
          <button
            onClick={scrollLeft}
            className="z-10 bg-[#1E293B] shadow-md rounded-full p-2 hover:bg-[#1E293B] mr-2"
          >
            <ChevronLeft className="w-6 h-6 text-[#ffffff]" />
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide flex-1"
          >
              <div
  className="flex gap-5 px-2 mx-auto"
  style={{
    width: `${cardWidth * 4}px`,
  }}
>
              {repeated.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="w-[250px] flex-shrink-0"
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>

          {/* Tombol kanan */}
          <button
            onClick={scrollRight}
            className="z-10 bg-[#1E293B] shadow-md rounded-full p-2 hover:bg-[#1E293B] ml-2"
          >
            <ChevronRight className="w-6 h-6 text-[#ffffff]" />
          </button>
        </div>
      </div>
    </section>
  );
}
