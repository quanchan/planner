import {FAILURE, REQUEST, SUCCESS} from 'utils/action-types.js';
import {ACTION_TYPES} from "../actions/mockAction";


const initialState = {
  mockData: {},
  loading: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.GET_MOCK_DATA):
      return {
        ...state,
        loading: true,
      };
    case FAILURE(ACTION_TYPES.GET_MOCK_DATA):
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.error
      };
    case SUCCESS(ACTION_TYPES.GET_MOCK_DATA):
      return {
        ...state,
        loading: false,
        mockData: action.payload.data
      }
    default:
      return state;
  }
}

