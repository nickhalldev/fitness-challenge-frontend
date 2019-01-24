import {
  SET_USER,
  LOGOUT,
  SET_USERS,
  SET_WEIGHTS,
  SET_EXERCISES
} from "../actions/types"

const defaultState = {
  current_user: {
    current_user: {}
  },
  users: {},
  weights: {},
  exercises: {}
}

export default function users(state = defaultState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        current_user: action.payload
      }

    case LOGOUT:
      return {
        ...state,
        current_user: {}
      }

    case SET_USERS:
      return {
        ...state,
        users: action.payload
      }



    case SET_WEIGHTS:
      return {
        ...state,
        weights: action.payload
      }

    case SET_EXERCISES:
      return {
        ...state,
        exercises: action.payload
      }

    default:

      return state;
  }



}
