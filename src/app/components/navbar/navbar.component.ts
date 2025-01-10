import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent {

  public showAboutVar!: boolean;
  showAbout() {
    if(!this.showAboutVar) {
      this.showAboutVar = true;
    }
    else {
      this.showAboutVar = false;
    }
  }
}


