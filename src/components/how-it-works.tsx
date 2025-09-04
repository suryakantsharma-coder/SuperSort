function HowItWorks() {
  return (
    <div className="w-[100%]  px-[5%] py-[100px] xl:p-[100px] md:px-[5%] xl:px-[10%] 2xl:px-[27%] bg-[#F8F8F8]">
      <div>
        <h1 className="text-[#141414] font-700 text-[32px] xl:text-[55px] text-center xl:leading-[60px] tracking-[-0.02em]">
          Master Content Growth <br /> in 3 Simple Steps
        </h1>

        <p
          className="text-[#58595E] font-medium text-[20px] text-center mt-[10px]"
          style={{
            lineHeight: '30px',
          }}
        >
          Instant ideas, seamless data export, inspiring <br /> downloads—SuperSort makes it easy.
        </p>

        {/* Mobile */}
        <div className="md:hidden">
          {/* 1st */}
          <div className="mt-[100px] flex-col justify-between items-center">
            <div className="w-[100%] h-[100%] ">
              <img src="/assets/how-its-works/step-1.png" alt="" />
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-[20px] mt-[20px]">
              <p className="text-[#FFA600] font-700 text-[20px] lending-[25px]">Step 1</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Find Winning Content Ideas in Seconds
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Sort content your way by sorting by creation date, likes, views, shares, and more.
              </p>
            </div>
          </div>

          {/* 2nd */}
          <div className="mt-[100px] flex-col justify-between items-center">
            <div className="w-[100%] h-[100%]">
              <img src="/assets/how-its-works/step-2.png" alt="" />
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-[20px] mt-[20px]">
              <p className="text-[#3BB9FB] font-700 text-[20px] lending-[25px]">Step 2</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Get Structured Data in One Click
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Get the data behind the content, such as captions, views, likes, and more into
                Excel, CSV, or JSON files.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="mt-[100px] flex-col justify-between items-center">
            <div className="w-[100%] h-[100%]">
              <img src="/assets/how-its-works/step-3.png" alt="" />
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-[20px] mt-[20px]">
              <p className="text-[#FF3FDF] font-700 text-[20px] lending-[25px]">Step 3</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Download Contentfor Inspiration & Reuse
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Download your curated content anytime and repurpose it for your projects, campaigns,
                or personal inspiration.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block">
          {/* 1st */}
          <div className="mt-[100px] flex justify-between items-center">
            <div className="w-[35%] flex-col justify-center items-center gap-[20px]">
              <p className="text-[#FFA600] font-700 text-[20px] lending-[25px]">Step 1</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Find Winning Content Ideas in Seconds
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Sort content your way by sorting by creation date, likes, views, shares, and more.
              </p>
            </div>
            <div className="w-[50%] h-[100%]">
              <img src="/assets/how-its-works/step-1.png" alt="" />
            </div>
          </div>

          {/* 2nd */}
          <div className="mt-[100px] flex justify-between items-center">
            <div className="w-[50%] h-[100%]">
              <img src="/assets/how-its-works/step-2.png" alt="" />
            </div>
            <div className="w-[35%] flex-col justify-center items-center gap-[20px]">
              <p className="text-[#3BB9FB] font-700 text-[20px] lending-[25px]">Step 2</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Get Structured Data in One Click
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Get the data behind the content, such as captions, views, likes, and more into
                Excel, CSV, or JSON files.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="mt-[100px] flex justify-between items-center">
            <div className="w-[35%] flex-col justify-center items-center gap-[20px]">
              <p className="text-[#FF3FDF] font-700 text-[20px] lending-[25px]">Step 3</p>
              <h1 className="text-[#101219] text-[30px]  mt-[25px] leading-[30px]">
                Download Contentfor Inspiration & Reuse
              </h1>
              <p className="text-[#58595E] font-700 text-[16px] mt-[15px] leading-[20px]">
                Download your curated content anytime and repurpose it for your projects, campaigns,
                or personal inspiration.
              </p>
            </div>
            <div className="w-[50%] h-[100%]">
              <img src="/assets/how-its-works/step-3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
