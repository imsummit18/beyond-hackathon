import { Response, WinMemberType } from "@/actions/winner-action";
import { Card } from "./winnerCard";


export const WinnerSection = ({ winner }: { winner: Response }) => {
   //TODO: translation for 1st 2nd third
   return (
      <>
         <div className="mb-[38px]">
            {
               winner?.data.map((track, index) => {
                  return (
                     <div className=" mb-[38px]" key={index}>
                        <p className="font-extrabold uppercase tracking-[4.2px] text-[12px] mb-[13px]">
                           {track?.name}
                        </p>
                        {
                           track?.winner.map((winner) => {
                              return (
                                 <>
                                    <p className="font-extrabold uppercase tracking-[4.2px] text-primary-foreground text-[10px] mb-[13px]">
                                       {winner?.title}
                                    </p>
                                    <div className="flex w-full gap-2 mb-6">
                                       {
                                          winner?.winners?.map((win) => {
                                             return (

                                                <Card
                                                   key={win?.participant?.id}
                                                   name={win?.participant?.name}
                                                   userID={win?.participant?.uuid}
                                                   nationality={win?.participant?.national}
                                                   members={win?.participant?.members.map(
                                                      (member: WinMemberType) => member?.name,
                                                   )}
                                                   type={
                                                      winner?.title === "1St WINNERS" ? "first" : winner?.title === "2nd WINNERS" ? "second" : "third"
                                                   }
                                                >
                                                </Card>
                                             );
                                          })
                                       }
                                    </div>
                                 </>
                              );
                           })
                        }
                     </div>
                  );
               })
            }
         </div >
      </>
   )
};
