import { Button } from '@/components/ui/button';

const specialProducts = [
  {
    id: 1,
    name: 'BUKET ARTIFICIAL',
    description: 'Unfailing Love Bouquet',
    image: '/img/sp1.jpeg'
  },
  {
    id: 2,
    name: 'BUKET AKRILIK',
    description: 'Sweet and Beautiful Flowers',
    image: '/img/sp2.jpeg'
  },
  {
    id: 2,
    name: 'BUKET MONEY',
    description: 'Sweet and Beautiful Flowers',
    image: '/img/sp3.jpeg'
  },
];

export default function SpecialProductsSection() {
  return (
    <section className="py-16 bg-[#3C5675] text-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Produk Spesial
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {specialProducts.map((product) => (
            <div key={product.id} className="text-center">
              <div className="relative mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-48 mx-auto rounded-lg object-cover shadow-lg"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-white mb-4 italic">{product.description}</p>
              <Button 
                variant="outline" 
                className="border-[#1E293B] text-[#000000] hover:bg-[#1E293B] hover:text-[#ffffff] transition-colors"
              >
                Lihat Detail
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}