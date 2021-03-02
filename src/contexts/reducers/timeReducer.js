export const initalState = {
  timer: 5,
  pause: false,
  intervalID: null,
};
export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "PLAY":
      return {
        ...state,
        timer: action.payload.update,
        intervalID: action.payload.intervalID,
        pause: false,
      };
    case "PAUSE":
      console.log("pause");
      clearInterval(state.intervalID);
      return {
        ...state,
        timer: state.timer,
        pause: true,
        intervalID: null,
      };
    case "DURATION_CHANGE":
      return {
        ...state,
        timer: action.payload.duration,
      };
    case "OVER":
      clearInterval(state.intervalID);
      return {
        ...state,
        timer: 0,
      };
    default:
      return state;
  }
};
