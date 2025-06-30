import { useState } from 'react';

const CleanTextDisplay = ({ cleanText }) => {
  const [copyText, setCopyText] = useState('<i class="fas fa-copy mr-1"></i> Copy');
  
  const handleCopy = () => {
    navigator.clipboard.writeText(cleanText);
    setCopyText('<i class="fas fa-check mr-1"></i> Copied!');
    setTimeout(() => {
      setCopyText('<i class="fas fa-copy mr-1"></i> Copy');
    }, 2000);
  };

  return (
    <div className="result-box show bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Clean Text (No Watermarks)</h2>
          <button 
            onClick={handleCopy}
            className="text-indigo-600 hover:text-indigo-800"
            dangerouslySetInnerHTML={{ __html: copyText }}
          />
        </div>
        <div 
          className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-20"
          dangerouslySetInnerHTML={{ __html: cleanText.replace(/\n/g, '<br>') }}
        />
      </div>
    </div>
  );
};

export default CleanTextDisplay;