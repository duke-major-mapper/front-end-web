const initialState = {
  isLoading: false,
  majors: [],
  classes: {},
  requirements: [],
  overlap: [],
  error: false,
  errorMessage: null,
};

function data(state = initialState, action) {
  switch (action.type) {
    case 'BEGIN_GET_MAJORS': {
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      };
    }
    case 'FAILED_GET_MAJORS': {
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message,
      }
    }
    case 'END_GET_MAJORS': {
      return {
        ...state,
        majors: action.payload.data.data,
        isLoading: false,
        error: false,
      }
    }
    case 'BEGIN_GET_CLASSES': {
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      };
    }
    case 'FAILED_GET_CLASSES': {
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message,
      }
    }
    case 'END_GET_CLASSES': {
      let temp_classes = state.classes;
      const data = action.payload.data;
      temp_classes[data.id] = data.data;
      return {
        ...state,
        classes: temp_classes,
        isLoading: false,
        error: false,
      }
    }
    case 'BEGIN_GET_OVERLAP': {
      return {
        ...state,
        isLoading: true,
        error: false,
        errorMessage: null,
      };
    }
    case 'FAILED_GET_OVERLAP': {
      return {
        ...state,
        error: true,
        errorMessage: action.payload.message,
      }
    }
    case 'END_GET_OVERLAP': {
      return {
        ...state,
        overlap: action.payload.data.data,
        isLoading: false,
        error: false,
      }
    }
    default: {
      return state;
    }
  }
}

export default data;
