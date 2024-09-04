import { iconEating, iconExercise, iconSleep } from "../assets/images"

const Tips = () => {
  return (
    <div>
      <div className="bg-Gradient1 rounded-[35px]  h-auto mx-6 flex flex-row justify-between items-top p-28 max-lg:p-16 max-sm:p-14 max-sm:flex-col max-sm:my-4">
        <section className="h-auto w-[30%] max-sm:w-full max-sm:mb-8">
          <img src={iconEating} alt="Icon of a person eating" className="mb-11"/>
          <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">Healthy Eating</h2>
          <p className=" text-DarkElectricBlue md:text-sm">
          Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.          
          </p>
        </section>
        <section className="h-auto w-[30%] max-sm:w-full max-sm:mb-8">
          <img src={iconExercise} alt="Icon of exercise" className="mb-11"/>
          <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">Regular exercise</h2>
          <p className="text-DarkElectricBlue md:text-sm">
          Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.          
          </p>
        </section>
        <section className="h-auto w-[30%] max-sm:w-full max-sm:mb-8">
          <img src={iconSleep} alt="Icon of exercise" className="mb-11"/>
          <h2 className="text-Gunmetal font-semibold text-xl pb-6 md:text-lg">Adequate sleep</h2>
          <p className="text-DarkElectricBlue md:text-sm">
          Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.          
          </p>
        </section>
      </div>
    </div>
  )
}

export default Tips
