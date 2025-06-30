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
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Header />
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <TextInputArea text={text} setText={setText} clearText={clearText} />
          
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <MainActionButton
              text={text} 
              showResult={showResult}
              setCleanText={setCleanText}
              setShowCleanText={setShowCleanText}
            />
          </div>
        </div>
        
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