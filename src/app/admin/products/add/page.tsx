'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ProductFormData } from '@/types/product';

export default function AddProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  const [formData, setFormData] = useState<ProductFormData>({
    name: '',
    description: '',
    price: 0,
    discount: 0,
    imageUrl: '',
    category: '',
    stock: 0
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'price' || name === 'discount' || name === 'stock') {
      setFormData({
        ...formData,
        [name]: value === '' ? 0 : parseFloat(value)
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Menampilkan pratinjau gambar
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Dalam implementasi nyata, Anda akan mengunggah file ke server/cloud storage
      // dan menyimpan URL-nya. Untuk demo, kita hanya gunakan URL gambar dummy.
      setFormData({
        ...formData,
        imageUrl: 'https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800'
      });
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });
    
    // Validasi form
    if (!formData.name || !formData.description || !formData.price || !formData.category || !formData.stock) {
      setMessage({ type: 'error', text: 'Semua field wajib diisi kecuali diskon' });
      setIsLoading(false);
      return;
    }
    
    // Simulasi penambahan produk (dalam implementasi nyata, ini akan menjadi API call)
    setTimeout(() => {
      // Anggap berhasil ditambahkan
      setMessage({ type: 'success', text: 'Produk berhasil ditambahkan!' });
      setIsLoading(false);
      
      // Redirect ke halaman produk setelah berhasil
      setTimeout(() => {
        router.push('/admin/products');
      }, 2000);
    }, 1500);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Tambah Produk Baru</h1>
        <Link 
          href="/admin/products" 
          className="text-gray-600 hover:text-gray-900 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
          </svg>
          <span>Kembali</span>
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        {message.text && (
          <div className={`mb-4 p-4 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
            {message.text}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Produk <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Kategori <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Pilih Kategori</option>
                <option value="Elektronik">Elektronik</option>
                <option value="Pakaian">Pakaian</option>
                <option value="Olahraga">Olahraga</option>
                <option value="Rumah Tangga">Rumah Tangga</option>
                <option value="Makanan & Minuman">Makanan & Minuman</option>
                <option value="Kesehatan & Kecantikan">Kesehatan & Kecantikan</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Harga (Rp) <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price === 0 ? '' : formData.price}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="discount" className="block text-sm font-medium text-gray-700 mb-1">
                Diskon (%)
              </label>
              <input
                type="number"
                id="discount"
                name="discount"
                value={formData.discount === 0 ? '' : formData.discount}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                min="0"
                max="100"
              />
            </div>
            
            <div>
              <label htmlFor="stock" className="block text-sm font-medium text-gray-700 mb-1">
                Stok <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="stock"
                name="stock"
                value={formData.stock === 0 ? '' : formData.stock}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
                min="0"
              />
            </div>
            
            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Gambar Produk <span className="text-red-500">*</span>
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleImageChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                accept="image/*"
                required
              />
              {imagePreview && (
                <div className="mt-2 relative h-32 w-full">
                  <Image 
                    src={imagePreview} 
                    alt="Preview" 
                    className="object-contain rounded-md border border-gray-200"
                    fill
                  />
                </div>
              )}
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Deskripsi <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                rows={4}
                required
              />
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => router.push('/admin/products')}
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2 hover:bg-gray-400 transition"
            >
              Batal
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition flex items-center"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Menyimpan...</span>
                </>
              ) : (
                <span>Simpan Produk</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 