import face from "../assets/face.svg";
import you from "../assets/you.svg";
import x from "../assets/x.svg";
import pin from "../assets/pin.svg";
import ins from "../assets/ins.svg";
import footerLogo from "../assets/footer-logo.png";
export function Footer() {
  return (
    <div className="bg-footer">
      <div className="w-full  max-w-[1110px] m-auto px-5 py-5 sm:flex  sm:flex-row-reverse">
        <div>
          <form className="flex flex-nowrap gap-2 mb-[64px] max-w-[400px] m-auto">
            <input
              className="py-3 px-4 rounded-[22px] grow"
              type="text"
              placeholder="Updates in your inbox…"
            />
            <button className="flex lg:px-8 bg-buttonbg  px-5 py-3 rounded-[22px] text-[13px] text-white font-bold hover:scale-[1.1] transition-all">
              Go
            </button>
          </form>
          <span className="text-sm text-white opacity-50 text-center">
            Copyright 2020. All Rights Reserved
          </span>
        </div>
        <div className="flex  justify-between mb-[50px] max-w-[400px] m-auto  sm:gap-1 sm:grow sm:justify-between">
          <ul className="text-[15px] text-white ">
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Pricing</a>
            </li>
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Products</a>
            </li>
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">About Us</a>
            </li>
          </ul>
          <ul className="text-[15px] text-white">
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Careers</a>
            </li>
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Community</a>
            </li>
            <li className="hover:text-buttonbg transition-all cursor-pointer">
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-w-[400px] m-auto sm:flex-col-reverse">
          <div className="flex  justify-between">
            <a href="#" className="sm:w-5 h-5">
              <img src={face} alt="Social network icons" />
            </a>
            <a href="#" className="sm:w-5 h-5">
              <img src={you} alt="Social network icons" />
            </a>
            <a href="#" className="sm:w-5 h-5">
              <img src={x} alt="Social network icons" />
            </a>
            <a href="#" className="sm:w-5 h-5">
              <img src={pin} alt="Social network icons" />
            </a>
            <a href="#" className="sm:w-5 h-5">
              <img src={ins} alt="Social network icons" />
            </a>
          </div>
          <img
            src={footerLogo}
            alt="Footer logo"
            className="mt-[54px] w-[158px] h-7 m-auto mb-[50px] sm:mt-auto"
          />
          <span className="text-sm text-white opacity-50 text-center sm:hidden">
            Copyright 2020. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
