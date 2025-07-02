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

  const closeResults = () => {
    setShowResults(false);
  };

  const closeCleanText = () => {
    setShowCleanText(false);
  };

    return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <div className={`flex flex-col  ${!showResults && !showCleanText ? 'lg:flex-row justify-center' : 'lg:flex-row gap-6'}`}>
          <div className={`${!showResults && !showCleanText ? 'w-full max-w-3xl mx-auto' : 'flex-1'}`}>
            <TextInputArea 
              text={text} 
              setText={setText} 
              clearText={clearText} 
              className="mb-4"
              onClose={!showResults && !showCleanText ? null : () => {
                setShowResults(false);
                setShowCleanText(false);
              }}
            />
            
            {/* Buttons card */}
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
          {showResults && (
            <div className="flex-1">
              <ResultsDisplay 
                title={result.title} 
                content={result.content} 
                isHTML={result.isHTML}
                onClose={closeResults}
              />
            </div>
          )}
          
          {showCleanText && (
            <div className="flex-1">
              <CleanTextDisplay 
                cleanText={cleanText} 
                onClose={closeCleanText}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;