import React from 'react';
import { X, BarChart3, MousePointerClick, Eye, TrendingUp, DollarSign, ExternalLink, Award } from 'lucide-react';

export default function AnalyticsModal({ isOpen, onClose, clips }) {
  if (!isOpen) return null;

  const totalClicks = clips.reduce((acc, c) => acc + (c.clicks || 0), 0);
  const totalViews = clips.reduce((acc, c) => acc + (c.views || 0), 0);
  const averageCTR = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : 0;

  const platformStats = clips.reduce((acc, clip) => {
    const platform = clip.platform;
    if (!acc[platform]) {
      acc[platform] = { count: 0, clicks: 0, views: 0 };
    }
    acc[platform].count += 1;
    acc[platform].clicks += (clip.clicks || 0);
    acc[platform].views += (clip.views || 0);
    return acc;
  }, {});

  const topClips = [...clips].sort((a, b) => (b.clicks || 0) - (a.clicks || 0));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden my-8">

        <div className="p-5 border-b border-gray-800 flex items-center justify-between bg-gradient-to-r from-gray-900 via-gray-850 to-gray-900">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Dashboard Analitik Performa Affiliate</h3>
              <p className="text-xs text-gray-400">Pantau statistik klik link, CTR, dan performa klip secara realtime</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 space-y-6 max-h-[80vh] overflow-y-auto">

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400">Total Klik Link Affiliate</span>
                <MousePointerClick className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="text-2xl font-black text-white">{totalClicks.toLocaleString()}</p>
              <p className="text-[11px] text-emerald-400 font-medium mt-1">Interaksi langsung ke marketplace</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400">Total Penonton Video</span>
                <Eye className="w-4 h-4 text-rose-400" />
              </div>
              <p className="text-2xl font-black text-white">{totalViews.toLocaleString()}</p>
              <p className="text-[11px] text-gray-400 font-medium mt-1">Total tayangan klip video</p>
            </div>

            <div className="p-4 rounded-xl bg-gray-800/60 border border-gray-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-400">Rata-rata CTR</span>
                <TrendingUp className="w-4 h-4 text-amber-400" />
              </div>
              <p className="text-2xl font-black text-white">{averageCTR}%</p>
              <p className="text-[11px] text-amber-400 font-medium mt-1">Click-Through Rate</p>
            </div>

          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-rose-500" /> Breakdown Performa Per Platform
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {Object.entries(platformStats).map(([platform, stat]) => (
                <div key={platform} className="p-3.5 rounded-xl bg-gray-800/40 border border-gray-700/40">
                  <span className="text-xs font-bold text-gray-200">{platform}</span>
                  <div className="mt-2 text-xs space-y-1 text-gray-400">
                    <div className="flex justify-between">
                      <span>Jumlah Klip:</span>
                      <span className="font-semibold text-gray-200">{stat.count}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total Klik:</span>
                      <span className="font-semibold text-emerald-400">{stat.clicks}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tayangan:</span>
                      <span className="font-semibold text-gray-200">{stat.views}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" /> Klip Affiliate Paling Populer (Top Clicks)
            </h4>
            <div className="overflow-x-auto border border-gray-800 rounded-xl bg-gray-800/20">
              <table className="w-full text-left text-xs text-gray-300">
                <thead className="bg-gray-800/80 text-gray-400 font-semibold border-b border-gray-700">
                  <tr>
                    <th className="p-3">Produk</th>
                    <th className="p-3">Platform</th>
                    <th className="p-3 text-right">Tayangan</th>
                    <th className="p-3 text-right">Klik Link</th>
                    <th className="p-3 text-center">Tautan</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {topClips.map((clip) => (
                    <tr key={clip.id} className="hover:bg-gray-800/50 transition-colors">
                      <td className="p-3 font-medium text-white max-w-[200px] truncate">
                        {clip.productName}
                      </td>
                      <td className="p-3 text-gray-400">{clip.platform}</td>
                      <td className="p-3 text-right font-mono">{clip.views.toLocaleString()}</td>
                      <td className="p-3 text-right font-bold text-emerald-400 font-mono">
                        {clip.clicks || 0}
                      </td>
                      <td className="p-3 text-center">
                        <a
                          href={clip.affiliateUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center p-1 rounded hover:bg-gray-700 text-rose-400"
                          title="Buka Link Affiliate"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}