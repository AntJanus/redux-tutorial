import fetch from 'isomorphic-fetch';

//action types
export const RECEIVE_TASKS = 'RECEIVE_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export function getAuth() {
  let authentication = JSON.parse(localStorage.getItem('authentication')) || { apiToken: '', uuId: '' };

  return {
    type: LOGIN,
    payload: {
      authentication
    }
  };
}
export function fetchTasks() {
  return function(dispatch, getState) {
    let state = getState();

    if(!state.authentication || state.authentication.uuId.length === 0 || state.authentication.apiToken.length === 0) {
      return function() { };
    }

    return fetch('https://habitica.com:443/api/v2/user/tasks', {
      headers: {
        'X-API-User': state.authentication.uuId,
        'X-API-Key': state.authentication.apiToken
      }
      })
      .then(response => response.json())
      .then((json) => {
        dispatch(receiveTasks(json));
      })
    ;
  };
}

export function receiveTasks(tasks) {
  return {
    type: RECEIVE_TASKS,
    payload: {
      tasks
    }
  };
}

export function addTask(text, type) {
  return {
    type: ADD_TASK,
    payload: {
      text,
      type
    }
  };
}

export function completeTask(id) {
  return {
    type: COMPLETE_TASK,
    payload: {
      id
    }
  };
}

export function login(uuId, apiToken) {
  return {
    type: LOGIN,
    payload: {
      authentication: {
        uuId,
        apiToken
      }
    }
  };
}

export function logout() {
  return {
    type: LOGOUT,
    payload: {
      tasks: [],
      authentication: {
        uuId: '',
        apiToken: ''
      }
    }
  };
}
