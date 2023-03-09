import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meters-outlet',
  templateUrl: './meters-outlet.component.html',
  styleUrls: ['./meters-outlet.component.scss']
})
export class MetersOutletComponent implements OnInit {
  title = 'Hvac-SPA';
  sidebarExpanded = true;
  constructor() {
  }

  ngOnInit(): void {
  }

}
