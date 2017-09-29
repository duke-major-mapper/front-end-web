const defaultState = {
  docked: false
}

export default (state=defaultState, action) => {
  switch(action.type){
    case "DOCK_TRIGGERED": {
      state = {...state, docked: !state.docked}
    }
  }
  return state;
};
