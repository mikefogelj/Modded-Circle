import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  //input and output defualt variables for all actions
  @Input() todo!: Todo;
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();
  @Output() priceClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  //when todo is clicked, the emit action is done and it is logged to console to make sure it is taking the click
  onTodoClicked(){
    console.log("Todo was clicked")
    this.todoClicked.emit()
  }
  //when edit is clicked, edit emiter
  onEdit(){
    this.editClicked.emit()
  }
  //when delete is clicked, delete emit
  onDeleteClicked() {
    this.deleteClicked.emit()
  }
  //when price is clicked, click emit
  onPrice() {
    this.priceClicked.emit()
  }

}
