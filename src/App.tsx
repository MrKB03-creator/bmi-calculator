import Hero from "./Components/Hero";
import Results from "./Components/Results";
import Tips from "./Components/Tips";
import Limitations from "./Components/Limitations";

import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col">
        <main>
          <Hero />
          <Results />
          <Tips />
          <Limitations />
        </main>
        <footer className="flex justify-center items-center h-16 bg-gray-800 text-white">
          <p className="max-sm:text-[12px]">© 2024 BMI Calculator created by Kurt Badillo</p>
        </footer>
      </div>
    </>
  );
}

export default App;
