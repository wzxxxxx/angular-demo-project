import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectTasks } from 'src/app/store/selector';
import { ToDoState, ToDoTask } from 'src/app/store/state';

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  constructor(private store: Store<ToDoState>) { }

  public toDoList$: Observable<ToDoTask[]> = this.store.pipe(
    select(selectTasks),
  );
}
