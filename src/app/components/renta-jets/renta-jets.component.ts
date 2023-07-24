import { Component } from '@angular/core';

@Component({
  selector: 'app-renta-jets',
  templateUrl: './renta-jets.component.html',
  styleUrls: ['./renta-jets.component.css']
})
export class RentaJetsComponent {

  jets = [
    {
      title: 'Gulfstream G450',
      img: '../../assets/imgs/JETS/exportados/Gulfstream_G450.png'
    },
    {
      title: 'Cessna Citation III',
      img: '../../assets/imgs/JETS/exportados/Cessna_Citation_III.png'
    },
    {
      title: 'Falcon 200',
      img: '../../assets/imgs/JETS/exportados/Falcon_200.png'
    },
    {
      title: 'Cessna Citation II',
      img: '../../assets/imgs/JETS/exportados/Cessna_Citation_II.png'
    },
    {
      title: 'Hawker 800',
      img: '../../assets/imgs/JETS/exportados/Hawker.png'
    },
    {
      title: 'Learjet 45',
      img: '../../assets/imgs/JETS/exportados/Learjet_45.png'
    },
    {
      title: 'Chalenger CL-600',
      img: '../../assets/imgs/JETS/exportados/Chalenger_CL-600.png'
    },
    {
      title: 'Learjet 35A',
      img: '../../assets/imgs/JETS/exportados/Learjet_35A.png'
    },
  ];

}
