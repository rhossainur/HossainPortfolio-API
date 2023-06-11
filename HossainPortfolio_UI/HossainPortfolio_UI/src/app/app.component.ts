import { Component } from '@angular/core';
import { fadeAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation],
})
export class AppComponent {
  title = 'HossainPortfolio_UI';
  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

  toggleNavbar2(){
    if (this.showMenu==true){
      this.showMenu = !this.showMenu;
    }
  }
}
