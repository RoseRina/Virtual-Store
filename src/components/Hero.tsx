import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Belanja Online di Virtual Store
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Dapatkan produk berkualitas dengan harga terbaik. Pengalaman berbelanja yang aman, nyaman, dan menyenangkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/products" 
              className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition text-center"
            >
              Belanja Sekarang
            </Link>
            <Link 
              href="/about" 
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition text-center"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute right-0 top-0 h-full w-1/3 bg-opacity-10 overflow-hidden hidden lg:block">
        <div className="absolute inset-0 bg-white/5 transform rotate-12 translate-x-1/2 -translate-y-1/4 rounded-full"></div>
        <div className="absolute inset-0 bg-white/5 transform -rotate-12 translate-x-1/3 translate-y-1/4 rounded-full"></div>
      </div>
    </div>
  );
} 