import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { Meter } from '../shared-components/modelss/Meters';
import { Location } from '@angular/common';
import { SharedMeterDataService } from 'src/app/shared-components/services/shared-meter-data.service';
import { Meter } from 'src/app/shared-components/modelss/Meters';
@Component({
  selector: 'app-meters-details',
  templateUrl: './meters-details.component.html',
  styleUrls: ['./meters-details.component.scss']
})
export class MetersDetailsComponent implements OnInit {

  constructor(private sharedMeterDataService: SharedMeterDataService,
    private route: ActivatedRoute,
    private _location: Location) {
    this.route.queryParams.subscribe(params => {

      const id = params.id;
      this.meterElement = this.sharedMeterDataService.listOfMeters.find(e => e.id === Number(id))

    })

  }
  meterId!: number;
  meterElement: Meter | undefined;

  ngOnInit(): void {

  }

  goBack() {
    this._location.back();
  }

}
