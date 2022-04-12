import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'Side-Bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor() { }
  showFiller = true;
  ngOnInit(): void {
  }

  drawerEvent(ev:any){
    console.log(ev.target)
  }

}
