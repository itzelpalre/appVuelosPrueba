import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent {

  datos:FormGroup;

  constructor(private http:HttpClient){
    this.datos = new FormGroup({
      asunto: new FormControl('', [Validators.required, Validators.email]),
      mensaje: new FormControl('', [Validators.required, Validators.email])
    })
  }

  enviarcorreo(){
    let params = {
      asunto:this.datos.value.asunto,
      mensaje:this.datos.value.mensaje
    }

    this.http.post('http://localhost:3000/envio', params).subscribe(resp=>{
      console.log(resp);
    })
  }

}
