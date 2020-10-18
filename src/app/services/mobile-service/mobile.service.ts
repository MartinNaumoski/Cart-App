import { Injectable } from '@angular/core';
import { Mobile } from 'src/app/interfaces/mobile.interface';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor() { }
  getMobileData(): Mobile[] {
   return [
     {id: 0, name: 'Huawei Mate 20 Pro', price: 580, imgSrc: 'assets/img/huawei-mate-20.jpg'},
     {id: 1, name: 'Huawei 20 Pro', price : 480, imgSrc: 'assets/img/huawei-p20-pro-.jpg'},
     {id: 2, name: 'Huawei P 30 Pro', price: 760, imgSrc: 'assets/img/huawei-p30-pro.jpg'},
     {id: 3, name: 'Huawei Mate 20', price: 430, imgSrc: 'assets/img/huawei-mate-20.jpg'},
   ];
  }
}
