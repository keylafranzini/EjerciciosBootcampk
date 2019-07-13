import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MatSlideToggle } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private tabs = ['pictures', 'books', 'music', 'videos'];

  public selectedIndex;

  constructor(
    private router: Router
  ) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log(event);
        const index = this.tabs.findIndex((tab) => {
          return event.url.indexOf(tab) !== -1;
        });

        this.selectedIndex = index;
        console.log(index);
      }
    });

  }

  ngOnInit() {
    console.log(this.tabs);
  }

  goToVideos(){
    this.selectedIndex = 3;
    this.router.navigate(['/home/videos']);
  }

  hidePictures($event: MatSlideToggle){
    console.log($event);
    const indexOfPictures = this.tabs.indexOf('pictures');
      if($event.checked){
        if (indexOfPictures === -1) {
        this.tabs.push('pictures');
       }
      } else{
        this.tabs.splice(indexOfPictures, 1);
        this.changeTab({index: 0} );
      }
    
  }

  changeTab($event) {
    console.log($event);

    this.router.navigate(['/home/' + this.tabs[$event.index]]);
  }
}
