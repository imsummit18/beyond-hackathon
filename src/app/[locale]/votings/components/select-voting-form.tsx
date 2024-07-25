"use client";

import React, { useState } from "react";
import HeaderBtn from "./header-btn";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

const SelectVotingForm = () => {
  const { t } = useTranslation();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  // console.log('🚀 ~ SelectVotingForm ~ selectedItems:', selectedItems);

  // Handle item selection
  const handleSelect = (idx: number) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(idx)) {
        return prevSelected.filter((item) => item !== idx);
      }
      return [...prevSelected, idx];
    });
  };

  return (
    <div>
      <HeaderBtn items={selectedItems} setItems={setSelectedItems} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[30px] mt-[30px]">
        {[1, 2, 3, 4, 5, 6].map((idx) => {
          const isSelected = selectedItems.includes(idx);
          const order = selectedItems.indexOf(idx) + 1;

          return (
            <div
              key={idx}
              className={cn(
                "border relative border-primary rounded-[11px] p-[24px] bg-primary-extralight grid gap-y-4 cursor-pointer"
              )}
              onClick={() => handleSelect(idx)}
            >
              {isSelected && (
                <div className=" text-right text-white font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="rounded-full w-[66px] h-[66px] font-bold text-[40px]  bg-primary grid place-content-center">
                    {order}
                  </div>
                </div>
              )}
              <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 laptop:grid-cols-3 xl:grid-cols-4 gap-4">
                <div>
                  <Label className="text-primary font-semibold">
                    {t("name")}
                  </Label>
                  <span className="block text-primary">Mike</span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("participant_id")}
                  </Label>
                  <span className="block text-primary">FID006</span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("email")}
                  </Label>
                  <span className="block text-primary">Mike@email.com</span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("phone")}
                  </Label>
                  <span className="block text-primary whitespace-nowrap">
                    +966 4400000000
                  </span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("national_id")}
                  </Label>
                  <span className="block text-primary">NID098765999</span>
                </div>
              </div>

              <div className="grid grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-2 laptop:grid-cols-3 xl:grid-cols-4 gap-4">
                <div>
                  <Label className="text-primary font-semibold">
                    {t("evaluator_score")}
                  </Label>
                  <span className="block text-primary">
                    Satheesh - 25
                    <br />
                    Alok - 27
                  </span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("judges_score")}
                  </Label>
                  <span className="block text-primary">
                    Satheesh - 25
                    <br />
                    Alok - 27
                  </span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("voting_score")}
                  </Label>
                  <span className="block text-primary">-</span>
                </div>
                <div>
                  <Label className="text-primary font-semibold">
                    {t("total_score")}
                  </Label>
                  <span className="block text-primary">60</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SelectVotingForm;
