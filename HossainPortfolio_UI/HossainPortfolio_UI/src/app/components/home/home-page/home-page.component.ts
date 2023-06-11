import { AfterViewInit, Component } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements AfterViewInit {

  

  ngAfterViewInit(): void {
    var part1= document.querySelector('.stagger-1');
    var part2= document.querySelector('.stagger-2');
    var part3= document.querySelector('.stagger-3');
    anime({
      targets: part1,part2,part3,
      translateX: 270,
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    });
  }
  

}
