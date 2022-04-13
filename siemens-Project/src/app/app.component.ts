import { Component } from '@angular/core';
import myData from '../assets/projectsData.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data = myData
  title = 'siemens-Project';
}
