import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addTask } from 'src/app/store/actions';

@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.scss']
})
export class AddNewTodoComponent {

  constructor(private store: Store) { }

  addTodo(taskName: string): void {
    this.store.dispatch(addTask({ task: { taskName, finished: false } }));
  }

}
