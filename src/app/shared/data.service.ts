import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //empty todo array of type todosaa
  todos: Todo[] = [
    
  ]

  constructor() { }
  //getter for todos
  getAllTodos() {
    return this.todos
  }
  //add a todo when engine selected
  addTodoEngine(todo: Todo) {
    this.todos.push(todo)
  }
  //add a todo when aero selected
  addTodoAero(todo: Todo) {
    this.todos.push(todo)
  }
  //add a todo when wheels selected
  addTodoWheels(todo: Todo) {
    this.todos.push(todo)
  }
  //removetodo method used for deletion
  removeTodo(index: number) {
    this.todos.splice(index, 1)
  }
  //update todo called when edited and for future use when price is added
  updateTodo(index: number, updatedTodo:Todo) {
    this.todos[index] = updatedTodo
  }
}
