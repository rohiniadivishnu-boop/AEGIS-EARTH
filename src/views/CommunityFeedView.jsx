import React, { useState } from 'react';
import { MessageSquare, ThumbsUp, Share2, Shield, Plus, Send, CheckCircle2, Image } from 'lucide-react';
import confetti from 'canvas-confetti';

export function CommunityFeedView({ posts, userRole, onPostMessage, onUpvotePost }) {
  const [content, setContent] = useState('');
  const [filterType, setFilterType] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPostMessage({
      event_type: userRole === 'Authority' ? 'official_announcement' : 'community_update',
      content,
      location: 'Local Sector',
      user_id: 'usr_001'
    });
    confetti({ particleCount: 40, spread: 50 });
    setContent('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="glass-panel rounded-2xl p-6 border-l-4 border-ai flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <MessageSquare className="w-5 h-5 text-ai animate-pulse" />
            <span className="text-xs font-mono text-ai font-bold uppercase tracking-widest">
              THE PULSE • REAL-TIME COMMUNITY INTELLIGENCE STREAM
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white font-heading">
            COMMUNITY FEED
          </h2>
          <p className="text-xs text-gray-300">
            Live updates from citizens, verified authority announcements, shelter updates, and volunteer mission logs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Post Creation Box */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10 space-y-4">
          <h3 className="text-sm font-bold text-white uppercase font-heading border-b border-white/10 pb-3 flex items-center gap-2">
            <Send className="w-4 h-4 text-ai" /> BROADCAST UPDATE TO COMMUNITY
          </h3>

          <form onSubmit={handleSubmit} className="space-y-3 text-xs">
            <textarea
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share safe routes, shelter updates, resource availability, or emergency warnings..."
              className="w-full bg-space-deep border border-white/10 rounded-xl p-3 text-white focus:border-ai focus:outline-none"
            />

            <button
              type="submit"
              className="w-full btn-3d py-2.5 bg-gradient-to-r from-ai to-info text-white font-bold text-xs rounded-xl shadow-xl flex items-center justify-center space-x-2"
            >
              <Send className="w-4 h-4" />
              <span>POST UPDATE TO PULSE STREAM</span>
            </button>
          </form>
        </div>

        {/* Live Stream Feed */}
        <div className="lg:col-span-2 space-y-4">
          {posts.map((p) => {
            const isOfficial = p.event_type === 'official_announcement';
            return (
              <div
                key={p.id}
                className={`glass-panel rounded-2xl p-5 border space-y-3 shadow-xl ${
                  isOfficial ? 'border-glow-emergency bg-emergency/10' : 'border-white/10'
                }`}
              >
                <div className="flex justify-between items-center border-b border-white/10 pb-3">
                  <div className="flex items-center space-x-2">
                    {isOfficial ? (
                      <span className="px-2.5 py-0.5 bg-emergency text-white rounded-full font-mono text-[10px] font-extrabold flex items-center gap-1">
                        <Shield className="w-3 h-3" /> OFFICIAL ANNOUNCEMENT
                      </span>
                    ) : (
                      <span className="px-2.5 py-0.5 bg-ai/20 text-ai rounded-full font-mono text-[10px] font-bold">
                        COMMUNITY UPDATE
                      </span>
                    )}
                    <span className="text-xs text-gray-400 font-mono">{p.location}</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-400">
                    {new Date(p.created_at).toLocaleTimeString()}
                  </span>
                </div>

                <p className="text-xs md:text-sm text-gray-200 leading-relaxed">{p.content}</p>

                {p.photo_url && (
                  <img src={p.photo_url} alt="Feed media" className="w-full h-48 object-cover rounded-xl border border-white/10" />
                )}

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                  <button
                    onClick={() => onUpvotePost(p.id)}
                    className="flex items-center space-x-1.5 px-3 py-1 bg-white/5 text-gray-300 rounded-lg hover:text-white hover:bg-white/10 transition-all font-mono"
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-safe" />
                    <span>{p.upvotes || 0} Upvotes</span>
                  </button>

                  <button className="flex items-center space-x-1 px-3 py-1 text-gray-400 hover:text-white text-xs font-mono">
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
