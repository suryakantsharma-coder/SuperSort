'use client';
import AddToChromeButton from './add-to-chrome-btn';

function Introductions() {
  return (
    <div className="w-[100%] flex justify-center items-center intro-dot-bg">
      <div className="w-[100%] flex justify-center  intro-line-bg">
        <div className="px-[5%] lg:px-[211px] md:px-[5%]">
          <div className=" flex-col justify-center items-center intro-text-bg mt-[170px]">
            <h1 className="xl:hidden text-[#141414] satoshi-bold  text-[32px] lg:text-[52px] text-center leading-[40px] lg:leading-[60px]">
              The Fastest Way to Grow on Instagram & TikTok
            </h1>
            <>
              <h1
                className="hidden xl:block text-[#141414] satoshi-bold text-[32px] md:text-[62px] text-center leading-[60px]"
                style={{
                  lineHeight: '60px',
                }}
              >
                The Fastest Way to Grow
              </h1>
              <h1 className="hidden xl:block text-[#141414] satoshi-bold  text-[32px] md:text-[62px] text-center">
                on Instagram & TikTok
              </h1>
            </>

            <p className="xl:hidden text-[#575754] satoshi-medium text-[14px] md:text-[20px] text-center ">
              Sort reels & posts & tiktoks, export engagement data, and download content
            </p>

            <p className="hidden xl:block text-[#575754] satoshi-medium text-[14px] md:text-[20px] text-center ">
              Sort reels & posts & tiktoks, export engagement data, <br /> and download content
            </p>

            <div className="flex justify-center items-center mt-[30px]">
              <AddToChromeButton />
            </div>
          </div>

          <div className="w-[100%] h-[100%] flex justify-center mt-[50px] mb-[127px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[600px] w-[100%] object-cover "
              poster="/assets/icons/video-placeholder.png"
              style={{
                padding: '13.5px',
                borderRadius: '18px',
                border: '0.0px solid rgba(0, 0, 0, 0.90)',
                background: 'rgba(203, 203, 203, 0.10)',
                boxShadow:
                  '0 4px 20px 0 rgba(114, 119, 126, 0.25), 0 0.9px 5.403px 0 rgba(100, 103, 110, 0.25) inset',
                backdropFilter: 'blur(15px)',
              }}
            >
              <source src="/assets/videos/intro.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introductions;
