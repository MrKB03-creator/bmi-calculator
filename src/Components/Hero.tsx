import React, { useState } from "react";
import { logo } from "../assets/images";

const Hero = () => {
  const [selectedUnit, setSelectedUnit] = useState("metric");

  const handleUnitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUnit(e.target.value);
  };

  const [cmHeight, setcmHeight] = useState(0);
  const [kgWeight, setkgWeight] = useState(0);
  const [ftHeight, setftHeight] = useState(0);
  const [inHeight, setinHeight] = useState(0);
  const [stWeight, setstWeight] = useState(0);
  const [lbsWeight, setlbsWeight] = useState(0);


  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setcmHeight(parseInt(e.target.value));
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setkgWeight(parseInt(e.target.value));
  };

  const handleFtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setftHeight(parseInt(e.target.value));
  };

  const handleInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinHeight(parseInt(e.target.value));
  };

  const handleStChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setstWeight(parseInt(e.target.value));
  };

  const handleLbsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlbsWeight(parseInt(e.target.value));
  };

  const calculateIdealWeightLowest = () => {

    if (selectedUnit === "metric" && cmHeight > 0) {
      return 45.5 + 0.9 * (cmHeight - 152);
    } else if (selectedUnit === "imperial" && ftHeight > 0 && inHeight >= 0) {
      const heightInInches = ftHeight * 12 + inHeight;
      return 45.5 + 2.3 * (heightInInches - 60);
    }
    return null;
  };

  const calculateIdealWeightHighest = () => {

    if (selectedUnit === "metric" && cmHeight > 0) {
      return 50 + 0.9 * (cmHeight - 152);
    } else if (selectedUnit === "imperial" && ftHeight > 0 && inHeight >= 0) {
      const heightInInches = ftHeight * 12 + inHeight;
      return 50 + 2.3 * (heightInInches - 60);
    }
    return null;
  };

  const calculateBMI = () => {
    if (selectedUnit === "metric" && cmHeight > 0 && kgWeight > 0) {
      const heightInMeters = cmHeight / 100;
      const bmiMetric = kgWeight / (heightInMeters * heightInMeters);
      return bmiMetric;
    } else if (
      selectedUnit === "imperial" &&
      ftHeight > 0 &&
      inHeight > 0 &&
      stWeight > 0 &&
      lbsWeight > 0
    ) {
      const heightInInches = ftHeight * 12 + inHeight;
      const weightInKgs = (stWeight * 14 + lbsWeight) * 0.453592;
      const heightInMeters = heightInInches * 0.0254;
      const bmiImperial = weightInKgs / (heightInMeters * heightInMeters);
      return bmiImperial;
    }
    return 0;
  };
  

  return (
    <div>
      <div className="relative h-[100vh] lg:h-[773px] md:h-auto flex lg:flex-row justify-between items-center xl:px-[140px] lg:px-[70px] md:flex-col md:items-center md:px-[43px]  max-sm:flex-col max-sm:px-[43px] max-sm:h-auto ">
        <div className="bg-Gradient1 rounded-b-[35px] absolute left-6 top-0 -z-10 xl:h-[737px] xl:w-[978px] lg:w-[65%] lg:h-[737px] md:w-full md:h-[640px] md:left-0 max-sm:w-full max-sm:h-[640px] max-sm:left-0"></div>
        <div className="xl:text-left lg:w-[45%]  md:w-full md:text-center max-sm:text-center max-sm:mt-8">
          <img
            src={logo}
            alt="logo"
            className="h-[64px] w-[64px] lg:absolute top-[75px] md:relative md:top-0 md:mt-10 md:mb-5 md:mx-auto max-sm:mx-auto"
          />

          {/*Text information */}
          <section className=" h-full max-sm:mt-6">
            <h1 className="text-[64px] font-semibold text-Gunmetal mb-[35px] lg:text-5xl max-sm:text-5xl ">
              Body Mass
              <br />
              Index Calculator
            </h1>
            <p className="text-DarkElectricBlue">
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </p>
          </section>
        </div>

        {/*Input information Form */}
        <section className=" p-8 rounded-2xl bg-PureWhite shadow-xl shadow-shadowBlue h-auto lg:w-[45%] md:w-full md:mt-10 max-sm:mt-12">
          <form className="flex flex-col justify-between lg:flex-col">
            <legend className="text-xl text-Gunmetal font-semibold mb-8">
              Enter your details below
            </legend>
            <fieldset className="flex flex-row mb-8">
              <div className="w-1/2 cursor-pointer">
                <input
                  type="radio"
                  name="unit"
                  id="metric"
                  checked={selectedUnit === "metric"}
                  onChange={handleUnitChange}
                  value="metric"
                />
                <label
                  htmlFor="metric"
                  className="text-Gunmetal font-semibold ml-[18px]"
                >
                  Metric
                </label>
              </div>
              <div className="w-1/2 cursor-pointer">
                <input
                  type="radio"
                  name="unit"
                  id="imperial"
                  value="imperial"
                  checked={selectedUnit === "imperial"}
                  onChange={handleUnitChange}
                />
                <label
                  htmlFor="imperial"
                  className="text-Gunmetal font-semibold ml-[18px]"
                >
                  Imperial
                </label>
              </div>
            </fieldset>

            {/* MeasuringComponent */}

            {/* Metric */}
            <fieldset
              className={`flex flex-row justify-between mb-8 ${
                selectedUnit == "metric" ? "block" : "hidden"
              }`}
            >
              <div className="w-[45%]">
                <legend className="text-sm text-DarkElectricBlue pb-2">Height</legend>
                <label
                  className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                  htmlFor="height"
                >
                  <input
                    type="number"
                    name="height"
                    id="height"
                    placeholder="0"
                    onChange={handleHeightChange}
                    className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                  />
                  <p className="text-Blue">cm</p>
                </label>
              </div>
              <div className="w-[45%]">
                <legend className="text-sm text-DarkElectricBlue pb-2">Weight</legend>
                <label
                  className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                  htmlFor="weight"
                >
                  <input
                    type="number"
                    name="height"
                    id="height"
                    placeholder="0"
                    onChange={handleWeightChange}
                    className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                  />
                  <p className="text-Blue">kg</p>
                </label>
              </div>
            </fieldset>

            {/* Imperial */}
            <fieldset
              className={`flex flex-col justify-between mb-8 ${
                selectedUnit == "metric" ? "hidden" : "block"
              }`}
            >
              {/* Height*/}
              <legend className="text-sm text-DarkElectricBlue">Height</legend>
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="w-[45%]">
                  <label
                    className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                    htmlFor="height"
                  >
                    <input
                      type="number"
                      name="height"
                      id="height"
                      placeholder="0"
                      onChange={handleFtChange}
                      className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                    />
                    <p className="text-Blue">ft</p>
                  </label>
                </div>
                <div className="w-[45%]">
                  <label
                    className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                    htmlFor="height"
                  >
                    <input
                      type="number"
                      name="height"
                      id="height"
                      placeholder="0"
                      onChange={handleInChange}
                      className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                    />
                    <p className="text-Blue">in</p>
                  </label>
                </div>
              </div>
              {/* Weight */}
              <label
                htmlFor="weight"
                className="text-sm text-DarkElectricBlue mt-6"
              >
                Weight
              </label>{" "}
              <div className="flex flex-row items-center justify-between mt-2">
                <div className="w-[45%]">
                  <label
                    className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                    htmlFor="height"
                  >
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      placeholder="0"
                      onChange={handleStChange}
                      className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                    />
                    <p className="text-Blue">st</p>
                  </label>
                </div>
                <div className="w-[45%]">
                  <label
                    className="flex flex-row items-center bg-PureWhite border border-DarkElectricBlue cursor-pointer p-5 rounded-xl focus-within:border-Blue"
                    htmlFor="height"
                  >
                    <input
                      type="number"
                      name="weight"
                      id="weight"
                      placeholder="0"
                      onChange={handleLbsChange}
                      className="w-full text-DarkElectricBlue border-0 ring-0 focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none cursor-pointer"
                    />
                    <p className="text-Blue">lbs</p>
                  </label>
                </div>
              </div>
            </fieldset>

            <div
              className={`w-full h-auto p-8 bg-Blue rounded-r-full text-white text-left max-sm:flex-col max-sm:rounded-2xl max-sm:items-start ${
                calculateBMI() === 0 ? "block" : "hidden"
              }`}
            >
              <h2 className="font-semibold text-xl mb-2">Welcome!</h2>
              <p className="text-sm text-PureWhite font-light">
                Enter your height and wight and you'll see your BMI result here
              </p>
            </div>

            <div
              className={`w-full h-auto p-8 bg-Blue rounded-r-full text-white text-left flex flex-row items-center max-sm:flex-col max-sm:rounded-2xl max-sm:items-start ${
                calculateBMI() > 0 ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-auto mr-8 max-sm:items-start max-sm:mb-6">
                <h2 className="font-semibold xl:text-xl md:text-lg mb-2 max-sm:text-xl">
                  Your BMI is...
                </h2>
                <h1 className="font-semibold xl:text-6xl md:text-5xl max-sm:text-5xl">
                  {calculateBMI().toFixed(1)}
                </h1>
              </div>
              <p className="text-sm text-PureWhite font-light w-[50%] max-sm:w-full text-justify">
                Your BMI suggests you’re a healthy weight. Your ideal weight is
                between <b className="font-bold">{calculateIdealWeightLowest()}{selectedUnit == "metric" ? "kg" : "lbs"}</b> - <b className="font-bold">{calculateIdealWeightHighest()}kgs</b>.
              </p>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Hero;
