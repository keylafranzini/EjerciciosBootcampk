import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-row',
  templateUrl: './video-row.component.html',
  styleUrls: ['./video-row.component.sass']
})
export class VideoRowComponent implements OnInit {

  public _data = [
    {
      url: 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/03/05/C1D7D725-CD12-4C07-8C4C-503F377E65D7/58.jpg',
      title: 'Mega-incendios: el fuego voraz que trae el cambio climático',
      description: 'Los incendios que vienen: desvatadores e incontrolables'
    },
    {
      url: 'http://a0.cdnfan.com/images/M/9/3/4/5/bebes-coche_hd_92891.jpg',
      title: 'Porqué no debes dejar un niño dentro del coche en verano',
      description: 'Evita golpes de calor en el interior del vehículo'
    },
    {
      url: 'https://www.nippon.com/es/ncommon/contents/guide-to-japan/136199/136199.jpg',
      title: 'El gran ojo de dragón de Japón. ¡Impresionante!',
      description: 'Sucede sólo en primavera y el efecto es espectacular'
    },
  ]

  @Input() noticias: Array<any> = [];
  @Input() title : string = 'Cargando';
  @Input() subtitle : string = 'Cargando';

  constructor() { }

  ngOnInit() {
  }

}
