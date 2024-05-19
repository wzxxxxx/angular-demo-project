import { Component } from '@angular/core';
import { ToDoListService } from './to-do-list.service';
import { Store } from '@ngrx/store';
import { editTaskStatus, removeTask } from 'src/app/store/actions';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent {

  constructor(
    public todoListService: ToDoListService,
    private store: Store,
  ) { }

  removeTodo(taskName: string): void {
    this.store.dispatch(removeTask({ taskName }));
  }

  editTaskStatus(taskName: string, finished: boolean): void {
    this.store.dispatch(editTaskStatus({ taskName, finished }));
  }

}
