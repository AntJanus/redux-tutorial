//action types
export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE_TASK = 'COMPLETE_TASK';

const tasks = [
  {
    id: 1,
    type: 'daily',
    text: 'Check facebook',
    completed: false
  },
  {
    id: 2,
    type: 'habit',
    text: 'Walk up the stairs'
  },
  {
    id: 3,
    type: 'todo',
    text: 'Finish Redux tutorial',
    completed: false
  },
  {
    id: 4,
    type: 'todo',
    text: 'Finish Redux slides',
    completed: true
  }
];

export function getTasks() {
  return {
    type: GET_TASKS,
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
