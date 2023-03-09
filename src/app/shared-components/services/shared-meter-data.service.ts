import { Injectable } from '@angular/core';
import { Meter } from '../modelss/Meters';

@Injectable({
  providedIn: 'root'
})
export class SharedMeterDataService {
  listOfMeters: Meter[] = [
    {
      id: 1,
      name: 'G4 gas meter',
      modelName: "Elster BK-G4",
      buildingName: 'Burj Khalifa',
      energyType: 'Gaz',
      description: "This is a G4 gas meter, which is a common type of domestic gas meter in the Middle East. The meter has a metal casing with a plastic cover that allows you to read the meter's dials. The dials record the volume of gas consumed in cubic meters. The meter also has a valve on the bottom that can be used to shut off the gas supply if necessary.",
      active: true,
      usage: '200 K/Watt',
      summaryOfdesc: 'This is a G4 gas meter, which is a common type of domestic gas meter in the Middle East',
      image: '../../../assets/images/Gaz.png'
    },
    {
      id: 2,
      name: 'Prepaid electricity meter',
      modelName: "Conlog BEC23PL",
      buildingName: 'Taj Mahal',
      energyType: 'Electricity',
      description: 'The "Conlog BEC23PL" is a popular prepaid electricity meter used in many countries, including South Africa, Nigeria, and Ghana. The meter features a digital display that shows the amount of energy consumed in kilowatt-hours, as well as a keypad for entering prepaid credits',
      active: false,
      usage: '120 KWatt/h',
      image: '../../../assets/images/BEC-23-PLT-02.jpg',
      summaryOfdesc: 'The "Conlog BEC23PL" is a popular prepaid electricity meter used in many countries'
    },
    {
      id: 3,
      name: 'Woltman',
      modelName: "LXLC",
      buildingName: 'The Colosseum',
      energyType: 'Water',
      description: 'This is a Woltman type water meter, which is commonly used for measuring water flow rates in large pipes. The meter has a metal casing with a digital display that shows the volume of water that has passed through the meter. The meter also has a set of flanges on either end that allow it to be connected to the water supply line.',
      active: true,
      usage: '300 Litter',
      image: '../../../assets/images/6060A.jpg',
      summaryOfdesc: 'The "LXLC is Woltman type water meter", its commonly used for measuring water flow rates in large pipes'
    },


  ]

  constructor() { }
}
