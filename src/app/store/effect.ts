import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addTask, addTaskSuccess, removeTask, removeTaskSuccess } from "./actions";
import { delay, of, switchMap } from "rxjs";

@Injectable()
export class ToDoEffects {
    constructor(
        private actions$: Actions,
    ) { }

    addTask$ = createEffect(() => this.actions$.pipe(
        ofType(addTask),
        delay(1000),
        switchMap((tasks) => of(addTaskSuccess({ task: tasks.task }))),
    ));

    removeTask$ = createEffect(() => this.actions$.pipe(
        ofType(removeTask),
        delay(1000),
        switchMap((tasks) => of(removeTaskSuccess({ taskName: tasks.taskName }))),
    ));
}