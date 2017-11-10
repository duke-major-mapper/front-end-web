const initialState = {
  isLoading: false,
  majors: [],
  classes: [],
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
      return {
        ...state,
        classes: action.payload.data.data,
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
