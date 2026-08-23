import React from 'react';
import { Search, Grid, Smartphone, PlusCircle, BarChart3, Tag, ShoppingBag, Sparkles } from 'lucide-react';
import { CATEGORIES, PLATFORMS } from '../data/clips';

export default function Header({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedPlatform,
  setSelectedPlatform,
  viewMode,
  setViewMode,
  onOpenAddModal,
  onOpenAnalytics
}) {
  return (
    <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between gap-4">

          <div className="flex items-center space-x-3 cursor-pointer select-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 p-0.5 shadow-md shadow-rose-500/20">
              <div className="w-full h-full bg-gray-900 rounded-[10px] flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-rose-500" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent tracking-tight">
                  Klip<span className="text-rose-500">Affiliate</span>
                </h1>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-md">
                  PRO
                </span>
              </div>
              <p className="text-xs text-gray-400 hidden sm:block">Koleksi Clips & Link Produk Affiliate Viral</p>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-2 hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Cari klip, produk, atau outfit viral..."
                className="w-full bg-gray-800/80 text-sm text-gray-100 placeholder-gray-400 pl-10 pr-4 py-2 rounded-full border border-gray-700/80 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-gray-800 p-1 rounded-xl border border-gray-700/60 flex items-center space-x-1">
              <button
                onClick={() => setViewMode('feed')}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'feed'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                }`}
                title="Tampilan Feed Vertikal (Shorts/TikTok)"
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Feed TikTok</span>
              </button>

              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center space-x-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                }`}
                title="Tampilan Grid Galeri"
              >
                <Grid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Grid Catalog</span>
              </button>
            </div>

            <button
              onClick={onOpenAnalytics}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gray-800 hover:bg-gray-700/80 border border-gray-700 text-gray-300 hover:text-white flex items-center space-x-1.5 text-xs font-medium transition-all"
              title="Performa Link & Click Analytics"
            >
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span className="hidden md:inline">Performa Link</span>
            </button>

            <button
              onClick={onOpenAddModal}
              className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 hover:opacity-95 text-white flex items-center space-x-1.5 text-xs font-semibold shadow-md shadow-rose-500/25 transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Tambah Klip</span>
            </button>
          </div>
        </div>

        <div className="mt-2.5 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari klip affiliate..."
              className="w-full bg-gray-800 text-sm text-gray-100 placeholder-gray-400 pl-10 pr-4 py-2 rounded-xl border border-gray-700/80 focus:outline-none focus:border-rose-500"
            />
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-gray-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
            <span className="text-gray-400 font-medium mr-1 flex items-center gap-1">
              <Tag className="w-3 h-3 text-rose-400" /> Platform:
            </span>
            {PLATFORMS.map((platform) => {
              const isSelected = selectedPlatform === platform;
              return (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow-sm'
                      : 'bg-gray-800/60 text-gray-400 hover:text-gray-200 hover:bg-gray-800 border border-transparent'
                  }`}
                >
                  {platform}
                </button>
              );
            })}
          </div>

          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 scrollbar-none max-w-full">
            <span className="text-gray-400 font-medium mr-1 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-400" /> Kategori:
            </span>
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-2.5 py-1 rounded-lg font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                      : 'bg-gray-800/60 text-gray-400 hover:text-gray-200 hover:bg-gray-800 border border-transparent'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </header>
  );
}