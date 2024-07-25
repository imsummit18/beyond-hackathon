"use client";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { locale } = useParams();
  const { t } = useTranslation();
  return (
    <div className="about py-[100px]">
      <div className="container text-center ">
        <div className="ml-auto mr-auto max-w-[1168px]">
          <h2 className={cn('uppercase mb-6 font-medium text-secondary-500  text-[30px] tracking-[0.3em]', {
            'tracking-normal': locale === 'ar',
            'tracking-[0.3em]': locale === 'en',
          })}>
            {t("About_Hacakthon")}
          </h2>
          <p className={cn("leading-[24px] text-lg text-accent",{
            'tracking-normal': locale === 'ar',
            'tracking-[0.09em]': locale === 'en',
          })}>
            {t("About_Description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
