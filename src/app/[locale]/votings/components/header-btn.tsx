"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useTranslation } from "react-i18next";

interface Props {
  items: number[];
  setItems: React.Dispatch<React.SetStateAction<number[]>>;
}

const HeaderBtn = ({ items, setItems }: Props) => {
  const { t } = useTranslation();
  const { locale } = useParams();
  return (
    <div className="grid justify-end mt-[20px]">
      <p>{t("select-participants")}</p>

      <div className="flex gap-[10px] md:gap-[25px] mt-2 w-full md:w-fit">
        <Button
          type="submit"
          className={cn("uppercase w-1/2 sm:min-w-[180px]  bg-primary text-white font-bold text-xs/[10px] tracking-[0.3em]", {
            "tracking-normal": locale === "ar",
            "tracking-[0.3em]": locale === "en",
          })}
          disabled={items.length < 5}
        >
          {t("submit")}
        </Button>

        <Button
          type="reset"
          className={cn("uppercase w-1/2 sm:min-w-[180px] mr-[10px] sm:mr-[0] text-primary-normal font-bold text-xs/[10px] tracking-[0.3em]", {
            "tracking-normal": locale === "ar",
            "tracking-[0.3em]": locale === "en",
          })}
          variant="outline"
          onClick={() => setItems([])}
        >
          {t("reset")}
        </Button>
      </div>
    </div>
  );
};

export default HeaderBtn;
