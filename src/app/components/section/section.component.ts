import { Component, Input, OnInit } from '@angular/core';
import { DesignType } from 'src/app/models/designData';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss',
  standalone: false
})
export class SectionComponent implements OnInit {
  @Input() data?: DesignType;

  public mediaPath: string = '../../../assets/video/';

  ngOnInit(): void {
    if (this.data?.video != null) {
      this.data.video = this.mediaPath + this.data.video;
    }
  }

  redirect(link?: string) {
    //window.location.href = link!;
    window.open(link, '_blank');
  }
}


