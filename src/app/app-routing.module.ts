import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { LoginComponent } from './auth/components/login/login.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {path: 'todo', component: TodosComponent},
  {path: '', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
