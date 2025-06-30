import { useState } from 'react';
import Header from './components/Header';
import TextInputArea from './components/TextInputArea';
import MainActionButton from './components/ActionButtons/MainActionButton';
import ResultsDisplay from './components/ResultsDisplay';
import CleanTextDisplay from './components/CleanTextDisplay';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState({ title: '', content: '', isHTML: false });
  const [cleanText, setCleanText] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [showCleanText, setShowCleanText] = useState(false);

  const clearText = () => {
    setText('');
    setShowResults(false);
    setShowCleanText(false);
  };

  const showResult = (title, content, isHTML = false) => {
    setResult({ title, content, isHTML });
    setShowResults(true);
  };

 return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl"> {/* Reduced py-10 to py-8 */}
        <Header />
        
        {/* Reduced margin-bottom from mb-8 to mb-4 on TextInputArea */}
        <TextInputArea text={text} setText={setText} clearText={clearText} className="mb-4" />
        
        {/* Buttons card with reduced top padding */}
        <div className="bg-gradient-to-r from-indigo-700/90 to-purple-600/90 rounded-xl shadow-lg p-1 backdrop-blur-sm -mt-2"> {/* Added -mt-2 to pull up slightly */}
          <div className="bg-white/5 rounded-lg p-4 backdrop-blur-xs">
            <MainActionButton
              text={text} 
              showResult={showResult}
              setCleanText={setCleanText}
              setShowCleanText={setShowCleanText}
            />
          </div>
        </div>
        
        {/* Results sections remain the same */}
        {showResults && (
          <ResultsDisplay 
            title={result.title} 
            content={result.content} 
            isHTML={result.isHTML} 
          />
        )}
        
        {showCleanText && (
          <CleanTextDisplay cleanText={cleanText} />
        )}
      </div>
    </div>
  );
}

export default App;