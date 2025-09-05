'use client';
import { useEffect, useState } from 'react';

function FaqExpandableComponent({
  questions,
  isMobile = false,
}: {
  questions: { id: number; questions: string; answeres: string };
  isMobile?: boolean;
}) {
  const [isExpandable, setIsExpandable] = useState(isMobile);

  useEffect(() => {
    if (isMobile) setIsExpandable(isMobile);
  }, [isMobile]);

  return (
    <div className="">
      <div
        key={questions.id}
        className="flex justify-between items-center gap-[30px] mb-[23px]"
        onClick={() => setIsExpandable(!isExpandable)}
      >
        <div
          className="w-[100%] bg-[#FFFFFF] rounded-full py-[25px] px-[32px] border-1 border-[rgba(255, 255, 255, 0.12)]"
          style={{
            borderRadius: isExpandable ? '48px' : '100px',
          }}
        >
          <p className="text-[#141414] satoshi-medium text-[20px]">
            {questions.id}. {questions.questions}
          </p>
          {isExpandable && (
            <p className="text-[#141414] satoshi-regular text-[20px] mt-[15px]">
              {questions.answeres}
            </p>
          )}
        </div>
        {!isMobile && (
          <div className="bg-[#FFFFFF] rounded-full p-[25px] border-1 border-[rgba(255, 255, 255, 0.12)]">
            <img src="/assets/icons/+.svg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}

export default FaqExpandableComponent;
