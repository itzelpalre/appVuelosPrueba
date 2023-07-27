import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { CardJetsService } from '../../services/card-jets.service';
import { Car } from '../../models/car';

@Component({
  selector: 'app-card-paginator',
  templateUrl: './card-paginator.component.html',
  styleUrls: ['./card-paginator.component.css']
})
export class CardPaginatorComponent {

  sortOrderControl = new FormControl('');
  searchKey = new FormControl('');
  cars: Car[] = [];
  totalRecords: number = 0;
  pageIndex = 0;
  pageSize = 3;

  constructor(private appService: CardJetsService) {}

  ngOnInit(): void {
    this.getApi('', '', '',
    this.pageIndex,
    this.pageSize);
    this.sortOrderControl.valueChanges.subscribe((value) => {
      if (value) {
        let sortResult = this.doSorting(value);
        this.pageIndex = 0;
        this.pageSize = 5;
        this.getApi(sortResult.sortColumn, sortResult.sortType, '',
        this.pageIndex,
        this.pageSize);
      }
    });
  }

  doSorting(value: string) {
    let sortColumn: string = '';
    let sortType: string = '';
    if (value.toLowerCase() === 'id-by-desc') {
      sortColumn = 'id';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'id-by-asc') {
      sortColumn = 'id';
      sortType = 'asc';
    } else if (value.toLowerCase() === 'year-by-desc') {
      sortColumn = 'year';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'year-by-asc') {
      sortColumn = 'year';
      sortType = 'asc';
    } else if (value.toLowerCase() === 'color-by-desc') {
      sortColumn = 'color';
      sortType = 'desc';
    } else if (value.toLowerCase() === 'color-by-asc') {
      sortColumn = 'color';
      sortType = 'asc';
    }
    return {
      sortColumn,
      sortType,
    };
  }

  searchByName() {
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');
    this.pageIndex = 0;
    this.pageSize = 5;
    this.getApi(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchKey.value ?? '',
      this.pageIndex,
      this.pageSize
    );
  }

  getApi(sortColumn: string, sortType: string, searchKey: string,
    currentPage:number, pageSize:number) {
    this.appService
      .get(sortColumn, sortType, searchKey,(currentPage + 1), pageSize)
      .subscribe((response) => {
        this.cars = response.body as Car[];
        this.totalRecords = response.headers.get('X-Total-Count')
          ? Number(response.headers.get('X-Total-Count'))
          : 0;
          console.log(this.totalRecords);
      });
  }

  handlePageEvent(e: PageEvent) {
    
    this.pageIndex = e.pageIndex ;
    this.pageSize = e.pageSize;
    let sortResult = this.doSorting(this.sortOrderControl.value ?? '');
    this.getApi(
      sortResult.sortColumn,
      sortResult.sortType,
      this.searchKey.value ?? '',
      this.pageIndex,
      this.pageSize
    );
  }

  infoJet(id:any){
    //obtiene id
    //le pasa el id seleccionado al servicio
    
  }

}
