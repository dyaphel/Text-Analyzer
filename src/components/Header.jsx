const Header = () => {

  return (
    <header className="text-center mb-16 py-12 bg-gradient-to-r from-indigo-900 to-purple-800 rounded-xl shadow-2xl overflow-visible">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 py-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 animate-fade-in">
          Text Analyzer
        </h1>
        <p className="text-lg md:text-xl text-indigo-100 opacity-90 mb-8">
          Paste your text and analyze it with our <span className="font-semibold text-purple-200">powerful tools</span>
        </p>
      </div>
    </header>
  );
};
export default Header;