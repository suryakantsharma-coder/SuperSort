function HowItWorks() {
  return (
    <div className="w-[100%]  px-[5%] py-[100px] xl:p-[100px] md:px-[5%] xl:px-[10%] 2xl:px-[27%] bg-[#F8F8F8]">
      <div>
        <h1 className="hidden lg:block text-[#141414] statoshi-bold text-[32px] text-[55px] text-center leading-[60px] tracking-[-0.02em]">
          Master Content Growth <br /> in 3 Simple Steps
        </h1>
        <p
          className="hidden lg:block text-[#58595E] satoshi-medium text-[20px] text-center mt-[10px] lending-[30px]"
          style={{
            lineHeight: '30px',
          }}
        >
          Instant ideas, seamless data export, inspiring <br /> downloads—SuperSort makes it easy.
        </p>

        {/* Mobile */}
        <h1 className=" lg:hidden text-[#141414] statoshi-bold text-[32px] text-center leading-[40px] tracking-[-0.02em]">
          Master Content Growth in 3 Simple Steps
        </h1>

        <p
          className=" lg:hidden text-[#58595E] satoshi-regular text-[20px] text-center mt-[10px] lending-[30px]"
          style={{
            lineHeight: '30px',
          }}
        >
          Instant ideas, seamless data export, inspiring downloads—SuperSort makes it easy.
        </p>

        {/* Mobile */}
        <div className="md:hidden">
          {/* 1st */}
          <div className="mt-[100px] flex-col justify-between items-center">
            <div className="w-[100%] h-[100%] ">
              <img src="/assets/how-its-works/step-1.png" alt="" />
            </div>
            <div className="w-[100%] flex-col justify-center items-center gap-[20px] mt-[20px]">
              <p className="text-[#FFA600] satoshi-bold text-[20px] lending-[25px]">Step 1</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold mt-[25px] leading-[30px]">
                Find Winning Content Ideas in Seconds
              </h1>
              <p className="text-[#58595E] satoshi-medium text-[16px] mt-[15px] leading-[20px]">
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
              <p className="text-[#3BB9FB] satoshi-bold text-[20px] lending-[25px]">Step 2</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold mt-[25px] leading-[30px]">
                Get Structured Data in One Click
              </h1>
              <p className="text-[#58595E] satoshi-medium text-[16px] mt-[15px] leading-[20px]">
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
              <p className="text-[#FF3FDF] satoshi-bold text-[20px] lending-[25px]">Step 3</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold mt-[25px] leading-[30px]">
                Download Contentfor Inspiration & Reuse
              </h1>
              <p className="text-[#58595E] satoshi-medium text-[16px] mt-[15px] leading-[20px]">
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
              <p className="text-[#FFA600] satoshi-bold text-[20px] lending-[25px]">Step 1</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold mt-[25px] leading-[30px]">
                Find Winning Content Ideas in Seconds
              </h1>
              <p className="text-[#58595E] satoshi-regular text-[16px] mt-[15px] leading-[20px]">
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
              <p className="text-[#3BB9FB] satoshi-bold text-[20px] lending-[25px]">Step 2</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold  mt-[25px] leading-[30px]">
                Get Structured Data in One Click
              </h1>
              <p className="text-[#58595E] satoshi-regular text-[16px] mt-[15px] leading-[20px]">
                Get the data behind the content, such as captions, views, likes, and more into
                Excel, CSV, or JSON files.
              </p>
            </div>
          </div>
          {/* 3rd */}
          <div className="mt-[100px] flex justify-between items-center">
            <div className="w-[35%] flex-col justify-center items-center gap-[20px]">
              <p className="text-[#FF3FDF] satoshi-bold text-[20px] lending-[25px]">Step 3</p>
              <h1 className="text-[#101219] text-[30px] satoshi-bold  mt-[25px] leading-[30px]">
                Download Contentfor Inspiration & Reuse
              </h1>
              <p className="text-[#58595E] satoshi-regular text-[16px] mt-[15px] leading-[20px]">
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
