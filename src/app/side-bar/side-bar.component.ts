import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
@Component({
  selector: 'Side-Bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('drawer') elDrawer!: any;
  
  @Output() isFocused = new EventEmitter<boolean>()
    constructor() { }
  showFiller = true;
  ngOnInit(): void {
  }

  drawerEvent() {
    this.elDrawer.toggle()
    this.isFocused.emit(this.elDrawer.opened)
  }

}
