import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { projects } from 'src/assets/interfaces';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() data:projects[] = [{}]
  addNew=false
  constructor() { }

  ngOnInit(): void {
  }

  deleteProject(project:any){
    this.data = this.data.filter((x:any) => x.id !== project.id);
  }

  addNewProject(project:projects){
    this.data.push(project)
    this.addNew = false
  }

  
}
