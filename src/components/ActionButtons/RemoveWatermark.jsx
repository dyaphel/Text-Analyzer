import { watermarkPatterns } from '../../../public/constants.js';

const RemoveWatermark = ({ text, showResult, setCleanText, setShowCleanText }) => {
  const removeWatermark = () => {
    if (!text.trim()) {
      showResult('Remove AI Watermark', 'Please enter some text first');
      return;
    }
    
    let markedText = text;
    let cleanText = text;
    let foundWatermarks = false;
    
    watermarkPatterns.forEach(pattern => {
      if (pattern.test(markedText)) {
        foundWatermarks = true;
        markedText = markedText.replace(pattern, match => 
          `<span class="highlight">${match}</span>`
        );
        cleanText = cleanText.replace(pattern, '');
      }
    });
    
    if (foundWatermarks) {
      showResult('AI Watermarks Found', markedText, true);
      setCleanText(cleanText);
      setShowCleanText(true);
    } else {
      showResult('Remove AI Watermark', 'No common AI watermarks detected in the text');
      setShowCleanText(false);
    }
  };

  return (
    <button 
      onClick={removeWatermark}
      className="btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <i className="fas fa-eraser mr-2"></i> Remove AI watermark
    </button>
  );
};

export default RemoveWatermark;