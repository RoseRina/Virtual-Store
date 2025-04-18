import Hero from '@/components/Hero';
import Features from '@/components/Features';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

// Data produk dummy untuk tampilan
const dummyProducts: Product[] = [
  {
    id: '1',
    name: 'Smartphone Android Terbaru',
    description: 'Smartphone dengan spesifikasi terbaik dan fitur canggih untuk kebutuhan sehari-hari.',
    price: 5499000,
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800',
    discount: 10,
    createdAt: new Date('2023-01-01'),
    updatedAt: new Date('2023-01-01'),
    category: 'Elektronik',
    stock: 15
  },
  {
    id: '2',
    name: 'Laptop Ultrabook Premium',
    description: 'Laptop tipis dan ringan dengan performa tinggi untuk produktivitas maksimal.',
    price: 15999000,
    imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800',
    createdAt: new Date('2023-01-02'),
    updatedAt: new Date('2023-01-02'),
    category: 'Elektronik',
    stock: 8
  },
  {
    id: '3',
    name: 'Kamera Mirrorless 4K',
    description: 'Kamera mirrorless dengan kemampuan merekam video 4K dan sistem autofokus cepat.',
    price: 12499000,
    imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800',
    discount: 15,
    createdAt: new Date('2023-01-03'),
    updatedAt: new Date('2023-01-03'),
    category: 'Elektronik',
    stock: 5
  },
  {
    id: '4',
    name: 'Sepatu Olahraga Premium',
    description: 'Sepatu olahraga dengan teknologi terkini untuk kenyamanan maksimal saat beraktivitas.',
    price: 1299000,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800',
    createdAt: new Date('2023-01-04'),
    updatedAt: new Date('2023-01-04'),
    category: 'Olahraga',
    stock: 20
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      
      {/* Produk Unggulan */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Produk Unggulan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Jelajahi produk unggulan kami dengan kualitas terbaik dan harga yang kompetitif
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dummyProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="/products" 
              className="bg-primary text-white font-semibold px-8 py-3 rounded-md hover:bg-primary/90 transition inline-block"
            >
              Lihat Semua Produk
            </a>
          </div>
        </div>
      </section>
      
      {/* Bagian Testimonial */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Apa Kata Pelanggan Kami</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Pengalaman berbelanja dari pelanggan kami yang puas dengan layanan terbaik
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  AM
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Adi Maulana</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Pengalaman berbelanja yang sangat memuaskan. Produk berkualitas dan pengiriman cepat. Akan berbelanja lagi di sini!&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-accent text-white flex items-center justify-center font-bold text-xl">
                  DP
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Dina Putri</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Produk yang saya terima sesuai dengan deskripsi. Kualitasnya sangat bagus dan harganya bersaing. Layanan pelanggan juga responsif.&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl">
                  BS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Budi Santoso</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-300">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Proses pembelian yang mudah dan cepat. Pengiriman tepat waktu. Ada sedikit masalah pada kemasan, tapi customer service sangat membantu.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Bergabunglah dengan Ribuan Pelanggan Puas Kami</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Mulai berbelanja sekarang dan nikmati pengalaman belanja online terbaik!
          </p>
          <a 
            href="/products" 
            className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition inline-block"
          >
            Belanja Sekarang
          </a>
        </div>
      </section>
    </div>
  );
}
