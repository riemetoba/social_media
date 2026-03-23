

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex font-sans">
      
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        {/* Sidebar Header/Profile */}
        <div className="h-32 bg-indigo-700 relative"></div>
        <div className="text-center px-4 pb-6 border-b border-gray-100 relative">
          <div className="w-20 h-20 bg-indigo-500 rounded-full border-4 border-white absolute -top-10 left-1/2 transform -translate-x-1/2"></div>
          <div className="pt-12">
            <h2 className="text-sm font-bold text-gray-800">A B M Shawon Islam</h2>
            <p className="text-xs text-gray-400 mt-1">www.abm.com</p>
          </div>
          <div className="flex justify-center space-x-6 mt-4 text-xs">
            <div className="text-center">
              <span className="block font-bold text-gray-800 text-sm">930</span>
              <span className="text-gray-400">Friends</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-gray-800 text-sm">87</span>
              <span className="text-gray-400">Posts</span>
            </div>
            <div className="text-center">
              <span className="block font-bold text-gray-800 text-sm">1k</span>
              <span className="text-gray-400">Followers</span>
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 py-4">
          <ul className="space-y-1">
            {['Newsfeed'].map((item) => (
              <li key={item} className="px-6 py-3 text-sm text-gray-500 hover:bg-gray-50 cursor-pointer font-medium flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                <span>{item}</span>
              </li>
            ))}
            {/* Active Item */}
            <li className="px-6 py-3 text-sm text-white bg-cyan-400 rounded-r-full mr-4 cursor-pointer font-medium flex items-center space-x-3 shadow-md shadow-cyan-200">
              <div className="w-5 h-5 bg-white rounded-sm opacity-80"></div>
              <span>Videos</span>
            </li>
            {['Groups', 'Photos', 'Friends', 'Friends Request', 'Logout'].map((item) => (
              <li key={item} className="px-6 py-3 text-sm text-gray-500 hover:bg-gray-50 cursor-pointer font-medium flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-300 rounded-sm"></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        
        {/* Top Header Section */}
        <div className="bg-white rounded-2xl shadow-sm mb-6 pb-6 overflow-hidden">
          {/* Cover Photo */}
          <div className="h-64 bg-indigo-700 w-full relative"></div>
          
          {/* Profile Bar */}
          <div className="relative px-8 flex justify-between items-center mt-4">
            {/* Left Stats */}
            <div className="flex space-x-8 text-sm mt-4 w-1/3">
              <div className="text-center">
                <span className="block font-bold text-gray-800 text-lg">930</span>
                <span className="text-gray-400">Friends</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-gray-800 text-lg">87</span>
                <span className="text-gray-400">Posts</span>
              </div>
              <div className="text-center">
                <span className="block font-bold text-gray-800 text-lg">1k</span>
                <span className="text-gray-400">Followers</span>
              </div>
            </div>

            {/* Center Avatar & Info */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -top-20 text-center w-1/3">
              <div className="w-32 h-32 bg-indigo-500 rounded-full border-8 border-white mx-auto"></div>
              <h1 className="text-xl font-bold text-gray-800 mt-2">A B M Shawon Islam</h1>
              <p className="text-sm text-gray-400">www.abm.com</p>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4 w-1/3 justify-end mt-4">
              <button className="px-6 py-2.5 bg-indigo-500 text-white text-sm font-semibold rounded-lg hover:bg-indigo-600 transition">
                Add Friend
              </button>
              <button className="px-6 py-2.5 bg-cyan-400 text-white text-sm font-semibold rounded-lg hover:bg-cyan-500 transition">
                Send Message
              </button>
              {/* Social Icons (Placeholders) */}
              <div className="flex space-x-2 ml-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center text-xs">f</div>
                <div className="w-8 h-8 bg-pink-500 text-white rounded flex items-center justify-center text-xs">ig</div>
                <div className="w-8 h-8 bg-blue-400 text-white rounded flex items-center justify-center text-xs">tw</div>
                <div className="w-8 h-8 bg-red-600 text-white rounded flex items-center justify-center text-xs">yt</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* About Me Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 col-span-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">About Me</h3>
              <span className="text-gray-400 cursor-pointer">•••</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex">
                <span className="w-20 font-medium text-gray-500">Joined:</span>
                <span className="text-gray-400">22 November 2008</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium text-gray-500">City:</span>
                <span className="text-gray-400">Dhaka</span>
              </div>
              <div className="flex">
                <span className="w-20 font-medium text-gray-500">Age:</span>
                <span className="text-gray-400">18 years</span>
              </div>
            </div>
          </div>

          {/* Post Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6 col-span-1 lg:col-span-2">
            {/* Post Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full"></div>
                <div>
                  <h4 className="text-sm font-bold text-gray-800">A B M Shawon Islam</h4>
                  <p className="text-xs text-gray-400">29 minutes ago</p>
                </div>
              </div>
              <span className="text-gray-400 cursor-pointer">•••</span>
            </div>
            
            {/* Post Content */}
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              I have great news to share with you all! I've been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I'll be uploading new content every day, improving the quality and I'm gonna have access to games a month before the official release. This is a dream come true, thanks to all for the support!!!
            </p>
            
            {/* Post Stats */}
            <div className="flex justify-between items-center py-3 border-b border-gray-100 text-xs text-gray-500 font-medium">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 bg-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 bg-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-5 h-5 bg-yellow-400 rounded-full border-2 border-white"></div>
                </div>
                <span>12</span>
              </div>
              <div>13 Comments</div>
              <div>2 Shares</div>
            </div>

            {/* Post Actions */}
            <div className="flex justify-between mt-2 pt-2 text-xs font-semibold text-gray-400">
              <button className="flex items-center space-x-2 hover:text-gray-600">
                <span>👍</span> <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-gray-600">
                <span>💬</span> <span>Comment</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-gray-600">
                <span>🔗</span> <span>Share</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* Right Sidebar (Thin Strip) */}
      <aside className="w-16 bg-white border-l border-gray-200 hidden xl:flex flex-col items-center py-4 space-y-4">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-8 h-8 bg-indigo-600 rounded-full opacity-80 cursor-pointer hover:opacity-100"></div>
        ))}
        <div className="w-8 h-20 bg-indigo-600 mt-auto rounded-l-md"></div>
      </aside>

    </div>
  );
};

export default Home;
