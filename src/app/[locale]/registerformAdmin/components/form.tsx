import React from 'react'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";

const form = () => {
  return (
    <div className="registerForm">
      <div className="container">

        <div className="pt-10 mb-2 p-[20px] lg:p-[35px]  bg-primary-ultralight/15 overflow-hidden rounded-[18px]">
          <div className="lg:flex items-end">
            <div className="lg:basis-11/12">
              <div className="lg:flex">
                <div className="lg:basis-1/2 pl-2.5 pr-2.5">
                  <div className="grid  w-full gap-1.5 mb-2">
                    <Label
                      className="text-[15px] text-primary-normal tracking-[0.03rem] font-normal"
                      htmlFor="regdForm"
                    >
                      From name(EN)
                    </Label>
                    <Input
                      className="bg-white rounded-[15px] pl-[25px] border-primary-ultralight/45 h-[50px]"
                      type="text"
                      id="regdForm"
                      placeholder="Registration form"
                    />
                  </div>
                </div>
                <div className="lg:basis-1/2 pl-2.5 pr-2.5">
                  <div className="grid w-full gap-1.5 mb-2">
                    <Label
                      className="text-[15px] text-primary-normal tracking-[0.03rem] font-normal"
                      htmlFor="regdForm"
                    >
                      From name(AR)
                    </Label>
                    <Input
                      className="bg-white rounded-[15px] pl-[25px] border-primary-ultralight/45 h-[50px]"
                      type="text"
                      id="regdForm"
                      placeholder="Registration form"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:basis-1/12 pl-2.5 pr-2.5 mb-2">
              <Button className="uppercase bg-secondary rounded-[15px] text-white font-normal text-xs/[10px] tracking-[0.3em]">
                save
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default form
