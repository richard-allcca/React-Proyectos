import { useState } from "react";
import CircleProgressBar from "./children/CircleProgressBar";
import "./styles.css";

const ProgressCircular = () => {
  const [percentage, setPercentage] = useState(35);


  return (
    <div className="progress">
      <CircleProgressBar percentage={ percentage } circleWidth="200" />

      <input
        type="range"
        min={ 1 }
        max="100"
        step={ 1 }
        value={ percentage }
        className="progressInput"
        onChange={ (e) => setPercentage(e.target.value) }
      />
    </div>
  );
};

export default ProgressCircular;
