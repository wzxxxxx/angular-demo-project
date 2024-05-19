import { createSelector } from '@ngrx/store';
import { RequestStatusState, ToDoState } from './state';

export const selectTasks = (state: ToDoState) => state.tasks;

export const selectFinishedTasks = createSelector(
    selectTasks,
    (tasks) => tasks.filter(t => t.finished)
);

export const selectUnfinishedTasks = createSelector(
    selectTasks,
    (tasks) => tasks.filter(t => !t.finished)
);

export const selectFinishedTasksCount = createSelector(
    selectFinishedTasks,
    (tasks) => tasks.length
);

export const selectUnfinishedTasksCount = createSelector(
    selectUnfinishedTasks,
    (tasks) => tasks.length
);

export const selectFinishedAndUnfinishedTasksCount = createSelector(
    selectFinishedTasksCount,
    selectUnfinishedTasksCount,
    (finished, unfinished) => (`Finished tasks: ${finished}, Unfinished tasks: ${unfinished}`)
);

export const selectRequestStatus = (state: RequestStatusState) => state.requestStatus;

export const selectIsLoading = createSelector(
    selectRequestStatus,
    (status) => status === 'pending'
);