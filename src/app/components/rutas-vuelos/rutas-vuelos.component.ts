import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/*Servicio*/
import { ApiRutasService } from '../../services/api-rutas.service';

/*Formulario Reactivo*/
import { FormBuilder } from '@angular/forms';

/*Components*/
import {MatCalendarCellClassFunction, MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';

/*Pipe Formatear Fecha*/
import { DatePipe } from '@angular/common';

/*Formatear Fecha Datepicker*/
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
/*import { MomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';*/

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

interface Food {
  value: string;
  viewValue: string;
}

interface Ruta {
  value: string;
  viewValue: string;
}

interface Destino {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811},
  {position: 6, name: 'Carbon', weight: 12.0107},
  {position: 7, name: 'Nitrogen', weight: 14.0067},
  {position: 8, name: 'Oxygen', weight: 15.9994},
  {position: 9, name: 'Fluorine', weight: 18.9984},
  {position: 10, name: 'Neon', weight: 20.1797},
];



//Formatear Fecha Datepicker
export const MY_FORMATS = {
  parse: {
      dateInput: 'LL'
  },
  display: {
      dateInput: 'YYYY-MM-DD',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
  }
};

@Component({
  selector: 'app-rutas-vuelos',
  templateUrl: './rutas-vuelos.component.html',
  styleUrls: ['./rutas-vuelos.component.css'],
  providers: [
    /*{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },*/
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ],
})
export class RutasVuelosComponent {
  date:any;
  ruta:any;
  destino:any;

  today: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe:any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private rutaService:ApiRutasService) {}

  ngOnInit() {
    this.rutaService.obtenerRutas()
      .subscribe(response => {
        this.ruta = response;
      });
  }

  /*Reactive Form*/
  addRutaForm = this.formBuilder.group({
    salida: [''],
    destino: [''],
    fecha: [''],
  });

  /*Select Input*/

  selectedValue: string = '';

  rutas: Ruta[] = [
    {value: 'Toluca', viewValue: 'Toluca'},
    {value: 'CDMX', viewValue: 'CDMX'},
    {value: 'GDL', viewValue: 'GDL'},
    {value: 'MTY', viewValue: 'MTY'},
  ];

  destinos: Destino[] = [
    {value: 'Los Angeles', viewValue: 'Los Angeles'},
    {value: 'Nueva York', viewValue: 'Nueva York'},
    {value: 'Huatulco', viewValue: 'Huatulco'},
  ];

  /*Table Mis Rutas*/
  displayedColumns: string[] = ['position', 'name', 'weight'];
  dataSource = ELEMENT_DATA;

  onSubmit(data:any) {
    console.log(data);
  
    //Al guardar Ruta
    this.rutaService.guardarRutas(data).subscribe(result => {
      console.warn(result);
    });

    /*this.http.post('http://localhost:4000/api/rutas', data).subscribe((result)=> {
    });*/

    //Actualizar tabla de rutas
    this.rutaService.obtenerRutas()
      .subscribe(response => {
        this.ruta = response;
    });
  }

}
