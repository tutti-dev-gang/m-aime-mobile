import {
  SET_LOADING,
  GET_USERS,
  GET_USER
} from "../actions/user-action";

const initialState = {
  loading: false,
  users: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        loading: false,
      };
    default:
      return state;
  }
};
