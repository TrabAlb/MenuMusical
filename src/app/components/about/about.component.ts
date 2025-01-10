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

  ngOnChanges(changes: SimpleChanges): void {
    let show = changes['showAboutVar'];
    this.changes = show; 
    // if(show.currentValue != show.previousValue){
    //   if(show.currentValue == true) {
    //     document.getElementById('aboutPage')?.classList.remove('animationOpen', 'animationClose', 'd-none');
    //     document.getElementById('aboutPage')?.classList.add('animationOpen');
    //     console.log(show.currentValue);
    //   }
    //   if(show.currentValue == false) {
    //     document.getElementById('aboutPage')?.classList.remove('animationOpen', 'animationClose', 'd-none');
    //     document.getElementById('aboutPage')?.classList.add('animationClose');
    //     setTimeout(() => {
    //       document.getElementById('aboutPage')?.classList.add('d-none');
    //     }, 2000);
    //     console.log(show.currentValue);
    //   }
    // }
    // if(show.currentValue == undefined) {
    //   document.getElementById('aboutPage')?.classList.remove('animationOpen', 'animationClose', 'd-none');
    //   document.getElementById('aboutPage')?.classList.add('d-none');
    //   console.log(show.currentValue);
    // }
      
  }

      
}
