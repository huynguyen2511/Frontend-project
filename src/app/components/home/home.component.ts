import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title: 'User home'
  constructor(public authService: AuthService){}

  images= [
    {
      imageSrc: '../image/imageSlider1.png',
      imageAlt: 'Image 1'
    },
    {
      imageSrc: '../image/imageSlider2.png',
      imageAlt: 'Image 2'
    },
    {
      imageSrc: '../image/imageSlider3.png',
      imageAlt: 'Image 3'
    },
    {
      imageSrc: '../image/imageSlider4.png',
      imageAlt: 'Image 4'
    }
  ]
}
