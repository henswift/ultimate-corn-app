import { createContext } from "react";

export const AppContext = createContext(null);

export const initAppObject = {
    sections: [], //an array of section objects
        //each section object looks like:
            // { id, plantings 
            //  name: string naming section,
            //  photo: a url string matching picture image
    plantings: [], //an array of all plantings combined from all sections, 
        // each section looks like:
            // Name
            // Date of planting
            // image
            // id
            // section id
    defaultLL: null //expect an array of two strings
}