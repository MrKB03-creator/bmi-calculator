import {
  iconAge,
  iconGender,
  iconMuscle,
  iconPregnancy,
  iconRace,
  patternCurvedRight,
} from "../assets/images/index";

const Limitations = () => {
  return (
    <div>
      <div className="p-36 lg:px-28 md:px-20 sm:px-10 max-sm:p-8">
        <section className="flex flex-row justify-between pb-8 max-w-[1044px] lg:pr-3 md:pr-2 sm:pr-0 max-sm:flex-col">
          <div className="w-[45%] max-sm:w-full">
            <h2 className="text-Gunmetal font-semibold text-5xl pb-9">Limitations of BMI</h2>
            <p className="text-DarkElectricBlue max-sm:pb-8 max-sm:text-justify">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </p>
          </div>
          <div className="lg:w-[365px] p-8 shadow-2xl shadow-shadowBlue  rounded-2xl md:w-[50%]">
            <div className="flex flex-row items-center pb-4">
              <img src={iconGender} alt="icon Gender" className="pr-1" />
              <h3 className="text-Gunmetal font-semibold text-xl">Gender</h3>
            </div>
            <p className="text-DarkElectricBlue">
              The development and body fat composition of girls and boys vary
              with age. Consequently, a child's age and gender are considered
              when evaluating their BMI.
            </p>
          </div>
        </section>

        <section className="flex flex-row justify-between pb-8 lg:pl-[8%] md:pl-0  max-sm:flex-col ">
        <div className="xl:pr-[10%] lg:md-[8%] md:pr-[2%] max-sm:hidden">
            <img src={patternCurvedRight} alt="pattern Curved Right" />
          </div>
          <div className="xl:w-[365px] p-8 shadow-2xl shadow-shadowBlue rounded-2xl lg:w-[40%] md:w-[38%] max-sm:mb-8 ">
            <div className="flex flex-row items-center pb-4">
              <img src={iconAge} alt="icon Age" className="pr-1" />
              <h3 className="text-Gunmetal font-semibold text-xl">Age</h3>
            </div>
            <p className="text-DarkElectricBlue">
              In aging individuals, increased body fat and muscle loss may cause
              BMI to underestimate body fat content.
            </p>
          </div>
          <div className="xl:w-[365px] p-8 shadow-2xl shadow-shadowBlue rounded-2xl lg:w-[40%] md:w-[38%] ">
            <div className="flex flex-row items-center pb-4">
              <img src={iconMuscle} alt="icon Muscle" className="pr-1" />
              <h3 className="text-Gunmetal font-semibold text-xl">Muscle</h3>
            </div>
            <p className="text-DarkElectricBlue">
              BMI may misclassify muscular individuals as overweight or obese,
              as it doesn't differentiate muscle from fat.
            </p>
          </div>
        </section>

        <section className="flex flex-row justify-between pb-8 lg:pl-[20%] lg:pr-[10%] md:pl-[3%] md:pr-[5%] max-sm:flex-col">
          <div className="xl:w-[365px] p-8 shadow-2xl shadow-shadowBlue rounded-2xl lg:w-[45%] md:w-[44%] max-sm:mb-8">
            <div className="flex flex-row items-center pb-4">
              <img src={iconPregnancy} alt="icon Pregnancy" className="pr-1"/>
              <h3 className="text-Gunmetal font-semibold text-xl">Pregnancy</h3>
            </div>
            <p className="text-DarkElectricBlue">
              Expectant mothers experience weight gain due to their growing
              baby. Maintaining a healthy pre-pregnancy BMI is advisable to
              minimize health risks for both mother and child.
            </p>
          </div>
          <div className="xl:w-[365px] p-8 shadow-2xl shadow-shadowBlue rounded-2xl lg:w-[45%] md:w-[44%]">
            <div className="flex flex-row items-center pb-4">
              <img src={iconRace} alt="icon Race" className="pr-1" />
              <h3 className="text-Gunmetal font-semibold text-xl">Race</h3>
            </div>
            <p className="text-DarkElectricBlue">
              Certain health concerns may affect individuals of some Black and
              Asian origins at lower BMIs than others. To learn more, it is
              advised to discuss this with your GP or practice nurse.{" "}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Limitations;
