import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRutasService {

  url = 'https://vuelosapi-production.up.railway.app/apivuelos/rutavuelo';

  constructor(private httpClient: HttpClient) { }

  obtenerRutas(){
    return this.httpClient.get(this.url);
  }

  guardarRutas(data: any){
    return this.httpClient.post(this.url, data);
  }

}
