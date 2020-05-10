import api from "./api.js";

export const ACTION_TYPES = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  FETCH_ALL: "FETCH_ALL",
};

export const fetchAll = () => (dispatch) => {
  api
    .postMessage()
    .fetchAll()

    .then((res) => {
      dispatch({
        type: ACTION_TYPES.FETCH_ALL,
        payload: [],
      });
    })
    .catch((err) => console.log(err));
};
