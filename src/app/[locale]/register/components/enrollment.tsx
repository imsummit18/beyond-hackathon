import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const enrollment = () => {
  return (
    <div className="p-[25px] lg:p-[60px] mt-[12px] overflow-hidden bg-white rounded-[4px]">
      <h2 className="text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[20px] lg:mb-[40px]">
        enrollment type
      </h2>

      <p className="leading-none mb-[20px] text-grey-normal text-[16px]">Are you registering as a team or as an individual?</p>

      <RadioGroup defaultValue="individual">
        <div className="flex items-center space-x-2 mb-[20px]">
          <RadioGroupItem value="individual" id="individual" />
          <Label className="text-primary-normal font-normal text-[15px]" htmlFor="individual">As Individual</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="team" id="team" />
          <Label className="text-primary-normal font-normal text-[15px]" htmlFor="team">As Team</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default enrollment;
