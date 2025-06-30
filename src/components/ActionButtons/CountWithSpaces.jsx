const CountWithSpaces = ({ text, showResult }) => {
  const countWithSpaces = () => {
    showResult(
      'Character Count (with spaces)', 
      `${text.length.toLocaleString()} characters including spaces`
    );
  };

  return (
    <button 
      onClick={countWithSpaces}
      className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <i className="fas fa-text-width mr-2"></i> Count (with spaces)
    </button>
  );
};

export default CountWithSpaces;