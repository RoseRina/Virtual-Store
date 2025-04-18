import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // Format harga ke Rupiah
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  // Menghitung harga setelah diskon
  const discountedPrice = product.discount 
    ? product.price - (product.price * (product.discount / 100)) 
    : product.price;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Link href={`/products/${product.id}`}>
        <div className="relative h-48 w-full">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.discount && (
            <div className="absolute top-2 right-2 bg-accent text-white text-sm font-bold px-2 py-1 rounded-md">
              Diskon {product.discount}%
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{product.name}</h3>
          <p className="text-gray-500 text-sm line-clamp-2 mt-1 h-10">{product.description}</p>
          <div className="mt-2">
            {product.discount ? (
              <div className="flex flex-col">
                <span className="line-through text-gray-400 text-sm">{formatPrice(product.price)}</span>
                <span className="text-primary font-bold">{formatPrice(discountedPrice)}</span>
              </div>
            ) : (
              <span className="text-primary font-bold">{formatPrice(product.price)}</span>
            )}
          </div>
          <button className="w-full mt-3 bg-primary text-white py-2 rounded-md hover:bg-primary/90 transition">
            Tambah ke Keranjang
          </button>
        </div>
      </Link>
    </div>
  );
} 