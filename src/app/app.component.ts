import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  title = 'MenuMusical';


  redirectCalendar() {
    window.location.href = 'https://www.appsheet.com/start/86d0f89c-d6c3-466f-a39b-433ff695f70b';
    //window.open('https://www.appsheet.com/start/86d0f89c-d6c3-466f-a39b-433ff695f70b', '_blank');
  }

  redirectPodcast() {
    window.location.href = 'https://www.youtube.com/@menu_musical_barcelona/featured';
    //link direct to podcast playlist
    //window.location.href = 'https://www.youtube.com/playlist?list=PLhDEmOBTl7CG3ud-WP1wNyCEZU_TVOG2J';
    //window.open('https://www.youtube.com/playlist?list=PLhDEmOBTl7CG3ud-WP1wNyCEZU_TVOG2J', '_blank');
  }

  redirectStudio() {
    window.location.href = 'https://www.youtube.com/@menu_musical_barcelona/featured';
    //window.open('https://www.youtube.com/@menu_musical_barcelona/featured', '_blank');
  }

  redirectForm() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSfi9MIT2Q7hw8VHN6XkmEFed3E-2TIwlUpHPSTk9js5_AJ2QQ/viewform';
    //window.open('https://docs.google.com/forms/d/e/1FAIpQLSfi9MIT2Q7hw8VHN6XkmEFed3E-2TIwlUpHPSTk9js5_AJ2QQ/viewform', '_blank');
  }
}
