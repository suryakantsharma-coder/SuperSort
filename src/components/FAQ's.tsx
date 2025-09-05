'use client';
import { Faqs } from '@/constant';
import FaqExpandableComponent from './faq-question';

function FAQs() {
  return (
    <div className="w-[100%] bg-[#F8F8F8] lg:px-[100px] py-[130px] md:px-[5%] px-[5%]  xl:px-[10%] 2xl:px-[27%]  ">
      <div>
        <h1 className=" hidden lg:block text-[#141414] satoshi-bold text-[55px] text-center leading-[60px] tracking-[-0.02em]">
          FAQ
        </h1>

        <p className=" hidden lg:block text-[#58595E] satoshi-medium text-[20px] text-center mt-[10px] leading-[30px]">
          Most common Sort Feed questions on Discord
        </p>

        {/* Mobile */}
        <h1 className=" lg:hidden text-[#141414] satoshi-bold text-[32px] text-center leading-[60px] tracking-[-0.02em]">
          FAQ
        </h1>

        <p className="  lg:hidden text-[#58595E] satoshi-regular text-[20px] text-center mt-[10px] leading-[30px]">
          Most common Sort Feed questions on Discord
        </p>

        <div className=" hidden md:block mt-[80px] ">
          {Faqs.map(faq => (
            <FaqExpandableComponent key={faq.id} questions={faq} isMobile={false} />
          ))}
        </div>

        <div className=" md:hidden mt-[80px] ">
          {Faqs.map(faq => (
            <FaqExpandableComponent key={faq.id} questions={faq} isMobile={true} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQs;
