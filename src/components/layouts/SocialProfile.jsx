import { useState } from "react";

const NAV_ITEMS = [
  { icon: "📰", label: "Newsfeed" },
  { icon: "🎮", label: "Videos", active: true },
  { icon: "👥", label: "Groups" },
  { icon: "📷", label: "Photos" },
  { icon: "🤝", label: "Friends" },
  { icon: "📨", label: "Friends Request" },
  { icon: "🚪", label: "Logout" },
];

const DOTS = Array(10).fill(null);

export default function SocialProfile() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-48 bg-white flex flex-col items-center py-8 shadow-md shrink-0">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-indigo-500 mb-3" />
        <p className="font-bold text-sm text-gray-800 text-center leading-tight">
          A B M Shawon Islam
        </p>
        <p className="text-xs text-gray-400 mb-5">www.abm.com</p>

        {/* Stats */}
        <div className="flex gap-4 mb-8 text-center">
          <div>
            <p className="font-bold text-gray-800 text-sm">930</p>
            <p className="text-xs text-gray-400">Friends</p>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm">87</p>
            <p className="text-xs text-gray-400">Posts</p>
          </div>
          <div>
            <p className="font-bold text-gray-800 text-sm">1k</p>
            <p className="text-xs text-gray-400">Followers</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="w-full">
          {NAV_ITEMS.map(({ icon, label, active }) => (
            <button
              key={label}
              className={`w-full flex items-center gap-3 px-6 py-3 text-sm transition-colors ${
                active
                  ? "bg-cyan-400 text-white font-semibold"
                  : "text-gray-500 hover:bg-gray-50"
              }`}
            >
              <span className="text-base">{icon}</span>
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 flex flex-col gap-5">
        {/* Cover + profile header */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
          {/* Cover photo */}
          <div className="h-44 bg-indigo-700 relative" />

          {/* Profile info row */}
          <div className="relative px-8 pb-5">
            {/* Avatar overlapping cover */}
            <div className="absolute -top-10 left-8 w-20 h-20 rounded-full bg-indigo-400 border-4 border-white" />

            <div className="flex items-center justify-between pt-12">
              {/* Left: name + stats */}
              <div>
                <h1 className="font-bold text-gray-800 text-lg leading-tight">
                  A B M Shawon Islam
                </h1>
                <p className="text-xs text-gray-400 mb-3">www.abm.com</p>
                <div className="flex gap-6 text-center">
                  <div>
                    <p className="font-bold text-gray-800 text-sm">930</p>
                    <p className="text-xs text-gray-400">Friends</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">87</p>
                    <p className="text-xs text-gray-400">Posts</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-sm">1k</p>
                    <p className="text-xs text-gray-400">Followers</p>
                  </div>
                </div>
              </div>

              {/* Right: actions + socials */}
              <div className="flex flex-col items-end gap-3">
                <div className="flex gap-3">
                  <button className="bg-indigo-600 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Add Friend
                  </button>
                  <button className="bg-cyan-400 text-white text-sm font-semibold px-5 py-2 rounded-lg hover:bg-cyan-500 transition-colors">
                    Send Message
                  </button>
                </div>
                {/* Social icons */}
                <div className="flex gap-2">
                  {[
                    { bg: "bg-blue-600", letter: "f" },
                    { bg: "bg-pink-500", letter: "in" },
                    { bg: "bg-sky-400", letter: "t" },
                    { bg: "bg-red-500", letter: "▶" },
                  ].map(({ bg, letter }) => (
                    <button
                      key={letter}
                      className={`w-8 h-8 rounded-full ${bg} text-white text-xs font-bold flex items-center justify-center hover:opacity-80 transition-opacity`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom two-column area */}
        <div className="flex gap-5">
          {/* About card */}
          <div className="bg-white rounded-2xl shadow-sm p-5 w-64 shrink-0">
            <div className="flex justify-between items-center mb-3">
              <h2 className="font-bold text-gray-800">About Me</h2>
              <button className="text-gray-400 hover:text-gray-600 text-lg leading-none">
                ···
              </button>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Hi My name is A B M Shawon Islam but some people may know me as
              GameHuntress! I have a Twitch channel where I stream, play and
              review all the newest games.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="text-gray-400 w-16 shrink-0">Joined:</span>
                <span className="text-gray-600">22 November 2008</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 w-16 shrink-0">City:</span>
                <span className="text-gray-600">Dhaka</span>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-400 w-16 shrink-0">Age:</span>
                <span className="text-gray-600">18 years</span>
              </div>
            </div>
          </div>

          {/* Post card */}
          <div className="bg-white rounded-2xl shadow-sm p-5 flex-1">
            {/* Post header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-indigo-400 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    A B M Shawon Islam
                  </p>
                  <p className="text-xs text-gray-400">29 minutes ago</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 text-lg">
                ···
              </button>
            </div>

            {/* Post body */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              I have great news to share with you all! I've been officially made
              a game streaming verified partner by Streamy http://ly.ly/snejs5.
              What does this mean? I'll be uploading new content every day,
              improving the quality and I'm gonna have access to games a month
              before the official release. This is a dream come true, thanks to
              all for the support!!!
            </p>

            {/* Reactions row */}
            <div className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100">
              <div className="flex -space-x-1">
                {["bg-blue-500", "bg-yellow-400", "bg-red-500"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-5 h-5 rounded-full ${color} border-2 border-white`}
                    />
                  )
                )}
              </div>
              <span className="text-xs text-gray-400">12</span>
              <span className="text-xs text-gray-400 ml-auto">
                13 Comments
              </span>
              <span className="text-xs text-gray-400">2 Shares</span>
            </div>

            {/* Action buttons */}
            <div className="flex gap-6">
              {[
                {
                  label: "Like",
                  emoji: "👍",
                  action: () => setLiked(!liked),
                  active: liked,
                },
                { label: "Comment", emoji: "💬" },
                { label: "Share", emoji: "↗" },
              ].map(({ label, emoji, action, active }) => (
                <button
                  key={label}
                  onClick={action}
                  className={`flex items-center gap-1 text-sm transition-colors ${
                    active
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  <span>{emoji}</span> {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Right dot navigation panel */}
      <div className="w-14 bg-indigo-800 flex flex-col items-center justify-center gap-3 py-6 shrink-0">
        {DOTS.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all ${
              i === DOTS.length - 1
                ? "w-8 h-8 bg-indigo-600 border-2 border-indigo-400"
                : "w-6 h-6 bg-indigo-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
