"use client";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

export const Title = () => {
  const { t } = useTranslation();
  const { locale } = useParams()
  return (
    <div className="text-center">
      <h2 className={cn("text-primary text-[14px] font-bold uppercase tracking-[.3em] mb-[10px]", {
        "tracking-normal": locale === "ar",
        "tracking-[0.3em]": locale === "en",
      })}>
        {t("public-voting")}
      </h2>
      <p className="text-[16px]">Lorem ipsum dolor sit amet alequea.</p>
    </div>
  );
};
