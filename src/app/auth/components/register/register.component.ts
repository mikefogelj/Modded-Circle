import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  //default isSignIn to false
  isSignedIn = false
  //constructor with firebaseservice as parameter 
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }
  //submit method triggered when form is submitted
  onSubmit(registerForm: NgForm){
    console.log(registerForm.value);
    console.log(registerForm.valid);
  }
  //signin method to log in the newly registered user
  async onSignIn(email:string, password:string){
    await this.firebaseService.signIn(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  //onSignUp method to create a new user with the entered information on the form
  async onSignUp(email:string, password:string){
    await this.firebaseService.signUp(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

}
