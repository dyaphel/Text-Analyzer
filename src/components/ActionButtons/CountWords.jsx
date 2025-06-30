 
const buttonBaseClasses = "text-white px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

const CountWords = ({ text, showResult }) => {
  const countWords = () => {
    if (typeof text === 'undefined') {
      console.error('Text variable is not defined');
      return;
    }
    
    const trimmedText = text.trim();
    const words = trimmedText.split(/[^\w]+/).filter(Boolean).length;
    showResult('Word Count', `${words.toLocaleString()} words`);
  };

  return (

      <button 
        onClick={countWords}
        className={`${buttonBaseClasses} relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-700 hover:from-indigo-500 hover:to-purple-400`}
      >
        <span className="absolute inset-0 bg-white/5"></span>
        <span className="relative text-white font-medium">
          <i className="fas fa-align-left mr-2"></i>   Count words
        </span>
      </button>
    
  );
};

export default CountWords;