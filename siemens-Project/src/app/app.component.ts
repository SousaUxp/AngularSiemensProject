import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { projects } from 'src/assets/interfaces';
import { DataService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siemens-Project';
  // data: any
  projectsData: projects[] = []
  constructor(private http: HttpClient, private dataService:DataService) {
  }

  async ngOnInit() {
    this.dataService.getData().subscribe((data: any) => {
      this.projectsData = data
    })
  }



  get data(){
    return this.projectsData
  }
}
