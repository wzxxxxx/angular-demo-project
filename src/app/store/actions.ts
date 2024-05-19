import { createAction, props } from '@ngrx/store';
import { ToDoActions, ToDoTask } from './state';

export const addTask = createAction(
    ToDoActions.AddTask,
    props<{ task: ToDoTask }>()
);

export const addTaskSuccess = createAction(
    ToDoActions.AddTaskSuccess,
    props<{ task: ToDoTask }>()
);

export const removeTask = createAction(
    ToDoActions.RemoveTask,
    props<{ taskName: string }>()
);

export const removeTaskSuccess = createAction(
    ToDoActions.RemoveTaskSuccess,
    props<{ taskName: string }>()
);

export const editTaskStatus = createAction(
    ToDoActions.EditTaskStatus,
    props<{ taskName: string, finished: boolean }>()
);