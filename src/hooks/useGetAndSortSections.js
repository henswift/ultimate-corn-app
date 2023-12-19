import axios from 'axios';
import { useEffect } from 'react';

function useGetAndSortSections(setApp) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/');
        // organize and collect your plantings;
        setApp({ type: 'loadSections', payload: response.data });
      } catch (err) {
        console.error('Error fetching data:', err.message);
      }
    };
    fetchData();
  }, [setApp]); // Add setApp to the dependency array

}

export default useGetAndSortSections;