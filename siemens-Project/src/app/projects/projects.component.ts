import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { projects } from 'src/assets/interfaces';
import { DataService } from '../data-service.service';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() data:projects[] = [{}]
  addNew=false
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data: any) => {
      console.log(data)
      this.data = data.projects
    })
  }

  deleteProject(project:any){
    this.data = this.data.filter((x:any) => x.id !== project.id);
  }

  addNewProject(project:projects){
    this.data.push(project)
    this.addNew = false
  }

  
}
