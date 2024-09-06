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
      <div className=" grid grid-cols-12 gap-8 w-auto h-auto  xl:mx-[140px] lg:mx-[100px] lg:my-[140px] md:my-[96px] max-sm:my-[72px]">
        <div className=" h-auto xl:w-[564px] lg:col-start-1 lg:col-end-4 lg:w-[450px] lg:text-left  md:w-full md:col-start-2 md:col-end-12 md:text-center max-sm:col-start-2 max-sm:col-end-12 max-sm:text-center md:mb-[56px]">
          <h2 className="text-Gunmetal font-semibold text-5xl pb-9 max-sm:text-3xl">
            Limitations of BMI
          </h2>
          <p className="text-DarkElectricBlue max-sm:pb-8">
            Although BMI is often a practical indicator of healthy weight, it is
            not suited for every person. Specific groups should carefully
            consider their BMI outcomes, and in certain cases, the measurement
            may not be beneficial to use.
          </p>
        </div>
        <div className="p-8 shadow-2xl shadow-shadowBlue  rounded-2xl xl:w-[365px] xl:h-[232px] lg:w-[300px] lg:h-auto lg:col-start-8 lg:col-end-11 md:col-start-2 md:col-end-7 max-sm:col-start-2 max-sm:col-end-12">
          <div className="flex flex-row items-center pb-4">
            <img src={iconGender} alt="icon Gender" className="pr-1" />
            <h3 className="text-Gunmetal font-semibold text-xl">Gender</h3>
          </div>
          <p className="text-DarkElectricBlue">
            The development and body fat composition of girls and boys vary with
            age. Consequently, a child's age and gender are considered when
            evaluating their BMI.
          </p>
        </div>
        <div className="col-span-2 xl:col-start-3 lg:col-start-2 lg:block md:hidden max-sm:hidden">
          <img src={patternCurvedRight} alt="pattern Curved Right" />
        </div>
        <div className="p-8 shadow-2xl shadow-shadowBlue  rounded-2xl xl:w-[365px] xl:h-[232px] xl:col-start-5 xl:col-end-7  lg:col-start-4 lg:col-end-7 lg:w-[300px] lg:h-auto md:col-start-7 md:col-end-12 max-sm:col-start-2 max-sm:col-end-12">
          <div className="flex flex-row items-center pb-4">
            <img src={iconAge} alt="icon Age" className="pr-1" />
            <h3 className="text-Gunmetal font-semibold text-xl">Age</h3>
          </div>
          <p className="text-DarkElectricBlue">
            In aging individuals, increased body fat and muscle loss may cause
            BMI to underestimate body fat content.
          </p>
        </div>
        <div className="p-8 shadow-2xl shadow-shadowBlue  rounded-2xl xl:w-[365px] xl:h-[232px] lg:col-start-9 lg:col-end-11 lg:w-[300px] lg:h-auto md:col-start-2 md:col-end-7 max-sm:col-start-2 max-sm:col-end-12">
          <div className="flex flex-row items-center pb-4">
            <img src={iconMuscle} alt="icon Muscle" className="pr-1" />
            <h3 className="text-Gunmetal font-semibold text-xl">Muscle</h3>
          </div>
          <p className="text-DarkElectricBlue">
            BMI may misclassify muscular individuals as overweight or obese, as
            it doesn't differentiate muscle from fat.
          </p>
        </div>
        <div className="p-8 shadow-2xl shadow-shadowBlue  rounded-2xl xl:w-[365px] xl:h-[232px] xl:col-start-3 lg:col-start-3 lg:col-end-6 lg:w-[300px] lg:h-auto md:col-start-7 md:col-end-12 max-sm:col-start-2 max-sm:col-end-12">
          <div className="flex flex-row items-center pb-4">
            <img src={iconPregnancy} alt="icon Pregnancy" className="pr-1" />
            <h3 className="text-Gunmetal font-semibold text-xl">Pregnancy</h3>
          </div>
          <p className="text-DarkElectricBlue">
            Expectant mothers experience weight gain due to their growing baby.
            Maintaining a healthy pre-pregnancy BMI is advisable to minimize
            health risks for both mother and child.
          </p>
        </div>
        <div className="p-8 shadow-2xl shadow-shadowBlue  rounded-2xl xl:w-[365px] xl:h-[232px] xl:col-start-7 lg:col-start-8 lg:col-end-11 lg:w-[300px] lg:h-auto md:col-start-4 md:col-end-10 max-sm:col-start-2 max-sm:col-end-12">
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
      </div>
    </div>
  );
};

export default Limitations;
