const buttonBaseClasses = "text-white px-5 py-2.5 rounded-xl flex items-center transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 shadow-md";

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
      className={`${buttonBaseClasses} bg-white hover:bg-gray-100 border border-gray-200`}
    >
      <span className="text-gray-800 font-medium">
         <i className="fas fa-text-width mr-2 text-indigo-600"></i>Count (with spaces)
      </span>
    </button>
  );
};

export default CountWithSpaces;