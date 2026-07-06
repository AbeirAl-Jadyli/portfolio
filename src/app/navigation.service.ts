import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() { }
     scrollTo(id: string) {

      
   let x = document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'


  });
   }

 
}
