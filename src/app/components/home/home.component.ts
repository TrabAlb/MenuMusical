import { Component, OnInit } from '@angular/core';
import { DesignType } from 'src/app/models/designData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: false
})
export class HomeComponent implements OnInit {
  public dataPodcast?: DesignType;
  public dataCalendar?: DesignType;
  public dataStudio?: DesignType;
  public dataForm?: DesignType;

  ngOnInit() {
    this.buildObjects();
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
        title: 'Calendario & Mapa',
        doRedirect: true,
        redirectLink: 'https://www.appsheet.com/start/86d0f89c-d6c3-466f-a39b-433ff695f70b',
        form: false,
        subtitles: [
          {
            doRedirect: false,
            form: false,
            title: "Consulta los eventos",
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
}
