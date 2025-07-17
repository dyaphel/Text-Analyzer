const ResultsDisplay = ({ title, content, isHTML, onClose }) => {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg border border-gray-200 relative w-full max-w-2xl mx-auto overflow-hidden">
      <button 
        onClick={onClose} 
        className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg"
      >
        <i className="fas fa-times"></i>
      </button>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        {typeof content === 'string' ? (
          isHTML ? (
            <div 
              className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-20 max-h-64 whitespace-pre-wrap overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-4 max-h-64 overflow-y-auto break-words whitespace-pre-wrap text-gray-800 font-mono">
              {content}
            </div>
          )
        ) : (
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            {content}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsDisplay;