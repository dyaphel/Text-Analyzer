 
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
  className={`${buttonBaseClasses} bg-white hover:bg-gray-100 border border-gray-200`}
>
  <span className="flex items-center text-gray-800 font-medium">
    <span className="flex mr-2">
      <span className="w-2 h-2 rounded-full bg-indigo-600 mr-1"></span>
      <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
    </span>
    Check Double Spaces
  </span>
</button>
  );
};

export default DoubleSpaces;