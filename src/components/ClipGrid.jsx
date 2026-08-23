import React from 'react';
import ClipCard from './ClipCard';
import { Film, PlusCircle } from 'lucide-react';

export default function ClipGrid({
  clips,
  likes,
  bookmarks,
  onToggleLike,
  onToggleBookmark,
  onAffiliateClick,
  onOpenFeedWithClip,
  onOpenAddModal
}) {
  if (clips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-gray-800 flex items-center justify-center text-gray-500 mb-4 border border-gray-700">
          <Film className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-gray-200 mb-1">Tidak Ada Klip Ditemukan</h3>
        <p className="text-sm text-gray-400 max-w-sm mb-6">
          Tidak ada klip affiliate yang sesuai dengan kata kunci atau filter yang Anda pilih.
        </p>
        <button
          onClick={onOpenAddModal}
          className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-medium text-sm rounded-xl flex items-center space-x-2 shadow-lg shadow-rose-600/25 transition-all"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Tambah Klip Baru</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-medium text-gray-400">
          Menampilkan <span className="text-rose-400 font-bold">{clips.length}</span> klip produk affiliate
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {clips.map((clip) => (
          <ClipCard
            key={clip.id}
            clip={clip}
            isLiked={!!likes[clip.id]}
            isBookmarked={!!bookmarks[clip.id]}
            onToggleLike={onToggleLike}
            onToggleBookmark={onToggleBookmark}
            onAffiliateClick={onAffiliateClick}
            onOpenFeedWithClip={onOpenFeedWithClip}
          />
        ))}
      </div>
    </div>
  );
}