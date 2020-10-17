import { Component, OnInit } from '@angular/core';
import {MobileService} from '../mobile.service';
import {SelectedItemsService} from '../selected-items.service'
import { isNumber } from 'util';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private mobileService: MobileService,private selectedItemsService: SelectedItemsService) { }
  mobileData = [];
  allItemsCount:number = 0;
  showModal =false;
  cartData: Array<{id:null,name: string, price: number,number:0}> = []; 
  totalCost:number=0;
  ngOnInit() {
    this.mobileData = this.mobileService.getMobileData();
  }
  addToChart(name,price,id){
    let numberOfMobiles = (<HTMLInputElement>document.getElementById(name)).value;
    numberOfMobiles = parseInt(numberOfMobiles, 10);
    this.allItemsCount += numberOfMobiles; 
    this.cartData.push({id,name,price,numberOfMobiles});
  }
  showCart(){
    this.showModal= true;
    this.cartData.forEach(element => {
      this.totalCost += parseInt(element.price, 10);
    });
    this.selectedItemsService.addSelectedItem(this.cartData);
  }
  removeItem(item){
    console.log(item);
    this.cartData.splice(item.id,1);
    this.cartData = this.cartData.filter(obj => obj !== item);
    this.allItemsCount -= item.numberOfMobiles;
    this.totalCost -= item.price;
  }

}
