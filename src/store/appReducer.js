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
        default:
            console.warn(`No action type found for ${type}`);
    }
    return newState;

}

export default appReducer;
