import React from "react"
import { trackAction } from '@/actions/track-action';

import {
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";
import { Props } from "./personalDetail";
import { Response } from "@/actions/track-action";
import { useTranslation } from "react-i18next";

const TrackField = ({ form }: Props) => {

   const { t } = useTranslation();

   const [response, setResponse] = React.useState<Response>({ data: [] });
   // this is used to call track actions
   React.useEffect(() => {
      const fetchData = async () => {
         const res = await trackAction();
         setResponse(res);
      };
      fetchData();
   }, []);

   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-[20px] lg:gap-x-[100px] gap-y-6 mt-4 mb-12'>
         <FormField
            control={form.control}
            name='track'
            render={({ field }) => (
               <FormItem>
                  <FormLabel>{
                     t('Tracks')
                  }</FormLabel>
                  <FormControl>
                     <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                     >
                        <SelectTrigger>
                           <SelectValue placeholder={
                              t('Select_Track')
                           } />
                        </SelectTrigger>
                        <SelectContent>
                           {response.data.map((track) => (
                              <SelectItem key={track.id.toString()} value={track.value.toString()}>
                                 {track.name}
                              </SelectItem>
                           ))}
                        </SelectContent>
                     </Select>
                  </FormControl>
                  <FormMessage />
               </FormItem>
            )}
         />
      </div>
   )
}

export default TrackField;