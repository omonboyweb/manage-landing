import Chart from "../assets/hero.png";
export function Hero() {
  return (
    <div className="w-full max-w-[1110px] flex flex-col justify-between items-center px-5 py-5 m-auto  sm:flex-row-reverse sm:flex-nowrap">
      <div className="flex justify-center sm:w-[50%]">
        <img src={Chart} alt="Cart icon" />
      </div>

      <div className="sm:w-[50%] flex flex-col items-center sm:justify-start sm:items-start">
        <h1 className="text-[40px] leading-[100%] tracking-tight font-bold text-center text-navtext mb-2 items-center sm:text-start md:text-[56px] md:mt-10 md:mb-4">
          Bring everyone together to build better products.
        </h1>
        <p className="font-light text-base opacity-50 text-navtext text-center sm:text-start md:mb-6 md:font-normal">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="md:flex lg:px-8 bg-buttonbg  px-4 py-3 rounded-3xl text-4 text-white font-bold hover:scale-[1.1] transition-all mt-7">
          Get Started
        </button>
      </div>
    </div>
  );
}
