const initialState = {
  isScroll: false,
  run_app_CV: false,
  wich_app: ''
};




export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_SCROLL':
      return { ...state, isScroll: action.isScroll };
    case 'APP_CV_RUN':
      return { ...state, run_app_CV: action.run_app_CV, wich_app: action.type };
    default:
      return state;
  }
};