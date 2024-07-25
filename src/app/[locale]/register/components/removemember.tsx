import React from "react";
import { OctagonAlert } from "lucide-react";
import { Trash2 } from "lucide-react";
const removeMember = () => {
  return (
    <>
      <div className="flex justify-end gap-[15px]">
        <div className="flex items-center gap-1 ">
          <OctagonAlert
            size={24}
            fill="#F0B441"
            color="#fff"
            strokeWidth={1.5}
          />
          <p className="text-[12px] text-grey-light tracking-[-0.01em]">
            Remove Member
          </p>
        </div>
        <div className="h-[60px] w-[60px] rounded-[50%] bg-primary-foreground hover:bg-primary-foreground/70 leading-[60px] text-center cursor-pointer">
          <Trash2
            size={24}
            fill="#A3B4F9"
            color="#0202AD"
            strokeWidth={1.5}
            className="inline"
          />
        </div>
      </div>
    </>
  );
};

export default removeMember;
