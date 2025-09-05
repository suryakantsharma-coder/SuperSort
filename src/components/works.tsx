function Works() {
  return (
    <div className="bg-[#FFFFFF] p-[5%] lg:px-[92px]  lg:py-[150px] md:px-[5%] xl:px-[10%] 2xl:px-[27%]">
      <div>
        <h1
          className=" hidden lg:block text-[#141414]  satoshi-bold text-[55px] text-center"
          style={{
            fontStyle: 'normal',
            lineHeight: '60px',
            letterSpacing: '-0.02em',
          }}
        >
          Works On <br />
          Instagram & TikTok
        </h1>

        <p
          className=" hidden lg:block text-[#58595E] satoshi-medium text-[20px] text-center mt-[5px]"
          style={{
            lineHeight: '30px',
          }}
        >
          Works on Profile Pages on Instagram & TikTok
        </p>

        {/* Mobile */}
        <h1
          className="lg:hidden text-[#141414]  satoshi-bold text-[32px] text-center leading-[40px] "
          style={{
            letterSpacing: '-0.02em',
          }}
        >
          Works On Instagram & TikTok
        </h1>

        <p className=" lg:hidden text-[#58595E] satoshi-regular text-[20px] text-center mt-[5px] ">
          Works on Profile Pages on Instagram & TikTok
        </p>

        <div className="mt-[45px]">
          <img className="w-[100%]  object-cover" src="/assets/works/works.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Works;
