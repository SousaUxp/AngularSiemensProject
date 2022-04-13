import { Component } from '@angular/core';

import { projects } from 'src/assets/interfaces';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siemens-Project';
  focus = false
  constructor() {
  }

  async ngOnInit() {
   
  }

  checkFocus(event:any){
    this.focus = event
    console.log(this.focus)
  }

  
}
