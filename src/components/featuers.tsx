import { featuers } from '@/constant';

function Features() {
  return (
    <div className=" bg-[white] flex justify-center items-center">
      <div className="w-[100%] px-[5%] py-[49px] lg:px-[49px] lg:py-[130px] md:px-[5%] flex justify-center items-center">
        <div>
          <div className=" flex-col justify-center items-center ">
            <h1
              className="hidden lg:block text-[#141414] font-700 text-[55px] text-center"
              style={{
                fontStyle: 'normal',
                lineHeight: '60px',
                letterSpacing: '-0.02em',
              }}
            >
              Powerful Features to <br /> Simplify Your Workflow
            </h1>

            <p className="hidden lg:block text-[#58595E] font-medium text-[20px] text-center mt-[10px]">
              Supersort comes packed with tools that help you stay organized, save time, and <br />
              make the most out of your feeds.
            </p>

            {/* Mobile */}
            <>
              <h1
                className=" lg:hidden text-[#141414] font-700 text-[32px] text-center lending-[60px]"
                style={{
                  fontStyle: 'normal',
                  lineHeight: '60px',
                  letterSpacing: '-0.02em',
                }}
              >
                Powerful Features to Simplify Your Workflow
              </h1>

              <p className=" lg:hidden text-[#58595E] font-medium text-[20px] text-center mt-[10px]">
                Supersort comes packed with tools that help you stay organized, save time, and make
                the most out of your feeds.
              </p>
            </>
          </div>

          <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  2xl:grid-cols-4 gap-[10px]">
            {featuers.map(item => {
              return (
                <div className="xl:max-w-[295px] md:w-[100%] max-h-[217px] border-1 border-[rgba(255, 255, 255, 0.12)] rounded-[20px] p-[30px]">
                  <h1
                    className={`${item.titleColor} font-700 text-[30px]`}
                    style={{
                      fontStyle: 'normal',
                      lineHeight: '35px',
                    }}
                  >
                    {item.title}
                  </h1>
                  <p className="text-[#58595E] font-400 text-[16px] mt-[20px]">
                    {item.discription}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
