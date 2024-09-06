import { logo } from "../assets/images";
import Calculation from "./Calculation";

const Hero = () => {
  return (
    <div>
      <div className="relative h-[100vh] lg:h-[773px] md:h-[821px] flex lg:flex-row justify-between items-center xl:px-[140px] lg:px-[70px] md:flex-col md:items-center md:px-[43px]  max-sm:flex-col max-sm:px-[43px] max-sm:h-auto ">
        <div className="bg-Gradient1 rounded-b-[35px] absolute left-6 top-0 -z-10 xl:h-[737px] xl:w-[978px] lg:w-[65%] lg:h-[737px] md:w-full md:h-[640px] md:left-0 max-sm:w-full max-sm:h-[640px] max-sm:left-0"></div>
        <div className="xl:text-left lg:w-[45%]  md:w-full md:text-center max-sm:text-center max-sm:mt-8">
          <img
            src={logo}
            alt="logo"
            className="h-[64px] w-[64px] lg:absolute top-[75px] md:relative md:top-0 md:mt-10 md:mb-5 md:mx-auto max-sm:mx-auto"
          />

          {/*Text information */}
          <section className=" h-full max-sm:mt-6">
            <h1 className="text-[64px] font-semibold text-Gunmetal mb-[35px] lg:text-5xl max-sm:text-5xl">
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
              <div className="w-1/2">
                <input type="radio" name="metric" id="metric" />
                <label
                  htmlFor="metric"
                  className="text-Gunmetal font-semibold ml-[18px]"
                >
                  Metric
                </label>
              </div>
              <div className="w-1/2">
                <input type="radio" name="imperial" id="imperial" />
                <label
                  htmlFor="imperial"
                  className="text-Gunmetal font-semibold ml-[18px]"
                >
                  Imperial
                </label>
              </div>
            </fieldset>
            <fieldset className="flex flex-row justify-between mb-8">
              <div className="w-[45%]">
                <label
                  htmlFor="height"
                  className="text-sm text-DarkElectricBlue"
                >
                  Height
                </label>{" "}
                <br />
                <div className="flex flex-row bg-PureWhite border border-DarkElectricBlue p-5 rounded-xl">
                  <input
                    type="number"
                    name="height"
                    id="height"
                    placeholder="0"
                    className="w-full text-DarkElectricBlue"
                  />
                  <p className="text-Blue">cm</p>
                </div>
              </div>
              <div className="w-[45%]">
                <label
                  htmlFor="weight"
                  className="text-sm text-DarkElectricBlue"
                >
                  Weight
                </label>{" "}
                <br />
                <div className="flex flex-row bg-PureWhite border border-DarkElectricBlue p-5 rounded-xl">
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    placeholder="0"
                    className="w-full text-DarkElectricBlue"
                  />
                  <p className="text-Blue">kg</p>
                </div>
              </div>
            </fieldset>

            {/* Calculation component */}
            <Calculation />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Hero;
