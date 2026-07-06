import { Component } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private _NavigationService:NavigationService) { }

  scrollTo(id: string) {
    this._NavigationService.scrollTo(id);
  }
}
