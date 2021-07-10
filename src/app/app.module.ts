import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { PartPriceComponent } from './part-price/part-price.component';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HomeComponent,
    AdminComponent,
    TodoItemComponent,
    EditTodoComponent,
    PartPriceComponent
  ],
  //import array includes my AngulareFireAccess in order to actually allow authentication
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    AuthModule,
    RouterModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDRiCWzBBSZWj4p547_yTUZiYuk1s5BhaU",
      authDomain: "modded-circle.firebaseapp.com",
      databaseURL: "https://modded-circle-default-rtdb.firebaseio.com",
      projectId: "modded-circle",
      storageBucket: "modded-circle.appspot.com",
      messagingSenderId: "236259011221",
      appId: "1:236259011221:web:c356c28d83b2d1c657c99c",
      measurementId: "G-J7P5DFVYK1"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
