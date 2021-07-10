import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-part-price',
  templateUrl: './part-price.component.html',
  styleUrls: ['./part-price.component.scss']
})
export class PartPriceComponent implements OnInit {
  //default constructor
  constructor(public dialogRed: MatDialogRef<PartPriceComponent>, @Inject(MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }
  //close method 
  close() {
    this.dialogRed.close()
  }
  //still blank because I am still working on this method which will allow users to add a price for modification
  onFormSubmitPrice(form: NgForm)
  {
    
  }

}
