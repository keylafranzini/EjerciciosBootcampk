import { Component, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-follow-block',
  templateUrl: './follow-block.component.html',
  styleUrls: ['./follow-block.component.sass']
})
export class FollowBlockComponent implements OnInit {

  public _data = [
    {
      href:'https://www.facebook.com', url:'https://cdn4.iconfinder.com/data/icons/miu-gloss-social/60/facebook-512.png'
    },
    {
      href: 'https://www.linkedin.com', url: 'https://cdn4.iconfinder.com/data/icons/flat-social-media-icons-1/512/linkedin-2.png'
    },
    {
      href: 'https://www.twitter.com', url: 'https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_color-512.png'
    },
    {
      href: 'https://www.instagram.com', url: 'https://png.pngtree.com/svg/20170920/b3f1a5839e.png'
    }
  ]

  @Input() socialMedia: Array<any> = [];
  @Input() url: string = 'Cargando';

  constructor() { }

  ngOnInit() {
  }

}
