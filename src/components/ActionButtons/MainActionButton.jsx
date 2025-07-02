import CountWithSpaces from './CountWithSpaces';
import CountWithoutSpaces from './CountWithoutSpaces';
import CountWords from './CountWords';
//import RemoveWatermark from './RemoveWatermark';
import DoubleSpaces from './DoubleSpaces';
const ActionButtons = ({ text, showResult, setCleanText, setShowCleanText }) => {
  return (
    <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-lg mb-6 border border-indigo-100">
      <div className="flex flex-wrap gap-4">
        <CountWithSpaces text={text} showResult={showResult} />
        <CountWithoutSpaces text={text} showResult={showResult} />
        <CountWords text={text} showResult={showResult} />
        <DoubleSpaces 
          text={text} 
          showResult={showResult}
          setCleanText={setCleanText}
          setShowCleanText={setShowCleanText}
        />
      </div>

      {/* <RemoveWatermark 
        text={text} 
        showResult={showResult}
        setCleanText={setCleanText}
        setShowCleanText={setShowCleanText}
      /> */}
    </div>
  );
};

export default ActionButtons;