import axios from 'axios';
import { useEffect } from 'react';

function useGetAndSortSections(setApp) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://657a4ab21acd268f9afae0fa.mockapi.io/sections/');
        const sections = response.data;

        sections.forEach(section => {
          console.log(section.name, section.plantings);
          
        });

        const plantingState = sections.map(sections => {
          return {
            sectionName: sections.name,
            plantings: sections.plantings.map(planting => {
              return {
                plantingName: planting.name,
              };
            }),
          };
        });
        setApp({ type: 'loadPlantings', payload: plantingState });
        setApp({ type: 'loadSections', payload: sections });
      } catch (err) {
        console.error('Error fetching mockup api data:', err.message);
      }
    };
    fetchData();
  }, [setApp]); // Add setApp to the dependency array

}

export default useGetAndSortSections;