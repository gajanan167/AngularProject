import { fadeAnimation } from './myAnimations';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'Specials Squad';

  getState(outlet){
    return outlet.isActivated?
    outlet.activatedRoute.snapshot.url[0].path:"none";
  }
}
