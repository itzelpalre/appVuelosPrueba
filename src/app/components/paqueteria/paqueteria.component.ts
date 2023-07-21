import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paqueteria',
  templateUrl: './paqueteria.component.html',
  styleUrls: ['./paqueteria.component.css']
})
export class PaqueteriaComponent {

  datos:FormGroup;

  constructor(private http:HttpClient){
    this.datos = new FormGroup({
      name: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required])
    })
  }

  enviarcorreo(){
    let params = {
      name:this.datos.value.name,
      salary:this.datos.value.salary,
    }

    this.http.post('http://localhost:3000/api/employees', params).subscribe(resp=>{
      console.log(resp);
    })
  }

}
