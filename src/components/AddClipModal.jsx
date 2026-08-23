import React, { useState } from 'react';
import { X, PlusCircle, Link as LinkIcon, ShoppingBag, Video, DollarSign, User, Sparkles } from 'lucide-react';
import { CATEGORIES, PLATFORMS } from '../data/clips';

export default function AddClipModal({ isOpen, onClose, onAddClip }) {
  const [formData, setFormData] = useState({
    title: '',
    creator: 'Saya (Affiliate Creator)',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80',
    productName: '',
    price: '',
    originalPrice: '',
    platform: 'Shopee',
    affiliateUrl: '',
    category: 'Elektronik'
  });

  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.title.trim()) newErrors.title = 'Judul klip wajib diisi';
    if (!formData.productName.trim()) newErrors.productName = 'Nama produk wajib diisi';
    if (!formData.affiliateUrl.trim()) newErrors.affiliateUrl = 'Link affiliate produk wajib diisi';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Harga valid wajib diisi';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const priceNum = Number(formData.price);
    const origPriceNum = formData.originalPrice ? Number(formData.originalPrice) : null;
    let discount = null;
    if (origPriceNum && origPriceNum > priceNum) {
      const pct = Math.round(((origPriceNum - priceNum) / origPriceNum) * 100);
      discount = `${pct}%`;
    }

    const newClip = {
      id: `clip-${Date.now()}`,
      title: formData.title,
      creator: formData.creator || 'Affiliate Creator',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      videoUrl: formData.videoUrl,
      poster: formData.poster,
      productName: formData.productName,
      price: priceNum,
      originalPrice: origPriceNum,
      discount: discount,
      platform: formData.platform,
      affiliateUrl: formData.affiliateUrl,
      category: formData.category,
      rating: 4.9,
      salesCount: 1,
      likes: 0,
      bookmarks: 0,
      views: 1,
      clicks: 0,
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddClip(newClip);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden my-8">

        <div className="p-4 sm:p-5 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
              <PlusCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Tambah Klip Affiliate Baru</h3>
              <p className="text-xs text-gray-400">Promosikan produk affiliate Anda lewat video klip menarik</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Judul Klip / Caption Video <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Contoh: Review Earbuds Bass Mantap Murah Meriah!"
              className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
            />
            {errors.title && <p className="text-xs text-rose-400 mt-1">{errors.title}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Nama Produk <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <ShoppingBag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  name="productName"
                  value={formData.productName}
                  onChange={handleChange}
                  placeholder="Nama produk di marketplace"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl pl-9 pr-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
                />
              </div>
              {errors.productName && <p className="text-xs text-rose-400 mt-1">{errors.productName}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Platform Marketplace <span className="text-rose-500">*</span>
              </label>
              <select
                name="platform"
                value={formData.platform}
                onChange={handleChange}
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-rose-500"
              >
                <option value="Shopee">Shopee</option>
                <option value="TikTok Shop">TikTok Shop</option>
                <option value="Tokopedia">Tokopedia</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              Link Affiliate Produk <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-400" />
              <input
                type="url"
                name="affiliateUrl"
                value={formData.affiliateUrl}
                onChange={handleChange}
                placeholder="https://shopee.co.id/universal-affiliate-link..."
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl pl-9 pr-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
            </div>
            {errors.affiliateUrl && <p className="text-xs text-rose-400 mt-1">{errors.affiliateUrl}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Harga Promo (Rp) <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400" />
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="149000"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl pl-9 pr-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
                />
              </div>
              {errors.price && <p className="text-xs text-rose-400 mt-1">{errors.price}</p>}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Harga Asli (Rp, Opsional)
              </label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                placeholder="299000"
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Kategori
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-rose-500"
              >
                {CATEGORIES.filter(c => c !== 'Semua').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-300 mb-1">
                Nama Kreator
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  name="creator"
                  value={formData.creator}
                  onChange={handleChange}
                  placeholder="Nama akun/kreator"
                  className="w-full bg-gray-800/80 border border-gray-700 rounded-xl pl-9 pr-3.5 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-rose-500"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-300 mb-1">
              URL Stream Video (MP4)
            </label>
            <div className="relative">
              <Video className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="url"
                name="videoUrl"
                value={formData.videoUrl}
                onChange={handleChange}
                className="w-full bg-gray-800/80 border border-gray-700 rounded-xl pl-9 pr-3.5 py-2 text-xs text-gray-300 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-xs shadow-lg shadow-rose-600/30 transition-all flex items-center space-x-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Publikasikan Klip</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}