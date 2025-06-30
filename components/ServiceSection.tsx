import { Clock, DollarSign, Award } from 'lucide-react';

const services = [
  {
    icon: Clock,
    title: 'Proses Cepat & Mudah',
    description: 'Pengiriman cepat dan pemesanan yang mudah untuk kemudahan kamu.'
  },
  {
    icon: DollarSign,
    title: 'Harga Murah',
    description: 'Dengan kenyamanan menarik selembar dengan harga terjemur.'
  },
  {
    icon: Award,
    title: 'Barang Berkualitas',
    description: 'Dengan bahan yang berkesinambungan dengan bahan berkesinambungan.'
  }
];

export default function ServiceSection() {
  return (
    <section className="py-16 bg-[#3C5675] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Melayani 24 jam, cepat,
        </h2>
        <p className="text-xl mb-12 text-white">
          Pengiriman wilayah Jakarta dan Indramayu.
        </p>
        
        <p className="text-[#ffffff] mb-12 max-w-4xl mx-auto leading-relaxed">
          Kami dengan senang hati menyajikan pemesanan terbaik menggunakan bunga & snack lainnya tapi beberapkan. 
          Terkenal dengan pelayanan istimewa kami yang dapat anda sebutuh setiap anak dengan kelas, maka takkan merupain penyampaian 
          menyampaikan dengan kebutuhan anda. kami juga memberikan diskon secara mengapa untuk mereka yang bergabung dengan kami. 
          Para jalan memutuskan bundar & mencapai masukan terdepan kamu jaringan promo, cepat tanggap.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-[#901E3E]" />
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}