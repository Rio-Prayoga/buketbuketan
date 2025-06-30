import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/img/banner.jpg")'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-[#E2E8F0]">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Dimana Setiap Klopak
            <br />
            <span className="text-[#E2E8F0]">Menceritakan sebuah Kisah</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Buket Kekinian Harga Terjangkau
          </p>
          <Button 
            size="lg" 
            className="bg-[#7F1D1D] hover:bg-[#511D43] text-white px-8 py-3 text-lg rounded-lg transition-colors"
          >
            Pilih Momen Anda
          </Button>
        </div>
      </div>
    </div>
  );
}