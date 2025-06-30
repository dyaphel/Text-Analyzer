const CountWithoutSpaces = ({ text, showResult }) => {
  const countNoSpaces = () => {
    const count = text.replace(/\s+/g, '').length;
    showResult(
      'Character Count (no spaces)', 
      `${count.toLocaleString()} characters excluding spaces`
    );
  };

  return (
    <button 
      onClick={countNoSpaces}
      className="btn bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center"
    >
      <i className="fas fa-text-width mr-2"></i> Count (no spaces)
    </button>
  );
};

export default CountWithoutSpaces;