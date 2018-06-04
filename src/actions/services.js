import * as actTypes from '../constants/services';
import history from '../utils/history';

export function redirect(to) {
  return (dispatch) => {
    history.push(to);

    dispatch({
      type: actTypes.REDIRECT,
      payload: to,
    });
  };
}
