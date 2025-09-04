import { Faqs } from '@/constant';

function FAQs() {
  return (
    <div className="w-[100%] bg-[#F8F8F8] px-[100px] py-[130px] md:px-[5%]  xl:px-[10%] 2xl:px-[27%]  ">
      <div>
        <h1 className="text-[#141414] font-700 text-[55px] text-center leading-[60px] tracking-[-0.02em]">
          FAQ
        </h1>

        <p className="text-[#58595E] font-medium text-[20px] text-center mt-[10px] leading-[30px]">
          Most common Sort Feed questions on Discord
        </p>

        <div className="mt-[80px]">
          {Faqs.map(faq => (
            <div className="flex justify-between items-center gap-[30px] mb-[23px]">
              <div className="w-[100%] bg-[#FFFFFF] rounded-full py-[25px] px-[32px] border-1 border-[rgba(255, 255, 255, 0.12)]">
                <p className="text-[#141414] font-500 text-[20px]">
                  {faq.id}. {faq.questions}
                </p>
              </div>
              <div className="bg-[#FFFFFF] rounded-full p-[25px] border-1 border-[rgba(255, 255, 255, 0.12)]">
                <img src="/assets/icons/+.svg" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
