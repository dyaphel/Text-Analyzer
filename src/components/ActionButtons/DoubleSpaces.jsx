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
      className="btn bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <i className="fas fa-space-shuttle mr-2"></i> Check Double Spaces
    </button>
  );
};

export default DoubleSpaces;