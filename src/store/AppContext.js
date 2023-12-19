import { createContext } from "react";


export const AppContext = createContext(null);

export const initAppObject = {
    sections: [ ], //an array of section objects
    //each section object looks like:
        // { id, plantings 
        //  name: string naming section,
        //  photo: a url string matching picture image

        // }
    plantings: [], //an array of all plantings combined from all sections,    
    defaultLL: null //expect an array of two strings
}