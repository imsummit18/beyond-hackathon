"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <h1 className="text-primary font-bold mb-[18px] uppercase tracking-[.3em]">
        {t("noticeBoard")}
      </h1>
      <p className="text-grey-normal text-[16px] ">{t("help")}</p>
    </div>
  );
};

export default Title;
