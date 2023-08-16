import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactForm } from '../../models/contactForm';
import { EnvioFormulariosService } from '../../services/envio-formularios.service';

//Servicio para el envío del formulario
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-paqueteria',
  templateUrl: './paqueteria.component.html',
  styleUrls: ['./paqueteria.component.css']
})
export class PaqueteriaComponent {

  datos:FormGroup;
  checkoutForm;

  constructor(
    private http:HttpClient,
    private formBuilder: FormBuilder,
    ){
    this.datos = new FormGroup({
      name: new FormControl('', [Validators.required]),
      salary: new FormControl('', [Validators.required])
    })

    /*Campos Form Paqueteria*/
    this.checkoutForm = this.formBuilder.group({
      salida: '',
      destino: '',
      peso: '',
      cantidad: '',
      fsalida: ''
    });
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

  onSubmit(data){
    this.http.post(' http://localhost:3000/Cars', data).subscribe((result)=> {
      console.log(result);
    });
    console.log(data);
  }

}
