import { useState } from 'react';
import Header from './components/Header';
import TextInputArea from './components/TextInputArea';
import MainActionButton from './components/ActionButtons/MainActionButton';
import ResultsDisplay from './components/ResultsDisplay';
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
      <div className="container mx-auto px-4 py-8 max-w-6xl"> {/* Aumentato a max-w-6xl */}
        <Header />
        
        <div className="flex flex-col lg:flex-row gap-6"> {/* Aggiunto flex container */}
          {/* Colonna sinistra con textarea e pulsanti */}
          <div className="flex-1">
            <TextInputArea text={text} setText={setText} clearText={clearText} className="mb-4" />
            
            {/* Buttons card con stile più chiaro */}
            <div className="bg-gradient-to-r from-indigo-100 to-purple-100 rounded-xl shadow-lg p-1 -mt-2">
              <div className="bg-white/80 rounded-lg p-4">
                <MainActionButton
                  text={text} 
                  showResult={showResult}
                  setCleanText={setCleanText}
                  setShowCleanText={setShowCleanText}
                />
              </div>
            </div>
          </div>
          
          {/* Colonna destra per i risultati */}
          <div className="flex-1">
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
      </div>
    </div>
  );
}
export default App;