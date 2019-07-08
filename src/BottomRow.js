import React, {useState} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = useState(1);
  const [on, setOn] = useState(20);
  const [togo, setTogo] = useState(10);
  const [qtr, setQtr] = useState(1);

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <div><button onClick={() => {setDown(down + 1)}}>&and;</button><button onClick={() => {setDown(down - 1)}}>&or;</button></div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
        <div><button onClick={() => {setTogo(togo + 1)}}>&and;</button><button onClick={() => {setTogo(togo - 1)}}>&or;</button></div>

      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{on}</div>
        <div><button onClick={() => {setOn(on + 1)}}>&and;</button><button onClick={() => {setOn(on - 1)}}>&or;</button></div>

      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{qtr}</div>
        <div><button onClick={() => {setQtr(qtr + 1)}}>&and;</button><button onClick={() => {setQtr(qtr - 1)}}>&or;</button></div>

      </div>
    </div>
  );
};

export default BottomRow;
