import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {SelectedItemsService} from '../services/selectedItemsService/selected-items.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private selectedItemsService: SelectedItemsService) { }
  cartData = [];
  totalCost:number=0;
  allItemsCount:number = 0;
  ngOnInit() {
    this.cartData = this.selectedItemsService.getSelectedItems();
   
    this.cartData.forEach(element => {
      this.totalCost += parseInt(element.price, 10);
    });
  }
  message: string = "Close dialog !";
  sendMessage() {
    this.messageEvent.emit(this.message)
  }
  removeItem(item){ 
    this.selectedItemsService.removeItem(this.cartData.filter(obj => obj !== item));
    this.cartData = this.selectedItemsService.getSelectedItems();
    this.allItemsCount -= 1;
    this.totalCost -= item.price;
  }


}
