import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-box',
  templateUrl: './view-box.component.html',
  styleUrls: ['./view-box.component.scss']
})
export class ViewBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() label!: string;
    @Input() value!: any;

}
