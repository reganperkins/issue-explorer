export const searchReducer = (state, action) => {
  switch(action.type) {
    case 'SUBMIT_SEARCH':
      const split = action.payload.split('/');
      return {
        ...state,
        org: split[3],
        repo: split[4],
        githubURL: action.payload,
      };
    case 'CLEAR_SEARCH':
      return {
        ...state,
        org: '',
        repo: '',
        githubURL: '',
      };
      case 'ADD_FILTER':
        return {
          ...state,
          filter: action.payload,
        };
    default:
      throw new Error(`search dispatch action ${action.type} is undefined`);
  }
}

export const issuesReducer = (state, action) => {
  switch(action.type) {
    case 'INIT_FETCH_ISSUES':
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
        data: [],
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        data: [],
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        data: action.payload,
      };
    default:
      throw new Error(`issue dispatch action ${action.type} is undefined`);
  }
}
