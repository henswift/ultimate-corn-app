import axios from 'axios';
import { useEffect } from 'react';

// Pull data from th API and send it to the state
function useGetAndSortSections(setApp) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/');
        const sections = response.data;

        let allPlantings = [];

        sections.forEach(section => {
          allPlantings = allPlantings.concat(section.plantings);
        });
        
        setApp({ type: 'loadPlantings', payload: allPlantings });
        setApp({ type: 'loadSections', payload: sections });
      } catch (error) {
        console.error('Error fetching mockup api data:', error.message);
      };
    };
    fetchData();
  }, [setApp]); 
};

export default useGetAndSortSections;
