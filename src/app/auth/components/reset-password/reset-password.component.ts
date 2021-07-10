import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  isSignedIn = false

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

  onSubmit(resetForm: NgForm){
    console.log(resetForm.value);
    console.log(resetForm.valid);
  }

  async onNewPassword(email:string, password:string){
    await this.firebaseService.signUp(email,password)
    if (this.firebaseService.isLoggedIn)
    this.isSignedIn = true
  }
}
