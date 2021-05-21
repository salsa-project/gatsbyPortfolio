const initialState = {
    isScroll: false,
    isAppRunning: false,
};




export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_APP_RUN':
      return { ...state, isAppRunning: action.isAppRunning };
    case 'TOGGLE_SCROLL':
      return { ...state, isScroll: action.isScroll };
    default:
      return state;
  }
};