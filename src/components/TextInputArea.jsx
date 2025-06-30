const TextInputArea = ({ text, setText, clearText, className  }) => {
  return (
     <div className={`p-6 bg-gradient-to-r from-indigo-900 to-purple-700 rounded-xl shadow-lg border border-indigo-700/30 ${className}`}>
      {/* Semi-transparent overlay for depth */}
      <div className="absolute inset-0 bg-white/5 rounded-xl mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            Your Text
          </h2>
          <button 
            onClick={clearText} 
            className="text-indigo-100 hover:text-white transition-colors duration-200 flex items-center bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg backdrop-blur-sm"
          >
            <i className="fas fa-trash-alt mr-2"></i> Clear
          </button>
        </div>
        
        <div className="relative bg-gray-200/80 rounded-lg border border-gray-400/50 p-4 transition-all duration-300 hover:border-indigo-400 focus-within:border-indigo-500 backdrop-blur-sm">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-40 bg-transparent outline-none resize-none text-gray-800 placeholder-gray-600"
            placeholder="Paste your text here..."
          />
        </div>
      </div>
    </div>
  );
};

export default TextInputArea;