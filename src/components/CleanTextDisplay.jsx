const CleanTextDisplay = ({ cleanText }) => {
  const [copyState, setCopyState] = useState({ text: 'Copy', icon: 'fa-copy' });
  
  const handleCopy = () => {
    navigator.clipboard.writeText(cleanText);
    setCopyState({ text: 'Copied!', icon: 'fa-check' });
    setTimeout(() => setCopyState({ text: 'Copy', icon: 'fa-copy' }), 2000);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-purple-700 rounded-xl shadow-lg mb-6 border border-indigo-700/30">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-indigo-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
            Clean Text
          </h2>
          <button 
            onClick={handleCopy}
            className="flex items-center text-indigo-100 hover:text-white transition-colors duration-200 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm"
          >
            <i className={`fas ${copyState.icon} mr-2`}></i>
            {copyState.text}
          </button>
        </div>
        <div className="bg-gray-200/80 rounded-lg border border-gray-400/50 p-4 min-h-20 whitespace-pre-wrap text-gray-800 backdrop-blur-sm">
          {cleanText}
        </div>
      </div>
    </div>
  );
};
export default CleanTextDisplay;