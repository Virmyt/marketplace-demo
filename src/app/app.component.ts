import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightwhite'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightwhite'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightwhite'},
    {text: 'Four', cols: 2, rows: 1, color: 'lightwhite'},
  ];
}
