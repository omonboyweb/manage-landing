import Bg from "../assets/bg-icon.svg";
export function Team() {
  return (
    <div className="bg-buttonbg">
      <div className="w-full max-w-[1110px] m-auto py-5 px-5 flex flex-col items-center pb-[90px] pt-[90px] md:flex-row md:justify-between">
        <h2 className="text-[40px] font-bold text-white leading-[100%] mb-7 text-center flex md:m-0 md:text-start ">
          Simplify how your team works today.
        </h2>
        <button className="flex px-8 bg-white  py-3 rounded-3xl text-4 text-buttonbg font-bold hover:scale-[1.1] transition-all mt-7 md:m-0">
          Get Started
        </button>
      </div>
    </div>
  );
}
