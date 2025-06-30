const TextInputArea = ({ text, setText, clearText }) => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Text</h2>
        <button 
          onClick={clearText} 
          className="text-gray-500 hover:text-gray-700"
        >
          <i className="fas fa-trash-alt mr-1"></i> Clear
        </button>
      </div>
      
      <div className="text-area-container relative bg-gray-50 rounded-lg border border-gray-200 p-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-40 bg-transparent outline-none resize-none" 
          placeholder="Paste your text here..."
        />
      </div>
    </div>
  );
};

export default TextInputArea;