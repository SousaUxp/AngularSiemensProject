import { ChangeDetectorRef, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { DataService } from '../data-service.service';
import * as uuid from 'uuid';
import { projects } from 'src/assets/interfaces';

@Component({
  selector: 'new-Project',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent implements OnInit {
  @ViewChild('nameValue')
  elName!: ElementRef;
  @ViewChild('statusValue')
  elStatus!: ElementRef;
  @ViewChild('startValue')
  elStart!: ElementRef;
  @ViewChild('endValue')
  elEnd!: ElementRef;

  @Output() addProject = new EventEmitter<projects>()

  constructor(private dataServ: DataService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  CreateProject() {
    const myId = uuid.v4();
    const newProject = {
      id: myId,
      name: this.elName.nativeElement.value,
      startDate: this.elStart.nativeElement.value,
      endDate: this.elEnd.nativeElement.value,
      status: this.elStatus.nativeElement.value,
    }
    this.dataServ.addNewData(newProject)

    this.addProject.emit(newProject)

    this.elName.nativeElement.value = ''
    this.elStart.nativeElement.value = ''
    this.elEnd.nativeElement.value = ''
    this.elStatus.nativeElement.value = ''
  }

}
