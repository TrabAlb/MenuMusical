import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: false
})
export class NavbarComponent {
  @Output() showAboutEvent!: EventEmitter<boolean>;

  public showAboutVar: boolean = false;
  showAbout() {
    this.showAboutVar = !this.showAboutVar;
    this.showAboutEvent.emit(this.showAboutVar);
  }
}


