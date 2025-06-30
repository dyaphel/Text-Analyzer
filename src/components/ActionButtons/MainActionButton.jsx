import CountWithSpaces from './CountWithSpaces';
import CountWithoutSpaces from './CountWithoutSpaces';
import CountWords from './CountWords';
import RemoveWatermark from './RemoveWatermark';
import DoubleSpaces from './DoubleSpaces';

const ActionButtons = ({ text, showResult, setCleanText, setShowCleanText }) => {
  return (
    <div className="flex flex-wrap gap-3">
      <CountWithSpaces text={text} showResult={showResult} />
      <CountWithoutSpaces text={text} showResult={showResult} />
      <CountWords text={text} showResult={showResult} />
      
      <div className="flex flex-wrap gap-3">
        <DoubleSpaces 
          text={text} 
          showResult={showResult}
          setCleanText={setCleanText}
          setShowCleanText={setShowCleanText}
        />
      </div>

      <RemoveWatermark 
        text={text} 
        showResult={showResult}
        setCleanText={setCleanText}
        setShowCleanText={setShowCleanText}
      />
    </div>
  );
};

export default ActionButtons;