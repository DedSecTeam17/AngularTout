import { Component } from '@angular/core';


//  component --> include template + style
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



//  controller
export class AppComponent {
  title:unknown = 'Tour Of Heros';
}
