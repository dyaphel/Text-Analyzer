import { useState } from 'react';

const ResultsDisplay = ({ title, content, isHTML }) => {
  const [copyState, setCopyState] = useState({ 
    text: 'Copy', 
    icon: 'fa-copy' 
  });
  
  const handleCopy = () => {
    const textToCopy = document.createElement('textarea');
    textToCopy.innerHTML = content;
    navigator.clipboard.writeText(textToCopy.value || content);
    
    setCopyState({ text: 'Copied!', icon: 'fa-check' });
    setTimeout(() => {
      setCopyState({ text: 'Copy', icon: 'fa-copy' });
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {title}
          </h2>
          {isHTML && (
            <button 
              onClick={handleCopy}
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors duration-200 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg"
            >
              <i className={`fas ${copyState.icon} mr-2`}></i>
              {copyState.text}
            </button>
          )}
        </div>
        <div 
          className="bg-gray-50 rounded-lg border border-gray-200 p-4 min-h-20 whitespace-pre-wrap"
          dangerouslySetInnerHTML={isHTML ? { __html: content } : null}
        >
          {!isHTML && (
            <span className="text-gray-800">{content}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;