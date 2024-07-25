"use client"
import { useTranslation } from "react-i18next";

export const Card = ({
   name,
   userID,
   title,
   nationality,
   members,
   type,
}: {
   name: string;
   userID: string;
   title?: string;
   nationality?: string;
   members?: string[];
   type: string;
}) => {
   const cardBackgroundColor =
      type === "first"
         ? "bg-primary"
         : type === "second"
            ? "bg-secondary"
            : "bg-[#AAB1B0]";
   const titleBackgroundColor =
      type === "first"
         ? "text-primary-foreground"
         : type === "second"
            ? "text-grey-light"
            : "text-input";

   const { t } = useTranslation();
   return (
      <div
         className={
            "min-w-[277px] text-white rounded-[15px] px-[16px] py-[21px] min-h-[133px] h-full " +
            cardBackgroundColor
         }
      >
         <div>
            <p>
               <span className="font-extrabold uppercase tracking-[4.2px] text-[12px]">
                  {name}
               </span>{" "}
               <span className={`${titleBackgroundColor} text-[10px]`}>
                  {userID}
               </span>
            </p>
         </div>
         {title && <p className="text-[11px] capitalize">({title})</p>}
         <div className="grid grid-cols-2 text-[11px] mt-2">
            <div>
               <p className="font-medium">{t("participant:nationality")}</p>
               <p className="capitalize">{nationality}</p>
            </div>
            {
               members &&
               <div>
                  <p className="font-medium">{t("participant:members")}</p>
                  {members?.map((member) => <li key={member}>{member}</li>)}
               </div>
            }
         </div>
      </div>
   );
};
