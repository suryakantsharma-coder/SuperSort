function Footer() {
  return (
    <div className="relative">
      <div className="hidden md:block w-[100%] bg-[#FFFFFF] py-[11px]  px-[64px] xl:px-[10%]  2xl:px-[25%]">
        <img src="/assets/icons/SuperSort.png" alt="" />
        <div></div>
      </div>
      <div className="relative w-[100%]  md:flex justify-between items-center bg-[#FFFFFF]  py-[40px] px-[5%] lg:px-[7%] md:px-[7.5%]  xl:px-[10%]  2xl:px-[25%] 2xl:-mt-[4.5%] xl:-mt-[7%] md:-mt-[7.5%]  z-10">
        <div className="flex items-center">
          <img className="w-[34px] h-[28px] mr-[5px]" src="/assets/icons/logo.png" alt="" />
          <p className="text-[#141414] font-500 satoshi-bold text-[20px]">SuperSort</p>
        </div>
        <div className=" mt-[20px] lg:mt-[0px]">
          <ul className="md:flex gap-[50px] text-[#101219] sm:text-left ">
            <li className="text-[20px] satoshi-regular">Contact</li>
            <li className="text-[20px] satoshi-regular">Privacy Policy</li>
            <li className="text-[20px] satoshi-regular">@2025 supersort</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
