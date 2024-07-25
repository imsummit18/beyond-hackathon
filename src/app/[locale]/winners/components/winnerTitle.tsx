"use client";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import React from "react";
import { useTranslation } from "react-i18next";

const WinnerTitle = () => {
  const { locale } = useParams();
  const { t } = useTranslation();
  return (
    <div className="container">
      <h1 className={cn("text-primary text-[14px] my-6 lg:mt-8 lg:mb-[40px] font-bold uppercase tracking-[.3em]", {
        "tracking-normal": locale === "ar",
        "tracking-[0.3em]": locale === "en"
      })}>
        {t("winners")}
      </h1>
    </div>
  );
};

export default WinnerTitle;
