import { Component, OnInit } from '@angular/core';
import { Meter } from 'src/app/shared-components/modelss/Meters';
import { SharedMeterDataService } from 'src/app/shared-components/services/shared-meter-data.service';

@Component({
  selector: 'app-meters',
  templateUrl: './meters.component.html',
  styleUrls: ['./meters.component.scss']
})
export class MetersComponent implements OnInit {

  constructor(private sharedMeterDataService: SharedMeterDataService) { }

  metersList!: Meter[]

  ngOnInit(): void {
    console.log('sss');

    this.metersList = this.sharedMeterDataService.listOfMeters
  }

}
