import * as actTypes from '../constants';
import history from '../utils/history';

export function redirect(to) {
  return (dispatch) => {
    history.push(`${process.env.PPBLIC_URL}/${to}`);

    dispatch({
      type: actTypes.REDIRECT,
      payload: to,
    });
  };
}
