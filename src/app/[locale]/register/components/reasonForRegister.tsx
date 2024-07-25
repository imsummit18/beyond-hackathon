import React from "react";
import { Textarea } from "@/components/ui/textarea"


const reasonForRegister = () => {
  return (
    <div>
      <div className="p-[25px] lg:p-[60px] mt-[12px] overflow-hidden bg-white rounded-[4px]">
        <h2 className="text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[20px] lg:mb-[40px]">
        Reason for registration
        </h2>

        <div className="mb-[25px] lg:mb-[50px]">
        <Textarea className="placeholder:text-grey-normal p-[16px] text-[16px] bg-white border-primary-ultralight h-[245px] rounded-[9px]" placeholder="Why do you want to join this challenge, please provide up to 300 words.."/>
        </div>
        {/* end group  */}

      </div>
    </div>
  );
};


export default reasonForRegister;
