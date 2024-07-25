"use client";

import Image from "next/image";
import Track1 from "./../../../../images/tracks/track1.png";
import Track2 from "./../../../../images/tracks/track2.png";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { useParams } from "next/navigation";

const filmationTracksData = [
  {
    src: Track1,
    alt: "track 1",
    title: "Lorem_Short",
    content: "Lorem_Text",
  },
  {
    src: Track2,
    alt: "track 2",
    title: "Lorem_Short",
    content: "Lorem_Text",
    //   content: "track 2 Caption",
  },
];

function FilmationTracks() {
  const { t } = useTranslation();
  const { locale } = useParams();
  return (
    <div className="pb-[80px] pt-[80px] bg-gray" id="tracks">
      <div className="container">
        <h2 className={cn('uppercase mb-[34px] font-medium text-center text-white text-xs/[10px] tracking-[0.3em]', {
          'tracking-normal': locale === 'ar',
          'tracking-[0.3em]': locale === 'en',
        })}>
          {t("tracks")}
        </h2>

        <div className="lg:flex -ml-1.5 -mr-1.5">
          {filmationTracksData.map((track, index) => (
            <div key={index} className="lg:basis-1/2 pl-1.5 pr-1.5">
              <div className="rounded-[16px] overflow-hidden mb-5 lg:mb-8">
                <div className="rounded-[16px] border-0">
                  <div className="flex p-0 items-center justify-center relative">
                    <figure className="w-full  pb-[56.25%]">
                      <Image
                        src={track.src}
                        alt={track.alt}
                        fill
                        className="object-cover"
                      />
                      <figcaption className="text-sm p-[30px] absolute w-full bottom-0 text-white">
                        <h3 className="mb-[13px] uppercase font-semibold text-sm tracking-[0.2em]">
                          {t(track.title)}
                        </h3>
                        <p className="text-[17px]">{t(track.title)}</p>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FilmationTracks;
