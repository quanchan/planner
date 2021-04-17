import fetchMockData from 'services/mock';
import {FAILURE, REQUEST, SUCCESS} from "../utils/action-types";

export const ACTION_TYPES = {
  GET_MOCK_DATA: "GET_MOCK_DATA"
}

const getData = () => ({
  type: REQUEST(ACTION_TYPES.GET_MOCK_DATA)
});

const getDataSuccess = data => ({
  type: SUCCESS(ACTION_TYPES.GET_MOCK_DATA),
  payload: { data }
})

const getDataFailure = error => ({
  type: FAILURE(ACTION_TYPES.GET_MOCK_DATA),
  payload: { error }
})

export function getMockData () {
  return dispatch => {
    dispatch(getData());
    fetchMockData
      .then(data => dispatch(getDataSuccess(data)))
      .catch(error => dispatch(getDataFailure(error)))
  }
}

