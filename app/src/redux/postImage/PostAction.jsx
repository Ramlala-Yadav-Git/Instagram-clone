import { GET_POST_DATA, GET_POST_FAILURE, GET_POST_REQUEST } from "./PostActionType";

const getDataRequest = () => {
    return {
      type: GET_POST_REQUEST,
    };
  };
  const getDataSuccess = (payload) => {
    return {
      type: GET_POST_DATA,
      payload: payload,
    };
  };
  const getDataFailure = (err) => {
    return {
      type: GET_POST_FAILURE,
      payload: err,
    };
  };

  
  export const storePhoto = (photo)=>dispatch=> {
    const requestAction = getDataRequest();
    dispatch(requestAction);
        const successAction = getDataSuccess(photo);
        dispatch(successAction);
  }
  