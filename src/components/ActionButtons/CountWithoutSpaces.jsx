 
const buttonBaseClasses = "text-white px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

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
      className={`${buttonBaseClasses} relative overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-700 hover:from-indigo-500 hover:to-purple-400`}
    >
      <span className="absolute inset-0 bg-white/5"></span>
      <span className="relative text-white font-medium">
        <i className="fas fa-text-width mr-2"></i> Count (no spaces)
      </span>
    </button>
  );
};

export default CountWithoutSpaces;