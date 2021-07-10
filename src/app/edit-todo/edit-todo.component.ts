import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  //constructore needs to be passed these parameters in order to edit an already made todo
  constructor(public dialogRef: MatDialogRef<EditTodoComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }
  //when form is submited this method is called to update the text of the todo 
  onFormSubmit(form: NgForm) {
    if(form.invalid) return
    this.todo.text = form.value.text
    this.dialogRef.close(this.todo)
  }
  //close the dialog box when cancel is selected
  close() {
    this.dialogRef.close()
  }

}
