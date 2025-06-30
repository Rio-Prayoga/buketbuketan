import { testimonials } from '@/lib/data';

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1E293B] mb-12">
          Testimoni Pelanggan Kami
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#648DB3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
