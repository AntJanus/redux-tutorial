import { LOGIN, LOGOUT } from './actions';

export function authenticationMiddleware() {
  return next => action => {
    next(action);

    if(action.type === LOGIN || action.type === LOGOUT) {
      localStorage.setItem('authentication', JSON.stringify(action.payload.authentication));
    }

  };
}
