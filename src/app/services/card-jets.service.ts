import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CardJetsService {

  constructor(private httpClient: HttpClient) { }

  get(
    sortColumn: string,
    sortType: string,
    searchKey: string,
    currentPage: number,
    pageSize: number
  ): Observable<HttpResponse<any>> {
    let url = `http://localhost:3000/cars?_page=${currentPage}&_limit=${pageSize}`;
    if (sortColumn && sortType) {
      url = `${url}&_sort=${sortColumn}&_order=${sortType}`;
    }
    if (searchKey) {
      if (url.indexOf('&') > -1) {
        url = `${url}&q=${searchKey}`;
      } else {
        url = `${url}q=${searchKey}`;
      }
    }
    return this.httpClient.get<HttpResponse<any>>(url, { observe: 'response' });
  }

}
