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
      className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <i className="fas fa-align-left mr-2"></i> Count words
    </button>
  );
};

export default CountWords;