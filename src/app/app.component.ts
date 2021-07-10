import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Modded-Circle-App';
  authenticationService: any;
  isSignedIn = false
  //constructor with firebase service to work logins
  constructor(public firebaseService: FirebaseService){
  }
  //on default is opened when app is started
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn=true
    else
    this.isSignedIn=false
  }
  //on sighn up method for when signed up using firebase
  async onSignUp(email:string, password:string){
    await this.firebaseService.signUp(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  //signing in method for singing in, linked to firebase
  async onSignIn(email:string, password:string){
    await this.firebaseService.signIn(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
  //handle logout method makes signedIn variable false
  handleLogout() {
    this.isSignedIn=false
  }
}
