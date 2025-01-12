import { Component, Input, input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone: false
})
export class AboutComponent implements OnChanges{
  @Input() showAboutVar!: boolean;
  public changes!: SimpleChange;

  public aboutUsText: string = 'Sobre Menu Musical Barcelona\n'+
                               'Tu calendario de música en vivo en Barcelona\n'+
                               'Menu Musical da visibilidad a músicos locales de todos los géneros, desde Jazz, Blues y Flamenco hasta Salsa, Cumbia y Punk.\n'+
                               'Ayudamos a amantes de la música y curiosos a seguir eventos en vivo, conocer nuevos artistas y explorar bares y locales en los 10 distritos de Barcelona.\n'+
                               'Nuestra misión: ser la voz y el archivo de la cultura musical de la ciudad.\n'+
                               '¿Quiénes somos? Un proyecto voluntario nacido de dos amigos que se conocieron en La Habana, unidos por su pasión por la música.';

  redirectInstagram() {
    window.open('https://www.instagram.com/menu_musical_barcelona/', '_blank');
  }

  redirectKofi() {
    window.open('https://ko-fi.com/menu_musical', '_blank');
  }

  ngOnChanges(changes: SimpleChanges): void {
    let show = changes['showAboutVar'];
    this.changes = show;
  }

      
}
