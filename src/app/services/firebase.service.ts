import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  //set login to false
  isLoggedIn = false
  //constructor takes in the AngularFireAuth object
  constructor(public firebaseAuth: AngularFireAuth) { }
  //sing in method for firebase takes the email and password for user that they enter in the html form
  async signIn(email: string, password: string){
    //methos calls firebases signin method and passes in variables
    await this.firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = true
      //sets user in local storage
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  //sign up method for firebase takes same as info as login but uses create user method rather than sign in 
  async signUp(email: string, password: string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(res=>{
      this.isLoggedIn = false
      localStorage.setItem('user', JSON.stringify(res.user))
    })
  }
  //logout method calls firebases sign out method
  logout() {
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
