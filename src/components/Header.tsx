import AddToChromeButton from './add-to-chrome-btn';

function Header() {
  return (
    <div className="w-[100%] absolute top-0 flex justify-center items-center mt-[20px] px-[5%] lg:px-[7%] xl:px-[211px] md:px-[5%] z-10">
      <div className="w-[100%] h-[66px] flex justify-between items-center  rounded-full border-1 border-[rgba(255, 255, 255, 0.12)] py-[19px] pl-[32px] pr-[8px] bg-[rgba(255, 255, 255, 0.80)] backdrop-blur-[100px]">
        <div className="flex items-center">
          <img className="w-[34px] h-[28px] mr-[5px]" src="/assets/icons/logo.png" alt="" />
          <p className="text-[#141414] font-500 text-[20px] santoshi-bold">SuperSort</p>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-[32px] text-[#141414]">
            <li className="text-[16px] santoshi-regular">How It works</li>
            <li className="text-[16px] santoshi-regular">Features</li>
            <li className="text-[16px] santoshi-regular">FAQs</li>
          </ul>
        </div>
        <div className="hidden md:block">
          <AddToChromeButton />
        </div>
      </div>
    </div>
  );
}

export default Header;
