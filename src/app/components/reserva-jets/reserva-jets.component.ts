import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reserva-jets',
  templateUrl: './reserva-jets.component.html',
  styleUrls: ['./reserva-jets.component.css']
})
export class ReservaJetsComponent {

  contacto: FormGroup;
	submitted = false;
  ahora: any;
  deshabilitar: any;
  fingreso: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contacto = this.formBuilder.group({
        nya: ['', Validators.required],            
        email: ['', [Validators.required, Validators.email]],
        asunto: ['', Validators.required],
  fingreso: ['', Validators.required],
  fegreso: ['', Validators.required],
        postre: ['', Validators.required],
        mensaje: ['', [Validators.required, Validators.minLength(6)]]
    });	

const datePite = new DatePipe('en-Us')
this.ahora = datePite.transform(new Date(), 'yyyy-MM-dd')
    
} 

cambioFecha() {
  this.deshabilitar = this.fingreso
}

get f() {return this.contacto.controls; }

onSubmit() {
  this.submitted = true;

  if(this.contacto.invalid) {
    return
  }

  alert('Mensaje Enviado !')

}

}
