import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectFinishedAndUnfinishedTasksCount, selectIsLoading, selectRequestStatus } from './store/selector';
import { RequestStatusState, ToDoState } from './store/state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-project';

  public finishedAndUnfinishedTaskCount$: Observable<string> = this.store.pipe(select(selectFinishedAndUnfinishedTasksCount));
  public isLoading$: Observable<boolean> = this.statusStore.pipe(select(selectIsLoading));

  constructor(
    private store: Store<ToDoState>,
    private statusStore: Store<RequestStatusState>,
  ) {}
}
