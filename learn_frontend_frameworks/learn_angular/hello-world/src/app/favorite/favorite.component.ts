import { Component, Input, OnInit } from '@angular/core';

// Angular will pick the style definition of the one that comes last

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.css',
  styles: [
    `
    .glyphicon {
      color: green;
    }
    `
  ]
})

// The @Input property is used to mark fields as input properties
// The data is in available in the post and the field can be changed
// using by binding the varibale in the favorite selector.
export class FavoriteComponent implements OnInit {
  @Input() isFavorite = false;
  
  constructor() {}

  ngOnInit(): void {
  
  }

  onClick () {
    this.isFavorite = !this.isFavorite;
  }
}
