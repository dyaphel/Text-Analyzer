 
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
      className={`${buttonBaseClasses} bg-white hover:bg-gray-100 border border-gray-200`}
    >
      <span className="text-gray-800 font-medium">
         <i className="fas fa-text-width mr-2 text-indigo-600"></i>Count (no spaces)
      </span>
    </button>
  );
};

export default CountWithoutSpaces;