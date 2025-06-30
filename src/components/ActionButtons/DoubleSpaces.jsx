 
const buttonBaseClasses = "text-white px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

const DoubleSpaces = ({ text, showResult, setCleanText, setShowCleanText }) => {

  const handleDoubleSpaces = () => {
    if (!text.trim()) {
      showResult(
        'Double Spaces', 
        'Please enter some text first', 
      );
      return;
    }
    const hasDoubleSpaces = /\s{2,}/.test(text);
    
    if (!hasDoubleSpaces) {
      showResult('Double Spaces', 'No double spaces found in the text');
      return;
    }
    const highlightedText = text.replace(/\s{2,}/g, match => 
      `<span class="bg-yellow-200">${'•'.repeat(match.length)}</span>`
    );
    const cleanText = text.replace(/\s{2,}/g, ' ');

   const resultContent = (
      <div>
        <div className="mb-2" dangerouslySetInnerHTML={{ __html: highlightedText }} />
        <div className="mt-2">Fixed version: {cleanText}</div>
      </div>
    );
    
    showResult(
      'Double Spaces Detected', 
      resultContent
    );


    setCleanText(cleanText);
    setShowCleanText(true);
  };

return (
    <button 
      onClick={handleDoubleSpaces}
      className={`${buttonBaseClasses} relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-700 hover:from-indigo-500 hover:to-purple-400`}
    >
      <span className="absolute inset-0 bg-white/5"></span>
      <span className="relative text-white font-medium flex items-center">
        <span className="flex mr-2">
          <span className="w-2 h-2 rounded-full bg-white mr-1"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        Check Double Spaces
      </span>
    </button>
  );
};

export default DoubleSpaces;