import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  usernameCreation = '';

  onUsernameSubmit(){
    this.usernameCreation = 'Your new username is: ' + this.username;
    this.username = '';
  } 
}
