import { Component, OnInit } from '@angular/core';
import {MobileService} from '../services/mobileService/mobile.service';
import {SelectedItemsService} from '../services/selectedItemsService/selected-items.service'
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
    this.selectedItemsService.addSelectedItem(this.cartData);
  }
  message:string;
  receiveMessage($event) {
    this.message = $event;
    this.showModal = false;
    this.cartData = this.selectedItemsService.getSelectedItems();
    this.allItemsCount = 0;
    this.cartData.forEach(element => {
      this.allItemsCount += element.numberOfMobiles;
    });
  }
}
