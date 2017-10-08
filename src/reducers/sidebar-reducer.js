const defaultState = {
  docked: true,
  submitted: false,
}

export default (state=defaultState, action) => {
  switch(action.type){
    case "DOCK_TRIGGERED": {
      state = {...state, docked: !state.docked}
      break;
    }
    case "BUTTON_PRESS": {
      state = {...state, submitted: !state.submitted}
      break;
    }
  }
  return state;
};
