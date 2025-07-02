const TextInputArea = ({ text, setText, clearText, className  }) => {
  return (
     <div className={`p-6 bg-white rounded-xl shadow-lg border border-gray-200 ${className}`}>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Your Text
          </h2>
          <button 
            onClick={clearText} 
            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 flex items-center bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg"
          >
            <i className="fas fa-trash-alt mr-2"></i> Clear
          </button>
        </div>
        
        <div className="relative bg-white rounded-lg border border-gray-300 p-4 transition-all duration-300 hover:border-indigo-400 focus-within:border-indigo-500">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-40 bg-transparent outline-none resize-none text-gray-800 placeholder-gray-500"
            placeholder="Paste your text here..."
          />
        </div>
      </div>
    </div>
  );
};

export default TextInputArea;