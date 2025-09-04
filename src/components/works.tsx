function Works() {
  return (
    <div className="bg-[#FFFFFF] px-[92px]  py-[150px] md:px-[5%] xl:px-[10%] 2xl:px-[27%]">
      <div>
        <h1
          className="text-[#141414] font-700 text-[55px] text-center"
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
          className="text-[#58595E] font-medium text-[20px] text-center mt-[5px]"
          style={{
            lineHeight: '30px',
          }}
        >
          Works on Profile Pages on Instagram & TikTok
        </p>

        <div className="mt-[45px]">
          <img className="w-[100%] object-cover" src="/assets/works/works.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Works;
