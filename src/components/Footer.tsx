function Footer() {
  return (
    <>
      <div className="w-[100%] bg-[#FFFFFF] py-[11px] lg:px-[64px] px-[5%]">
        <img src="/assets/icons/SuperSort.png" alt="" />
        <div></div>
      </div>
      <div className="relative w-[100%]  flex justify-between items-center bg-[#FFFFFF] lg:px-[100px] py-[40px] px-[5%] -mt-28 z-10">
        <div className="flex items-center">
          <img className="w-[34px] h-[28px] mr-[5px]" src="/assets/icons/logo.png" alt="" />
          <p className="text-[#141414] font-500 font-bold text-[20px]">SuperSort</p>
        </div>
        <div className="">
          <ul className="flex gap-[50px] text-[#141414]">
            <li className="text-[20px]">Contact</li>
            <li className="text-[20px]">Privacy Policy</li>
            <li className="text-[20px]">@2025 supersort</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
