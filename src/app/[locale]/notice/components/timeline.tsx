"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timelineData } from "./data";
import { Response } from "@/actions/noticeboard-action";
import { cn } from "@/lib/utils";

const Timeline = ({ data }: { data: Response }) => {
  return (
    <div
      className={`timeline py-12 mt-6 overflow-hidden bg-white rounded-[15px] shadow-lg`}
    >
      <VerticalTimeline>
        {data.data.map((timeline) => (
          <VerticalTimelineElement
            key={timeline.id}
            iconClassName={cn(
              "text-white flex items-center justify-center !h-[22px] !w-[22px] !-ml-[12px]",
              {
                "bg-primary-normal": timeline.id % 2 === 1,
                "bg-secondary": timeline.id % 2 === 0,
              }
            )}
            icon={timeline.id}
            textClassName={
              timeline.id % 2 === 1 ? "text-primary-normal" : "text-secondary"
            }
          >
            <div className="-mt-2">
              {timeline.title && (
                <h3 className="vertical-timeline-element-title font-medium text-[15px]">
                  {timeline.title}
                </h3>
              )}

              {timeline.description && (
                <p className="font-light text-[13px] text-grey-normal m-0">
                  {timeline.description}
                </p>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
