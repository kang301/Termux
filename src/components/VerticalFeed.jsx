import React, { useState, useRef, useEffect } from 'react';
import {
  Heart, Bookmark, Share2, ShoppingBag, ExternalLink,
  Volume2, VolumeX, ChevronUp, ChevronDown, Sparkles,
  Star, Eye, Check, X
} from 'lucide-react';

export default function VerticalFeed({
  clips,
  activeClipId,
  setActiveClipId,
  likes,
  bookmarks,
  onToggleLike,
  onToggleBookmark,
  onAffiliateClick
}) {
  const [muted, setMuted] = useState(true);
  const [copiedClipId, setCopiedClipId] = useState(null);
  const [showProductDrawer, setShowProductDrawer] = useState(true);

  const currentIndex = clips.findIndex((c) => c.id === activeClipId);
  const safeIndex = currentIndex === -1 ? 0 : currentIndex;
  const currentClip = clips[safeIndex] || clips[0];

  const handleNext = () => {
    if (safeIndex < clips.length - 1) {
      setActiveClipId(clips[safeIndex + 1].id);
    }
  };

  const handlePrev = () => {
    if (safeIndex > 0) {
      setActiveClipId(clips[safeIndex - 1].id);
    }
  };

  const handleShare = (clip) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(clip.affiliateUrl);
      setCopiedClipId(clip.id);
      setTimeout(() => setCopiedClipId(null), 2000);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowDown') handleNext();
      if (e.key === 'ArrowUp') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [safeIndex, clips]);

  if (!currentClip) return null;

  const isLiked = !!likes[currentClip.id];
  const isBookmarked = !!bookmarks[currentClip.id];

  return (
    <div className="relative w-full min-h-[calc(100vh-120px)] flex items-center justify-center py-4 bg-gray-950 overflow-hidden">

      <div
        className="absolute inset-0 opacity-20 blur-3xl bg-cover bg-center transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: `url(${currentClip.poster})` }}
      />

      <div className="relative w-full max-w-[420px] h-[82vh] max-h-[780px] bg-black rounded-3xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col justify-between">

        <video
          key={currentClip.id}
          src={currentClip.videoUrl}
          poster={currentClip.poster}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted={muted}
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none" />

        <div className="relative z-20 p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-black/50 backdrop-blur-md border border-white/20 flex items-center space-x-1">
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>{currentClip.platform}</span>
            </span>
            <span className="text-xs text-gray-300 font-medium bg-black/40 px-2 py-0.5 rounded-full backdrop-blur-md">
              {safeIndex + 1} / {clips.length}
            </span>
          </div>

          <button
            onClick={() => setMuted(!muted)}
            className="p-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 transition-all"
            title={muted ? 'Buka Suara' : 'Mute Suara'}
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
          </button>
        </div>

        <div className="absolute right-3 bottom-32 z-20 flex flex-col items-center space-y-4">

          <button
            onClick={() => onToggleLike(currentClip.id)}
            className="group flex flex-col items-center"
          >
            <div className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
              isLiked
                ? 'bg-rose-500 text-white shadow-rose-500/50 scale-110'
                : 'bg-black/50 text-white border border-white/20 hover:bg-black/70'
            }`}>
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[11px] font-bold text-white mt-1 drop-shadow-md">
              {(currentClip.likes + (isLiked ? 1 : 0)).toLocaleString()}
            </span>
          </button>

          <button
            onClick={() => onToggleBookmark(currentClip.id)}
            className="group flex flex-col items-center"
          >
            <div className={`p-3 rounded-full backdrop-blur-md transition-all duration-300 shadow-lg ${
              isBookmarked
                ? 'bg-amber-500 text-white shadow-amber-500/50 scale-110'
                : 'bg-black/50 text-white border border-white/20 hover:bg-black/70'
            }`}>
              <Bookmark className={`w-5 h-5 ${isBookmarked ? 'fill-current' : ''}`} />
            </div>
            <span className="text-[11px] font-bold text-white mt-1 drop-shadow-md">
              Simpan
            </span>
          </button>

          <button
            onClick={() => handleShare(currentClip)}
            className="group flex flex-col items-center"
          >
            <div className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white hover:bg-black/70 transition-all shadow-lg">
              {copiedClipId === currentClip.id ? (
                <Check className="w-5 h-5 text-emerald-400" />
              ) : (
                <Share2 className="w-5 h-5" />
              )}
            </div>
            <span className="text-[11px] font-bold text-white mt-1 drop-shadow-md">
              {copiedClipId === currentClip.id ? 'Tersalin' : 'Bagikan'}
            </span>
          </button>

        </div>

        <div className="relative z-20 p-4 mt-auto">

          <div className="flex items-center space-x-2 mb-2">
            <img
              src={currentClip.avatar}
              alt={currentClip.creator}
              className="w-8 h-8 rounded-full border-2 border-rose-500 object-cover shadow-md"
            />
            <div>
              <p className="text-xs font-bold text-white drop-shadow-sm">@{currentClip.creator}</p>
              <p className="text-[10px] text-gray-300 flex items-center gap-1">
                <Eye className="w-3 h-3 text-rose-400" /> {currentClip.views.toLocaleString()} tayangan
              </p>
            </div>
          </div>

          <p className="text-xs text-gray-100 font-medium line-clamp-2 mb-3 drop-shadow">
            {currentClip.title}
          </p>

          {showProductDrawer ? (
            <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/80 rounded-2xl p-3 shadow-2xl relative transition-all animate-fade-in">
              <button
                onClick={() => setShowProductDrawer(false)}
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gray-800 text-gray-300 hover:text-white border border-gray-600 flex items-center justify-center shadow"
              >
                <X className="w-3.5 h-3.5" />
              </button>

              <div className="flex items-center space-x-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-800 flex-shrink-0 border border-gray-700">
                  <img src={currentClip.poster} alt={currentClip.productName} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[10px] text-gray-400 mb-0.5">
                    <span className="font-semibold text-rose-400 uppercase tracking-wider">{currentClip.category}</span>
                    <span className="flex items-center gap-0.5 text-amber-400 font-bold">
                      <Star className="w-3 h-3 fill-amber-400" /> {currentClip.rating}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white truncate mb-1">
                    {currentClip.productName}
                  </h4>

                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-sm font-black text-rose-400">
                      Rp {currentClip.price.toLocaleString('id-ID')}
                    </span>
                    {currentClip.originalPrice && (
                      <span className="text-[10px] text-gray-400 line-through">
                        Rp {currentClip.originalPrice.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <button
                onClick={() => onAffiliateClick(currentClip)}
                className="w-full mt-2.5 py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:opacity-95 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-lg shadow-rose-600/30 active:scale-95 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Beli Sekarang ({currentClip.platform})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowProductDrawer(true)}
              className="w-full py-2 px-3 bg-gray-900/90 backdrop-blur-md border border-gray-700 text-rose-400 font-bold text-xs rounded-xl flex items-center justify-between shadow-lg"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Lihat Produk ({currentClip.productName})
              </span>
              <span className="text-white bg-rose-600 px-2 py-0.5 rounded text-[10px]">Lihat</span>
            </button>
          )}

        </div>
      </div>

      <div className="absolute right-4 sm:right-10 flex flex-col space-y-3 z-30">
        <button
          onClick={handlePrev}
          disabled={safeIndex === 0}
          className={`p-3 rounded-full bg-gray-900/80 border border-gray-700 text-white shadow-xl backdrop-blur-md transition-all ${
            safeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-rose-600 hover:border-rose-500'
          }`}
          title="Klip Sebelumnya (Panah Atas)"
        >
          <ChevronUp className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={safeIndex === clips.length - 1}
          className={`p-3 rounded-full bg-gray-900/80 border border-gray-700 text-white shadow-xl backdrop-blur-md transition-all ${
            safeIndex === clips.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-rose-600 hover:border-rose-500'
          }`}
          title="Klip Selanjutnya (Panah Bawah)"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

    </div>
  );
}