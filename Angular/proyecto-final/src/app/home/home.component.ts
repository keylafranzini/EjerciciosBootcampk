import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


 /*  @ViewChild('audio', {static: false}) audio: ElementRef; */
  constructor() {}

  ngOnInit() {
  }

  playAudio() {
    const audio: HTMLAudioElement = document.querySelector('#audio');
    const icon = document.querySelector('#icon');
    if (audio.paused) {
      audio.play();
      icon.classList.remove('fa-volume-mute');
      icon.classList.add('fa-volume-down');
    } else {
      audio.pause();
      icon.classList.remove('fa-volume-down');
      icon.classList.add('fa-volume-mute');
    }
  }
}
