export interface ToDoState {
    tasks: ToDoTask[];
}

export interface ToDoTask {
    taskName: string;
    finished: boolean;
}

export interface RequestStatusState {
    requestStatus: 'idle' | 'pending' | 'success';
}

export enum ToDoActions {
    AddTask = '[ToDo Component] AddTask',
    AddTaskSuccess = '[ToDo Component] AddTaskSuccess',
    RemoveTask = '[ToDo Component] RemoveTask',
    RemoveTaskSuccess = '[ToDo Component] RemoveTaskSuccess',
    EditTaskStatus = '[ToDo Component] EditTaskStatus',
}