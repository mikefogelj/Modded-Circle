import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';
import { FirebaseService } from '../services/firebase.service';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  //todo array declared and isSignedIn variable is set to false
  todos!: Todo[]; 
  isSignedIn=false;
  //output for logout
  @Output() isLogout = new EventEmitter<void>()
  //default constructor passes in data and services needed
  constructor(private dataService: DataService, private dialog: MatDialog, public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos()
  }
  //when form is submitted for engine todo
  onFormSubmitEngine(formEngine: NgForm) {
    
    console.log("FORM SUBMITTED ENGINE")
    console.log(formEngine)
    //if empty input, alery is show
    if (formEngine.invalid) return alert("No Engine modification added") 
    //adder
    this.dataService.addTodoEngine(new Todo(formEngine.value.text))
    //reset form after used
    formEngine.reset()
  }
  //when form is submitted for aero todo
  onFormSubmitAero(formAero: NgForm) {
    
    console.log("FORM SUBMITTED AERO")
    console.log(formAero)
    //aero modification
    if (formAero.invalid) return alert("No Aero modification added")
    //add todo
    this.dataService.addTodoAero(new Todo(formAero.value.text))
    //reset
    formAero.reset()
  }

  onFormSubmitWheels(formWheels: NgForm) {
    
    console.log("FORM SUBMITTED WHEELS")
    console.log(formWheels)

    if (formWheels.invalid) return alert("No wheels added")

    this.dataService.addTodoWheels(new Todo(formWheels.value.text))

    formWheels.reset()
  }
  //for each value when all selected submited all
  onFormSubmitEverything(form: NgForm, form2: NgForm, form3: NgForm)
  {
    if (form.valid)
      this.dataService.addTodoEngine(new Todo(form.value.text))

    if(form2.valid)
      this.dataService.addTodoAero(new Todo(form2.value.text))

    if(form3.valid)
      this.dataService.addTodoWheels(new Todo(form3.value.text))
  }
  //todo clicked method for checking off and unchecked. Prompts user telling them option is selected or not selected
  onTodoClicked(todo: Todo) {
    todo.completed = !todo.completed;
    if (todo.completed === true) alert("Mod Completed!")

    if (todo.completed === false) alert("Reverting mod.")
  }
  //edit todo method edits the todo calling the component from edit todo
  editTodo(todo: Todo) {
    const index = this.todos.indexOf(todo)
    //prompt for method 
    let dialogRef = this.dialog.open(EditTodoComponent, {
      width: '600px',
      data: todo
    });
    //called updated todo method so the todo changes text and the user can see that it is changed
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }
  
  //delete todo method 
  deleteTodo(todo: Todo) {
    //takes index of todo and removes it
    const index = this.todos.indexOf(todo)
    this.dataService.removeTodo(index)
  }
  //logout method
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  //handle logout method
  handleLogout() {
    this.isSignedIn=false
  }
  //add price method still being wrked on, is based off of the edit method
  addPrice(todo: Todo) {
    const index = this.todos.indexOf(todo)
    let dialogRef = this.dialog.open(EditTodoComponent, {
      width: '600px',
      data: todo
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.dataService.updateTodo(index, result)
      }
    })
  }

}
