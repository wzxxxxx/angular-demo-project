import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';
import { AddNewTodoComponent } from './components/add-new-todo/add-new-todo.component';
import { StoreModule } from '@ngrx/store';
import { requestStatusReducer, toDoReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { ToDoEffects } from './store/effect';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    AddNewTodoComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ tasks: toDoReducer, requestStatus: requestStatusReducer }),
    EffectsModule.forRoot([ToDoEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
