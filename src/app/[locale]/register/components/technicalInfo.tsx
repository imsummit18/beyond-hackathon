import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const technicalInfo = () => {
  return (
    <div>
      <div className="p-[25px] lg:p-[60px] mt-[12px] overflow-hidden bg-white rounded-[4px]">
        <h2 className="text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[20px] lg:mb-[40px]">
          technical Info
        </h2>

        <div className="mb-[25px] lg:mb-[50px]">
          <p className="leading-none mb-[20px] text-grey-normal text-[16px]">
            What is your English Proficiency Level?
          </p>

          <RadioGroup defaultValue="basic">
            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="basic" id="basic" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="basic"
              >
                Basic
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="proficient" id="proficient" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="proficient"
              >
                Proficient
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* end group  */}

        <div className="mb-[25px] lg:mb-[50px]">
          <p className="leading-none mb-[20px] text-grey-normal text-[16px]">
          Coding Experience for you or any of your team members?
          </p>

          <RadioGroup defaultValue="experience">
            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="experience" id="experience" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="experience"
              >
                Don’t know how to code
              </Label>
            </div>

            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="less-year" id="less-year" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="less-year"
              >
                less than a year
              </Label>
            </div>

            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="fouryear" id="fouryear" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="fouryear"
              >
                2 – 3 Years
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="proficient" id="proficient" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="proficient"
              >
                4+ Years
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* end group  */}

        <div className="mb-[25px] lg:mb-[50px]">
          <p className="leading-none mb-[20px] text-grey-normal text-[16px]">
          Are You Familiar With AI & Data Concepts?
          </p>

          <RadioGroup defaultValue="familier">
            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="familier" id="familier" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="familier"
              >
                Don’t Know What They Are
              </Label>
            </div>

            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="basic_understanding" id="basic_understanding" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="basic_understanding"
              >
                Basic Understanding
              </Label>
            </div>

            <div className="flex items-center space-x-2 mb-[20px]">
              <RadioGroupItem value="practical_experience" id="practical_experience" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="practical_experience"
              >
                Some Practical Experience
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="expert" id="expert" />
              <Label
                className="text-primary-normal font-normal text-[15px]"
                htmlFor="expert"
              >
                Expert
              </Label>
            </div>
          </RadioGroup>
        </div>
        {/* end group  */}
      </div>
    </div>
  );
};

export default technicalInfo;
