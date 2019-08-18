import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PokeMon';
  cars = ['Baleno', 'Swift', 'Verna', 'Scorpio', 'Celerio', 'Ciaz', 'City', 'Lamborgini'];

  constructor() {
    setTimeout(() => {
      this.title = 'DoreMon'
    }, 5000);
  }

  updateText() {
    this.title = "SpiderMan";
  }

}
