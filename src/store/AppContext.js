import { createContext } from "react";

export const AppContext = createContext(null);

export const initAppObject = {
  sections: [], 
    // all the sections, they look like this: {
      //  id, plantings 
      //  name: string naming section,
      //  photo: a url string matching picture image
    // };
  plantings: [],
    // all the plantings, they look like this: {
      // Name
      // Date of planting
      // image
      // id
      // section id
      // picking : {date: qty: }
    // };
  addingPickingEdit: null,
    // State to hold the planting that is getting picked
  results: null, 
    // holds the search results
    // expect an array of strings
  defaultLL: null, 
};