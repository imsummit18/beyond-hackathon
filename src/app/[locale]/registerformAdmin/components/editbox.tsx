import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";
import { Expand } from "lucide-react";
const editbox = () => {
  return (
    <div className="editbox bg-white pb-10">
      <div className="container">
        <div className="border-2 border-primary-ultralight/40 rounded-[15px] overflow-hidden mb-[15px]">
          <div className="lg:flex justify-between items-center py-3 px-5 border-2 border-x-0 border-t-0">
            <div className="flex gap-[12px] items-center mb-3 lg:mb-0">
              <div className="text-secondary">
                <Expand strokeWidth={1} size={18} />
              </div>
              <div className="font-normal text-[15px] text-grey-normal">
                Personal information
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div>
                <Button
                  className="rounded-[30px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[12px] tracking-[0.1em]"
                  variant="outline"
                >
                  Click to manage form fields
                </Button>
              </div>
              <div className="flex items-center gap-[12px]">
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Pencil strokeWidth={2} color="#0202AD" size={16} />
                </Button>
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Trash strokeWidth={2} color="#0202AD" size={16} />
                </Button>
              </div>
            </div>
          </div>
          {/* repeater  */}
          <div className="lg:flex justify-between items-center py-3 px-5 border-2 border-x-0 border-t-0">
            <div className="flex gap-[12px] items-center mb-3 lg:mb-0">
              <div className="text-secondary">
                <Expand strokeWidth={1} size={18} />
              </div>
              <div className="font-normal text-[15px] text-grey-normal">
                Enrolment type
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div>
                <Button
                  className="rounded-[30px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[12px] tracking-[0.1em]"
                  variant="outline"
                >
                  Click to manage form fields
                </Button>
              </div>
              <div className="flex items-center gap-[12px]">
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Pencil strokeWidth={2} color="#0202AD" size={16} />
                </Button>
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Trash strokeWidth={2} color="#0202AD" size={16} />
                </Button>
              </div>
            </div>
          </div>
          {/* repeater  */}

          <div className="lg:flex justify-between items-center py-3 px-5 border-2 border-x-0 border-t-0">
            <div className="flex gap-[12px] items-center mb-3 lg:mb-0">
              <div className="text-secondary">
                <Expand strokeWidth={1} size={18} />
              </div>
              <div className="font-normal text-[15px] text-grey-normal">
                Team information
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div>
                <Button
                  className="rounded-[30px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[12px] tracking-[0.1em]"
                  variant="outline"
                >
                  Click to manage form fields
                </Button>
              </div>
              <div className="flex items-center gap-[12px]">
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Pencil strokeWidth={2} color="#0202AD" size={16} />
                </Button>
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Trash strokeWidth={2} color="#0202AD" size={16} />
                </Button>
              </div>
            </div>
          </div>
          {/* repeater  */}

          <div className="lg:flex justify-between items-center py-3 px-5 border-2 border-x-0 border-t-0">
            <div className="flex gap-[12px] items-center mb-3 lg:mb-0">
              <div className="text-secondary">
                <Expand strokeWidth={1} size={18} />
              </div>
              <div className="font-normal text-[15px] text-grey-normal">
                Technical information
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div>
                <Button
                  className="rounded-[30px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[12px] tracking-[0.1em]"
                  variant="outline"
                >
                  Click to manage form fields
                </Button>
              </div>
              <div className="flex items-center gap-[12px]">
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Pencil strokeWidth={2} color="#0202AD" size={16} />
                </Button>
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Trash strokeWidth={2} color="#0202AD" size={16} />
                </Button>
              </div>
            </div>
          </div>
          {/* repeater  */}
          <div className="lg:flex justify-between items-center py-3 px-5">
            <div className="flex gap-[12px] items-center mb-3 lg:mb-0">
              <div className="text-secondary">
                <Expand strokeWidth={1} size={18} />
              </div>
              <div className="font-normal text-[15px] text-grey-normal">
                New field group
              </div>
            </div>
            <div className="flex gap-[12px]">
              <div>
                <Button
                  className="rounded-[30px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[12px] tracking-[0.1em]"
                  variant="outline"
                >
                  Click to manage form fields
                </Button>
              </div>
              <div className="flex items-center gap-[12px]">
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Pencil strokeWidth={2} color="#0202AD" size={16} />
                </Button>
                <Button className="p-[5px] bg-primary-ultralight/40  h-[30px] w-[30px] mr-0 ml-auto rounded-[9px] flex flex-col justify-center items-center">
                  <Trash strokeWidth={2} color="#0202AD" size={16} />
                </Button>
              </div>
            </div>
          </div>
          {/* repeater  */}
        </div>
        {/* end table  */}
        <div className="text-right">
          <Button
            className="rounded-[15px] h-auto leading-none pt-2 pb-2 border-primary-light/40 font-medium bg-primary-ultralight/40  uppercase text-primary-normal text-[9px] tracking-[0.1em]"
            variant="outline"
          >
            + Add New Field Group
          </Button>
        </div>
      </div>
    </div>
  );
};

export default editbox;
