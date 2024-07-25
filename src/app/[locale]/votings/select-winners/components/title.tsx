"use client";
import { useTranslation } from "react-i18next";

export const Title = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <h2 className="text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[10px]">
        {t("public-voting")}
      </h2>
      <p className="text-[16px]">Lorem ipsum dolor sit amet alequea.</p>
    </div>
  );
};
