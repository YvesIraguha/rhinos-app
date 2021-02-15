import { INITIAL_ACTION } from "../actionTypes";

const initialReducer = (
  state = { firstName: "Iraguha" },
  { type, payload }
) => {
  switch (type) {
    case INITIAL_ACTION:
      return {
        ...state,
        lastName: payload.lastName,
      };
    default:
      return state;
  }
};

export default initialReducer;
