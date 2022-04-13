import { Component, Input, OnInit } from '@angular/core';
import { projects } from 'src/assets/interfaces';

@Component({
  selector: 'Projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  @Input() data:projects[] = [{}]
  constructor() { }

  ngOnInit(): void {
  }

}
