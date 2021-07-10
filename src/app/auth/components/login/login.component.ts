import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //is signed in variable decleration
  isSignedIn = false

  //constructor to use firebase as parameter
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  //onSubmmit method to be triggered when form is submitted
  onSubmit(loginForm: NgForm){
    console.log(loginForm.value);
    console.log(loginForm.valid);
  }
  //onSignIn method for firebase login
  async onSignIn(email:string, password:string){
    await this.firebaseService.signIn(email,password)
    
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }

}
