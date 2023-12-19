const appReducer = (state,action) => {
    let newState = {...state};
    let {type,payload} = action;
    switch(type) {
        case 'loadSections':
            newState.sections = payload;
            break;
        case 'addSection':
            newState.sections.push(payload)
            break;
        default:
            console.warn(`No action type found for ${type}`);
    }
    return newState;

}

export default appReducer;
