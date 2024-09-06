import { iconEating, iconExercise, iconSleep } from "../assets/images";

const Tips = () => {
  return (
    <div>
      <div className="bg-Gradient1 lg:rounded-[35px] md:rounded-none  h-auto lg:mx-6 md:mx-0 flex lg:flex-row md:flex-col max-sm:flex-col justify-between items-top p-28 max-lg:p-16 max-sm:p-14  max-sm:my-4">
        <section className=" flex h-auto lg:w-[30%] lg:items-start lg:flex-col md:flex-row    md:w-full md:items-center md:mb-10 max-sm:w-full max-sm:mb-8 max-sm:items-start max-sm:flex-col">
          <img
            src={iconEating}
            alt="Icon of a person eating"
            className="lg:mb-11 w-16 h-16 mr-[18px] max-sm:mb-11"
          />
          <div className="flex flex-col justify-start">
            <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">
              Healthy Eating
            </h2>
            <p className=" text-DarkElectricBlue md:text-sm">
              Healthy eating promotes weight control, disease prevention, better
              digestion, immunity, mental clarity, and mood.
            </p>
          </div>
        </section>
        <section className=" flex h-auto lg:w-[30%] lg:items-start  lg:flex-col md:flex-row md:items-center md:w-full md:mb-10 max-sm:w-full max-sm:mb-8 max-sm:items-start max-sm:flex-col">
          <img
            src={iconExercise}
            alt="Icon of exercise"
            className="lg:mb-11 w-16 h-16 mr-[18px] max-sm:mb-11"
          />
          <div className="flex flex-col justify-start">
            <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">
              Regular exercise
            </h2>
            <p className="text-DarkElectricBlue md:text-sm">
              Exercise improves fitness, aids weight control, elevates mood, and
              reduces disease risk, fostering wellness and longevity.
            </p>
          </div>
        </section>
        <section className=" flex h-auto lg:w-[30%] lg:items-start  lg:flex-col md:flex-row md:items-center md:w-full md:mb-10 max-sm:w-full max-sm:mb-8 max-sm:items-start max-sm:flex-col">
          <img
            src={iconSleep}
            alt="Icon of exercise"
            className="lg:mb-11 w-16 h-16 mr-[18px] max-sm:mb-11"
          />
          <div className="flex flex-col justify-start">
            <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">
              Adequate sleep
            </h2>
            <p className="text-DarkElectricBlue md:text-sm">
              Sleep enhances mental clarity, emotional stability, and physical
              wellness, promoting overall restoration and rejuvenation.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tips;
