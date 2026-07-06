import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  
    constructor(private _NavigationService:NavigationService) { }
  
    scrollTo(id: string) {
      this._NavigationService.scrollTo(id);
    }

}
