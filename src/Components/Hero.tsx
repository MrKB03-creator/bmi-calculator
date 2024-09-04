import { logo } from "../assets/images";

const Hero = () => {
  return (
    <div className="mx-[24px] max-sm:mx-0">
      <div className="h-[737px] max-w-[61%] bg-Gradient1 rounded-b-[35px]  pl-[5%] flex flex-col  pt-[75px]  max-sm:max-w-full max-sm:h-auto max-sm:pb-5 max-sm:pr-5 max-sm:pt-10 ">
        <img src={logo} alt="logo" className="h-[64px] w-[64px]" />

        {/*Text information */}
        <section className="flex items-left flex-col  h-[400px] absolute top-[270px] max-sm:relative max-sm:top-10 max-sm:h-auto max-sm:mb-16">
          <h1 className="text-[64px] lg:text-6xl md:text-4xl font-semibold leading-tight text-Gunmetal ">
            Body Mass
            <br />
            Index Calculator
          </h1>
          <p
            className="text-[16px] leading-normal
          text-DarkElectricBlue text-justify mt-5 w-[40%]
          max-md:w-[50%] max-sm:w-full max-sm:pr-5 "
          >
            Better understand your weight in relation to your height using{" "}
            our body mass index (BM) calculator. While BMI is not the{" "}
            sole determinant of a healthy weight, it offers a valuable{" "}
             starting point to evaluate your overall health and
            well-being.
          </p>
        </section>

        {/*Input information Form */}
        <section className="absolute right-[10%] mt-[5%] w-[40%] h-auto bg-white rounded-2xl p-8 shadow-lg shadow-shadowBlue max-lg:w-[45%] lg:right-[3%] md:right-8  max-sm:relative max-sm:w-full max-sm:mt-0 max-sm:right-0  max-sm:p-6 ">
          <form className="flex flex-col justify-between h-[384px]">
            <legend className="text-Gunmetal text-2xl font-semibold">Enter your details below</legend>
            <fieldset className="flex flex-row justify-between w-full">
              <div className="w-1/2">
                <input type="radio" name="metric" id="metric" />
                <label htmlFor="metric" className="pl-5 font-bold">Metric</label>
              </div>
              <div className="w-1/2">
                <input type="radio" name="imperial" id="imperial" />
                <label htmlFor="imperial" className="pl-5 font-bold">Imperial</label>
              </div>
            </fieldset>
            <fieldset className="flex flex-row justify-between">
              <div className="w-1/2 pr-3">
                <label htmlFor="height" className="text-sm text-Gunmetal ">Height</label> <br />
                <div className="flex flex-row border border-DarkElectricBlue rounded-xl py-6 px-5 w-full mt-1">
                  <input type="number" name="height" id="height" placeholder="0" className="text-xl font-semibold w-full"/>
                  <p className="text-Blue font-semibold text-xl">cm</p>
                </div>
              </div>
              <div className="w-1/2 pl-3">
                <label htmlFor="weight" className="text-sm text-Gunmetal">Weight</label> <br />
                <div className="flex flex-row border border-DarkElectricBlue rounded-xl py-6 px-5 w-full mt-1">
                  <input type="number" name="weight" id="weight" placeholder="0" className="text-xl font-semibold w-full"/>
                  <p className="text-Blue font-semibold text-xl">kg</p>
                </div>
              </div>
            </fieldset>
            <button className="w-full h-auto p-8 bg-Blue rounded-r-full text-white text-left">
              <h2 className="font-semibold text-xl mb-2">Welcome!</h2>
              <p className="text-sm text-PureWhite font-light">Enter your height and wight and you'll see your BMI result here</p>
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Hero;
