import React, { useState } from "react";
import SettingsDropdown from "./SettingsDropdown";

const SettingsDropdownContainer = (props) => {
  const getTotalFreq = () => {
    return (
      parseInt(props.insideStraightFreq) +
      parseInt(props.openStraightFreq) +
      parseInt(props.flushDrawFreq) +
      parseInt(props.noHitsFreq) +
      parseInt(props.tripsToFullhouseOrQuadsFreq) +
      parseInt(props.onePairToTwoPairFreq) +
      parseInt(props.twoPairToFullhouseFreq)
    );
  };

  const getInsideStraightProb = () => {
    console.log(getTotalFreq() + "getTotalFreq");
    console.log(props.insideStraightFreq + "insideStraightFreq");
    return (props.insideStraightFreq * 100) / getTotalFreq();
  };

  const getOpenStraightProb = () => {
    return (props.openStraightFreq * 100) / getTotalFreq();
  };

  const getFlushDrawProb = () => {
    return (props.flushDrawFreq * 100) / getTotalFreq();
  };

  const getNoHitsProb = () => {
    return (props.noHitsFreq * 100) / getTotalFreq();
  };

  const getTripsToFullhouseOrQuadsProb = () => {
    return (props.tripsToFullhouseOrQuadsFreq * 100) / getTotalFreq();
  };

  const getOnePairToTwoPairProb = () => {
    return (props.onePairToTwoPairFreq * 100) / getTotalFreq();
  };

  const getTwoPairToFullhouseProb = () => {
    return (props.twoPairToFullhouseFreq * 100) / getTotalFreq();
  };

  return (
    <SettingsDropdown
      setInsideStraightFreq={props.setInsideStraightFreq}
      setOpenStraightFreq={props.setOpenStraightFreq}
      setFlushDrawFreq={props.setFlushDrawFreq}
      setNoHitsFreq={props.setNoHitsFreq}
      setTripsToFullhouseOrQuadsFreq={props.setTripsToFullhouseOrQuadsFreq}
      setOnePairToTwoPairFreq={props.setOnePairToTwoPairFreq}
      setTwoPairToFullhouseFreq={props.setTwoPairToFullhouseFreq}
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
