import what from "../assets/what.png";
export function What() {
  return (
    <div className="w-full max-w-[1110px] m-auto px-5  py-5 mb-[47px]">
      <h2 className="text-[32px] text-navtext font-extrabold text-center mt-[62px] mb-[100px]">
        What they’ve said
      </h2>
      <div className="flex flex-row flex-nowrap gap-7 overflow-auto py-10">
        <div className="p-5 bg-bodycolor flex flex-col items-center relative w-full min-w-[300px] max-w-[540px]">
          <img
            src={what}
            alt="imgs our users"
            className="absolute top-[-36px] "
          />
          <span className="font-bold text-base text-navtext mt-[62px] mb-5">
            Ali Bravo
          </span>
          <p className="text-sm text-navtext text-center opacity-50 ">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        <div className="w-full min-w-[300px] max-w-[540px] p-5 bg-bodycolor flex flex-col items-center relative">
          <img
            src={what}
            alt="imgs our users"
            className="absolute top-[-36px] "
          />
          <span className="font-bold text-base text-navtext mt-[62px] mb-5">
            Ali Bravo
          </span>
          <p className="text-sm text-navtext text-center opacity-50 ">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
        <div className="w-full min-w-[300px] max-w-[540px]   p-5 bg-bodycolor flex flex-col items-center relative">
          <img
            src={what}
            alt="imgs our users"
            className="absolute top-[-36px] "
          />
          <span className="font-bold text-base text-navtext mt-[62px] mb-5">
            Ali Bravo
          </span>
          <p className="text-sm text-navtext text-center opacity-50 ">
            “We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.”
          </p>
        </div>
      </div>
      <button className="flex lg:px-8 bg-buttonbg  px-4 py-3 rounded-3xl text-4 text-white font-bold hover:scale-[1.1] transition-all mt-7 ml-auto mr-auto">
        Get Started
      </button>
    </div>
  );
}
