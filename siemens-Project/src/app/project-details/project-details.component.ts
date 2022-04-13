import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { projects } from 'src/assets/interfaces';
import { DataService } from '../data-service.service';

@Component({
  selector: 'Project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  @Input() name?: string
  @Input() status?: string
  @Input() start?: string
  @Input() end?: string
  @Input() index?: string

  @Output() delete: EventEmitter<projects> = new EventEmitter();


  @ViewChild('nameValue')
  elName!: ElementRef;
  @ViewChild('statusValue')
  elStatus!: ElementRef;
  @ViewChild('startValue')
  elStart!: ElementRef;
  @ViewChild('endValue')
  elEnd!: ElementRef;



  edit = false

  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
  }

  deleteProject() {
      this.dataServ.deleteData(this.index as unknown as string)
      this.delete.emit({
          id: this.index,
          name: this.name,
          status: this.status,
          startDate: this.start,
          endDate: this.end
      })
  }

  updateProject() {
    this.edit = !this.edit
    this.name = this.elName.nativeElement.value
    this.status = this.elStatus.nativeElement.value
    this.start = this.elStart.nativeElement.value
    this.end = this.elEnd.nativeElement.value

    this.dataServ.updateServerData(
      {
        id: this.index,
        name: this.name,
        status: this.status,
        startDate: this.start,
        endDate: this.end
      }
    )


  }
}
