"use client";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { locale } = useParams();
  const { t } = useTranslation();
  return (
    <div className="about pt-[80px] pb-[80px]">
      <div className="container text-center ">
        <div className="ml-auto mr-auto max-w-[600px]">
          <h2 className={cn('uppercase mb-6 font-medium text-primary text-xs/[10px] tracking-[0.3em]', {
            'tracking-normal': locale === 'ar',
            'tracking-[0.3em]': locale === 'en',
          })}>
            {t("about_hackathon")}
          </h2>
          <p className="leading-[24px] text-accent">
            {t("Lorem_Text")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
