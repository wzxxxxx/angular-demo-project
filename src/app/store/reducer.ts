import { createReducer, on } from '@ngrx/store';
import { addTaskSuccess, removeTaskSuccess, editTaskStatus, addTask, removeTask } from './actions';
import { ToDoTask } from './state';

export const initialState: ToDoTask[] = [];

export const toDoReducer = createReducer(
    initialState,
    on(
        addTaskSuccess,
        (state, { task }) => (state.some(t => t.taskName === task.taskName) || !task.taskName) ? state : [task, ...state]
    ),
    on(
        removeTaskSuccess,
        (state, { taskName }) => state.filter(t => t.taskName !== taskName)
    ),
    on(
        editTaskStatus,
        (state, { taskName, finished }) => resortTasks(state.map(t => t.taskName === taskName ? { ...t, finished } : t))
    )
);

export const requestStatusReducer = createReducer(
    'idle',
    on(
        addTask,
        () => 'pending'
    ),
    on(
        addTaskSuccess,
        () => 'success'
    ),
    on(
        removeTask,
        () => 'pending'
    ),
    on(
        removeTaskSuccess,
        () => 'success'
    ),
);

function resortTasks(tasks: ToDoTask[]): ToDoTask[] {
    // unfinished tasks first
    return tasks.sort((a, b) => a.finished === b.finished ? 0 : a.finished ? 1 : -1);
}
