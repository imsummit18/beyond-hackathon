"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

type ParticipantCardProps = {
  className?: string;
  children?: React.ReactNode;
  score?: string;
  title: string;
};

export const ParticipantCard = ({
  className,
  children,
  score,
  title,
}: ParticipantCardProps) => {
  const { locale } = useParams()
  return (
    <Card
      className={cn("bg-primary rounded-[15px] px-[10px] flex-1", className)}
    >
      <CardHeader className=" pb-0">
        <CardTitle className={cn("text-secondary text-[10px] tracking-[2.1px] font-medium h-[40px] min-[1440px]:h-[40px]", {
          'tracking-normal': locale === 'ar',
          'tracking-[2.1px]': locale === 'en',
        })}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-white font-medium text-[16px] ">
        {title === "Public Voting" ? (
          <div className="border-[#B0442F] rounded-[24px] flex border-2 w-fit px-2 items-center gap-2 bg-[#FDEFEC] py-1 group hover:h-[35.2px] hover:gap-3 hover:px-[10px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={11}
              height={11}
              fill="none"
              className="hidden group-hover:inline scale-150"
            >
              <path
                fill="#521F16"
                d="M5.5 0a5.5 5.5 0 1 1-2.766 10.255L.002 11l.744-2.732A5.5 5.5 0 0 1 5.5 0ZM3.626 2.915l-.11.004a.528.528 0 0 0-.205.055.71.71 0 0 0-.162.126c-.066.062-.103.116-.143.168-.204.265-.313.59-.312.923.002.27.072.532.182.777.225.496.595 1.021 1.083 1.508.118.117.234.235.358.345.607.534 1.33.92 2.112 1.125l.312.048c.102.005.204-.002.306-.007.16-.009.317-.052.458-.128.072-.037.143-.077.211-.12 0 0 .024-.016.069-.05.074-.055.12-.094.181-.158a.631.631 0 0 0 .116-.167c.043-.09.085-.26.103-.403.013-.109.01-.168.008-.205-.002-.059-.051-.12-.105-.146l-.32-.143s-.478-.209-.77-.342a.273.273 0 0 0-.098-.022.265.265 0 0 0-.208.07c-.002-.001-.04.03-.437.512a.193.193 0 0 1-.202.071.787.787 0 0 1-.105-.036l-.139-.06a3.314 3.314 0 0 1-.866-.551c-.07-.06-.134-.127-.2-.19a3.464 3.464 0 0 1-.56-.698L4.15 5.17a.507.507 0 0 1-.056-.113c-.021-.08.033-.146.033-.146s.134-.146.196-.225c.06-.077.112-.152.145-.205.065-.105.085-.212.05-.295a45.83 45.83 0 0 0-.477-1.123c-.032-.073-.128-.126-.216-.137a1.86 1.86 0 0 0-.31-.007l.11-.003Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={11}
              height={11}
              fill="none"
              className="hidden group-hover:inline scale-150 "
            >
              <path
                fill="#521F16"
                d="M11 5.534C11 2.477 8.538 0 5.5 0S0 2.477 0 5.534C0 8.296 2.011 10.584 4.64 11V7.133H3.245V5.534H4.64v-1.22c0-1.386.822-2.152 2.078-2.152.602 0 1.23.108 1.23.108v1.36h-.693c-.682 0-.895.428-.895.866v1.038h1.524l-.243 1.599H6.36v3.866C8.989 10.584 11 8.295 11 5.534Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={9}
              height={9}
              fill="none"
              className="hidden group-hover:inline scale-150"
            >
              <g clipPath="url(#a)">
                <path
                  fill="#521F16"
                  d="M5.338 3.81 8.616 0H7.84L4.993 3.309 2.719 0H.097l3.438 5.004L.097 9h.777L3.88 5.506 6.28 9h2.623L5.338 3.81ZM4.274 5.049l-.349-.498L1.154.585h1.193l2.237 3.2.348.498L7.84 8.442H6.646L4.274 5.048Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h9v9H0z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={12}
              height={9}
              fill="none"
              className="hidden group-hover:inline scale-150"
            >
              <path
                fill="#521F16"
                d="M11.878 1.942S11.76 1.06 11.4.672C10.943.164 10.432.16 10.198.13 8.52 0 6 0 6 0h-.005s-2.52 0-4.198.13C1.562.16 1.052.163.595.673.234 1.06.119 1.942.119 1.942S0 2.977 0 4.014v.97c0 1.035.12 2.072.12 2.072s.116.882.475 1.27c.457.51 1.057.492 1.324.547C2.88 8.97 6 9 6 9s2.523-.005 4.2-.133c.235-.03.746-.033 1.203-.542.36-.387.478-1.27.478-1.27S12 6.02 12 4.983v-.97c-.002-1.035-.121-2.072-.121-2.072h-.001ZM4.757 6.16V2.564l3.242 1.804L4.756 6.16Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={8}
              height={7}
              fill="none"
              className="scale-150 group-hover:hidden"
            >
              <path
                fill="#B0442F"
                d="M8 3.111 4.889 0v1.778C1.778 2.222.444 4.444 0 6.667 1.111 5.11 2.667 4.4 4.889 4.4v1.822L8 3.112Z"
              />
            </svg>
            <span className="text-[#B0442F] text-[10px] uppercase tracking-[2.1px] group-hover:hidden ">
              Share
            </span>
          </div>
        ) : (
          score
        )}
      </CardContent>
    </Card>
  );
};
