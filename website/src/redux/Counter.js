export const estadoInicialCounter = {
    count: 0,
};
export function reducerCounter(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        if (state.count - 1 < 0) {
          return { ...state, count: state.count };
        } else {
          return { ...state, count: state.count - 1 };
        }
      case "set":
        return { ...state, count: action.count };
    }
  }