import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ClipGrid from './components/ClipGrid';
import VerticalFeed from './components/VerticalFeed';
import AddClipModal from './components/AddClipModal';
import AnalyticsModal from './components/AnalyticsModal';
import {
  getStoredClips,
  saveClips,
  getStoredLikes,
  saveLikes,
  getStoredBookmarks,
  saveBookmarks,
  recordClick,
  recordView
} from './utils/storage';

export default function App() {
  const [clips, setClips] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [selectedPlatform, setSelectedPlatform] = useState('Semua Platform');
  const [viewMode, setViewMode] = useState('feed');

  const [likes, setLikes] = useState({});
  const [bookmarks, setBookmarks] = useState({});

  const [activeClipId, setActiveClipId] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  useEffect(() => {
    const loadedClips = getStoredClips();
    setClips(loadedClips);
    if (loadedClips.length > 0) {
      setActiveClipId(loadedClips[0].id);
    }
    setLikes(getStoredLikes());
    setBookmarks(getStoredBookmarks());
  }, []);

  useEffect(() => {
    if (activeClipId && viewMode === 'feed') {
      const updated = recordView(activeClipId);
      setClips(updated);
    }
  }, [activeClipId, viewMode]);

  const handleToggleLike = (clipId) => {
    const updatedLikes = { ...likes, [clipId]: !likes[clipId] };
    setLikes(updatedLikes);
    saveLikes(updatedLikes);
  };

  const handleToggleBookmark = (clipId) => {
    const updatedBookmarks = { ...bookmarks, [clipId]: !bookmarks[clipId] };
    setBookmarks(updatedBookmarks);
    saveBookmarks(updatedBookmarks);
  };

  const handleAffiliateClick = (clip) => {
    const updatedClips = recordClick(clip.id);
    setClips(updatedClips);
    window.open(clip.affiliateUrl, '_blank', 'noopener,noreferrer');
  };

  const handleAddClip = (newClip) => {
    const updatedClips = [newClip, ...clips];
    setClips(updatedClips);
    saveClips(updatedClips);
    setActiveClipId(newClip.id);
  };

  const handleOpenFeedWithClip = (clip) => {
    setActiveClipId(clip.id);
    setViewMode('feed');
  };

  const filteredClips = clips.filter((clip) => {
    const matchesSearch =
      clip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clip.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clip.creator.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'Semua' || clip.category === selectedCategory;

    const matchesPlatform =
      selectedPlatform === 'Semua Platform' || clip.platform === selectedPlatform;

    return matchesSearch && matchesCategory && matchesPlatform;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col font-sans selection:bg-rose-500 selection:text-white">
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedPlatform={selectedPlatform}
        setSelectedPlatform={setSelectedPlatform}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenAddModal={() => setIsAddModalOpen(true)}
        onOpenAnalytics={() => setIsAnalyticsOpen(true)}
      />

      <main className="flex-1">
        {viewMode === 'feed' ? (
          <VerticalFeed
            clips={filteredClips}
            activeClipId={activeClipId || (filteredClips[0] && filteredClips[0].id)}
            setActiveClipId={setActiveClipId}
            likes={likes}
            bookmarks={bookmarks}
            onToggleLike={handleToggleLike}
            onToggleBookmark={handleToggleBookmark}
            onAffiliateClick={handleAffiliateClick}
          />
        ) : (
          <ClipGrid
            clips={filteredClips}
            likes={likes}
            bookmarks={bookmarks}
            onToggleLike={handleToggleLike}
            onToggleBookmark={handleToggleBookmark}
            onAffiliateClick={handleAffiliateClick}
            onOpenFeedWithClip={handleOpenFeedWithClip}
            onOpenAddModal={() => setIsAddModalOpen(true)}
          />
        )}
      </main>

      <AddClipModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddClip={handleAddClip}
      />

      <AnalyticsModal
        isOpen={isAnalyticsOpen}
        onClose={() => setIsAnalyticsOpen(false)}
        clips={clips}
      />

      <footer className="py-4 border-t border-gray-900 bg-black/40 text-center text-xs text-gray-500">
        <p>© 2025 KlipAffiliate App • Platform Khusus Video Klip & Tautan Produk Affiliate (Shopee, TikTok, Tokopedia)</p>
      </footer>
    </div>
  );
}