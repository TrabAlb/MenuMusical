import { Component, OnInit } from '@angular/core';
import { DesignType } from './models/designData';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'MenuMusical';

  public dataPodcast?: DesignType;
  public dataCalendar?: DesignType;
  public dataStudio?: DesignType;
  public dataForm?: DesignType;

  public showAboutVar: boolean = false;
  public scrolled: boolean = false;
  public events = ['wheel', 'touchmove'];

  public userActivity: any;
  userInactive: Subject<any> = new Subject();

  constructor(){    
    this.setTimeout();
    this.userInactive.subscribe(() => {this.scrolled = false});
    
  }

  setTimeout() {
    this.userActivity = setTimeout(() => this.userInactive.next(undefined), 3000);
  }

  ngOnInit() {
    this.buildObjects();
    this.events.forEach(e => document.addEventListener(e, () => { this.scrolled = true;
      clearTimeout(this.userActivity);
      this.setTimeout();
     }, false));
  }

  buildObjects() {
    this.dataPodcast = {
      video: 'podcastbgvideo.mp4',
      text: {
        title: 'Podcast',
        doRedirect: false,
        form: false,
        subtitles: [
          {
            doRedirect: true,
            form: false,
            title: 'Youtube',
            subtitles: [],
            redirectLink: 'https://www.youtube.com/@menu_musical_barcelona/featured',
            icon: 'bi bi-youtube'
          },
          {
            doRedirect: false,
            form: false,
            title: 'Spotify',
            subtitles: [],
            redirectLink: '',
            icon: 'bi bi-spotify'
          }
        ]
      },
    };

    this.dataStudio = {
      video: 'studiobgvideo.mp4',
      text: {
        title: 'Studio',
        doRedirect: true,
        redirectLink: 'https://www.youtube.com/@menu_musical_barcelona/featured',
        form: false,
        subtitles: [
          {
            doRedirect: false,
            form: false,
            title: 'Producciones Audiovisuales',
            subtitles: [],
          }
        ]
      },
    };

    this.dataCalendar = {
      text: {
        title: 'Calendar & Map',
        doRedirect: true,
        redirectLink: 'https://www.appsheet.com/start/86d0f89c-d6c3-466f-a39b-433ff695f70b',
        form: false,
        subtitles: [
          {
            doRedirect: false,
            form: false,
            title: "Check today's events",
            subtitles: [],
          }
        ]
      },
    };

    this.dataForm = {
      text: {
        title: '',
        doRedirect: false,
        redirectLink: '',
        form: true,
        subtitles: [
          {
            doRedirect: false,
            form: false,
            title: "Envíanos tus eventos con este",
            subtitles: [],
          },
          {
            doRedirect: true,
            form: true,
            title: "formulario",
            subtitles: [],
            redirectLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfi9MIT2Q7hw8VHN6XkmEFed3E-2TIwlUpHPSTk9js5_AJ2QQ/viewform'
          }
        ]
      },
    }
  }

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

  showAbout($event: boolean) {
    this.showAboutVar = $event;
  }
}
