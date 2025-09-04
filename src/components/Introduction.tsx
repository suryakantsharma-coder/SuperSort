import AddToChromeButton from './add-to-chrome-btn';

function Introductions() {
  return (
    <div className="w-[100%] flex justify-center items-center intro-dot-bg">
      <div className="w-[100%] flex justify-center  intro-line-bg">
        <div className="px-[5%] lg:px-[211px] md:px-[5%]">
          <div className=" flex-col justify-center items-center intro-text-bg mt-[170px]">
            <h1 className=" lg:hidden text-[#141414] font-700 text-[32px] lg:text-[62px] text-center lending-[40px]">
              The Fastest Way to Grow on Instagram & TikTok
            </h1>
            <>
              <h1 className="hidden lg:block text-[#141414] font-700 text-[32px] md:text-[62px] text-center lending-[40px]">
                The Fastest Way to Grow
              </h1>
              <h1 className="hidden lg:block text-[#141414] font-700 text-[32px] md:text-[62px] text-center -mt-[10px]  md:-mt-[24px]">
                on Instagram & TikTok
              </h1>
            </>

            <p className="lg:hidden text-[#575754] font-500 text-[14px] md:text-[20px] text-center ">
              Sort reels & posts & tiktoks, export engagement data, and download content
            </p>

            <p className="hidden lg:block text-[#575754] font-500 text-[14px] md:text-[20px] text-center ">
              Sort reels & posts & tiktoks, export engagement data, <br /> and download content
            </p>

            <div className="flex justify-center items-center mt-[30px]">
              <AddToChromeButton />
            </div>
          </div>

          <div className="w-[100%] h-[100%] flex justify-center mt-[50px] mb-[127px]">
            <img className=" h-[600px] " src="/assets/icons/video-placeholder.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introductions;
