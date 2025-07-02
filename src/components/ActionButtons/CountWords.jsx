const buttonBaseClasses = "text-gray-800 px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

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
      className={`${buttonBaseClasses} bg-white hover:bg-gray-100 border border-gray-200`}
    >
      <span className="text-gray-800 font-medium">
        <i className="fas fa-align-left mr-2 text-indigo-600"></i> Count words
      </span>
    </button>
  );
};

export default CountWords;