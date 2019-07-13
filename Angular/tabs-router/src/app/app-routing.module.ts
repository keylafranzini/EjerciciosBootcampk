import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/home/books/books.component';
import { VideosComponent } from './pages/home/videos/videos.component';
import { PicturesComponent } from './pages/home/pictures/pictures.component';
import { MusicComponent } from './pages/home/music/music.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '', redirectTo: 'pictures', pathMatch: 'full'
      },
      {
        path: 'books', component: BooksComponent
      },
      {
        path: 'videos', component: VideosComponent
      },
      {
        path: 'pictures', component: PicturesComponent
      },
      {
        path: 'music', component: MusicComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
