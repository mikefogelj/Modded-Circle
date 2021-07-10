import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //isLogout event created to allow us to channel it when selected in HYML
  @Output() isLogout = new EventEmitter<void>()
  //constructor with firebase parameter to allow us to logout of account that is linked with firebase 
  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {
  } 
  //logout method
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }

}
