const Header = () => {
  return (
    <header className="text-center mb-8 py-2 bg-gradient-to-r from-indigo-900 to-purple-700 rounded-xl shadow-2xl overflow-visible relative">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/5 rounded-xl"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Main heading with enhanced contrast */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 py-2 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-200 animate-fade-in drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
          Text Analyzer
        </h1>
      </div>
    </header>
  );
};
export default Header;