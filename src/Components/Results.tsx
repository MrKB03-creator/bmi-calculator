import { manEating, patternCurvedLeft } from "../assets/images";

const Results = () => {
  return (
    <div>
      <div className="flex flex-row w-auto mx-[140px] my-[96px] h-auto justify-between items-center  max-lg:mx-[120px] md:mx-[80px]  max-sm:flex-col max-sm:m-10 relative max-sm:mt-0">
        <div className="absolute -top-24 right-24  w-14 lg:right-5 lg:h-auto md:right-1 max-sm:hidden">
          <img src={patternCurvedLeft} alt="pattern Curved Right" className="h-auto w-auto"/>
        </div>
        <section className="w-1/2 max-sm:w-full">
          <img src={manEating} alt="man Eating" className="w-[564px] h-[533px] object-contain"/>
        </section>
        <section className="w-[40%] max-sm:w-full mt-10 max-sm:mt-0 max-sm:mb-8">
          <h1 className="font-semibold text-2xl text-Gunmetal">What your BMI result means</h1>
          <p className="pt-9 text-justify text-DarkElectricBlue">
            A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
            Maintaining a healthy weight may lower your chances of experiencing
            health issues later on, such as obesity and type 2 diabetes. Aim for
            a nutritious diet with reduced fat and sugar content, incorporating
            ample fruits and vegetables. Additionally, strive for regular
            physical activity, ideally about 30 minutes daily for five days a
            week.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Results;
