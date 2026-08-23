import React, { useState } from 'react';
import { ExternalLink, Heart, Bookmark, Eye, ShoppingCart, Play, Pause, Star } from 'lucide-react';

export default function ClipCard({
  clip,
  isLiked,
  isBookmarked,
  onToggleLike,
  onToggleBookmark,
  onAffiliateClick,
  onOpenFeedWithClip
}) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleBuyClick = (e) => {
    e.stopPropagation();
    onAffiliateClick(clip);
  };

  const getPlatformBadgeColor = (platform) => {
    switch (platform) {
      case 'Shopee':
        return 'bg-amber-500/10 text-orange-400 border-amber-500/30';
      case 'TikTok Shop':
        return 'bg-pink-500/10 text-pink-400 border-pink-500/30';
      case 'Tokopedia':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
    }
  };

  return (
    <div
      className="group bg-gray-800/80 hover:bg-gray-800 rounded-2xl border border-gray-700/60 hover:border-rose-500/40 overflow-hidden shadow-lg transition-all duration-300 flex flex-col cursor-pointer"
      onClick={() => onOpenFeedWithClip(clip)}
    >
      <div className="relative aspect-[9/16] bg-black overflow-hidden group">
        {isPlaying ? (
          <video
            src={clip.videoUrl}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={clip.poster}
            alt={clip.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-black/40 pointer-events-none" />

        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-auto">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border backdrop-blur-md ${getPlatformBadgeColor(clip.platform)}`}>
            {clip.platform}
          </span>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleBookmark(clip.id);
              }}
              className={`p-2 rounded-full backdrop-blur-md transition-all ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                  : 'bg-black/40 text-gray-300 hover:text-white border border-white/10'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5 fill-current" />
            </button>
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-rose-600/80 backdrop-blur-md text-white flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </div>
        </div>

        <div
          className="absolute inset-0"
          onMouseEnter={() => setIsPlaying(true)}
          onMouseLeave={() => setIsPlaying(false)}
        />

        <div className="absolute bottom-3 left-3 right-3 z-10 pointer-events-none">
          <div className="flex items-center space-x-2 mb-1.5">
            <img
              src={clip.avatar}
              alt={clip.creator}
              className="w-6 h-6 rounded-full border border-white/20 object-cover"
            />
            <span className="text-xs text-gray-200 font-medium drop-shadow-sm">{clip.creator}</span>
          </div>

          <p className="text-sm font-medium text-white line-clamp-2 leading-snug drop-shadow-sm">
            {clip.title}
          </p>

          <div className="flex items-center justify-between mt-2 text-[11px] text-gray-300">
            <span className="flex items-center space-x-1">
              <Eye className="w-3 h-3 text-rose-400" />
              <span>{clip.views.toLocaleString()}</span>
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleLike(clip.id);
              }}
              className="flex items-center space-x-1 pointer-events-auto hover:text-rose-400 transition-colors"
            >
              <Heart className={`w-3.5 h-3.5 ${isLiked ? 'text-rose-500 fill-rose-500' : ''}`} />
              <span>{(clip.likes + (isLiked ? 1 : 0)).toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>

      <div className="p-3 bg-gray-900/90 flex-1 flex flex-col justify-between border-t border-gray-800">
        <div>
          <div className="flex items-center justify-between gap-1 text-xs mb-1">
            <span className="text-gray-400 font-medium truncate">{clip.category}</span>
            <span className="flex items-center text-amber-400 font-semibold gap-0.5">
              <Star className="w-3 h-3 fill-amber-400" />
              {clip.rating}
            </span>
          </div>

          <h3 className="text-xs font-semibold text-gray-200 line-clamp-1 mb-2">
            {clip.productName}
          </h3>
        </div>

        <div>
          <div className="flex items-baseline space-x-1.5 mb-2.5">
            <span className="text-base font-bold text-rose-400">
              Rp {clip.price.toLocaleString('id-ID')}
            </span>
            {clip.originalPrice && (
              <span className="text-xs text-gray-500 line-through">
                Rp {clip.originalPrice.toLocaleString('id-ID')}
              </span>
            )}
            {clip.discount && (
              <span className="text-[10px] bg-rose-500/10 text-rose-400 px-1.5 py-0.5 rounded font-bold">
                {clip.discount}
              </span>
            )}
          </div>

          <button
            onClick={handleBuyClick}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold text-xs flex items-center justify-center space-x-1.5 shadow-md shadow-rose-600/20 active:scale-95 transition-all"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Beli Sekarang</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}