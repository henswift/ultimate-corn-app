export const appReducer = (state, action) => {
  let newState = {...state};
  let {type,payload} = action;

  switch(type) {
    case 'loadSections':
      newState.sections = payload;
      break;
    case 'loadPlantings':
      newState.plantings = payload;
      break;
    case 'addSection':
      newState.sections.push(payload)
      break;
    case 'addPlanting':
      newState.plantings.push(payload)
      break;
    case 'deletePlanting':
      newState.plantings = newState.plantings.filter(p => p.id !== payload);
      break;
    case 'deleteSection':
      newState.sections = newState.sections.filter(s => s.id !== payload);
      break;
    case 'search':
      //filter through sections, include those sections that have a planting whose name matches the searchTerm
      let sections = newState.sections;
      let results = sections.filter((s) => {
        let searchTermFound = s.plantings.some(p => p.name === payload)
        if (searchTermFound) {
            return true;
        } return false;
      });
      newState.results = results;
      break;
    case 'plantingToEdit':
      newState.plantingToEdit = payload;
      break;
    case 'editingPlanting':
      newState.editingPlanting = payload;
      break;
    default:
      console.warn(`No action type found for ${type}`);
  };
  return newState;
};

export default appReducer;
