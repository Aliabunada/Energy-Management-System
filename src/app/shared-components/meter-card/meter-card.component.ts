import { Component, Input, OnInit } from '@angular/core';
import { Meter } from '../modelss/Meters';

@Component({
  selector: 'app-meter-card',
  templateUrl: './meter-card.component.html',
  styleUrls: ['./meter-card.component.scss']
})
export class MeterCardComponent implements OnInit {

  constructor() { }
  @Input() meter!: Meter;
  ngOnInit(): void {
  }

}
