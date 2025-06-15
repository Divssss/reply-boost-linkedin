
const ScreenshotsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            See It in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Clean, intuitive interface that integrates seamlessly with LinkedIn
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📋 Smart Summaries
              </h3>
              <p className="text-gray-600 mb-4">
                Get instant, AI-powered summaries of long comment threads with key points highlighted.
              </p>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="text-sm text-gray-500 mb-2">Summary (12 comments)</div>
                <div className="text-gray-700">
                  • 3 users discussing pricing concerns<br/>
                  • 2 feature requests for mobile app<br/>
                  • Positive feedback on UI design
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ⚡ One-Click Replies
              </h3>
              <p className="text-gray-600 mb-4">
                Choose from multiple response tones and styles for any situation.
              </p>
              <div className="space-y-2">
                <button className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">Professional</button>
                <button className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm ml-2">Friendly</button>
                <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm ml-2">Thought-provoking</button>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                  <div>
                    <div className="h-3 bg-white/60 rounded w-24 mb-1"></div>
                    <div className="h-2 bg-white/40 rounded w-16"></div>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="h-2 bg-white/60 rounded"></div>
                  <div className="h-2 bg-white/60 rounded w-3/4"></div>
                  <div className="h-2 bg-white/60 rounded w-1/2"></div>
                </div>
                <div className="flex gap-2">
                  <button className="bg-white/20 text-white px-3 py-1 rounded text-sm">Reply</button>
                  <button className="bg-white/20 text-white px-3 py-1 rounded text-sm">Summarize</button>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-200 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-green-200 rounded-full opacity-60 animate-pulse delay-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
