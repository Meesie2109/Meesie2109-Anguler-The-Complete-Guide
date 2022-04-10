import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showPass = false;
  passArray = [];
  numberClicks = 0;

  togglePass(e){
    this.showPass = !this.showPass;
    this.passArray.push(this.numberClicks);
    this.numberClicks++;
  }
}

