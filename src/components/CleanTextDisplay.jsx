import { useState } from 'react';

const CleanTextDisplay = ({ cleanText, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(cleanText.replace(/\s{2,}/g, ' ')); // copia pulita
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Evidenzia i doppi spazi nel testo pulito
  const highlightedText = cleanText.replace(/\s{2,}/g, match =>
    `<span class="bg-yellow-200">${'•'.repeat(match.length)}</span>`
  );

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
          <h2 className="text-xl font-semibold text-gray-800">Clean Text</h2>
          <button 
            onClick={handleCopy}
            className="text-indigo-600 hover:text-indigo-800 flex items-right mr-10"
          >
            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div
          className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-20 max-h-64 text-gray-800 whitespace-pre-wrap overflow-y-auto"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      </div>
    </div>
  );
};

export default CleanTextDisplay;
