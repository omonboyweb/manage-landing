import Chart from "../assets/hero.png";
export function Hero() {
  return (
    <div className="w-full max-w-[1110px] flex-col justify-between items-center px-5 py-5 m-auto">
      <div>
        <img src={Chart} alt="Cart icon" />
      </div>

      <div>
        <h1 className="text-[40px] leading-[-125%] tracking-tight font-bold text-center">
          Bring everyone together to build better products.
        </h1>
        <p>
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
        <button className="hidden md:flex lg:px-8 lg: bg-buttonbg  px-4 py-3 rounded-3xl text-4 text-white font-bold hover:scale-[1.1] transition-all">
          Get Started
        </button>
      </div>
    </div>
  );
}
