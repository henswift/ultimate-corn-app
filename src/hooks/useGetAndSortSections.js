import axios from 'axios';
import { useEffect } from 'react';

function useGetAndSortSections(setApp) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/');
        const sections = response.data;
        console.log(sections)

        let allPlantings = [];

        sections.forEach(section => {
          allPlantings = allPlantings.concat(section.plantings);
        });
        
        console.log(allPlantings)
        setApp({ type: 'loadPlantings', payload: allPlantings });
        setApp({ type: 'loadSections', payload: sections });
      } catch (err) {
        console.error('Error fetching mockup api data:', err.message);
      }
    };
    fetchData();
  }, [setApp]); 
}

export default useGetAndSortSections;
