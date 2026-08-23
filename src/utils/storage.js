import { INITIAL_CLIPS } from '../data/clips';

const CLIPS_KEY = 'affiliate_clips_data';
const LIKES_KEY = 'affiliate_clips_likes';
const BOOKMARKS_KEY = 'affiliate_clips_bookmarks';
const ANALYTICS_KEY = 'affiliate_clips_analytics';

export const getStoredClips = () => {
  try {
    const data = localStorage.getItem(CLIPS_KEY);
    if (!data) {
      localStorage.setItem(CLIPS_KEY, JSON.stringify(INITIAL_CLIPS));
      return INITIAL_CLIPS;
    }
    return JSON.parse(data);
  } catch (e) {
    console.error("Failed to parse clips from storage", e);
    return INITIAL_CLIPS;
  }
};

export const saveClips = (clips) => {
  try {
    localStorage.setItem(CLIPS_KEY, JSON.stringify(clips));
  } catch (e) {
    console.error("Failed to save clips to storage", e);
  }
};

export const getStoredLikes = () => {
  try {
    const data = localStorage.getItem(LIKES_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const saveLikes = (likes) => {
  localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
};

export const getStoredBookmarks = () => {
  try {
    const data = localStorage.getItem(BOOKMARKS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    return {};
  }
};

export const saveBookmarks = (bookmarks) => {
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(bookmarks));
};

export const recordClick = (clipId) => {
  const clips = getStoredClips();
  const updatedClips = clips.map(clip => {
    if (clip.id === clipId) {
      return { ...clip, clicks: (clip.clicks || 0) + 1 };
    }
    return clip;
  });
  saveClips(updatedClips);

  try {
    const rawAnalytics = localStorage.getItem(ANALYTICS_KEY);
    const analytics = rawAnalytics ? JSON.parse(rawAnalytics) : [];
    analytics.push({
      clipId,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
  } catch (e) {
    console.error("Failed to record click analytics", e);
  }
  return updatedClips;
};

export const recordView = (clipId) => {
  const clips = getStoredClips();
  const updatedClips = clips.map(clip => {
    if (clip.id === clipId) {
      return { ...clip, views: (clip.views || 0) + 1 };
    }
    return clip;
  });
  saveClips(updatedClips);
  return updatedClips;
};