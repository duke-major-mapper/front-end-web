import axios from 'axios';

const crud = request => async (dispatch) => {
  dispatch({
      type: request.dispatch.begin,
    });
  const response = await axios({
      method: request.method,
      url: request.url,
      data: request.data ? request.data : null,
    })
    .then((res) => {
      dispatch({
            type: request.dispatch.end,
            payload: res,
          });
    })
    .catch((err) => {
      dispatch({
           type: request.dispatch.fail,
           payload: err,
         });
    });
};

export default crud;
