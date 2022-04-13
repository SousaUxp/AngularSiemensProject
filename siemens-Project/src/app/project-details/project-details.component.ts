import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'Project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() name?:string
  @Input() status?:string
  @Input() start?:string 
  @Input() end?:string 
  @Input() index?:number

  edit = false

  constructor() { }

  ngOnInit(): void {
  }

  updateProject(){
    console.log('update')
  }
}
