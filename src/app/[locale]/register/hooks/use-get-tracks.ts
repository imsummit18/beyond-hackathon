import { useState, useEffect } from 'react';
import axios from 'axios';


type Track = {
   id: string;
   value: string;
   name: string;
};

const useGetTracks = () => {
   const [data, setData] = useState<Track[]>([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/track`);
            setData(response.data.data);
         } catch (error) {
            // console.error('Error fetching tracks:', error);
         }
      };

      fetchData();
   }, []);

   return { data };
};

export default useGetTracks;