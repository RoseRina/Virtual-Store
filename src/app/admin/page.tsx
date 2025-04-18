'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Periksa status login
    const adminLoggedIn = localStorage.getItem('adminLoggedIn');
    
    // Redirect ke dashboard jika sudah login, ke login jika belum
    if (adminLoggedIn) {
      router.push('/admin/dashboard');
    } else {
      router.push('/admin/login');
    }
  }, [router]);
  
  // Tampilkan loading state sementara redirect berjalan
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
} 