import React, { useState } from "react";
import SettingsDropdown from "./SettingsDropdown";

const SettingsDropdownContainer = (props) => {
  const [insideStraightFreq, setInsideStraightFreq] = useState(5);
  const [openStraightFreq, setOpenStraightFreq] = useState(5);
  const [flushDrawFreq, setFlushDrawFreq] = useState(5);
  const [noHitsFreq, setNoHitsFreq] = useState(5);
  const [
    tripsToFullhouseOrQuadsFreq,
    setTripsToFullhouseOrQuadsFreq,
  ] = useState(5);
  const [onePairToTwoPairFreq, setOnePairToTwoPairFreq] = useState(5);
  const [twoPairToFullhouseFreq, setTwoPairToFullhouseFreq] = useState(5);

  const getTotalFreq = () => {
    return parseInt(insideStraightFreq) + parseInt(openStraightFreq) + parseInt(flushDrawFreq) + parseInt(noHitsFreq) + parseInt(tripsToFullhouseOrQuadsFreq) + parseInt(onePairToTwoPairFreq) + parseInt(twoPairToFullhouseFreq);
};

  const getInsideStraightProb = () => {
    console.log(getTotalFreq() + "getTotalFreq");
    console.log(insideStraightFreq + "insideStraightFreq");
    return insideStraightFreq * 100 / getTotalFreq();
  };

  const getOpenStraightProb = () => {
    return openStraightFreq * 100 / getTotalFreq();
  };

  const getFlushDrawProb = () => {
    return flushDrawFreq * 100 / getTotalFreq();
  };

  const getNoHitsProb = () => {
    return noHitsFreq * 100 / getTotalFreq();
  };

  const getTripsToFullhouseOrQuadsProb = () => {
    return tripsToFullhouseOrQuadsFreq * 100 / getTotalFreq();
  };

  const getOnePairToTwoPairProb = () => {
    return onePairToTwoPairFreq * 100 / getTotalFreq();
  };

  const getTwoPairToFullhouseProb = () => {
    return twoPairToFullhouseFreq * 100 / getTotalFreq();
  };

  return (
    <SettingsDropdown
      setInsideStraightFreq={setInsideStraightFreq}
      setOpenStraightFreq={setOpenStraightFreq}
      setFlushDrawFreq={setFlushDrawFreq}
      setNoHitsFreq={setNoHitsFreq}
      setTripsToFullhouseOrQuadsFreq={setTripsToFullhouseOrQuadsFreq}
      setOnePairToTwoPairFreq={setOnePairToTwoPairFreq}
      setTwoPairToFullhouseFreq={setTwoPairToFullhouseFreq}
      getInsideStraightProb={getInsideStraightProb}
      getOpenStraightProb={getOpenStraightProb}
      getNoHitsProb={getNoHitsProb}
      getFlushDrawProb={getFlushDrawProb}
      getTripsToFullhouseOrQuadsProb={getTripsToFullhouseOrQuadsProb}
      getOnePairToTwoPairProb={getOnePairToTwoPairProb}
      getTwoPairToFullhouseProb={getTwoPairToFullhouseProb}
    />
  );
};

export default SettingsDropdownContainer;
